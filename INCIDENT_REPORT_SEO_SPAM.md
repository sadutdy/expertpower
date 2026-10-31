# Incident Report: Japanese Spam Content Shown in Google for expertpower.com.sa

| Field | Detail |
|---|---|
| Date reported | 2026-10-30 |
| Affected domain | https://expertpower.com.sa |
| Severity | High (brand damage, loss of search ranking, possible server compromise) |
| Status | Open, awaiting server team investigation |
| Owner (server team) | _to be assigned_ |
| Requested response | Findings and written confirmation that the vulnerabilities are fixed |

## 1. Summary

Google search results for `expertpower.com.sa` show Japanese online-shop content (titles such as "ヤマダウェブコム", with product names, yen prices and star ratings) in place of our calibration laboratory content. When opened in a normal browser, the website shows our correct English content.

This is the typical pattern of a "Japanese keyword hack": an attacker plants spam pages or scripts on the web server, and the server shows the spam only to Google's crawler while showing normal content to visitors. We suspect the entry point is old, outdated or unused PHP files left on the server. This is a working hypothesis that the server team must confirm or rule out.

## 2. Evidence

**Google results (screenshot, 2026-10-30).** Google lists multiple pages under our domain with Japanese titles and snippets. The URL paths mirror our real site structure and also include paths we do not use:

- `https://expertpower.com.sa` (home page, title: adidas サッカースパイク アディダスX | ヤマダウェブコム)
- `https://expertpower.com.sa/contact` (title: お問い合わせ - EXPERTPOWER.COM.SA)
- `https://expertpower.com.sa/item/...` (several products, for example Apple iPhone 8 Plus, Clair de Lune coat)
- `https://expertpower.com.sa/indus...`, `/servi...`, `/man...`, `/const...` (truncated in the screenshot)

**Our own tests (curl, 2026-10-30).**

- A normal browser request to `/`, `/contact` and `/industries/manufacturing/` returns the correct English pages. Adding a Google referrer does not change the result.
- A request using a Googlebot user-agent string returned `403 Forbidden` from the server (an HTML error page, not our Next.js application). We could not reproduce what the real Googlebot receives, because we cannot reproduce its IP address.
- `https://expertpower.com.sa/robots.txt` returns our 404 page, so no `robots.txt` is being served.
- `https://expertpower.com.sa/sitemap.xml` returned `403 Forbidden` to the Googlebot user-agent.
- `https://expertpower.com.sa/item/` returns our home page, not a spam page, when requested by a normal browser.

**Source code review.** The website source repository was searched for injected or malicious code. Nothing was found: there are no references to Googlebot or other crawlers, no obfuscated code (`eval`, `atob`, `base64`, `fromCharCode`), no external scripts, no `.php` or `.htaccess` files and no Japanese text. The Next.js redirects in `next.config.ts` are legitimate. The repository does not contain the files actually deployed on the server.

**Deployment mismatch.** The repository generates a `robots.txt` and `sitemap.xml`, but the live site serves no `robots.txt`. The deployed files therefore differ from the current repository. The hosting appears to be a static-file host (Apache or LiteSpeed style `403` page), where server-side files outside our repository can exist.

## 3. Suspected cause

- Old or unused PHP files (the previous version of the site used `.php` URLs, such as `calibration.php` and `contact-us.php`) remain on the server and contain a vulnerability or a planted backdoor.
- An attacker used this to add spam-generating scripts and/or rewrite rules (for example in `.htaccess`) that serve different content to Googlebot.
- Other possible entry points: compromised hosting, FTP or SSH credentials, outdated CMS or plugins from the previous site, and shared-hosting cross-account contamination.

## 4. Actions requested from the server team

Please investigate and fix the following. Do not delete anything before taking a backup and a copy of the evidence.

1. **Preserve evidence.** Take a full backup of the web root and server logs (access, error, FTP and SSH logs) from at least the last 90 days before changing anything.
2. **Inventory the web root** (`public_html` or equivalent, including hidden files and sub-folders):
   - Find all `.php`, `.phtml`, `.htaccess`, `.user.ini` and `.sh` files. Remove or disable any that are not required.
   - Look for unknown folders such as `item/`, and for files modified in the last 90 days that we did not deploy.
   - Search for malicious patterns: `eval(`, `base64_decode`, `gzinflate`, `str_rot13`, `preg_replace` with the `e` modifier, `assert(`, `system(`, `shell_exec`, `passthru`, `file_put_contents`, `Googlebot`, `HTTP_USER_AGENT`, `HTTP_REFERER`.
   - Review every `.htaccess` file for rewrite rules that depend on the user-agent or referrer, and for redirects to external domains.
3. **Check for cloaking.** Fetch pages as the real Googlebot (for example with Google Search Console URL Inspection, Live Test) and compare against what visitors see. Check `item/` paths and `/contact` specifically.
4. **Scan the server** with a malware scanner (for example ImunifyAV, Maldet or ClamAV) and review the results.
5. **Find the entry point.** Check the access logs for the first requests to the spam files, POST requests to old PHP files, and logins from unknown IP addresses. Identify how the attacker got in.
6. **Remove the compromise and harden:**
   - Delete the malicious files and rules, and redeploy a clean build of the website from the source repository.
   - Remove all legacy PHP files and any outdated software.
   - Rotate all passwords and keys: hosting panel, FTP/SFTP, SSH, database, email, and deployment tokens. Remove unknown users, FTP accounts, cron jobs and SSH keys.
   - Update the server software and PHP version, disable unused PHP functions, and prevent PHP execution in upload and static folders.
   - Make sure the web root is not writable by the web server user.
   - Enable a web application firewall and file-change monitoring.
7. **Deploy `robots.txt` and `sitemap.xml`** from the current build so that they are served correctly, and make sure the WAF does not block real Googlebot.
8. **Confirm and report back** (see section 5).

## 5. Confirmation required from the server team

Please send a written report that includes:

- The root cause and the entry point of the compromise, with log evidence.
- The list of malicious or removed files, rules and accounts.
- The list of credentials and keys rotated.
- The hardening steps completed.
- Confirmation that the real Googlebot now receives the same content as normal visitors.
- Confirmation that `/robots.txt` and `/sitemap.xml` are served correctly.
- The date and time when the fix was completed.

## 6. Follow-up by the website team (after server team confirmation)

- Add and verify the domain in Google Search Console, check Security Issues, and request a review.
- Make the spam URLs return `410 Gone` and request their removal (Search Console, Removals).
- Submit the new sitemap and monitor with `site:expertpower.com.sa` until the Japanese results disappear.
- Re-check for the problem weekly for one month.

## 7. Timeline

| Date | Event |
|---|---|
| 2026-10-30 | Japanese results seen in Google search. Initial tests and source code review completed. This report created. |
| _TBD_ | Server team investigation started |
| _TBD_ | Compromise removed and credentials rotated |
| _TBD_ | Server team confirmation received |
| _TBD_ | Google review requested and results cleaned |

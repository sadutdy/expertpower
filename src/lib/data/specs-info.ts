import { IMG, R, type PageSpec } from "@/lib/data/page-builder";

export const infoSpecs: PageSpec[] = [
  {
    slug: "accreditation/ilac-mra",
    kind: "insight",
    keyword: "ILAC MRA calibration lab Saudi Arabia",
    moreKeywords: ["what is ILAC MRA", "ILAC mutual recognition arrangement"],
    img: IMG.lab,
    serviceType: "Information: ILAC MRA",
    related: [R.acc, R.saac, R.cal, R.contact],
    en: {
      title: "ILAC MRA Explained | Expert Power Saudi Arabia",
      description:
        "What the ILAC MRA is and why it matters for calibration results. Learn how Expert Power is recognised under QAI / ILAC MRA in Saudi Arabia.",
      h1: "ILAC MRA Explained",
      intro:
        "The ILAC MRA helps calibration and test results from accredited laboratories to be accepted in many countries. This page explains what it is and what it means for you.",
      sections: [
        {
          heading: "What is the ILAC MRA?",
          body: [
            "ILAC is the International Laboratory Accreditation Cooperation. Its Mutual Recognition Arrangement (MRA) links accreditation bodies in many countries, which accept each other's accreditation of laboratories.",
          ],
        },
        {
          heading: "Why it matters",
          body: [],
          bullets: [
            "Supports acceptance of calibration and test results across borders",
            "Helps exporters avoid repeating tests in each country",
            "Gives customers confidence in the competence of the laboratory",
          ],
        },
        {
          heading: "Expert Power and the ILAC MRA",
          body: [
            "Expert Power is recognised under QAI / ILAC MRA and is accredited to ISO/IEC 17025:2017 through the Saudi Accreditation Center (SAAC). Certificates are available on our accreditation page.",
          ],
        },
      ],
      steps: [
        "A laboratory is assessed by an accreditation body",
        "The accreditation body is part of the ILAC MRA",
        "Results are recognised across member economies",
      ],
      motionTitle: "How the ILAC MRA works",
      faqs: [
        [
          "What does ILAC MRA stand for?",
          "ILAC stands for International Laboratory Accreditation Cooperation, and MRA stands for Mutual Recognition Arrangement.",
        ],
        [
          "Will my certificate be accepted everywhere?",
          "The ILAC MRA supports acceptance, but the final decision is made by the party that asks for the certificate.",
        ],
      ],
    },
    ar: {
      title: "شرح اتفاقية ILAC MRA | إكسبرت باور السعودية",
      description:
        "ما هي اتفاقية الاعتراف المتبادل ILAC MRA ولماذا تهم نتائج المعايرة. تعرف كيف تحظى إكسبرت باور بالاعتراف ضمن QAI / ILAC MRA في السعودية.",
      h1: "شرح اتفاقية الاعتراف المتبادل ILAC MRA",
      intro:
        "تساعد اتفاقية ILAC MRA على قبول نتائج المعايرة والاختبار الصادرة من المعامل المعتمدة في دول كثيرة. توضح هذه الصفحة ماهيتها وما تعنيه لك.",
      sections: [
        {
          heading: "ما هي اتفاقية ILAC MRA؟",
          body: [
            "ILAC هو التعاون الدولي لاعتماد المختبرات. وتربط اتفاقية الاعتراف المتبادل (MRA) الخاصة به جهات الاعتماد في دول كثيرة، وتقبل كل جهة اعتماد الأخرى للمعامل.",
          ],
        },
        {
          heading: "لماذا تهم؟",
          body: [],
          bullets: [
            "تدعم قبول نتائج المعايرة والاختبار عبر الحدود",
            "تساعد المصدّرين على تجنب تكرار الاختبارات في كل دولة",
            "تمنح العملاء ثقة في كفاءة المعمل",
          ],
        },
        {
          heading: "إكسبرت باور واتفاقية ILAC MRA",
          body: [
            "تحظى إكسبرت باور بالاعتراف ضمن QAI / ILAC MRA، وهي معتمدة وفق ISO/IEC 17025:2017 عبر المركز السعودي للاعتماد (SAAC). الشهادات متاحة في صفحة الاعتمادات.",
          ],
        },
      ],
      steps: [
        "تقوم جهة اعتماد بتقييم المعمل",
        "جهة الاعتماد عضو في اتفاقية ILAC MRA",
        "تُقبل النتائج عبر الدول الأعضاء",
      ],
      motionTitle: "كيف تعمل اتفاقية ILAC MRA",
      faqs: [
        [
          "ماذا تعني ILAC MRA؟",
          "ILAC هو التعاون الدولي لاعتماد المختبرات، وMRA هي اتفاقية الاعتراف المتبادل.",
        ],
        [
          "هل ستُقبل شهادتي في كل مكان؟",
          "تدعم اتفاقية ILAC MRA القبول، لكن القرار النهائي يعود للجهة التي تطلب الشهادة.",
        ],
      ],
    },
  },
  {
    slug: "insights/what-is-calibration",
    kind: "insight",
    keyword: "what is calibration",
    moreKeywords: ["calibration meaning", "why calibration is important"],
    img: IMG.cal,
    serviceType: "Information: what is calibration",
    related: [R.cal, R.onsite, R.contact],
    en: {
      title: "What Is Calibration? A Simple Guide | Expert Power",
      description:
        "What calibration is, why it matters and how it works. A simple guide from Expert Power, calibration specialists in Saudi Arabia.",
      h1: "What Is Calibration?",
      intro:
        "Calibration compares the reading of an instrument with a known reference, so you know how far the instrument is from the true value and can decide whether to adjust it.",
      sections: [
        {
          heading: "Calibration in simple words",
          body: [
            "Every measuring instrument can drift over time. Calibration checks the instrument against a reference of higher accuracy and records the difference.",
            "The result is documented, usually in a calibration certificate, so the readings of the instrument can be trusted or corrected.",
          ],
        },
        {
          heading: "Why calibration matters",
          body: [],
          bullets: [
            "Accurate readings in production and quality control",
            "Safer operation of equipment and processes",
            "Evidence for audits and customer requirements",
            "Fewer costly errors and rework",
          ],
        },
        {
          heading: "How calibration works",
          body: [],
          bullets: [
            "Identify the instrument and its range",
            "Record the as-found readings",
            "Adjust the instrument if needed",
            "Record the as-left readings and issue the certificate",
          ],
        },
        {
          heading: "How often should an instrument be calibrated?",
          body: [
            "There is no single answer. The interval depends on how the instrument is used, how stable it is and how critical the measurement is. Contact Expert Power to discuss your instruments.",
          ],
        },
      ],
      steps: [
        "Compare the instrument with a reference",
        "Record the difference",
        "Adjust if needed",
        "Document the result",
      ],
      motionTitle: "What is calibration?",
      faqs: [
        [
          "What is the purpose of calibration?",
          "To find out how accurate an instrument is and, if needed, to adjust it so its readings can be trusted.",
        ],
        [
          "Is calibration the same as adjustment?",
          "No. Calibration compares the instrument with a reference. Adjustment changes the instrument if the comparison shows it is out of tolerance.",
        ],
        [
          "Who can calibrate my instruments?",
          "Specialist laboratories such as Expert Power calibrate instruments in the laboratory or on site. Contact us to discuss your needs.",
        ],
      ],
    },
    ar: {
      title: "ما هي المعايرة؟ دليل مبسط | إكسبرت باور",
      description:
        "ما هي المعايرة ولماذا هي مهمة وكيف تتم. دليل مبسط من إكسبرت باور، المتخصصة في المعايرة في السعودية.",
      h1: "ما هي المعايرة؟",
      intro:
        "تقارن المعايرة قراءة الجهاز بمرجع معروف، لتعرف مقدار انحراف الجهاز عن القيمة الحقيقية وتقرر ما إذا كان يجب ضبطه.",
      sections: [
        {
          heading: "المعايرة ببساطة",
          body: [
            "يمكن لأي جهاز قياس أن ينحرف مع الوقت. تفحص المعايرة الجهاز مقابل مرجع أعلى دقة وتسجل الفرق.",
            "يُوثق الناتج عادة في شهادة معايرة، ليمكن الوثوق بقراءات الجهاز أو تصحيحها.",
          ],
        },
        {
          heading: "لماذا تهم المعايرة",
          body: [],
          bullets: [
            "قراءات دقيقة في الإنتاج وضبط الجودة",
            "تشغيل أكثر أماناً للمعدات والعمليات",
            "دليل للتدقيق ولمتطلبات العملاء",
            "أخطاء وإعادة عمل أقل تكلفة",
          ],
        },
        {
          heading: "كيف تتم المعايرة",
          body: [],
          bullets: [
            "تحديد الجهاز ومداه",
            "تسجيل القراءات قبل الضبط",
            "ضبط الجهاز عند الحاجة",
            "تسجيل القراءات بعد الضبط وإصدار الشهادة",
          ],
        },
        {
          heading: "كم مرة يجب معايرة الجهاز؟",
          body: [
            "لا توجد إجابة واحدة. تعتمد الفترة على طريقة استخدام الجهاز ومدى ثباته ودرجة أهمية القياس. تواصل مع إكسبرت باور لمناقشة أجهزتك.",
          ],
        },
      ],
      steps: [
        "مقارنة الجهاز بمرجع",
        "تسجيل الفرق",
        "الضبط عند الحاجة",
        "توثيق النتيجة",
      ],
      motionTitle: "ما هي المعايرة؟",
      faqs: [
        [
          "ما الهدف من المعايرة؟",
          "معرفة مدى دقة الجهاز، وضبطه عند الحاجة ليمكن الوثوق بقراءاته.",
        ],
        [
          "هل المعايرة هي نفسها الضبط؟",
          "لا. تقارن المعايرة الجهاز بمرجع، أما الضبط فيغير الجهاز إذا أظهرت المقارنة أنه خارج الحدود المسموحة.",
        ],
        [
          "من يستطيع معايرة أجهزتي؟",
          "تعاير المعامل المتخصصة مثل إكسبرت باور الأجهزة في المعمل أو في الموقع. تواصل معنا لمناقشة احتياجاتك.",
        ],
      ],
    },
  },
  {
    slug: "insights/calibration-vs-verification-vs-validation",
    kind: "insight",
    keyword: "calibration vs verification vs validation",
    moreKeywords: ["difference between calibration and verification"],
    img: IMG.cal,
    serviceType: "Information: calibration, verification and validation",
    related: [R.cal, R.onsite, R.contact],
    en: {
      title: "Calibration vs Verification vs Validation | Expert Power",
      description:
        "The difference between calibration, verification and validation, with a simple example. A guide from Expert Power in Saudi Arabia.",
      h1: "Calibration vs Verification vs Validation",
      intro:
        "These three words are often mixed up. Each answers a different question about an instrument, a product or a process.",
      sections: [
        {
          heading: "The difference in one view",
          body: [],
          bullets: [
            "Calibration compares an instrument with a reference and records the difference.",
            "Verification checks whether an instrument or product meets a stated requirement.",
            "Validation confirms that a process, method or system does what it is meant to do in real use.",
          ],
        },
        {
          heading: "A simple example: a storage room thermometer",
          body: [],
          bullets: [
            "Calibration: compare the thermometer with a reference thermometer",
            "Verification: check that its reading is within the allowed limit",
            "Validation: confirm that the room stays within its temperature range during real use",
          ],
        },
        {
          heading: "Which one do I need?",
          body: [
            "It depends on the question you must answer and on the rules that apply to your business. Contact Expert Power to discuss your instruments and requirements.",
          ],
        },
      ],
      steps: [
        "Calibration: compare with a reference",
        "Verification: check against a requirement",
        "Validation: confirm fitness for real use",
      ],
      motionTitle: "Calibration, verification, validation",
      faqs: [
        [
          "Is verification the same as calibration?",
          "No. Calibration measures the difference from a reference. Verification only checks whether a requirement is met.",
        ],
        [
          "Does validation apply to instruments?",
          "Validation usually applies to processes, methods and systems, although instruments are part of what is validated.",
        ],
      ],
    },
    ar: {
      title: "المعايرة والتحقق والتصديق: ما الفرق؟ | إكسبرت باور",
      description:
        "الفرق بين المعايرة والتحقق والتصديق (Validation) مع مثال بسيط. دليل من إكسبرت باور في السعودية.",
      h1: "المعايرة والتحقق والتصديق: ما الفرق؟",
      intro:
        "كثيراً ما تختلط هذه المصطلحات الثلاثة. يجيب كل منها عن سؤال مختلف حول جهاز أو منتج أو عملية.",
      sections: [
        {
          heading: "الفرق في نظرة واحدة",
          body: [],
          bullets: [
            "المعايرة تقارن الجهاز بمرجع وتسجل الفرق.",
            "التحقق يفحص ما إذا كان الجهاز أو المنتج يستوفي متطلباً محدداً.",
            "التصديق (Validation) يؤكد أن العملية أو الطريقة أو النظام يؤدي ما صُمم له في الاستخدام الفعلي.",
          ],
        },
        {
          heading: "مثال بسيط: ميزان حرارة غرفة تخزين",
          body: [],
          bullets: [
            "المعايرة: مقارنة ميزان الحرارة بميزان حرارة مرجعي",
            "التحقق: فحص أن قراءته ضمن الحد المسموح",
            "التصديق: التأكد من أن الغرفة تبقى ضمن نطاق حرارتها أثناء الاستخدام الفعلي",
          ],
        },
        {
          heading: "أيها أحتاج؟",
          body: [
            "يعتمد ذلك على السؤال الذي تريد الإجابة عنه وعلى القواعد المطبقة على نشاطك. تواصل مع إكسبرت باور لمناقشة أجهزتك ومتطلباتك.",
          ],
        },
      ],
      steps: [
        "المعايرة: المقارنة بمرجع",
        "التحقق: الفحص مقابل متطلب",
        "التصديق: التأكد من الملاءمة للاستخدام الفعلي",
      ],
      motionTitle: "المعايرة والتحقق والتصديق",
      faqs: [
        [
          "هل التحقق هو نفسه المعايرة؟",
          "لا. تقيس المعايرة الفرق عن المرجع، أما التحقق فيفحص فقط ما إذا كان المتطلب مستوفى.",
        ],
        [
          "هل ينطبق التصديق على الأجهزة؟",
          "ينطبق التصديق عادة على العمليات والطرق والأنظمة، وإن كانت الأجهزة جزءاً مما يتم تصديقه.",
        ],
      ],
    },
  },
  {
    slug: "insights/measurement-uncertainty-explained",
    kind: "insight",
    keyword: "measurement uncertainty calibration",
    moreKeywords: ["what is measurement uncertainty"],
    img: IMG.lab,
    serviceType: "Information: measurement uncertainty",
    related: [R.cal, R.acc, R.contact],
    en: {
      title: "Measurement Uncertainty Explained | Expert Power",
      description:
        "What measurement uncertainty is, where it comes from and why it matters in calibration. A simple guide from Expert Power.",
      h1: "Measurement Uncertainty Explained",
      intro:
        "No measurement is perfect. Measurement uncertainty states how much doubt there is in a result, so the result can be used with confidence.",
      sections: [
        {
          heading: "What is measurement uncertainty?",
          body: [
            "It is a number that describes the doubt in a measurement result. A result is reported as a value plus or minus an uncertainty, not as a single exact number.",
          ],
        },
        {
          heading: "Where does it come from?",
          body: [],
          bullets: [
            "The reference equipment used",
            "The instrument being calibrated",
            "The environment, such as temperature",
            "The method and the person doing the work",
          ],
        },
        {
          heading: "How is it reported?",
          body: [
            "Uncertainty is usually stated as a plus or minus value with a confidence level. A common choice is a level of about 95 %.",
          ],
        },
        {
          heading: "Why does it matter?",
          body: [
            "When you decide whether an instrument is within tolerance, the uncertainty of the calibration must be taken into account. A smaller uncertainty gives more confidence in the decision.",
          ],
        },
      ],
      steps: [
        "Identify the sources of doubt",
        "Estimate each contribution",
        "Combine the contributions",
        "Report the result with its uncertainty",
      ],
      motionTitle: "Measurement uncertainty",
      faqs: [
        [
          "Is uncertainty the same as error?",
          "No. Error is the difference from the true value, which is not known exactly. Uncertainty describes the doubt about the result.",
        ],
        [
          "Does every calibration certificate show uncertainty?",
          "Certificates normally state the uncertainty of the calibration. Contact us if you need to discuss what you require.",
        ],
      ],
    },
    ar: {
      title: "عدم اليقين في القياس: شرح مبسط | إكسبرت باور",
      description:
        "ما هو عدم اليقين في القياس ومن أين يأتي ولماذا يهم في المعايرة. دليل مبسط من إكسبرت باور.",
      h1: "عدم اليقين في القياس: شرح مبسط",
      intro:
        "لا يوجد قياس مثالي. يبين عدم اليقين في القياس مقدار الشك في النتيجة، ليمكن استخدامها بثقة.",
      sections: [
        {
          heading: "ما هو عدم اليقين في القياس؟",
          body: [
            "هو رقم يصف الشك في نتيجة القياس. تُذكر النتيجة كقيمة زائد أو ناقص عدم يقين، وليس كرقم واحد دقيق.",
          ],
        },
        {
          heading: "من أين يأتي؟",
          body: [],
          bullets: [
            "المعدات المرجعية المستخدمة",
            "الجهاز الذي تتم معايرته",
            "البيئة، مثل درجة الحرارة",
            "الطريقة والشخص الذي ينفذ العمل",
          ],
        },
        {
          heading: "كيف يُذكر؟",
          body: [
            "يُذكر عدم اليقين عادة كقيمة زائد أو ناقص مع مستوى ثقة. ومن الخيارات الشائعة مستوى يقارب 95 %.",
          ],
        },
        {
          heading: "لماذا يهم؟",
          body: [
            "عند تقرير ما إذا كان الجهاز ضمن الحدود المسموحة، يجب أخذ عدم يقين المعايرة في الحسبان. كلما صغر عدم اليقين زادت الثقة في القرار.",
          ],
        },
      ],
      steps: [
        "تحديد مصادر الشك",
        "تقدير مساهمة كل مصدر",
        "دمج المساهمات",
        "ذكر النتيجة مع عدم يقينها",
      ],
      motionTitle: "عدم اليقين في القياس",
      faqs: [
        [
          "هل عدم اليقين هو نفسه الخطأ؟",
          "لا. الخطأ هو الفرق عن القيمة الحقيقية التي لا تُعرف بدقة تامة، أما عدم اليقين فيصف الشك في النتيجة.",
        ],
        [
          "هل تُظهر كل شهادة معايرة عدم اليقين؟",
          "تذكر الشهادات عادة عدم يقين المعايرة. تواصل معنا إذا أردت مناقشة ما تحتاجه.",
        ],
      ],
    },
  },
  {
    slug: "insights/in-house-vs-onsite-calibration",
    kind: "insight",
    keyword: "in-house vs on-site calibration",
    moreKeywords: ["on-site calibration or laboratory calibration"],
    img: IMG.cal,
    serviceType: "Information: laboratory or on-site calibration",
    related: [R.onsite, R.cal, R.van, R.contact],
    en: {
      title: "In-House vs On-Site Calibration | Expert Power",
      description:
        "Laboratory (in-house) calibration or on-site calibration: which one to choose. A guide from Expert Power in Saudi Arabia.",
      h1: "In-House vs On-Site Calibration",
      intro:
        "You can send instruments to a laboratory or have a team calibrate them at your site. The right choice depends on your instruments and your operation.",
      sections: [
        {
          heading: "In-house (laboratory) calibration",
          body: [],
          bullets: [
            "Instruments are brought to the laboratory",
            "Work is done in a controlled laboratory setting",
            "Suited to small and portable instruments",
          ],
        },
        {
          heading: "On-site calibration",
          body: [],
          bullets: [
            "Our team visits your site",
            "Less downtime for large or fixed equipment",
            "Suited to scales, large equipment and instruments that cannot be moved",
          ],
        },
        {
          heading: "How to choose",
          body: [
            "Think about the size of the instrument, how critical it is, how much downtime you can accept and how many instruments you have. Expert Power offers both options. Contact us to plan the work.",
          ],
        },
      ],
      steps: [
        "List your instruments",
        "Decide which ones can be moved",
        "Choose laboratory or on-site",
        "Contact us to plan the work",
      ],
      motionTitle: "Laboratory or on-site calibration",
      faqs: [
        [
          "Which is better, in-house or on-site calibration?",
          "Neither is always better. Choose based on the size of the instruments, the downtime you can accept and how many you have.",
        ],
        [
          "Does Expert Power offer on-site calibration?",
          "Yes, an on-site option is available. Contact us with your instrument details.",
        ],
      ],
    },
    ar: {
      title: "المعايرة في المعمل أم في الموقع؟ | إكسبرت باور",
      description:
        "المعايرة في المعمل أو في الموقع: أيهما تختار. دليل من إكسبرت باور في السعودية.",
      h1: "المعايرة في المعمل أم في الموقع؟",
      intro:
        "يمكنك إرسال الأجهزة إلى معمل أو الاستعانة بفريق يعايرها في موقعك. يعتمد الاختيار المناسب على أجهزتك وطبيعة عملك.",
      sections: [
        {
          heading: "المعايرة في المعمل",
          body: [],
          bullets: [
            "تُحضر الأجهزة إلى المعمل",
            "يتم العمل في بيئة معملية مضبوطة",
            "مناسبة للأجهزة الصغيرة والمحمولة",
          ],
        },
        {
          heading: "المعايرة في الموقع",
          body: [],
          bullets: [
            "يزور فريقنا موقعك",
            "توقف أقل للمعدات الكبيرة أو الثابتة",
            "مناسبة للموازين والمعدات الكبيرة والأجهزة التي لا يمكن نقلها",
          ],
        },
        {
          heading: "كيف تختار",
          body: [
            "فكر في حجم الجهاز ومدى أهميته ومقدار التوقف الذي يمكنك قبوله وعدد الأجهزة لديك. تقدم إكسبرت باور الخيارين. تواصل معنا للتخطيط للعمل.",
          ],
        },
      ],
      steps: [
        "حصر أجهزتك",
        "تحديد ما يمكن نقله",
        "اختيار المعمل أو الموقع",
        "التواصل معنا للتخطيط",
      ],
      motionTitle: "المعايرة في المعمل أو الموقع",
      faqs: [
        [
          "أيهما أفضل: المعايرة في المعمل أم في الموقع؟",
          "لا يوجد خيار أفضل دائماً. اختر بحسب حجم الأجهزة ومقدار التوقف الذي يمكنك قبوله وعددها.",
        ],
        [
          "هل تقدم إكسبرت باور المعايرة في الموقع؟",
          "نعم، يتوفر خيار الخدمة في الموقع. تواصل معنا مع تفاصيل أجهزتك.",
        ],
      ],
    },
  },
];

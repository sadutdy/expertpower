/**
 * Rental Equipment Data
 *
 * To add a new product:
 * 1. Add product images to: public/assets/rental/
 * 2. Append a new object to the rentalEquipment array below
 * 3. Ensure the category exists in the categories array
 *
 * To remove a product:
 * 1. Delete the object from rentalEquipment
 * 2. Optionally remove unused images from public/assets/rental/
 */

export type RentalEquipment = {
  id: string;
  name: string;
  model: string;
  category: string;
  images: string[];
  imageAvailable: boolean;
  description: string;
  specs: string[];
  highlights?: string[];
  applications?: string[];
};

export const categories = [
  "All",
  "Circuit Breaker Testing",
  "Insulation Testing",
  "Relay & Protection",
  "Primary Injection",
  "Transformer Testing",
  "High Voltage",
  "Power Quality",
  "Resistance & Ohm",
  "Temperature & Thermal",
  "SF6 & Environmental",
  "Cable Fault Location",
  "Electrical Testing",
  "Battery Testing",
  "Power Supply",
  "Tan Delta",
] as const;

export const rentalEquipment: RentalEquipment[] = [
  // ============================================================
  // Circuit Breaker Testing
  // ============================================================
  {
    id: "egil",
    name: "Circuit Breaker Analyzer",
    model: "EGIL",
    category: "Circuit Breaker Testing",
    images: ["/assets/rental/egil.png"],
    imageAvailable: true,
    description:
      "Compact circuit breaker analyzer for timing and motion measurement. Designed for easy transport and quick on-site testing of medium-voltage circuit breakers.",
    highlights: [
      "Portable design for field use",
      "LCD display with multilingual support",
      "Automatic timing measurement",
    ],
    applications: [
      "Circuit breaker timing tests",
      "Motion analysis",
      "Contact synchronization",
    ],
    specs: [
      "Mains voltage: 115/230 V AC (switchable), 50/60 Hz",
      "Power consumption: 100 VA (max)",
      "Dimensions: 354 x 210 x 181 mm",
      "Weight: 5.9 kg (instrument only)",
      "Display: LCD",
      "Languages: English, German, French, Spanish, Swedish",
    ],
  },

  // ============================================================
  // Insulation Testing
  // ============================================================
  {
    id: "mit430",
    name: "Insulation Tester",
    model: "MIT 430",
    category: "Insulation Testing",
    images: ["/assets/rental/mit430.png"],
    imageAvailable: true,
    description:
      "1 kV insulation tester designed for electrical and industrial testing. Features stabilized insulation test voltage and fast continuity testing.",
    highlights: [
      "Insulation testing up to 1000 V",
      "200 GΩ resistance range",
      "Stabilized test voltage",
      "Live circuit detection & protection",
    ],
    applications: [
      "Cable insulation testing",
      "Motor & generator insulation",
      "Transformer winding insulation",
    ],
    specs: [
      "Test voltage: up to 1000 V",
      "Insulation range: up to 200 GΩ",
      "Continuity: 0.01 Ω to 1 MΩ",
      "Adjustable test voltage: 10 V to 1000 V",
      "AC/DC voltage measurement: 600 V TRMS",
      "CAT IV 600 V, IP54 rated",
    ],
  },
  {
    id: "mit520",
    name: "Insulation Tester",
    model: "MIT 520/2",
    category: "Insulation Testing",
    images: [],
    imageAvailable: false,
    description:
      "5 kV diagnostic insulation tester with advanced measurement capabilities for high-voltage equipment diagnostics.",
    highlights: [
      "Test voltages up to 5 kV",
      "15 TΩ maximum insulation resistance",
      "PI, DAR, and DD diagnostic ratios",
    ],
    applications: [
      "High-voltage cable testing",
      "Transformer insulation diagnostics",
      "Switchgear insulation assessment",
    ],
    specs: [
      "Test voltages: 50 V – 5 kV",
      "Insulation range: 10 kΩ – 15 TΩ",
      "Accuracy: ±5% to 1 TΩ",
      "Capacitance: 10 nF – 50 µF",
      "Short-circuit current: 3 mA",
      "Power: 85 – 265 V AC",
      "IP65 rated, Weight: ~7.1 kg",
    ],
  },
  {
    id: "mit1025",
    name: "Insulation Tester",
    model: "MIT 1025",
    category: "Insulation Testing",
    images: ["/assets/rental/MIT1025.png"],
    imageAvailable: true,
    description:
      "10 kV insulation tester for comprehensive insulation resistance diagnostics on high-voltage electrical equipment.",
    highlights: [
      "Test voltages up to 10 kV",
      "20 TΩ maximum resistance range",
      "Step voltage testing capability",
    ],
    applications: [
      "HV cable diagnostics",
      "Rotating machinery testing",
      "Substation equipment assessment",
    ],
    specs: [
      "Test voltages: up to 10 kV",
      "Resistance range: up to 20 TΩ",
      "Accuracy: ±5% to 1 TΩ",
      "Dimensions: ~305 x 194 x 360 mm",
      "Weight: ~7.1 kg",
    ],
  },
  {
    id: "mit1525",
    name: "Insulation Tester",
    model: "MIT 1525",
    category: "Insulation Testing",
    images: [],
    imageAvailable: false,
    description:
      "15 kV diagnostic insulation tester for the most demanding high-voltage insulation resistance testing applications.",
    highlights: [
      "Highest test voltage: 15 kV",
      "30 TΩ maximum insulation resistance",
      "Complete diagnostic suite",
    ],
    applications: [
      "Extra-high-voltage cable testing",
      "Large transformer diagnostics",
      "Generator winding assessment",
    ],
    specs: [
      "Test voltages: up to 15 kV",
      "Insulation resistance: up to 30 TΩ",
      "Accuracy: ±5% typical",
      "Capacitance: 10 nF – 50 µF",
      "Short-circuit current: 3 mA",
      "Dimensions: ~305 x 194 x 360 mm",
      "Weight: ~8 kg",
    ],
  },

  // ============================================================
  // Relay & Protection
  // ============================================================
  {
    id: "freja300",
    name: "Relay Test / Secondary Injection Test",
    model: "Freja 300",
    category: "Relay & Protection",
    images: [],
    imageAvailable: false,
    description:
      "Advanced relay test set for comprehensive protection relay testing with 3-phase current and voltage outputs.",
    highlights: [
      "3-phase AC outputs: 3 x 15 A",
      "GPS synchronization for end-to-end testing",
      "COMTRADE import for fault simulation",
    ],
    applications: [
      "Protection relay commissioning",
      "Distance relay testing",
      "Differential relay verification",
    ],
    specs: [
      "Mains: 100 – 240 V AC, 50/60 Hz",
      "Power: 1200 VA (max)",
      "3-Phase AC: 3 x 15 A (87 VA each)",
      "1-Phase AC: 1 x 45 A (250 VA)",
      "Voltage: 4 x 150 V (82 VA)",
      "Digital inputs: 10 (dry or wet contacts)",
      "Frequency: DC – 2000 Hz (continuous)",
      "Dimensions: 450 x 160 x 410 mm",
      "Weight: 15 kg",
    ],
  },
  {
    id: "sverker780",
    name: "Relay Test",
    model: "SVERKER 780",
    category: "Relay & Protection",
    images: ["/assets/rental/sverker780.png", "/assets/rental/sverker780_1.png"],
    imageAvailable: true,
    description:
      "Powerful single-phase relay test set designed for primary injection testing and protection relay verification.",
    highlights: [
      "Primary injection capability",
      "Built-in ammeter/voltmeter",
      "PC integration via serial port",
      "Multi-language support",
    ],
    applications: [
      "Primary injection testing",
      "Current transformer testing",
      "Overcurrent relay verification",
    ],
    specs: [
      "Mains: 115/230 V AC, 50/60 Hz",
      "Max power: 1380 W",
      "Internal ammeter: 0 – 250 A AC",
      "External ammeter: 0 – 6 A AC",
      "Frequency range: 15 Hz – 550 Hz",
      "Display: LCD",
      "Dimensions: 350 x 270 x 220 mm",
      "Weight: 18.1 kg",
    ],
  },
  {
    id: "cmc356",
    name: "Universal Relay Test",
    model: "CMC 356",
    category: "Relay & Protection",
    images: [
      "/assets/rental/CMC356_1.png",
      "/assets/rental/CMC356_2.png",
      "/assets/rental/CMC356_3.png",
    ],
    imageAvailable: true,
    description:
      "High-power universal relay test set with IEC 61850 support for testing all types of protection relays including electromechanical and numerical.",
    highlights: [
      "High-burden electromechanical relay testing",
      "IEC 61850 IED testing capability",
      "10-channel analog measurement option",
      "Transient recording functionality",
    ],
    applications: [
      "Electromechanical relay testing",
      "Numerical relay verification",
      "IEC 61850 GOOSE testing",
    ],
    specs: [
      "6 current outputs (6 x 32 A / 6 x 64 A)",
      "4 voltage outputs (4 x 300 V)",
      "Binary inputs: 10",
      "Binary outputs: 8",
      "IEC 61850 Ethernet interface",
      "GPS time synchronization",
    ],
  },

  // ============================================================
  // Primary Injection
  // ============================================================
  {
    id: "oden",
    name: "Primary Injection Test",
    model: "ODEN AT",
    category: "Primary Injection",
    images: [
      "/assets/rental/ODEN_1.png",
      "/assets/rental/ODEN_2.png",
      "/assets/rental/ODEN_3.png",
    ],
    imageAvailable: true,
    description:
      "High-current primary injection test system for testing protective relays, circuit breakers, and current transformers at rated currents.",
    highlights: [
      "Modular current unit design",
      "Thermal cut-out protection",
      "Built-in cart for mobility",
      "IEC 60309-2 mains inlet",
    ],
    applications: [
      "Primary injection testing",
      "CT ratio verification",
      "Circuit breaker testing",
      "Protective relay testing",
    ],
    specs: [
      "Mains: 240/400 V AC, 50/60 Hz or 480 V AC/60 Hz",
      "Mains inlet: IEC 60309-2, 63 A",
      "Control unit: 570 x 310 x 230 mm, 25 kg",
      "Current unit S: 570 x 310 x 155 mm, 42 kg",
      "Current unit X: 570 x 310 x 155 mm, 45 kg",
      "Current unit H: 570 x 310 x 155 mm, 49 kg",
      "Complete with cart: 690 x 350 x 860 mm",
    ],
  },
  {
    id: "cpc100",
    name: "Universal Primary Injection Test for Substation",
    model: "CPC 100",
    category: "Primary Injection",
    images: ["/assets/rental/CPC100_1.png", "/assets/rental/CPC100_2.png"],
    imageAvailable: true,
    description:
      "Versatile primary injection test set for comprehensive substation testing including transformer, CT, and grounding system tests.",
    highlights: [
      "Complete transformer test system",
      "Capacitance & Tan Delta measurement",
      "Compact and portable design",
    ],
    applications: [
      "Transformer testing",
      "CT/VT ratio & polarity tests",
      "Ground impedance testing",
      "Circuit breaker contact resistance",
    ],
    specs: [
      "Input voltage: 100 – 240 V, 50/60 Hz (±10%)",
      "Max output current (DC): 100 A (2 min), 70 A (continuous)",
      "Test types: Transformer, CT/VT, Grounding",
      "Capacitance & dissipation factor measurement",
    ],
  },
  {
    id: "foster",
    name: "Primary Current Injection Test",
    model: "Foster 2000A",
    category: "Primary Injection",
    images: ["/assets/rental/FOSTER2000A.jpg"],
    imageAvailable: true,
    description:
      "High-capacity primary current injection test set capable of delivering up to 2000A for testing protective devices and busbar joints.",
    highlights: [
      "Up to 2000 A output current",
      "12 kVA maximum capacity",
      "ARM chip controlled output",
      "Built-in thermal & short-circuit protection",
    ],
    applications: [
      "Primary injection up to 2000 A",
      "CT ratio verification",
      "Busbar joint resistance testing",
      "Protective device testing",
    ],
    specs: [
      "Output current: up to 2000 A at 6V or 1000 A at 12V",
      "Max capacity: 12 kVA",
      "Input: AC 220 V ±10% at 50 A or 110 V ±10% at 100 A",
      "Waveform distortion: ≤ 5%",
      "Primary current: 0 – 2200 A, resolution 0.1 A",
      "Accuracy: < 0.5%",
      "Timer: 0.0001 – 999.99 s",
    ],
  },
  {
    id: "multi-amp",
    name: "Winding Analyzer",
    model: "MULTI-AMP",
    category: "Primary Injection",
    images: ["/assets/rental/MULTIAMP_1.jpg", "/assets/rental/MULTIAMP_2.webp"],
    imageAvailable: true,
    description:
      "Winding analyzer and current injection test set for transformer winding resistance and turns ratio testing.",
    highlights: [
      "Winding resistance measurement",
      "Current injection capability",
      "Transformer ratio verification",
    ],
    applications: [
      "Transformer winding resistance",
      "Turns ratio testing",
      "Tap changer analysis",
    ],
    specs: [
      "Input voltage: 90 – 264 V AC",
      "Input frequency: 50 or 60 Hz",
      "Output AC source for injection tests",
      "Compatible with MULTI-AMP test leads",
    ],
  },
  {
    id: "b10e",
    name: "Power Supply Unit",
    model: "B10E",
    category: "Power Supply",
    images: ["/assets/rental/B10E.png"],
    imageAvailable: true,
    description:
      "High-power DC power supply unit for circuit breaker testing and substation maintenance applications.",
    highlights: [
      "3300 W maximum power output",
      "0 – 300 V DC/AC voltmeter",
      "Built-in current shunt",
      "Thermal cut-out protection",
    ],
    applications: [
      "Circuit breaker coil supply",
      "Substation DC power testing",
      "Relay power supply testing",
    ],
    specs: [
      "Mains: 115/230 V AC, 50/60 Hz",
      "Power consumption: 3300 W (max)",
      "Voltmeter: 0 – 300 V DC, 0 – 300 V AC",
      "Resolution: 1 V",
      "Accuracy: ±1% DC, ±2.5% AC",
      "Current shunt: 5 A / 50 mV (built-in)",
      "Dimensions: 350 x 270 x 220 mm",
      "Weight: 20.8 kg (45.8 lbs with case)",
    ],
  },

  // ============================================================
  // Transformer Testing
  // ============================================================
  {
    id: "ct-analyzer",
    name: "Current Transformer Analyzer",
    model: "CT Analyzer",
    category: "Transformer Testing",
    images: [
      "/assets/rental/CT_ANALYZER_1.png",
      "/assets/rental/CT_ANALYZER_2.png",
      "/assets/rental/CT_ANALYZER_3.png",
    ],
    imageAvailable: true,
    description:
      "Portable CT analyzer for comprehensive current transformer testing with highest accuracy and automatic evaluation to IEC/IEEE standards.",
    highlights: [
      "Highest accuracy: 0.02% / 1 min",
      "Automatic evaluation per IEC/IEEE",
      "Lightweight: < 8 kg",
      "Max test voltage: 120 V for safety",
    ],
    applications: [
      "CT ratio & polarity tests",
      "Excitation curve measurement",
      "Burden & winding resistance",
      "CT commissioning",
    ],
    specs: [
      "Accuracy: 0.02% / 1 min (on-site calibration)",
      "Weight: < 8 kg / 17.4 lbs",
      "Test duration: < 1 min (automatic)",
      "Max test voltage: 120 V",
      "Standards: IEC, IEEE, customizable",
      "Remote Interface Control supported",
    ],
  },
  {
    id: "twa40d",
    name: "Winding Analyzer",
    model: "DVV Power TWA 40D",
    category: "Transformer Testing",
    images: [
      "/assets/rental/TWA40D_1.jpg",
      "/assets/rental/TWA40D_2.jpg",
      "/assets/rental/TWA40D_3.jpg",
    ],
    imageAvailable: true,
    description:
      "Advanced transformer winding analyzer for resistance measurement, OLTC dynamic analysis, and automatic demagnetization.",
    highlights: [
      "Test current: 5 mA to 40 A DC",
      "True three-phase measurement",
      "Dynamic resistance measurement (DVtest)",
      "Automatic demagnetization",
    ],
    applications: [
      "Transformer winding resistance",
      "OLTC (tap changer) analysis",
      "Demagnetization after testing",
      "Power transformer commissioning",
    ],
    specs: [
      "Test current: 5 mA to 40 A DC",
      "Output voltage: up to 55 V DC",
      "Measurement range: 0.1 µΩ to 10 kΩ",
      "Accuracy: ±(0.1% reading + 0.1% FS)",
      "6-channel simultaneous measurement",
      "OLTC resolution: 0.1 ms",
      "Dimensions: 480 x 197 x 395 mm",
      "PC software: DV-Win (PDF, Excel, Word export)",
    ],
  },
  {
    id: "ttr310",
    name: "Transformer Turns Ratio",
    model: "TTR 310",
    category: "Transformer Testing",
    images: ["/assets/rental/TTR310_1.png"],
    imageAvailable: true,
    description:
      "Transformer turns ratio tester for accurate TTR measurement with multiple excitation voltages for various transformer types.",
    highlights: [
      "Multiple excitation voltages",
      "High accuracy TTR measurement",
      "Phase relationship verification",
    ],
    applications: [
      "Turns ratio verification",
      "Phase displacement tests",
      "Excitation current measurement",
    ],
    specs: [
      "Power input: 120/230 V AC ±10%, 50/60 Hz",
      "Excitation voltage: 8, 40, or 80 V rms",
      "High accuracy ratio measurement",
      "Portable field design",
    ],
  },
  {
    id: "mto210",
    name: "Transformer Ohmmeter",
    model: "MTO 210",
    category: "Transformer Testing",
    images: ["/assets/rental/MTO210.png"],
    imageAvailable: true,
    description:
      "Precision transformer ohmmeter for DC winding resistance measurement with selectable current ranges.",
    highlights: [
      "User-selectable DC current ranges",
      "Fast, stable resistance readings",
      "Built-in demagnetization",
    ],
    applications: [
      "Transformer winding resistance",
      "Tap changer contact resistance",
      "Bushing & CT resistance",
    ],
    specs: [
      "Input: 85-264 V, 47-63 Hz, 720 VA",
      "DC output: user selectable current ranges",
      "High accuracy resistance measurement",
      "Compact portable design",
    ],
  },

  // ============================================================
  // High Voltage
  // ============================================================
  {
    id: "hva60",
    name: "Digital VLF / AC High Voltage Test",
    model: "HVA 60",
    category: "High Voltage",
    images: [
      "/assets/rental/HVA60_1.jpg",
      "/assets/rental/HVA60_2.jpg",
      "/assets/rental/HVA60_3.jpg",
    ],
    imageAvailable: true,
    description:
      "VLF AC high-voltage test set for cable testing and diagnostics with sinusoidal output up to 62 kV peak.",
    highlights: [
      "VLF sinewave output up to 62 kV peak",
      "Cable testing & diagnostics",
      "Two-piece portable design",
      "Safety interlock system",
    ],
    applications: [
      "MV cable withstand testing",
      "Cable diagnostic testing",
      "Tan Delta & partial discharge",
    ],
    specs: [
      "Output voltage: 0-44 kV RMS / 0-62 kV peak",
      "Output frequency: 0.1 Hz VLF",
      "Waveform: Sinusoidal AC",
      "Safety interlock & overcurrent protection",
      "Two-piece design for transport",
    ],
  },
  {
    id: "vlf6022cmf",
    name: "VLF AC Hipot Tester",
    model: "VLF 6022 CMF",
    category: "High Voltage",
    images: [
      "/assets/rental/VLF6022CMF_1.jpg",
      "/assets/rental/VLF6022CMF_2.jpg",
    ],
    imageAvailable: true,
    description:
      "VLF hipot tester for AC high-voltage testing of medium-voltage cables with integrated metering and safety features.",
    highlights: [
      "0-62 kV AC peak sinusoidal output",
      "Multiple VLF frequencies",
      "Integrated charging current & capacitance meters",
      "Two-piece transportable design",
    ],
    applications: [
      "35 kV rated cable testing",
      "Cable acceptance testing",
      "Maintenance hipot testing",
    ],
    specs: [
      "Output voltage: 0-62 kV AC peak",
      "Output frequency: 0.1, 0.05, 0.02 Hz",
      "Max load capacitance: 5.5 µF (at 0.1 Hz)",
      "Input: 120 V AC, 60 Hz",
      "Safety interlock & overcurrent protection",
      "Sine wave output for Tan Delta testing",
    ],
  },
  {
    id: "alt12060f",
    name: "AC High Voltage Test",
    model: "ALT 120/60F",
    category: "High Voltage",
    images: [
      "/assets/rental/ALT12060F_1.jpg",
      "/assets/rental/ALT12060F_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Portable AC dielectric test set for high-voltage equipment testing with capacitive load compensation and dual-range metering.",
    highlights: [
      "0-120 kV AC output",
      "Capacitive load compensation",
      "Zero-start safety interlock",
      "Built-in test timer",
    ],
    applications: [
      "Aerial lift boom testing",
      "Insulator & bushing testing",
      "Cable AC withstand testing",
    ],
    specs: [
      "Input: 230 V, 50/60 Hz, 15 A",
      "Output: 0-120 kV AC / 0-60 kV AC",
      "Power: up to 7.2 kVA capacitive, 3.6 kVA resistive",
      "Duty cycle: 1 hr ON / 2 hr OFF (7.2 kVA)",
      "Distortion: < 5%",
      "Voltmeter: 0-30/60 kV & 0-60/120 kV, ±2% FS",
    ],
  },
  {
    id: "phenix650",
    name: "AC High Voltage Test",
    model: "650-2P AC",
    category: "High Voltage",
    images: [
      "/assets/rental/Phenix650_1.jpg",
      "/assets/rental/Phenix650_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Portable AC dielectric test set for 50 kV hipot testing with rugged two-piece construction for field use.",
    highlights: [
      "0-50 kV AC output",
      "Rugged two-piece portable design",
      "±1% FS metering accuracy",
      "Lightweight control unit",
    ],
    applications: [
      "Electrical apparatus hipot testing",
      "Cable dielectric testing",
      "Switchgear testing",
    ],
    specs: [
      "Input: 120 VAC/60 Hz (2 kVA) or 220 VAC/50 Hz",
      "Output: 0-50 kV AC, 40 mA",
      "Duty cycle: 5 min ON / 15 min OFF @ 40 mA",
      "Distortion: < 5%",
      "Accuracy: ±1% FS",
      "Control unit: 16.5×15.25×11.25 in, 31 lbs",
      "HV transformer: 15×15×16.5 in, 79 lbs",
    ],
  },
  {
    id: "cp100kvac",
    name: "AC High Voltage Test",
    model: "6CP100 KV AC",
    category: "High Voltage",
    images: [
      "/assets/rental/6CP100KV AC_1.jpg",
      "/assets/rental/6CP100KV AC_2.jpg",
    ],
    imageAvailable: true,
    description:
      "High-capacity AC dielectric test system for 100 kV hipot testing of cables, switchgear, transformers, and motors.",
    highlights: [
      "0-100 kV AC output",
      "Low-voltage 0-50 kV output",
      "Digital multi-range meters",
      "Oil-natural/air-natural cooling",
    ],
    applications: [
      "HV cable testing",
      "Transformer dielectric testing",
      "Switchgear & motor hipot tests",
    ],
    specs: [
      "High voltage output: 0-100 kV AC",
      "Low voltage output: 0-50 kV AC",
      "Current at 100 kV: 75-100 mA",
      "Current at 50 kV: 150-200 mA",
      "Input: 120 V/60 Hz or 220-240 V",
      "Cooling: ONAN (Oil Natural / Air Natural)",
      "Safety: zero-start, overload, emergency-off",
    ],
  },
  {
    id: "pgkhb",
    name: "AC/DC High Voltage Test",
    model: "PGK HB",
    category: "High Voltage",
    images: [
      "/assets/rental/PGK HB.webp",
      "/assets/rental/PGKHB_2.jpg",
      "/assets/rental/PGKHB_3.jpg",
      "/assets/rental/PGKHB_4.webp",
    ],
    imageAvailable: true,
    description:
      "Versatile AC/DC high-voltage test set from BAUR for combined AC and DC hipot testing up to 110 kV DC.",
    highlights: [
      "AC up to 80 kVrms / DC up to ±110 kV",
      "Oil-insulated HV transformer",
      "Polarity reversal for DC",
      "EN 50191 safety compliance",
    ],
    applications: [
      "Cable AC/DC withstand testing",
      "Switchgear hipot testing",
      "Insulator DC leakage testing",
    ],
    specs: [
      "AC output: up to 80 kVrms (continuous 14 mA)",
      "DC output: up to ±110 kV (continuous ±5 mA)",
      "Mains: 200-260 V, 50/60 Hz",
      "Power: 1,380 VA (2,650 VA short-circuit)",
      "Accuracy: ±2.5%",
      "Temp: 0°C to +45°C",
      "Two-part system: control + HV unit",
    ],
  },
  {
    id: "phenix47520",
    name: "DC High Voltage Test",
    model: "Phenix 475-20",
    category: "High Voltage",
    images: [
      "/assets/rental/Phenix475_20_1.jpg",
      "/assets/rental/PHENIX 475_20_2.webp",
    ],
    imageAvailable: true,
    description:
      "Portable DC high-voltage test set for 75 kV DC hipot testing with digital metering and internal discharge capability.",
    highlights: [
      "0-75 kV DC output",
      "Digital 3½-digit LCD metering",
      "Internal discharge capability",
      "Adjustable current trip",
    ],
    applications: [
      "Cable DC hipot testing",
      "Generator DC leakage testing",
      "Insulator DC withstand tests",
    ],
    specs: [
      "Output: 0-75 kV DC, 20 mA",
      "Ripple: < 2% at full voltage",
      "Polarity: negative output, positive ground",
      "Duty cycle: continuous at 20 mA",
      "Input: 120 VAC/10A or 220 VAC/5A",
      "Accuracy: ±0.5% FS (digital)",
      "Meter ranges: 0-19.99 kV & 0-75.0 kV",
    ],
  },

  // ============================================================
  // Power Quality
  // ============================================================
  {
    id: "fluke435",
    name: "Power Quality Analyzer",
    model: "Fluke 435",
    category: "Power Quality",
    images: [
      "/assets/rental/FLUKE435_1.webp",
      "/assets/rental/FLUKE435_2.webp",
      "/assets/rental/FLUKE435_3.jpg",
      "/assets/rental/FLUKE435_4.jpg",
    ],
    imageAvailable: true,
    description:
      "Advanced 3-phase power quality analyzer for comprehensive electrical system analysis, harmonic measurement, and energy loss calculations.",
    highlights: [
      "3-phase power quality analysis",
      "Harmonics up to 50th order",
      "Transient capture & recording",
      "Energy loss calculator",
    ],
    applications: [
      "Power quality surveys",
      "Harmonic analysis",
      "Energy efficiency audits",
      "Voltage dip/swell recording",
    ],
    specs: [
      "Voltage range: up to ±6000 V",
      "Accuracy: ±2.5% of Vrms",
      "Transient detection: capture & recording",
      "Harmonics: up to 50th order",
      "3-phase simultaneous measurement",
      "Data logging & trending",
    ],
  },
  {
    id: "fluke1775",
    name: "Power Quality Analyzer",
    model: "Fluke 1775",
    category: "Power Quality",
    images: [
      "/assets/rental/fluke1775_1.jpg",
      "/assets/rental/fluke1775_2.webp",
      "/assets/rental/fluke1775_3.jpg",
      "/assets/rental/fluke1775_4.jpg",
    ],
    imageAvailable: true,
    description:
      "High-performance power quality recorder measuring 500+ parameters including harmonics, dips, swells, and flicker per EN50160.",
    highlights: [
      "500+ measured parameters",
      "EN50160 compliance reporting",
      "Automatic measurement verification",
      "Wi-Fi & Ethernet connectivity",
    ],
    applications: [
      "EN50160 compliance verification",
      "Industrial power quality monitoring",
      "Renewable energy integration",
      "Utility grid analysis",
    ],
    specs: [
      "Measures 500+ parameters",
      "Harmonics, dips, swells, flicker",
      "Voltage: up to 1000 V",
      "Current: up to 6000 A (with clamps)",
      "Wi-Fi, Ethernet, USB connectivity",
      "Automatic measurement verification",
    ],
  },

  // ============================================================
  // Resistance & Ohm
  // ============================================================
  {
    id: "dlro600",
    name: "Digital Microhmmeter",
    model: "DLRO 600",
    category: "Resistance & Ohm",
    images: [
      "/assets/rental/DLRO600_1.png",
      "/assets/rental/DLRO600_2.png",
      "/assets/rental/DLRO600_3.png",
    ],
    imageAvailable: true,
    description:
      "High-current digital microhmmeter for precise low-resistance measurement using the four-wire Kelvin method with up to 600 A test current.",
    highlights: [
      "Test current: 10 A to 600 A DC",
      "Resolution: 0.1 µΩ",
      "Four-wire Kelvin measurement",
      "300-result memory",
    ],
    applications: [
      "Circuit breaker contact resistance",
      "Busbar joint resistance",
      "Switchgear resistance testing",
      "Transformer winding resistance",
    ],
    specs: [
      "Test current: 10 A – 600 A DC",
      "Resistance range: 0.1 µΩ – 999.9 mΩ",
      "Resolution: 0.1 µΩ",
      "Four-wire Kelvin method",
      "Memory: 300 results",
      "USB data export",
    ],
  },
  {
    id: "dlro10",
    name: "Low Resistance Microhmmeter",
    model: "DLRO 10",
    category: "Resistance & Ohm",
    images: [
      "/assets/rental/DLRO_1.png",
      "/assets/rental/DLRO_2.png",
      "/assets/rental/DLRO_3.png",
    ],
    imageAvailable: true,
    description:
      "Portable low-resistance ohmmeter for quick and accurate contact resistance measurement up to 10 A DC.",
    highlights: [
      "Test current up to 10 A",
      "4-wire measurement",
      "Auto-ranging",
      "Portable battery-operated",
    ],
    applications: [
      "Switch contact resistance",
      "Relay contact testing",
      "Rail & pipeline bonding",
      "Aircraft frame bonding",
    ],
    specs: [
      "Test current: up to 10 A DC",
      "4-wire Kelvin measurement",
      "Auto range selection",
      "Accuracy: < 0.01% / °C (5-40°C)",
      "Battery powered for portability",
    ],
  },
  {
    id: "mjolner600",
    name: "Micro-ohmmeter",
    model: "MJOLNER 600",
    category: "Resistance & Ohm",
    images: ["/assets/rental/MJOLNER600_1.png"],
    imageAvailable: true,
    description:
      "High-current micro-ohmmeter with DualGround technology for safer, faster circuit breaker contact resistance testing up to 600 A.",
    highlights: [
      "5 – 600 A DC output",
      "DualGround safety technology",
      "Built-in thermal printer",
      "Rugged suitcase design",
    ],
    applications: [
      "Circuit breaker contact resistance",
      "Busbar & joint resistance",
      "Switchgear maintenance",
    ],
    specs: [
      "Output current: 5 – 600 A DC (1 A steps)",
      "Max voltage: 5.25 V DC at 600 A",
      "Mains: 100-120 / 200-240 V AC, 50/60 Hz",
      "Dimensions: 486 x 392 x 192 mm",
      "Weight: 13.8 kg",
      "Built-in thermal printer",
      "USB for CSV data export",
    ],
  },
  {
    id: "mom690",
    name: "Micro-ohmmeter",
    model: "MOM 690",
    category: "Resistance & Ohm",
    images: ["/assets/rental/MOM690_1.jpg"],
    imageAvailable: true,
    description:
      "High-current micro-ohmmeter for contact resistance measurement with up to 690 A output for heavy-duty circuit breaker testing.",
    highlights: [
      "Up to 690 A DC output",
      "0-200 mΩ resistance range",
      "Contact resistance measurement",
      "Circuit breaker optimized",
    ],
    applications: [
      "HV circuit breaker testing",
      "Contact resistance verification",
      "Substation maintenance",
    ],
    specs: [
      "Resistance range: 0 – 200 mΩ",
      "High current DC output",
      "Optimized for circuit breakers",
      "Portable field design",
    ],
  },
  {
    id: "mom200a",
    name: "Micro-ohmmeter",
    model: "MOM 200A",
    category: "Resistance & Ohm",
    images: ["/assets/rental/MOM200A_1.png"],
    imageAvailable: true,
    description:
      "Portable micro-ohmmeter for low-resistance measurement with up to 200 A DC output for smaller circuit breakers and contacts.",
    highlights: [
      "Up to 200 A DC output",
      "Portable design",
      "Contact resistance testing",
    ],
    applications: [
      "LV/MV breaker testing",
      "Contact resistance",
      "Maintenance testing",
    ],
    specs: [
      "Output current: up to 200 A DC",
      "Contact resistance measurement",
      "Portable field design",
    ],
  },

  // ============================================================
  // Temperature & Thermal
  // ============================================================
  {
    id: "broman861a",
    name: "Temperature Calibrator",
    model: "Broman 861A",
    category: "Temperature & Thermal",
    images: [
      "/assets/rental/BROMAN861A_1.jpg",
      "/assets/rental/BROMAN861A_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Precision dry-block temperature calibrator for RTD and thermocouple calibration in the field or laboratory.",
    highlights: [
      "Temperature range: 0 – 250 °C",
      "RTD & thermocouple support",
      "Multiple well configurations",
      "Portable design",
    ],
    applications: [
      "RTD calibration",
      "Thermocouple verification",
      "Temperature transmitter testing",
      "Process instrument calibration",
    ],
    specs: [
      "Temperature range: 0 to 250 °C",
      "Accuracy: ±(0.6% of reading + 1 °C)",
      "Set point resolution: ±1.0 °C",
      "RTD: 100 Ω, TCR = 0.00385",
      "Input: 120 V @ 60 Hz",
      "Well config 1: 3 x 0.500\" dia, 6.5\" depth",
      "Well config 2: 2 x 0.625\" dia, 6.5\" depth",
      "Control unit: 7×11×10 in, 15 lbs",
      "Thermal block: 13×13×17 in, 38 lbs",
    ],
  },
  {
    id: "flir",
    name: "Thermal Imager",
    model: "FLIR",
    category: "Temperature & Thermal",
    images: ["/assets/rental/FLIR_1.webp", "/assets/rental/FLIR_2.png"],
    imageAvailable: true,
    description:
      "High-resolution thermal imaging camera for electrical survey, predictive maintenance, and building diagnostics.",
    highlights: [
      "464 x 348 IR resolution",
      "NETD: < 40 mK",
      "Temperature up to 250 °C",
      "Advanced image analysis",
    ],
    applications: [
      "Electrical hotspot detection",
      "Predictive maintenance",
      "Building insulation surveys",
      "Mechanical bearing monitoring",
    ],
    specs: [
      "IR resolution: 464 × 348 pixels",
      "Thermal sensitivity (NETD): < 40 mK",
      "Temperature range: up to 250 °C",
      "High-definition visual camera",
      "Wi-Fi & Bluetooth connectivity",
    ],
  },
  {
    id: "fluket400",
    name: "Thermal Imager",
    model: "Fluke Ti400",
    category: "Temperature & Thermal",
    images: [
      "/assets/rental/FLUKE TI400.jpg",
      "/assets/rental/FLUKETI400_1.webp",
      "/assets/rental/TI400_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Professional thermal imager with LaserSharp autofocus, IR-Fusion technology, and wide temperature range for industrial applications.",
    highlights: [
      "320 x 240 detector resolution",
      "Temperature: -20°C to 1200°C",
      "IR-Fusion technology",
      "LaserSharp autofocus",
    ],
    applications: [
      "Industrial electrical surveys",
      "Mechanical overheating detection",
      "Process temperature monitoring",
      "HVAC diagnostics",
    ],
    specs: [
      "Detector: 320 x 240 pixels (76,800)",
      "IFOV: high spatial resolution",
      "Temperature range: -20°C to 1200°C",
      "IR-Fusion picture-in-picture",
      "LaserSharp autofocus system",
      "Wi-Fi connectivity for Fluke Connect",
    ],
  },

  // ============================================================
  // SF6 & Environmental
  // ============================================================
  {
    id: "mbw",
    name: "SF6 Analyzer",
    model: "MBW",
    category: "SF6 & Environmental",
    images: [],
    imageAvailable: false,
    description:
      "Precision SF6 gas analyzer for moisture (dew point), purity, and decomposition product measurement in GIS equipment.",
    highlights: [
      "Dew point / frost point measurement",
      "SF6 purity analysis",
      "SO₂ concentration detection",
      "GIS equipment optimized",
    ],
    applications: [
      "SF6 moisture analysis",
      "Gas purity verification",
      "GIS commissioning",
      "Decomposition product detection",
    ],
    specs: [
      "Humidity: frost/dew point",
      "SF6 purity: volume %",
      "SO₂ concentration measurement",
      "Portable field design",
    ],
  },
  {
    id: "dilo-sk509",
    name: "Density Monitor",
    model: "DILO SK-509-R010",
    category: "SF6 & Environmental",
    images: ["/assets/rental/SK509R010.jpg"],
    imageAvailable: true,
    description:
      "SF6 gas density monitor and pressure regulator module for SF6 test equipment and GIS monitoring applications.",
    highlights: [
      "Pressure regulator function",
      "Density sensor module",
      "SF6 test equipment compatible",
    ],
    applications: [
      "SF6 gas monitoring",
      "GIS density measurement",
      "SF6 test equipment integration",
    ],
    specs: [
      "Type: Pressure regulator / density sensor",
      "SF6 test equipment compatible",
      "Compact modular design",
    ],
  },
  {
    id: "dilo-leakpointer",
    name: "SF6 Detector",
    model: "DILO 3-033-R002",
    category: "SF6 & Environmental",
    images: ["/assets/rental/dilo3033r002_1.jpg"],
    imageAvailable: true,
    description:
      "Highly sensitive SF6 leak detector for locating SF6 gas leaks in GIS, switchgear, and gas-insulated equipment.",
    highlights: [
      "1 ppm sensitivity",
      "Audible & visual alarm",
      "Portable handheld design",
      "Rapid leak detection",
    ],
    applications: [
      "GIS leak detection",
      "Switchgear SF6 monitoring",
      "Gas-insulated equipment testing",
      "Environmental compliance",
    ],
    specs: [
      "Model: 3-033-R002 LeakPointer SF6",
      "Sensitivity: 1 ppm",
      "Audible & visual alarm",
      "Handheld portable design",
      "Rapid response time",
    ],
  },
  {
    id: "bdv75c",
    name: "Oil Breakdown Voltage Tester",
    model: "BDV 75C",
    category: "SF6 & Environmental",
    images: ["/assets/rental/BDVC75_1.png"],
    imageAvailable: true,
    description:
      "Portable transformer oil breakdown voltage tester for on-site dielectric strength measurement of insulating oils.",
    highlights: [
      "Test voltages: 0 – 75 kVrms",
      "IEC 60156 compliant",
      "Automatic test sequence",
      "Compact & robust for field use",
    ],
    applications: [
      "Transformer oil testing",
      "Insulating oil diagnostics",
      "Oil quality monitoring",
      "Preventive maintenance",
    ],
    specs: [
      "Test voltage: 0 to 75 kVrms",
      "Standard: IEC 60156 compliant",
      "Operation: Automatic test sequence",
      "Design: Compact & robust portable",
      "On-site testing capability",
    ],
  },

  // ============================================================
  // Cable Fault Location
  // ============================================================
  {
    id: "esg-nt2",
    name: "Ground Fault Locator",
    model: "ESG NT2",
    category: "Cable Fault Location",
    images: ["/assets/rental/ESGNT2.jpg", "/assets/rental/ESGNT2_1.png"],
    imageAvailable: true,
    description:
      "Advanced ground fault locator with high-contrast color TFT display for cable fault prelocation and pinpointing.",
    highlights: [
      "High-contrast color TFT display",
      "320 x 240 pixel resolution",
      "Cable fault prelocation",
      "TDR measurement method",
    ],
    applications: [
      "Cable fault location",
      "Ground fault detection",
      "Cable sheath fault finding",
      "Underground cable diagnostics",
    ],
    specs: [
      "Display: High-contrast color TFT",
      "Resolution: 320 x 240 pixels",
      "Methods: TDR, bridge, pulse reflection",
      "Battery powered for field use",
    ],
  },
  {
    id: "mfm10",
    name: "Sheath Fault Locator",
    model: "MFM 10-1",
    category: "Cable Fault Location",
    images: ["/assets/rental/MFM10_1.png", "/assets/rental/MFM10_2.png"],
    imageAvailable: true,
    description:
      "Multi-function cable sheath fault locator for testing, prelocation, pinpointing, burning, and direct resistance measurement.",
    highlights: [
      "Testing & prelocation",
      "Pinpointing & burning",
      "Direct resistance measurement",
      "Multi-function design",
    ],
    applications: [
      "Cable sheath fault location",
      "Cable route tracing",
      "Depth measurement",
      "Sheath testing",
    ],
    specs: [
      "Functions: Testing, prelocation, pinpointing",
      "Burning capability for high-resistance faults",
      "Direct resistance measurement",
      "Portable field design",
    ],
  },

  // ============================================================
  // Electrical Testing
  // ============================================================
  {
    id: "fluke1663",
    name: "Multi Function Test",
    model: "Fluke 1663",
    category: "Electrical Testing",
    images: [
      "/assets/rental/FLUKE1663_1.jpg",
      "/assets/rental/FLUKE1663_1.webp",
      "/assets/rental/FLUKE1663_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Comprehensive multifunction installation tester for electrical installation testing, insulation, continuity, and RCD verification.",
    highlights: [
      "AC/DC voltage measurement",
      "Insulation resistance testing",
      "RCD testing & trip time",
      "Loop & line impedance",
    ],
    applications: [
      "Electrical installation testing",
      "Periodic inspection",
      "RCD verification",
      "Continuity & polarity checks",
    ],
    specs: [
      "AC/DC voltage: 500 V range, 0.1 V resolution",
      "Accuracy (45-66 Hz): 0.5%",
      "Insulation resistance testing",
      "RCD trip time measurement",
      "Loop & line impedance",
      "Continuity testing",
    ],
  },
  {
    id: "kyoritsu4105a",
    name: "Earth Tester",
    model: "Kyoritsu 4105A",
    category: "Electrical Testing",
    images: [
      "/assets/rental/KYORITSU4105A_1.jpg",
      "/assets/rental/KYORITSU4105A_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Digital earth resistance tester with 2-pole and 3-pole measurement methods for grounding system testing.",
    highlights: [
      "2-pole & 3-pole methods",
      "0 – 2000 Ω measurement range",
      "Digital display",
      "Dust & drip proof",
    ],
    applications: [
      "Grounding system testing",
      "Lightning protection earth",
      "Electrical panel grounding",
      "Telecom tower earthing",
    ],
    specs: [
      "Earth resistance: 0-20Ω, 0-200Ω, 0-2000Ω",
      "Earth voltage: 0-200V AC",
      "Accuracy: ±2% ±0.1Ω (20Ω range)",
      "Methods: 2-pole & 3-pole",
      "Dust & drip proof design",
      "Battery powered",
    ],
  },
  {
    id: "extech380941",
    name: "Mini Clampmeter",
    model: "Extech 380941",
    category: "Electrical Testing",
    images: [
      "/assets/rental/EXTECH380941.jpg",
      "/assets/rental/EXTECH380941_3.jpg",
      "/assets/rental/EXTECH380942.jpg",
    ],
    imageAvailable: true,
    description:
      "Compact mini AC/DC clamp meter for current measurement in tight spaces with true RMS accuracy.",
    highlights: [
      "4000-count LCD display",
      "True RMS measurement",
      "Compact jaw design",
      "AC/DC current & voltage",
    ],
    applications: [
      "Panel current measurement",
      "Control circuit testing",
      "HVAC current checks",
      "Tight-space measurements",
    ],
    specs: [
      "Display: 4000-count LCD",
      "Jaw opening: 0.9\" (23 mm)",
      "True RMS for accurate readings",
      "AC/DC current & voltage",
      "Resistance & continuity",
      "Compact handheld design",
    ],
  },
  {
    id: "dcm8700pv",
    name: "Clamp Meter",
    model: "DCM8700PV",
    category: "Electrical Testing",
    images: ["/assets/rental/DCM8700PV_1.png"],
    imageAvailable: true,
    description:
      "True RMS AC/DC clamp meter designed for photovoltaic and electrical system current measurement with high accuracy.",
    highlights: [
      "True RMS measurement",
      "Photovoltaic system optimized",
      "High current capability",
      "Digital display",
    ],
    applications: [
      "Solar PV current measurement",
      "AC/DC load monitoring",
      "Inverter output testing",
      "Electrical maintenance",
    ],
    specs: [
      "True RMS for noisy electrical environments",
      "AC/DC current measurement",
      "High current range",
      "Digital display with backlight",
      "PV system optimized",
    ],
  },
  {
    id: "zera-mt500",
    name: "Portable Current and Voltage Source",
    model: "Zera MT 500",
    category: "Electrical Testing",
    images: ["/assets/rental/ZERAMT500.webp", "/assets/rental/ZERAMT500_1.jpg"],
    imageAvailable: true,
    description:
      "Precision portable current and voltage source for meter testing, calibration, and verification of energy meters.",
    highlights: [
      "Universal power supply 85-265 V",
      "Precision current & voltage output",
      "Energy meter testing",
      "Portable calibration source",
    ],
    applications: [
      "Energy meter calibration",
      "Current transformer testing",
      "Protection relay testing",
      "Instrument verification",
    ],
    specs: [
      "Power supply: 85-265 V, 47-63 Hz",
      "Precision current output",
      "Precision voltage output",
      "Portable field design",
      "Meter testing & calibration",
    ],
  },

  // ============================================================
  // Battery Testing
  // ============================================================
  {
    id: "torkel840",
    name: "Battery Load Unit",
    model: "Torkel 840",
    category: "Battery Testing",
    images: [
      "/assets/rental/TORKEL840_1.jpg",
      "/assets/rental/TORKEL840_2.jpg",
    ],
    imageAvailable: true,
    description:
      "Battery load unit for discharge testing of DC battery systems with constant current, power, or resistance modes.",
    highlights: [
      "12 – 250 V battery range",
      "Constant current/power/resistance",
      "High discharge current",
      "Data logging & PC software",
    ],
    applications: [
      "UPS battery testing",
      "Telecom battery discharge",
      "Substation battery banks",
      "Battery capacity verification",
    ],
    specs: [
      "Battery voltage: 12 – 250 V",
      "Max discharge current: high capacity",
      "Modes: constant current, power, resistance",
      "Data logging with PC software",
      "Portable field design",
    ],
  },

  // ============================================================
  // Tan Delta
  // ============================================================
  {
    id: "delta4300",
    name: "Tan Delta Test",
    model: "Delta 4300",
    category: "Tan Delta",
    images: [
      "/assets/rental/DELTA4300_1.png",
      "/assets/rental/DELTA4300_2.png",
      "/assets/rental/DELTA4300_3.png",
    ],
    imageAvailable: true,
    description:
      "Advanced Tan Delta (dissipation factor) and power factor test set for high-voltage asset insulation condition assessment.",
    highlights: [
      "0 – 12 kV adjustable output",
      "Individual Temperature Correction (ITC)",
      "Advanced noise suppression",
      "Built-in 12\" touchscreen controller",
    ],
    applications: [
      "Transformer insulation assessment",
      "Bushing Tan Delta testing",
      "Cable insulation diagnostics",
      "Generator winding evaluation",
    ],
    specs: [
      "Output voltage: 0 – 12 kV adjustable",
      "Output current: 100 mA continuous, 300 mA peak",
      "Max power: 3.6 kVA",
      "Tan Delta: 0 – 100 (0-10,000%), resolution 0.001%",
      "Power factor: 0 – 100%, resolution 0.001%",
      "Capacitance: 0 – 100 µF, resolution 0.01 pF",
      "Watt loss: 0 – 2 kW, resolution 0.1 mW",
      "Frequency: 45-70 Hz (at 12 kV)",
      "ITC patented temperature correction",
      "USB & Ethernet connectivity",
    ],
  },
];

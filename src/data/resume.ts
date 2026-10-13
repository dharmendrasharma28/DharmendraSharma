export const profile = {
  name: "Dharmendra Sharma",
  first: "Dharmendra",
  last: "Sharma",
  tagline: "Designing Experiences, Not Just Apps",
  role: "Senior Manager · Mobile Applications",
  company: "Mahindra Logistics",
  location: "Gurugram, Haryana",
  email: "sharmadharmendra2810@gmail.com",
  phone: "+91 88909 00920",
  phoneHref: "+918890900920",
  linkedin: "https://www.linkedin.com/in/dharmendra-sharma-462a7b79",
  linkedinLabel: "linkedin.com/in/dharmendra-sharma-462a7b79",
  resumeHref: "/Dharmendra-Sharma-Resume.pdf",
  summary:
    "With 14+ years in mobile engineering, I specialise in digital solutions for logistics, hospitality, market research and transportation. I lead the team building Mahindra Logistics' mobility and warehouse products, after a decade shipping Android and iOS apps and SDKs for startups across Jaipur, Bangalore and Gurugram. Lately I've added data science to the toolkit — an M.Tech at BITS Pilani and an agentic RAG chatbot built from scratch.",
};

export const stats = [
  { value: 13, suffix: "+", label: "years in mobile" },
  { value: 40, suffix: "+", label: "apps published" },
  { value: 0, suffix: "5–10", label: "engineers I lead", literal: "5–10" },
  { value: 2, suffix: "", label: "platforms, both stores" },
];

export const route = [
  { city: "Bangalore", year: "2013", status: "Picked up", x: 8, y: 78 },
  { city: "Jaipur", year: "2015 – 2019", status: "In transit", x: 46, y: 28 },
  { city: "Gurugram", year: "2019 – now", status: "Delivered", x: 90, y: 16 },
];

export type Experience = {
  id: string;
  role: string;
  org: string;
  place: string;
  period: string;
  status: "current" | "past";
  bullets: string[];
  tag?: string;
};

export const experience: Experience[] = [
  {
    id: "senior-manager",
    role: "Senior Manager",
    org: "Mahindra Logistics",
    place: "Gurugram, Haryana",
    period: "August 2026 – Present",
    status: "current",
    tag: "Team of 5–10",
    bullets: [
      "Lead mobile application engineering across Mahindra Logistics, driving architecture, platform strategy, and product delivery.",
      "Own the roadmap across mobility, warehouse management, analytics, and AI products.",
      "Lead a team of 5–10 across product and mobile engineering, from Android and iOS to platform and AI.",
      "Drive LogiOne, the unified analytics and AI platform, alongside Alyte, LogiPick, and LogiFreight.",
    ],
  },
  {
    id: "manager",
    role: "Manager",
    org: "Mahindra Logistics",
    place: "Gurugram, Haryana",
    period: "August 2024 – July 2026",
    status: "past",
    tag: "Team of 2–3",
    bullets: [
      "Led a team of 2–3 people across mobile engineering.",
      "Spearheaded Alyte, the people-transportation application built to improve mobility.",
      "Led LogiPick, the warehouse management solution, aimed at boosting productivity and efficiency.",
      "Supported the Android and iOS teams, ensuring seamless integration and optimal performance across platforms.",
      "Focused on cutting-edge solutions that streamline operations and elevate user experiences.",
    ],
  },
  {
    id: "deputy",
    role: "Deputy Manager",
    org: "Mahindra Logistics",
    place: "Gurugram, Haryana",
    period: "December 2019 – July 2024",
    status: "past",
    bullets: [
      "Developed innovative applications designed to enhance mobility and productivity — the groundwork for Alyte and the WMS.",
    ],
  },
  {
    id: "tangish",
    role: "Mobile Application Developer",
    org: "Tangish",
    place: "Gurugram, Haryana",
    period: "September 2019 – November 2019",
    status: "past",
    bullets: [
      "Led development of an Android and iOS app for organisation-wide project, task and team management.",
      "Worked closely with the team to implement new features and ensure timely deployment.",
      "Built and published the apps on the Play Store and App Store.",
    ],
  },
  {
    id: "unomer",
    role: "Mobile Application Developer",
    org: "Unomer",
    place: "Greater Jaipur Area",
    period: "July 2018 – August 2019",
    status: "past",
    bullets: [
      "Used the Android SDK and iOS framework to run in-app mobile market research initiatives.",
      "Built and integrated our SDK with diverse applications.",
      "Continuously enhanced and maintained the SDK code to align with the latest Android and iOS versions.",
    ],
  },
  {
    id: "alleviate",
    role: "Mobile Application Developer",
    org: "Alleviate Technologies",
    place: "Jaipur",
    period: "March 2016 – June 2018",
    status: "past",
    bullets: [
      "Collaborated across functions to analyse, design and deploy new features.",
      "Managed the end-to-end process of building and publishing apps on the App Store and Play Store.",
      "Explored and integrated new technologies to optimise performance and enhance user experience.",
    ],
  },
  {
    id: "rgweb",
    role: "Senior Android Developer",
    org: "RG Web Studio",
    place: "Jaipur",
    period: "April 2015 – February 2016",
    status: "past",
    bullets: [
      "Developed applications tailored to client requirements, aligned with project objectives.",
      "Worked with project leaders and delivery managers to give accurate estimates for new features.",
      "Maintained and enhanced applications and services, resolving bugs promptly.",
    ],
  },
  {
    id: "nibble",
    role: "Associate Software Engineer",
    org: "nibble MATRIX Technologies",
    place: "Bangalore",
    period: "August 2013 – March 2015",
    status: "past",
    bullets: [
      "Contributed to eBill, an online food-ordering Point of Sale system, focusing on the client app and billing system.",
      "Owned critical logic and algorithms for seamless integration with other systems, ensuring performance.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  categories: string[];
  sku: string;
  featured?: boolean;
  href?: string;
};

export const projectCategories = ["All", "Mobile", "SDK", "AI & Data", "Leadership"];

export const projects: Project[] = [
  {
    id: "logione",
    name: "LogiOne",
    org: "Mahindra Logistics",
    period: "2024 → now",
    description:
      "Analytics and prediction platform with AI built in — dashboards, forecasting, and Vedaa, a conversational AI chatbot solution for operations teams.",
    tags: ["Analytics", "AI", "Chatbot", "Lead"],
    categories: ["Mobile", "AI & Data", "Leadership"],
    sku: "LOGIONE-01",
    featured: true,
  },
  {
    id: "alyte",
    name: "Alyte",
    org: "Mahindra Logistics",
    period: "2019 → now",
    description:
      "Customer ride-booking application for everyday mobility. Laid the groundwork as Deputy Manager and now spearhead it with a team of 5–10 across Android and iOS.",
    tags: ["Android", "iOS", "Lead"],
    categories: ["Mobile", "Leadership"],
    sku: "ALYTE-02",
  },
  {
    id: "wms",
    name: "LogiPick",
    org: "Mahindra Logistics",
    period: "2019 → now",
    description:
      "Warehouse management solution live across 40 sites — scanning, putaway, picking, and the integrations that keep it honest. Built for productivity and efficiency on the floor.",
    tags: ["Mobile", "Platform", "Lead"],
    categories: ["Mobile", "Leadership"],
    sku: "WMS-03",
  },
  {
    id: "logifreight",
    name: "LogiFreight",
    org: "Mahindra Logistics",
    period: "2023 → now",
    description:
      "Consignment tracking and ePOD (electronic proof of delivery) application — real-time visibility on freight movement from pickup to signed-off delivery.",
    tags: ["Android", "iOS", "Logistics", "Lead"],
    categories: ["Mobile", "Leadership"],
    sku: "LOGIFRT-04",
  },
  {
    id: "sir",
    name: "Safety Incident Report",
    org: "Mahindra Logistics",
    period: "2024 → now",
    description:
      "App for reporting and tracking safety incidents across sites — fast capture in the field, clear follow-through for the people responsible.",
    tags: ["Android", "iOS", "Operations"],
    categories: ["Mobile"],
    sku: "SIR-05",
  },
  {
    id: "bits-capstone",
    name: "Smart Document Parsing",
    org: "BITS Pilani · Capstone",
    period: "2025",
    description:
      "Smart document parsing pipeline combining CNN-based layout detection with OCR — extracts structured fields from scanned and photographed documents without hand-built templates.",
    tags: ["Python", "CNN", "OCR", "M.Tech"],
    categories: ["AI & Data"],
    sku: "MTECH-06",
    featured: true,
  },
  {
    id: "edureka-capstone",
    name: "IT Policy RAG Chatbot",
    org: "Edureka · Capstone",
    period: "2025",
    description:
      "An agentic Retrieval-Augmented Generation assistant that answers IT policy questions grounded in uploaded documents — built with LangGraph, a four-role guard/planner/retriever/answer pipeline, and a hard rule: say 'I don't know' rather than invent an answer.",
    tags: ["Python", "LangGraph", "RAG"],
    categories: ["AI & Data"],
    sku: "EDU-07",
  },
  {
    id: "tangish-app",
    name: "Work management app",
    org: "Tangish",
    period: "2019",
    description:
      "Led development of an Android and iOS app for organisation-wide project, task and team management. Built it, shipped it to both stores.",
    tags: ["Android", "iOS", "Published"],
    categories: ["Mobile"],
    sku: "TNG-08",
  },
  {
    id: "unomer-sdk",
    name: "In-app research SDK",
    org: "Unomer",
    period: "2018 – 2019",
    description:
      "An Android and iOS SDK that runs mobile market research inside partner apps. Integrated it with diverse codebases and kept it current with every OS release.",
    tags: ["SDK", "Android", "iOS"],
    categories: ["SDK", "Mobile"],
    sku: "SDK-09",
  },
  {
    id: "aha-taxi",
    name: "Aha Taxi",
    org: "Alleviate Technologies",
    period: "2016 – 2018",
    description:
      "Outstation cab-booking application — fare estimates, driver assignment, and trip tracking for one-way and round-trip intercity rides.",
    tags: ["Android", "iOS", "Booking"],
    categories: ["Mobile"],
    sku: "TAXI-10",
  },
  {
    id: "ebill",
    name: "eBill POS",
    org: "nibble MATRIX",
    period: "2013 – 2015",
    description:
      "Online food-ordering Point of Sale. Owned the client app, the billing system, and the critical logic that integrated with everything else.",
    tags: ["Android", "Billing", "Algorithms"],
    categories: ["Mobile"],
    sku: "POS-11",
  },
];

export const skillGroups = [
  {
    title: "Platforms",
    items: [
      { name: "Android", detail: "13 years of the SDK, from Gingerbread to Jetpack" },
      { name: "iOS & SwiftUI", detail: "UIKit to SwiftUI, App Store publishing" },
      { name: "Flutter & Dart", detail: "one codebase when it earns its keep" },
    ],
  },
  {
    title: "Engineering",
    items: [
      { name: "Systems design", detail: "apps and the platforms behind them" },
      { name: "Algorithms & data structures", detail: "the logic nobody else wanted to own" },
      { name: "SOLID & MVVM", detail: "architecture that outlives frameworks" },
      { name: "SDK development", detail: "built, integrated, maintained across OS releases" },
    ],
  },
  {
    title: "Delivery & people",
    items: [
      { name: "Team leadership", detail: "5–10 engineers across product and mobile" },
      { name: "Agile & Scrum", detail: "estimates people can plan around" },
      { name: "Data science", detail: "M.Tech, BITS Pilani" },
      { name: "Mobile UX", detail: "certified, and opinionated about it" },
    ],
  },
];

export const keywords = [
  "Android", "iOS", "SwiftUI", "Flutter & Dart", "Systems Design", "Algorithm Design",
  "Data Structures", "SOLID", "Agile & Scrum", "MVVM", "LangGraph", "RAG",
  "Data Science", "Team Leadership",
];

export const education = [
  { degree: "M.Tech, Data Science & Engineering", school: "BITS Pilani", period: "Oct 2023 – Sep 2025" },
  { degree: "B.Tech, Information Technology", school: "JECRC, Jaipur", period: "2009 – 2013" },
  { degree: "Trainee, C# & ADO.NET", school: "IIHT, Jaipur", period: "Mar – Sep 2012", note: "Console, Windows and web apps" },
  { degree: "Higher Secondary, Physics, Chemistry & Mathematics", school: "Central Public, Talwandi, Kota", period: "2007 – 2008" },
];

export const certifications = [
  { code: "Sw", name: "MVVM Design Pattern in SwiftUI" },
  { code: "S", name: "SOLID Principles" },
  { code: "Ag", name: "Agile Project Management: Scrum Step by Step" },
  { code: "Fl", name: "Flutter & Dart: The Complete Guide [2022 Edition]" },
  { code: "UX", name: "Creating a Great User Experience for Mobile Apps" },
];

export const passions = ["Learning", "Free time", "Mobile apps", "Logistics", "Improvement", "Writing"];

export type SkillItem = { name: string; level: number; category: string; detail: string };

export const skillCategories = ["All", "Platforms", "Engineering", "Delivery & People"];

export const skillsFlat: SkillItem[] = [
  { name: "Android", level: 95, category: "Platforms", detail: "13 years of the SDK, from Gingerbread to Jetpack" },
  { name: "iOS & SwiftUI", level: 85, category: "Platforms", detail: "UIKit to SwiftUI, App Store publishing" },
  { name: "Flutter & Dart", level: 65, category: "Platforms", detail: "one codebase when it earns its keep" },
  { name: "Systems design", level: 90, category: "Engineering", detail: "apps and the platforms behind them" },
  { name: "Algorithms & data structures", level: 88, category: "Engineering", detail: "the logic nobody else wanted to own" },
  { name: "SOLID & MVVM", level: 85, category: "Engineering", detail: "architecture that outlives frameworks" },
  { name: "SDK development", level: 80, category: "Engineering", detail: "built, integrated, maintained across OS releases" },
  { name: "Team leadership", level: 90, category: "Delivery & People", detail: "5–10 engineers across product and mobile" },
  { name: "Agile & Scrum", level: 85, category: "Delivery & People", detail: "estimates people can plan around" },
  { name: "Data science", level: 65, category: "Delivery & People", detail: "M.Tech, BITS Pilani" },
  { name: "Mobile UX", level: 75, category: "Delivery & People", detail: "certified, and opinionated about it" },
];

export type Service = {
  code: string;
  title: string;
  blurb: string;
  items: string[];
  tone: "primary" | "secondary";
  highlight?: boolean;
};

export const services: Service[] = [
  {
    code: "MOBILE",
    title: "Mobile Engineering",
    blurb: "Native Android and iOS products from the first screen to the store listing — 13 years of the SDKs, UIKit to SwiftUI, Gingerbread to Jetpack.",
    items: ["Android & Kotlin", "iOS & SwiftUI", "Flutter & Dart"],
    tone: "primary",
  },
  {
    code: "CORE",
    title: "Platform & Systems",
    blurb: "The platforms behind the apps — systems design, SDKs that survive OS releases, and the algorithms nobody else wanted to own.",
    items: ["Systems Design", "SDK Development", "SOLID & MVVM"],
    tone: "primary",
    highlight: true,
  },
  {
    code: "AI",
    title: "AI & Data",
    blurb: "M.Tech in Data Science from BITS Pilani and an agentic RAG assistant built from scratch with LangGraph.",
    items: ["LangGraph Agents", "RAG Pipelines", "Data Science"],
    tone: "secondary",
  },
  {
    code: "LEAD",
    title: "Leadership",
    blurb: "Leading a team of 5–10 across product and mobile engineering — estimates people can plan around and releases that ship.",
    items: ["Team Leadership", "Agile & Scrum", "Mobile UX"],
    tone: "secondary",
  },
];

export const skillClusters = [
  { label: "Mobile Platforms", items: ["Android", "Kotlin", "iOS", "SwiftUI", "Flutter", "Dart"], tone: "primary" as const },
  { label: "Engineering", items: ["Systems Design", "SDK Development", "MVVM", "SOLID", "Algorithms", "REST APIs"], tone: "primary" as const },
  { label: "AI & Data", items: ["LangGraph", "RAG", "Python", "Vector DB", "Data Science"], tone: "secondary" as const },
  { label: "Delivery", items: ["Team Leadership", "Agile", "Scrum", "Mobile UX"], tone: "secondary" as const },
];

export const tools = [
  "ANDROID", "KOTLIN", "JAVA", "SWIFT", "SWIFTUI", "UIKIT", "FLUTTER", "DART", "JETPACK",
  "XCODE", "ANDROID STUDIO", "GIT", "GITHUB", "JIRA", "FIREBASE", "REST", "PYTHON",
  "LANGGRAPH", "LANGCHAIN", "RAG", "POSTGRESQL", "FIGMA", "PLAY STORE", "APP STORE",
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dharmendra-sharma-462a7b79", hover: "hover:bg-[#0077B5] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]" },
  { name: "Email", href: "mailto:sharmadharmendra2810@gmail.com", hover: "hover:bg-secondary hover:shadow-[0_0_20px_rgba(205,71,71,0.5)]" },
  { name: "Phone", href: "tel:+918890900920", hover: "hover:bg-primary hover:shadow-[0_0_20px_rgba(42,111,182,0.5)]" },
];

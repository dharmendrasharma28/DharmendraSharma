export const profile = {
  name: "Dharmendra Sharma",
  first: "Dharmendra",
  last: "Sharma",
  tagline: "Designing Experiences, Not Just Apps",
  role: "Manager · Mobile & Platform Engineering",
  company: "Mahindra Logistics",
  location: "Gurugram, Haryana",
  email: "sharmadharmendra2810@gmail.com",
  phone: "+91 88909 00920",
  phoneHref: "+918890900920",
  linkedin: "https://www.linkedin.com/in/dharmendra-sharma-462a7b79",
  linkedinLabel: "linkedin.com/in/dharmendra-sharma-462a7b79",
  resumeHref: "/Dharmendra-Sharma-Resume.pdf",
  summary:
    "With 13+ years in mobile engineering, I specialise in digital solutions for logistics, hospitality, market research and transportation. I lead the team building Mahindra Logistics' mobility and warehouse products, after a decade shipping Android and iOS apps and SDKs for startups across Jaipur, Bangalore and Gurugram. Lately I've added data science to the toolkit — an M.Tech at BITS Pilani and an agentic RAG chatbot built from scratch.",
};

export const stats = [
  { value: 13, suffix: "+", label: "years in mobile" },
  { value: 7, suffix: "", label: "companies, one craft" },
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
    id: "manager",
    role: "Manager",
    org: "Mahindra Logistics",
    place: "Gurugram, Haryana",
    period: "August 2024 – Present",
    status: "current",
    tag: "Team of 5–10",
    bullets: [
      "Lead a team of 5–10 people across product and mobile engineering.",
      "Spearhead a people-transportation application built to improve mobility.",
      "Lead a warehouse management system aimed at boosting productivity and efficiency.",
      "Support the Android and iOS teams, ensuring seamless integration and optimal performance across platforms.",
      "Focus on cutting-edge solutions that streamline operations and elevate user experiences.",
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
  sku: string;
  featured?: boolean;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "alyte",
    name: "Alyte",
    org: "Mahindra Logistics",
    period: "2019 → now",
    description:
      "People-transportation app for everyday mobility. Laid the groundwork as Deputy Manager and now spearhead it with a team of 5–10 across Android and iOS.",
    tags: ["Android", "iOS", "Lead"],
    sku: "ALYTE-01",
  },
  {
    id: "wms",
    name: "Warehouse Management System",
    org: "Mahindra Logistics",
    period: "2019 → now",
    description:
      "Warehouse management system built for productivity and efficiency on the floor — scanning, putaway, picking, and the integrations that keep it honest.",
    tags: ["Mobile", "Platform", "Lead"],
    sku: "WMS-02",
  },
  {
    id: "sir",
    name: "Safety Incident Report",
    org: "Mahindra Logistics",
    period: "2024 → now",
    description:
      "App for reporting and tracking safety incidents across sites — fast capture in the field, clear follow-through for the people responsible.",
    tags: ["Android", "iOS", "Operations"],
    sku: "SIR-03",
  },
  {
    id: "capstone",
    name: "IT Policy RAG Chatbot",
    org: "BITS Pilani · Capstone",
    period: "2025",
    description:
      "An agentic Retrieval-Augmented Generation assistant that answers IT policy questions grounded in uploaded documents — built with LangGraph, a four-role guard/planner/retriever/answer pipeline, and a hard rule: say 'I don't know' rather than invent an answer.",
    tags: ["Python", "LangGraph", "RAG", "M.Tech"],
    sku: "MTECH-07",
    featured: true,
  },
  {
    id: "tangish-app",
    name: "Work management app",
    org: "Tangish",
    period: "2019",
    description:
      "Led development of an Android and iOS app for organisation-wide project, task and team management. Built it, shipped it to both stores.",
    tags: ["Android", "iOS", "Published"],
    sku: "TNG-04",
  },
  {
    id: "unomer-sdk",
    name: "In-app research SDK",
    org: "Unomer",
    period: "2018 – 2019",
    description:
      "An Android and iOS SDK that runs mobile market research inside partner apps. Integrated it with diverse codebases and kept it current with every OS release.",
    tags: ["SDK", "Android", "iOS"],
    sku: "SDK-05",
  },
  {
    id: "ebill",
    name: "eBill POS",
    org: "nibble MATRIX",
    period: "2013 – 2015",
    description:
      "Online food-ordering Point of Sale. Owned the client app, the billing system, and the critical logic that integrated with everything else.",
    tags: ["Android", "Billing", "Algorithms"],
    sku: "POS-06",
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

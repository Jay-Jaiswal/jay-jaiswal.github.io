window.CATALOGUE_FILTERS = [
  "All",
  "Web App",
  "AI / ML",
  "Data",
  "Mobile",
  "Java",
  "Collaboration",
];

const overview = (summary, details, highlights) => `
  <p><strong>Overview:</strong> ${summary}</p>
  <div class="mt-6 p-4 bg-gray-100 border-l-4 border-black">
    <p class="mb-4">${details}</p>
    <p class="font-bold">Highlights:</p>
    <ul class="list-disc pl-5 mt-2 marker:text-black">
      ${highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </div>
`;

window.CATALOGUE_PROJECTS = [
  {
    id: 1,
    title: "Shiftly / MigrationGuard",
    categories: ["Web App", "Java", "Collaboration"],
    tags: ["Java", "Next.js", "Python"],
    desc: "An evidence-led system for verifying Java 8 to Java 17 migrations across code, tests, and evaluation workflows.",
    detailedOverview: overview(
      "An evidence-led Java migration verification system.",
      "MigrationGuard combines a modern web interface, Python services, automated tests, and evaluation tooling to make Java 8-to-17 upgrades measurable and reviewable.",
      [
        "Java 8 to Java 17 migration analysis",
        "Next.js frontend with Python backend services",
        "Repeatable tests and evaluation workflows",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Shiftly",
  },
  {
    id: 2,
    title: "Project Management AI",
    categories: ["AI / ML", "Web App", "Collaboration"],
    tags: ["Agentic AI", "Python", "Multi-Agent"],
    desc: "A multi-agent project management system that coordinates planning, budgets, risks, resources, quality, and client communication.",
    detailedOverview: overview(
      "An agentic AI system for end-to-end software project management.",
      "A central decision agent orchestrates specialized agents for project planning, resources, budgets, timelines, risk, quality assurance, analytics, and client communication while preserving project state.",
      [
        "Decision-agent orchestration",
        "Persistent project state and live dashboards",
        "Budget, timeline, risk, and QA workflows",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Project-Management-AI",
  },
  {
    id: 3,
    title: "Respira",
    categories: ["Mobile", "AI / ML", "Collaboration"],
    tags: ["React Native", "FastAPI", "Scikit-learn"],
    desc: "A location-aware asthma risk monitor using environmental observations and a validated machine-learning inference service.",
    detailedOverview: overview(
      "A mobile environmental risk monitor backed by a trained scikit-learn model.",
      "Respira pairs an Expo mobile client with a FastAPI inference service. It gathers location-based air observations and estimates environmental asthma risk from PM2.5, nitrogen dioxide, and ozone measurements.",
      [
        "React Native / Expo mobile experience",
        "FastAPI model-serving boundary",
        "Open-Meteo air-quality data and map-based exploration",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/RespiraApp",
  },
  {
    id: 4,
    title: "QAir Asthma",
    categories: ["Mobile", "AI / ML", "Collaboration"],
    tags: ["TypeScript", "React Native", "Supabase"],
    desc: "A mobile asthma companion for logging inhaler triggers, monitoring air quality, and identifying higher-risk locations.",
    detailedOverview: overview(
      "A location-based asthma monitoring application.",
      "QAir combines trigger logging, live air-quality indicators, map visualizations, user accounts, and AI-assisted recommendations in a responsive React Native application.",
      [
        "Map-based inhaler trigger tracking",
        "AQI, PM2.5, PM10, temperature, and humidity views",
        "Supabase authentication and personalized guidance",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/QAir-Asthma",
  },
  {
    id: 5,
    title: "RAG Knowledge Base Chatbot",
    categories: ["AI / ML", "Data"],
    tags: ["Python", "RAG", "Gemini"],
    desc: "A citation-first document chatbot with local embeddings, persistent retrieval, and safeguards against unsupported answers and prompt injection.",
    detailedOverview: overview(
      "A retrieval-augmented chatbot for uploaded knowledge bases.",
      "The application extracts PDF, text, and Markdown content, stores local embeddings in ChromaDB, retrieves supporting evidence, and asks Gemini to answer with citations or abstain when evidence is insufficient.",
      [
        "Local sentence-transformer embeddings and ChromaDB",
        "Source-aware answers with page metadata",
        "Prompt-injection resistance and evidence thresholds",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/RagBasedChatBot",
  },
  {
    id: 6,
    title: "DataSet Fixer",
    categories: ["Data", "Web App", "AI / ML"],
    tags: ["Python", "FastAPI", "React"],
    desc: "A full-stack data-quality workbench that detects, explains, previews, and fixes issues in CSV and JSON datasets.",
    detailedOverview: overview(
      "A professional data cleaning and profiling application.",
      "DataSet Fixer uses a FastAPI and Pandas backend with a React interface to identify missing values, duplicates, outliers, inconsistent types, formatting problems, and other common data-quality issues.",
      [
        "Automated seven-step cleaning workflow",
        "Cleaning previews, quality scores, and profiling reports",
        "Downloadable cleaned CSV and JSON outputs",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/DataSet-Fixer",
    demo: "https://data-set-fixer.vercel.app",
  },
  {
    id: 7,
    title: "DataFixer Pro",
    categories: ["Data", "Web App"],
    tags: ["TypeScript", "Data Engineering"],
    desc: "An advanced web-based data engineering workspace for collaborative cleaning and robust dataset workflows.",
    detailedOverview: overview(
      "The advanced web edition of the DataFixer toolkit.",
      "DataFixer Pro brings data-quality workflows into a polished TypeScript web environment designed for repeatable processing and team-friendly use.",
      [
        "TypeScript web application",
        "Scalable data-cleaning workflows",
        "Hosted interactive demo",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/DataFIxer-Pro",
    demo: "https://data-fixer-pro.vercel.app",
  },
  {
    id: 8,
    title: "Crafta",
    categories: ["AI / ML", "Web App"],
    tags: ["React", "FastAPI", "Video AI"],
    desc: "A consumer-attention analyzer that finds engagement segments and attention drop zones in uploaded videos.",
    detailedOverview: overview(
      "A full-stack consumer attention analysis dashboard.",
      "Crafta processes uploaded video, reports attention and engagement segments, and produces actionable editing suggestions through a React dashboard and FastAPI service.",
      [
        "Video upload and background analysis",
        "WebSocket progress updates",
        "Actionable editing suggestions and feedback capture",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Crafta",
    demo: "https://crafta-blush.vercel.app",
  },
  {
    id: 9,
    title: "NagarDrishti",
    categories: ["Web App", "AI / ML", "Collaboration"],
    tags: ["React", "Geospatial", "Forecasting"],
    desc: "A geospatial civic-intelligence dashboard with interactive maps, environmental forecasts, reports, and an AI assistant.",
    detailedOverview: overview(
      "A map-first platform for city and environmental intelligence.",
      "NagarDrishti combines interactive geospatial views, heat maps, forecasting services, report exports, and an AI intervention assistant in a React and Python stack.",
      [
        "Leaflet maps, heat layers, charts, and 3D visuals",
        "Python forecasting and geospatial processing",
        "PDF reporting and conversational analysis",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/NagarDrishti",
    demo: "https://aetriks-mvp.vercel.app",
  },
  {
    id: 10,
    title: "Campus Command Center",
    categories: ["Web App"],
    tags: ["React", "TypeScript", "Real-time"],
    desc: "A modern campus monitoring dashboard for live cameras, safety alerts, maps, reports, and operational statistics.",
    detailedOverview: overview(
      "A real-time campus safety and monitoring interface.",
      "The dashboard organizes live monitoring, alert history, campus maps, reports, settings, and camera status into a responsive command-center experience.",
      [
        "React and TypeScript dashboard",
        "Socket-based live status integration",
        "Alerts, monitoring, maps, and reports",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Campus",
  },
  {
    id: 11,
    title: "Portfolio",
    categories: ["Web App"],
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive personal portfolio presenting Jay's profile, work, skills, and resume in a focused web experience.",
    detailedOverview: overview(
      "A personal portfolio website built for the browser.",
      "This lightweight project uses semantic HTML, custom CSS, and vanilla JavaScript to present professional information without a heavy framework.",
      [
        "Responsive, framework-free frontend",
        "Project and profile presentation",
        "Hosted Vercel deployment",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Portfolio",
    demo: "https://portfolio-jay-jaiswals-projects.vercel.app",
  },
  {
    id: 12,
    title: "TripWise",
    categories: ["Web App"],
    tags: ["TypeScript", "Travel"],
    desc: "A modern travel planning and community application for organizing itineraries and discovering destinations.",
    detailedOverview: overview(
      "A comprehensive travel planner and community application.",
      "TripWise brings itinerary planning and destination discovery together in a modern TypeScript web experience.",
      [
        "TypeScript application architecture",
        "Itinerary and destination workflows",
        "Responsive travel-focused interface",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/TripWise",
  },
  {
    id: 13,
    title: "DataFixer",
    categories: ["Data", "AI / ML"],
    tags: ["Python", "Data Cleaning"],
    desc: "A Python data-cleaning tool for standardizing messy CSV and JSON datasets through a conversational workflow.",
    detailedOverview: overview(
      "The original Python edition of the DataFixer project.",
      "DataFixer helps users standardize file formats, handle missing values, identify outliers, and prepare messy data without repeatedly writing one-off cleaning scripts.",
      [
        "CSV and JSON processing",
        "Missing-value and outlier handling",
        "Conversational cleaning workflow",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/DataFixer",
  },
  {
    id: 14,
    title: "MedCase",
    categories: ["AI / ML", "Data"],
    tags: ["Python", "Machine Learning"],
    desc: "A Python-based medical case analysis and records-management project focused on structured clinical insights.",
    detailedOverview: overview(
      "An intelligent medical case analysis and management project.",
      "MedCase explores Python and machine-learning workflows for organizing patient histories and extracting useful structure from medical case information.",
      [
        "Python analytical workflows",
        "Medical record organization",
        "Machine-learning experimentation",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/MedCase",
  },
  {
    id: 15,
    title: "Campus Safety",
    categories: ["AI / ML"],
    tags: ["Python", "Backend"],
    desc: "A Python safety logging and alerting backend designed for incident tracking in campus environments.",
    detailedOverview: overview(
      "A campus-focused safety logging and alerting system.",
      "The project supports incident tracking, emergency broadcasts, and administrative reporting through a Python backend.",
      [
        "Incident and event logging",
        "Emergency alert workflows",
        "Administrative reporting",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/campus-safety",
  },
  {
    id: 16,
    title: "ClinicWEB",
    categories: ["Web App", "Java"],
    tags: ["Java", "Clinic Management"],
    desc: "A Java clinic-management portal for patient records, appointments, and billing workflows.",
    detailedOverview: overview(
      "An end-to-end clinic management portal.",
      "ClinicWEB digitizes core clinic operations including patient records, appointment scheduling, and billing in a Java web application.",
      [
        "Patient record management",
        "Appointment scheduling",
        "Billing workflows",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/ClinicWEB",
  },
  {
    id: 17,
    title: "Electricity Billing System",
    categories: ["Java"],
    tags: ["Java", "Desktop App"],
    desc: "A Java desktop application for managing consumers, electricity usage, tariffs, and monthly bills.",
    detailedOverview: overview(
      "A desktop utility billing management application.",
      "The system applies object-oriented Java design to consumer records, consumption calculations, tariff handling, and invoice generation.",
      [
        "Consumer and usage management",
        "Tariff-based bill calculation",
        "Desktop user interface",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/Electricity_Billing_System",
  },
  {
    id: 18,
    title: "SnackIt",
    categories: ["Web App"],
    tags: ["TypeScript", "E-commerce"],
    desc: "A TypeScript snack-ordering application with product browsing, cart management, and checkout flows.",
    detailedOverview: overview(
      "A responsive snack-ordering web application.",
      "SnackIt focuses on fast product discovery, cart interactions, and an accessible checkout experience across desktop and mobile screens.",
      [
        "TypeScript frontend",
        "Product catalogue and cart state",
        "Responsive ordering experience",
      ],
    ),
    github: "https://github.com/Jay-Jaiswal/SnackIt",
  },
];

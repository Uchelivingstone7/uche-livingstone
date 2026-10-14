export type ProjectScreen = {
  cover: string;
  label: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  label: string;
  summary: string;
  cover: string;
  tags: string[];
  design: string[];
  development: string[];
  role: string;
  services: string[];
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  build: string;
  highlights: string[];
  screens: ProjectScreen[];
  live?: string;
  featured?: boolean;
  system: {
    typeface: string;
    colors: { name: string; value: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "geoplex",
    title: "Geoplex",
    year: "2026",
    label: "Product design · Corporate",
    summary:
      "Geoplex Drillteq is an indigenous oilfield services company. The site has to make a technical business readable: who they are, what they operate, and why a partner would trust them.",
    cover: "/images/geoplex/home.png",
    tags: ["Product design", "Corporate", "Energy", "Information architecture"],
    design: ["Information architecture", "Service structure", "Visual hierarchy", "Content design"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX", "Content structure"],
    stack: ["Figma"],
    challenge:
      "Oilfield services are dense. A visitor still needs a clear path from the company story to the work they actually buy: drilling, wireline, well construction, and partnerships.",
    approach:
      "I structured the experience around the questions a partner asks first. Who leads. What the company operates. Which services are core. Proof sits next to the claim, not in a separate archive the reader has to hunt for.",
    outcome:
      "Geoplex reads as an operating company, not a brochure. Services, leadership, and the African energy context are available without a long hunt.",
    build:
      "Product design for the public site at geoplex.com. The live pages are the reference for structure, hierarchy, and how a technical offer is introduced.",
    highlights: [
      "A first screen that states the company before the service list",
      "Core services grouped so drilling, wireline, and well work stay distinct",
      "Leadership and partnerships treated as trust, not filler",
      "A tone that stays technical without becoming a catalogue",
    ],
    screens: [
      {
        cover: "/images/geoplex/home.png",
        label: "Home",
        caption: "The first screen names the rig and the company before the service list.",
      },
      {
        cover: "/images/geoplex/lower.png",
        label: "Services",
        caption: "Core engineering services stay grouped: oilfield, well construction, FPSO, and drilling.",
      },
      {
        cover: "/images/geoplex/about.png",
        label: "Company",
        caption: "The company page carries who Geoplex is, separate from the service catalogue.",
      },
      {
        cover: "/images/geoplex/services.png",
        label: "Oilfield",
        caption: "A service page stays on one offer, with the work shown beside the explanation.",
      },
      {
        cover: "/images/geoplex/cover.png",
        label: "News",
        caption: "The home carousel opens on a rig, then a row of company news.",
      },
      {
        cover: "/images/geoplex/next.png",
        label: "Field",
        caption: "An aerial of a working site sits with the company story.",
      },
    ],
    live: "https://www.geoplex.com/",
    system: {
      typeface: "Editorial sans",
      colors: [
        { name: "Ink", value: "#12161c" },
        { name: "Paper", value: "#f4f1ea" },
        { name: "Copper", value: "#f0a45a" },
        { name: "Field", value: "#1c2430" },
        { name: "Line", value: "#d9d3c8" },
        { name: "Muted", value: "#6e675e" },
      ],
    },
  },
  {
    slug: "havara",
    title: "Havara",
    year: "2025",
    label: "Product design · Hospitality · Team",
    summary:
      "Havara is a collection of residences in Ikoyi and a beach house in Ilashe. The site has to feel like the place: quiet, specific, and easy to reserve. Team project.",
    cover: "/images/havara/stay.png",
    tags: ["Product design", "Hospitality", "Brand", "Lagos"],
    design: ["Art direction", "Page narrative", "Enquiry flow", "Photography layout"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX/UI", "Content structure"],
    stack: ["Figma"],
    challenge:
      "A residence sells an atmosphere. The page still has to answer practical questions: what the house is, where it sits, and how to take the next step.",
    approach:
      "I kept the story visual and the actions few. The house leads. Practical details sit close enough that a guest does not have to leave the mood to find them.",
    outcome:
      "Havara presents as a place first and a listing second. The enquiry is part of the page, not an afterthought.",
    build:
      "Product design for the public site at havara.com. Layout, pacing, and the path from the first image to an enquiry.",
    highlights: [
      "Ikoyi residences and the Ilashe beach house stay in one story",
      "Photography carries the hierarchy",
      "Enquiry stays available without breaking the page",
      "The tone stays quiet, in line with a private house",
    ],
    screens: [
      {
        cover: "/images/havara/stay.png",
        label: "Home",
        caption: "The home page opens on a residence in Ikoyi and the beach house in Ilashe.",
      },
      {
        cover: "/images/havara/residences.png",
        label: "Residences",
        caption: "The residences page steps into the Ikoyi homes, one interior at a time.",
      },
      {
        cover: "/images/havara/beach.png",
        label: "Beach house",
        caption: "The beach house has its own page, so Ilashe is not folded into the city stays.",
      },
      {
        cover: "/images/havara/contact.png",
        label: "Contact",
        caption: "The enquiry sits on a page that still looks like the house, not a form on a blank sheet.",
      },
      {
        cover: "/images/havara/next.png",
        label: "Welcome",
        caption: "The welcome names the Ikoyi residences and the Ilashe beach house together.",
      },
      {
        cover: "/images/havara/gallery.png",
        label: "Houses",
        caption: "Each house is named, with its neighbourhood and how many rooms it has.",
      },
    ],
    live: "https://www.havara.com/",
    system: {
      typeface: "Editorial serif",
      colors: [
        { name: "Sand", value: "#e7dcc8" },
        { name: "Ink", value: "#1a1612" },
        { name: "Sea", value: "#1e4d5a" },
        { name: "Shell", value: "#f7f1e6" },
        { name: "Copper", value: "#c4844a" },
        { name: "Line", value: "#ddd4c4" },
      ],
    },
  },
  {
    slug: "conviso",
    title: "Conviso",
    year: "2025",
    label: "Product design · SaaS",
    summary:
      "Conviso is a behavioural messaging product. Teams use it to turn signups into paying customers with email, WhatsApp, and push, without a stack of separate tools.",
    cover: "/images/conviso/home.png",
    tags: ["Product design", "SaaS", "Messaging", "Growth"],
    design: ["Product narrative", "Interface hierarchy", "Journey explanation", "Marketing site"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX", "Interface design"],
    stack: ["Figma"],
    challenge:
      "The product watches behaviour and sends the next message. That loop is easy to over-explain. A growth team still needs to see what they set up, what fires, and what they learn.",
    approach:
      "I framed the product as one loop: define the moment, let the trigger fire, then read what worked. Channels (email, WhatsApp, push) sit inside that loop instead of as a feature list.",
    outcome:
      "Conviso’s site explains a technical product in the order a team would use it, from the promise to the workflow to the proof.",
    build:
      "Product design for the public product at conviso.ai. The page structure follows the automation loop the product actually runs.",
    highlights: [
      "One loop: define, trigger, learn",
      "Email, WhatsApp, and push shown as channels inside the product, not three products",
      "The first screen states the outcome: signups that become customers",
      "Proof and pricing sit after the workflow is clear",
    ],
    screens: [
      {
        cover: "/images/conviso/home.png",
        label: "Home",
        caption: "The first screen states the outcome, then shows the path from a quiet user back into the journey.",
      },
      {
        cover: "/images/conviso/loop.png",
        label: "How it works",
        caption: "The loop is three steps: define the moment, let the trigger fire, then read what worked.",
      },
      {
        cover: "/images/conviso/channels.png",
        label: "Channels",
        caption: "Email, WhatsApp, SMS, and push sit as channels around one product, not as separate tools.",
      },
      {
        cover: "/images/conviso/product.png",
        label: "Product",
        caption: "Further down, the workspace is on the page: people, segments, campaigns, and messages sent.",
      },
      {
        cover: "/images/conviso/cover.png",
        label: "Promise",
        caption: "A darker first screen states the promise: engagement that brings people back.",
      },
      {
        cover: "/images/conviso/next.png",
        label: "Rules",
        caption: "How it works starts with the rule a team sets, then the trigger.",
      },
    ],
    live: "https://conviso.ai/",
    system: {
      typeface: "Geometric sans",
      colors: [
        { name: "Ink", value: "#0e1116" },
        { name: "Paper", value: "#f6f3ee" },
        { name: "Signal", value: "#f0a45a" },
        { name: "Blue", value: "#1d4e89" },
        { name: "Field", value: "#171b22" },
        { name: "Line", value: "#e4ddd2" },
      ],
    },
  },
  {
    slug: "okeyson",
    title: "Okeyson",
    year: "2025",
    label: "Product design · Transport",
    summary:
      "Okeyson Transports is a Nigerian bus and logistics service. The site has to make booking a seat, sending a shipment, and finding a terminal feel straightforward.",
    cover: "/images/okeyson/cover.png",
    tags: ["Product design", "Transport", "Booking", "Lagos"],
    design: ["Booking flow", "Information architecture", "Interface design", "Content structure"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX", "Interface design"],
    stack: ["Figma"],
    challenge:
      "A traveller arrives with a route in mind. The page still has to carry the company, the terminals, and three jobs: book a seat, ship a package, or manage a booking.",
    approach:
      "I put the booking on the first screen, with shipment and check-in beside it. Terminals and the app sit further down, so the next step is visible without a second hunt.",
    outcome:
      "The public site reads as a booking service. A visitor can start a trip, find a terminal, or read the company without leaving the product.",
    build:
      "Product design for the public site at okeysontransports.com. The live pages are the reference for the booking, the terminals, and the company story.",
    highlights: [
      "Booking, shipment, and check-in sit on the first screen",
      "Terminals are findable from the home page and from their own page",
      "The app is shown as the same trip, not a separate product",
      "About states the company: interstate transport and logistics in Nigeria",
    ],
    screens: [
      {
        cover: "/images/okeyson/cover.png",
        label: "Booking",
        caption: "The home page opens on the trip: one way or round trip, terminal, date, and passengers.",
      },
      {
        cover: "/images/okeyson/routes.png",
        label: "App",
        caption: "Further down, the phone shows the same booking, next to what passengers say and where the terminals are.",
      },
      {
        cover: "/images/okeyson/terminals.png",
        label: "Terminals",
        caption: "Each terminal has a place, a phone number, and a map, starting with Lagos.",
      },
      {
        cover: "/images/okeyson/about.png",
        label: "About",
        caption: "The company page names the work: interstate transport, logistics, and charter services.",
      },
      {
        cover: "/images/okeyson/contact.png",
        label: "Contact",
        caption: "The contact page offers a chat, a call, and the company details.",
      },
      {
        cover: "/images/okeyson/fleet.png",
        label: "Notes",
        caption: "Passenger notes from routes such as Lagos to Enugu sit on the home page, under the booking.",
      },
    ],
    live: "https://www.okeysontransports.com/en/home",
    system: {
      typeface: "Humanist sans",
      colors: [
        { name: "Ink", value: "#0f172a" },
        { name: "Paper", value: "#ffffff" },
        { name: "Blue", value: "#1d4ed8" },
        { name: "Field", value: "#eef2ff" },
        { name: "Mist", value: "#f3f4f8" },
        { name: "Line", value: "#e5e7eb" },
      ],
    },
  },
  {
    slug: "genflow",
    title: "Genflow",
    year: "2026",
    label: "Product design · AI · Team",
    summary:
      "Genflow is an early-access product for creative teams. It turns Google’s generative models into repeatable workflows a team can run without setting each one up from scratch. Team project.",
    cover: "/images/genflow/cover.png",
    tags: ["Product design", "AI", "Workflow", "Creative"],
    design: ["Product narrative", "Interface hierarchy", "Workflow explanation", "Marketing site"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX", "Interface design"],
    stack: ["Figma"],
    challenge:
      "The models are powerful and easy to scatter. A team still needs one place to define a workflow, run it, and keep the files.",
    approach:
      "I led with the job, not the model list. Use cases explain what a workflow is for. The steps separate who designs it from who runs it. The playground shows the product itself.",
    outcome:
      "Genflow reads as a team tool. The path runs from the promise, through the workflows, to a request for early access.",
    build:
      "Product design for the public site at usegenflow.io. The page introduces the workflows and shows the playground a team would actually use.",
    highlights: [
      "The first screen names the job: creative workflows in one place",
      "Use cases stay specific: image and video, short-form, brand checks, translation",
      "Setup and execution are split so someone who is not an engineer can run a workflow",
      "The playground is the product, not a diagram of it",
    ],
    screens: [
      {
        cover: "/images/genflow/cover.png",
        label: "Home",
        caption: "The home page states the product: repeatable creative workflows on Google’s generative models.",
      },
      {
        cover: "/images/genflow/workflows.png",
        label: "Use cases",
        caption: "Workflows are named by the job: text to image and video, short-form, and brand checks.",
      },
      {
        cover: "/images/genflow/steps.png",
        label: "How it works",
        caption: "One person designs the workflow. The rest of the team runs it and collects the files.",
      },
      {
        cover: "/images/genflow/access.png",
        label: "Playground",
        caption: "The playground is on the page: aspect ratio, prompt, and the images a run produces.",
      },
      {
        cover: "/images/genflow/playground.png",
        label: "Handoff",
        caption: "The page splits the job: design the workflow, the team runs it, then the files are there.",
      },
      {
        cover: "/images/genflow/early.png",
        label: "Early access",
        caption: "A team requests access with the company, the size of the work, and the use case.",
      },
    ],
    live: "https://usegenflow.io/",
    system: {
      typeface: "Geometric sans",
      colors: [
        { name: "Ink", value: "#050505" },
        { name: "Paper", value: "#ffffff" },
        { name: "Blue", value: "#2f6bff" },
        { name: "Field", value: "#141414" },
        { name: "Line", value: "#2a2a2a" },
        { name: "Muted", value: "#a1a1aa" },
      ],
    },
  },
  {
    slug: "parentyn",
    title: "Parentyn",
    year: "2025",
    label: "Product design · Team",
    summary:
      "Parentyn helps a parent follow school updates and a child's digital activity from one product. Team project.",
    cover: "/images/parentyn/home.png",
    tags: ["Product design", "Parenting", "Education", "Team"],
    design: ["Product narrative", "Information architecture", "Interface hierarchy", "Content structure"],
    development: [],
    role: "Product Designer",
    services: ["Product design", "UX", "Content structure"],
    stack: ["Figma"],
    challenge:
      "A parent is asked to watch two things at once: what a child does online, and what is happening at school. Those used to live in different places.",
    approach:
      "I kept both jobs in one product story. Monitoring and school updates sit as sibling offers, and the first screen says what the parent can do before the feature list.",
    outcome:
      "Parentyn reads as one place for a parent. School news and digital activity are available without treating them as two products.",
    build:
      "Product design for the public site at parentyn.com. The live pages introduce monitoring, school connection, and how a parent gets in touch.",
    highlights: [
      "The first screen states the job: stay informed, and stay in control",
      "Monitoring and school updates are sibling offers, not a single mixed page",
      "Safety is explained in plain language a parent can scan",
      "Contact stays short: support, a phone line, and a form",
    ],
    screens: [
      {
        cover: "/images/parentyn/home.png",
        label: "Home",
        caption: "The first screen says stay informed and stay in control, with a path to sign up.",
      },
      {
        cover: "/images/parentyn/products.png",
        label: "Safety",
        caption: "Further down, the page turns to a child's digital safety.",
      },
      {
        cover: "/images/parentyn/about.png",
        label: "About",
        caption: "The about page introduces the product as a place for parents and schools.",
      },
      {
        cover: "/images/parentyn/monitoring.png",
        label: "Monitoring",
        caption: "Monitoring is its own offer: watch activity, then guide what happens next.",
      },
      {
        cover: "/images/parentyn/education.png",
        label: "Education",
        caption: "School updates sit beside the monitoring, so a parent can follow the classroom too.",
      },
      {
        cover: "/images/parentyn/contact.png",
        label: "Contact",
        caption: "The contact page lists support, a phone line, and a short form.",
      },
    ],
    live: "https://www.parentyn.com/",
    system: {
      typeface: "Humanist sans",
      colors: [
        { name: "Ink", value: "#1c2430" },
        { name: "Paper", value: "#f6f1ea" },
        { name: "Violet", value: "#5b4bdb" },
        { name: "Orange", value: "#f97316" },
        { name: "Field", value: "#efeae3" },
        { name: "Line", value: "#e4ddd4" },
      ],
    },
  },
];

projects.sort((a, b) => Number(b.year) - Number(a.year));

export const featuredProjects = projects.filter((project) => project.featured !== false);

export const navProjects = projects.filter((project) => project.featured !== false);

export const fillsFrame = (_slug: string) => false;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
};

export const getOtherProjects = (slug: string, count = 3) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return [];
  const others: (typeof projects)[number][] = [];
  for (let step = 1; step < projects.length && others.length < count; step += 1) {
    others.push(projects[(index + step) % projects.length]);
  }
  return others;
};

export const projectNumber = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return String(index + 1).padStart(2, "0");
};

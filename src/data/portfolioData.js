export const portfolioData = {
  personal: {
    name: "Nitesh Seni",
    handle: "Nitz",
    githubUsername: "Pr1meGG",
    role: "AI Systems & Software Engineer",
    title: "Architecting AI Agents, Deterministic Pipelines & Production Software",
    status: "Open for AI / Software Engineering Roles",
    location: "Visakhapatnam, India",
    timezone: "IST (UTC+5:30) · Open to Remote & Relocation",
    email: "nseni3412@gmail.com",
    tagline: "I build AI-native systems with human engineering judgment — zero slop, deterministic verification, and clean architecture.",
    bio: [
      "B.Tech in CS (AI/ML) graduate (2026). Focused on AI agent orchestration, deterministic tool harnesses, and production backend services.",
      "Firm believer in deterministic reliability: LLMs excel at synthesis, but production systems require hard code guardrails, AST syntax trees, and strict error recovery."
    ],
    avatarEmoji: "⚡",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/Pr1meGG", icon: "Github", handle: "@Pr1meGG" },
    { name: "LinkedIn", url: "https://linkedin.com/in/niteshseni", icon: "Linkedin", handle: "Nitesh Seni" },
    { name: "Twitter / X", url: "https://x.com/niteshseni", icon: "Twitter", handle: "@niteshseni" },
    { name: "Email", url: "mailto:nseni3412@gmail.com", icon: "Mail", handle: "nseni3412@gmail.com" },
  ],

  stats: [
    { label: "Verified Projects", value: "4", color: "lime" },
    { label: "Core Specialty", value: "AI Systems", color: "pink" },
    { label: "Engineering Standard", value: "Anti-Slop", color: "cyan" },
    { label: "Graduated · B.Tech AI/ML", value: "2026", color: "yellow" },
  ],

  hiringPillars: [
    {
      title: "AI Agent Orchestration",
      subtitle: "Beyond Basic Chatbots",
      desc: "Designing agentic workflows with strict tool-calling contracts, structured schema validation, and deterministic fallback paths.",
      color: "lime",
      icon: "Cpu",
    },
    {
      title: "Deterministic Reliability",
      subtitle: "Code Over Hallucinations",
      desc: "Grounding LLMs with static AST analysis, regex guards, and deterministic data filters before model inference to constrain and verify AI output.",
      color: "pink",
      icon: "ShieldCheck",
    },
    {
      title: "Production Speed & Clean Code",
      subtitle: "Rapid Delivery, Zero Slop",
      desc: "Shipping tested endpoints, structured logging, typed Python/TypeScript, and accessible UIs at startup speed without cutting engineering corners.",
      color: "cyan",
      icon: "Zap",
    },
    {
      title: "Full-Stack Ownership",
      subtitle: "From Ingestion to UI",
      desc: "Comfortable across the entire stack: Python backends (FastAPI/Flask), CSV/JSON data models, data ingestion pipelines, and modern React interfaces.",
      color: "yellow",
      icon: "Layers",
    },
  ],

  projects: [
    {
      id: "acqr",
      title: "ACQR",
      badge: "LIVE DEMO · FLAGSHIP",
      badgeColor: "pink",
      tagline: "Quiet Python Tutor & AST-Guided Code Reviewer",
      description: "An interactive Python code mentor and AST validator. Parses code with Python's native ast module before execution, surfaces syntax and logic errors in plain language, and offers AST-validated auto-fixes — no LLM-generated patches.",
      highlight: "AST parser gate + heuristic repair engine + bi-directional Monaco editor + Xterm.js terminal",
      tech: ["React 19", "FastAPI", "Python AST", "Monaco Editor", "Xterm.js", "WebSockets"],
      githubUrl: "https://github.com/Pr1meGG/acqr",
      liveUrl: "https://acqr-kappa.vercel.app/",
      featured: true,
      accentColor: "border-cyber-pink",
      verified: true,
      architecture: {
        problem: "Beginners get overwhelmed by cryptic compiler errors, and AI tools often write complete code without explaining why.",
        solution: "Deterministic AST analysis: Python's native ast module parses code without running it, identifies exact syntactic violations, and a heuristic repair engine proposes validated fixes. Every patch is re-validated in an isolated subprocess before being offered.",
        pipeline: [
          { step: "01", name: "Client Code Stream", desc: "User inputs Python source in the Monaco Editor; dispatched to FastAPI via WebSockets." },
          { step: "02", name: "AST Parser Gate", desc: "Python's native ast module parses code without execution, detecting SyntaxError, IndentationError, and node-tree violations." },
          { step: "03", name: "Heuristic Repair Engine", desc: "Multi-pass regex rules propose safe line repairs, each validated in an isolated subprocess AST check before showing." },
          { step: "04", name: "Pedagogical Lessons", desc: "Streams educational diagnostic cards, analogies, and interactive terminal execution." }
        ],
        tradeoffs: "Deterministic AST analysis avoids LLM-based error diagnosis entirely, giving instant sub-20ms feedback.",
      },
    },
    {
      id: "ironfit",
      title: "IronFit",
      badge: "RETENTION SYSTEM",
      badgeColor: "cyan",
      tagline: "Gym Member-Retention & Attendance Dashboard",
      description: "Member-retention and QR attendance dashboard for single-gym owners. Combines check-in tracking, an inactive-member Red List with follow-up outcomes, and membership expiry alerts in a mobile-first layout.",
      highlight: "Red List retention queue + QR check-in validation + mobile-first owner dashboard",
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack"],
      githubUrl: "https://github.com/Pr1meGG/ironfit-dash",
      liveUrl: "#",
      featured: false,
      accentColor: "border-cyber-cyan",
      verified: true,
      architecture: {
        problem: "Solo gym owners lose track of churning members when attendance lives in spreadsheets and no one follows up on inactive sign-ups.",
        solution: "Four-screen owner dashboard: today's stats, a Red List follow-up queue for members inactive past a configurable threshold, per-member history, and a QR check-in screen.",
        pipeline: [
          { step: "01", name: "QR Check-In", desc: "Scan or enter a member ID; validates active membership and rejects duplicates with instant visual feedback." },
          { step: "02", name: "Inactivity Detection", desc: "Flags members with no check-in beyond the configured trigger days onto the Red List." },
          { step: "03", name: "Follow-Up Loop", desc: "Call button with outcome tracking (will return / injured / travelling / no response / cancelled) closes the retention loop." }
        ],
        tradeoffs: "CSV-backed data model keeps the app backend-free; retention logic is computed client-side from linked attendance and membership tables.",
      },
    },
    {
      id: "sekeron",
      title: "Sekeron",
      badge: "CLI PIPELINE",
      badgeColor: "lime",
      tagline: "Deterministic Recommendation Pipeline",
      description: "Evidence-led CLI pipeline that builds per-artist capability intelligence from profile claims and portfolio media, then produces explainable recommendations for sparse hirer briefs — entirely rule-based.",
      highlight: "Staged deterministic CLI (ingest → evidence → intelligence → recommend → validate) with zero LLM/VLM inference",
      tech: ["Python", "CLI Pipeline", "PyYAML", "python-docx", "Pillow"],
      githubUrl: "https://github.com/Pr1meGG/sekeron",
      liveUrl: "#",
      featured: false,
      accentColor: "border-cyber-lime",
      verified: true,
      architecture: {
        problem: "Matching sparse hirer briefs against artist capability claims demands explainable, reproducible recommendations — not black-box inference.",
        solution: "Staged rule-based CLI: ingests profile documents (docx) and portfolio media with SHA-256 evidence dedup, builds per-artist intelligence, and emits explainable recommendation JSON.",
        pipeline: [
          { step: "01", name: "Evidence Ingest", desc: "Parses artist profiles and media files with validation and SHA-256 dedup hashes." },
          { step: "02", name: "Intelligence Build", desc: "Assembles per-artist capability intelligence from claims using deterministic rules." },
          { step: "03", name: "Recommend & Validate", desc: "Matches hirer briefs against intelligence and emits explainable recommendation outputs for audit." }
        ],
        tradeoffs: "Excluded LLM/VLM inference entirely so every output is deterministic and reproducible at zero API cost.",
      },
    },
    {
      id: "mgnrega",
      title: "Hamari Awaaz (MGNREGA)",
      badge: "CIVIC TECH",
      badgeColor: "pink",
      tagline: "Civic Data Dashboard for Low-Literacy Users",
      description: "Dockerized Flask dashboard using Rajasthan MGNREGA employment data, structured for accessible visualization and transparent public wage tracking.",
      highlight: "Containerized civic data visualization with high-contrast, low-literacy-friendly UI",
      tech: ["Python", "Flask", "Docker", "Pandas", "Tailwind CSS"],
      githubUrl: "https://github.com/Pr1meGG/hamari-awaaz-mgnrega-rajasthan",
      liveUrl: "#",
      featured: false,
      accentColor: "border-cyber-pink",
      verified: true,
      architecture: {
        problem: "Rural workers struggle to verify wage disbursements and employment days due to inaccessible government portal formats.",
        solution: "High-contrast visual dashboard transforming government tabular reports into color-coded summaries with geolocation-based district highlighting.",
        pipeline: [
          { step: "01", name: "Data Ingestion", desc: "Loads a cached Rajasthan MGNREGA dataset, decoupled from unreliable live government APIs." },
          { step: "02", name: "Normalization", desc: "Aggregates district-wise employment and wage records with Pandas." },
          { step: "03", name: "Accessible UI", desc: "Renders large-font, high-contrast, color-coded views designed for low-literacy beneficiaries." }
        ],
        tradeoffs: "Containerized with Docker for turnkey deployment on low-spec server environments.",
      },
    },
  ],

  skills: [
    {
      category: "AI & Agentic Systems",
      color: "lime",
      items: [
        "Deterministic Guardrails",
        "Structured Schema Validation",
        "Rule-Based Recommendations",
        "Evidence-Led Scoring",
        "AST-Gated Code Analysis",
      ],
    },
    {
      category: "Backend & Systems",
      color: "pink",
      items: [
        "Python 3 (CLI & Services)",
        "FastAPI & Flask",
        "WebSockets",
        "AST Static Code Analysis",
        "CSV / JSON Data Models",
        "Git & Docker",
      ],
    },
    {
      category: "Frontend & UI Craft",
      color: "cyan",
      items: [
        "React 18/19 & TypeScript",
        "Tailwind CSS v3/v4",
        "Vite Build System",
        "Framer Motion",
        "Monaco Editor & Xterm.js",
        "Responsive Neo-Brutalist UI",
      ],
    },
    {
      category: "Engineering Principles",
      color: "yellow",
      items: [
        "Anti-Slop Doctrine",
        "Hallucination Grounding",
        "Structured Logging",
        "Failure Mode Hardening",
        "Rapid Prototyping",
      ],
    },
  ],

  philosophy: {
    heading: "The AI-Native Builder Philosophy",
    quote: "AI multiplies development speed; human engineering judgment guarantees production reliability.",
    points: [
      {
        title: "Deterministic First",
        desc: "Never use an LLM for what an AST parser, regex, or SQL query solves with 100% certainty. Ground AI in hard code.",
      },
      {
        title: "Zero Slop Standard",
        desc: "No placeholder copy, no silent try/except passes, no generic boilerplate. Every line carries intentional architecture.",
      },
      {
        title: "Fast Iteration + Strict Verification",
        desc: "Architect upfront, accelerate implementation with AI harnesses, and pass rigorous multi-gate verification before shipping.",
      },
    ],
  },
};

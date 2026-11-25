// Single source of truth for all site content.
// Edit text, links, projects and testimonials here; components only render this data.
// Sources: Hammad's LaTeX CV (OldSiteandData/Sections/*.tex) and the previous portfolio site.

export const LINKS = {
  email: 'mailto:hammad.compsci@gmail.com',
  phone: 'tel:+923143092165',
  linkedin: 'https://www.linkedin.com/in/muhammad-hammad-bashir-6aaab7178/',
  github: 'https://github.com/MuhammadHammadBashir',
  upwork: 'https://www.upwork.com/freelancers/hammad535',
  fiverr: 'https://www.fiverr.com/mumtaz535/',
  introVideo: 'https://youtu.be/B_lfihy0Be0',
  cv: '/Muhammad_Hammad_Bashir_CV.pdf',
} as const;

export const PROFILE = {
  name: 'Muhammad Hammad Bashir',
  shortName: 'Hammad Bashir',
  logo: 'HAMMAD',
  title: 'Machine Learning Engineer',
  location: 'Punjab, Pakistan',
  email: 'hammad.compsci@gmail.com',
  phoneDisplay: '+92 314 3092165',
};

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#reviews' },
];

export const HERO = {
  eyebrow: 'Computer Vision / Generative AI / ML Engineering',
  titleStart: 'AI systems that',
  titleAccent: 'see, reason & ship',
  lead: 'Machine Learning Engineer with 5+ years of experience turning computer vision, generative AI and LLM research into fast, production-grade systems.',
  primaryCta: { label: 'View my work', href: '#work' },
  secondaryCta: { label: 'Download CV', href: LINKS.cv },
  trustedLabel: 'Worked with',
  trusted: ['SPORTUNITY', 'CREATIVESCORE', 'LUMS', 'DOCTOR AI'],
  image: { src: '/images/hammad-portrait.webp', alt: 'Portrait of Muhammad Hammad Bashir', width: 863, height: 1024 },
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: '30+', label: 'Production projects' },
    { value: '4', label: 'Global teams' },
    { value: '96%', label: 'Ball-tracking accuracy' },
  ],
};

export type Project = {
  title: string;
  tag: string;
  role: string;
  body: string;
  stack: string[];
  image: string;
  video?: string;
  link?: string;
  github?: string;
};

export const WORK = {
  title: 'Selected work, built for production',
  lead: 'Real-time vision systems, multimodal AI and LLM platforms, shipped for clients in sports, healthcare, marketing and enterprise.',
  linkLabel: 'See all on GitHub',
  linkHref: LINKS.github,
};

export const PROJECTS: Project[] = [
  {
    title: 'Real-Time Multi-Camera Sports Vision System',
    tag: 'Sports AI · Production',
    role: 'Computer Vision Engineer',
    image: '/images/sports-vision-poster.webp',
    video: '/media/sports-vision.mp4',
    body: 'Real-time sports computer vision system on live HIKvision RTSP feeds that detects, tracks and analyses players, balls and game events.\nYOLOv8m + ByteTrack + TrackNet for low-latency detection and tracking, optimised with ONNX and TensorRT.\nCustom algorithms handle ball interpolation, bounce detection, speed, angle and acceleration estimation, polygon-based goal validation and net movement analysis.\nMulti-camera synchronisation enables accurate event logging, player identification and automatic highlight generation: an AI coach for match analysis.',
    stack: ['YOLOv8', 'ByteTrack', 'TrackNet', 'MediaPipe', 'ONNX', 'TensorRT'],
  },
  {
    title: 'Soopa.ai: AI Tennis Analytics from a Single iPhone Feed',
    tag: 'Sports AI · Tennis',
    role: 'Computer Vision Engineer',
    image: '/images/soopa-tennis-poster.webp',
    video: '/media/soopa-tennis.mp4',
    body: 'AI tennis analytics platform for amateur and semi-pro matches, producing match intelligence from a single consumer iPhone feed (1280×720, static camera) with no multi-camera stadium rig required.\nCourt calibration moved from a manual 14-point homography to a hybrid AI-assisted 20-keypoint layout, refined by human operators for geometric consistency.\nPlayer tracking uses a custom YOLOv8m trained on 4,500 annotated images, reaching over 90% precision with strong temporal stability.\nBall tracking runs on TrackNetV5 with Motion Direction Decoupling and a spatio-temporal refinement transformer head: F1 0.9859 on the TrackNetV2 benchmark and about 96% accuracy at 45 FPS on real amateur footage.\nEvent analytics cover release points, bounce localisation, stroke classification and 3D uplift for true ball speed, flight arcs and net clearance, with JSON/CSV telemetry export.',
    stack: ['TrackNetV5', 'YOLOv8m', 'Transformers', '3D Uplift', '45 FPS'],
  },
  {
    title: 'Atlas Knowledge Assistant',
    tag: 'AI Engineering · Production',
    role: 'AI / Machine Learning Engineer',
    image: '/images/atlas.webp',
    body: 'Production-grade AI knowledge assistant that turns internal SOPs, runbooks and technical documentation into a searchable, auditable knowledge system.\nTrigger → Retrieve → Reason → Respond architecture with specialised knowledge and task agents, local retrieval and Claude/OpenAI model routing.\nClickUp automation retrieves tasks, resolves linked SOPs, posts grounded comments and updates task status automatically.\nConfidence-based escalation, citation-backed responses, token and cost tracking, and three-tier model routing balance accuracy and inference cost.\nMCP-native architecture with a Streamlit interface for Q&A, knowledge-base search, ClickUp workflows and usage analytics.',
    stack: ['RAG', 'Multi-Agent AI', 'MCP', 'ClickUp', 'Streamlit', 'Python'],
    github: 'https://github.com/MuhammadHammadBashir/Atlas_Research_assistant',
  },
  {
    title: 'AI Receptionist: Voice-Powered Appointments',
    tag: 'Voice AI · Production',
    role: 'AI Engineer',
    image: '/images/ai-receptionist.webp',
    body: 'Production-ready AI voice receptionist for hospital appointment management: patients schedule, cancel and look up appointments through natural voice conversations.\nVAPI powers real-time speech-to-text, LLM function calling and text-to-speech.\nFastAPI backend exposes scheduling, cancellation and lookup APIs on SQLite through SQLAlchemy, with Pydantic validation.\nA Streamlit dashboard lets hospital staff view schedules and manage appointments.',
    stack: ['VAPI', 'FastAPI', 'LLM Agents', 'SQLAlchemy', 'Streamlit', 'Python'],
    github: 'https://github.com/MuhammadHammadBashir/hospital-ai-receptionist',
  },
  {
    title: 'Petroleum Knowledge Assistant',
    tag: 'Generative AI · RAG',
    role: 'AI / Machine Learning Engineer',
    image: '/images/petroleum.webp',
    body: 'Enterprise AI knowledge platform for upstream, midstream and downstream oil and gas organisations to search and reason over large technical document collections.\nMulti-agent LangGraph workflow with routing, retrieval, answer generation and independent verification agents.\nRAG pipeline on PostgreSQL with pgvector embeddings for source-grounded answers.\nAutomated ingestion of PDF, DOCX, Markdown, HTML and TXT with chunking, incremental indexing and duplicate detection.\nCitation verification, confidence status, source traceability, API authentication and Docker-based deployment.',
    stack: ['RAG', 'LangGraph', 'FastAPI', 'PostgreSQL', 'pgvector', 'Next.js'],
    github: 'https://github.com/MuhammadHammadBashir/Petrolum_knowledge_assistant',
  },
  {
    title: 'AI in Neuromarketing: CreativeScore',
    tag: 'Machine Learning · Production',
    role: 'Machine Learning Engineer',
    image: '/images/creativescore.webp',
    body: 'Neuromarketing AI systems that analyse ad effectiveness with computer vision and multimodal signals (image, video, audio and text).\nAttention prediction and saliency mapping models identify high-impact visual regions in advertisements.\nEmotion recognition pipelines analyse viewer reactions with deep CNNs and transformer-based encoders.\nPix2PixHD, GAN-based augmentation and diffusion-based creative optimisation for ad generation.\nEnd-to-end FastAPI + AWS + Azure CI/CD pipelines for scalable deployment.',
    stack: ['Computer Vision', 'GANs', 'Diffusion', 'FastAPI', 'AWS', 'Azure'],
    link: 'https://www.creativescore.ai/',
  },
  {
    title: 'Movers AI: Vision-Based Automatic Quotes',
    tag: 'AI · SaaS',
    role: 'AI Engineer',
    image: '/images/movers-ai.webp',
    body: 'A no-download, AI-powered web app that guides customers room by room to capture photos.\nThe AI detects and catalogues items, calculates volume and instantly generates branded, professional moving quotes.\nHuman-in-the-loop verification keeps production accuracy high, cutting manual workload and speeding up quoting.',
    stack: ['Object Detection', 'Gemini', 'Flask', 'MySQL', 'CI/CD'],
  },
  {
    title: 'Drone & Satellite Vision Intelligence',
    tag: 'Geospatial AI',
    role: 'Remote Sensing & Registration',
    image: '/images/drone-satellite.webp',
    body: 'TMGDronity: integrating satellite and drone imagery (RGB, multispectral and hyperspectral) with DCIM maps to detect underground indicators and above-ground objects.\nGeospatial alignment with and without GCPs, pixel-to-centimetre estimates and QGIS + Python co-registration to remove offsets.\nUNet land-cover segmentation on Sentinel-2, plus YOLO-based plant counting with tracking and greenery estimation.',
    stack: ['YOLO', 'UNet', 'QGIS', 'GDAL', 'rasterio'],
    link: 'https://app.tmgdronity.com',
  },
];

export const EXPERTISE = {
  title: 'What I do',
  lead: 'End-to-end AI, from research prototype to production deployment.',
  linkLabel: 'Download my CV',
  linkHref: LINKS.cv,
  items: [
    {
      icon: 'eye',
      title: 'Computer Vision',
      body: 'Detection, tracking, pose estimation and segmentation with YOLO, OpenCV, MediaPipe, ByteTrack, SAM and CLIP.',
    },
    {
      icon: 'sports',
      title: 'Sports AI & Analytics',
      body: 'Live RTSP pipelines, multi-camera sync, player and ball tracking, event detection and automated coaching analytics.',
    },
    {
      icon: 'sparkle',
      title: 'Generative & Multimodal AI',
      body: 'Systems that understand and generate image, video, audio and text: saliency, emotion recognition, GANs and diffusion.',
    },
    {
      icon: 'brain',
      title: 'LLMs, RAG & AI Agents',
      body: 'GPT, Claude and LLaMA applications with retrieval, tool-using agents and grounded, citation-backed answers.',
    },
    {
      icon: 'flow',
      title: 'AI Automation',
      body: 'Agent workflows, voice AI and human-in-the-loop pipelines that turn manual processes into scalable automation.',
    },
    {
      icon: 'rocket',
      title: 'MLOps & Deployment',
      body: 'FastAPI, Docker, CI/CD, AWS, Azure, ONNX and TensorRT for scalable, low-latency inference in production.',
    },
  ],
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Computer Vision', items: ['YOLOv8', 'OpenCV', 'MediaPipe', 'ByteTrack', 'DeepSORT', 'TrackNet', 'SAM', 'CLIP'] },
  { group: 'Video Analytics', items: ['RTSP pipelines', 'Multi-camera sync', 'Event detection', 'Tracking systems'] },
  { group: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'CNNs', 'Transformers', 'GANs', 'Diffusion models'] },
  { group: 'LLMs & Multimodal AI', items: ['GPT', 'Claude', 'LLaMA', 'LangChain', 'RAG', 'CrewAI'] },
  { group: 'AI Agents & Automation', items: ['Multi-agent systems', 'VAPI', 'n8n', 'ClickUp automation'] },
  { group: 'MLOps', items: ['Docker', 'CI/CD', 'Azure DevOps', 'MLflow', 'DVC'] },
  { group: 'Deployment', items: ['FastAPI', 'AWS', 'Azure', 'ONNX', 'TensorRT', 'Serverless GPU'] },
  { group: 'Geospatial AI', items: ['QGIS', 'GDAL', 'rasterio', 'Satellite imagery'] },
  { group: 'Data & Backend', items: ['PostgreSQL', 'pgvector', 'SQLite', 'SQLAlchemy', 'REST APIs', 'Streamlit', 'Next.js'] },
];

export const ABOUT = {
  eyebrow: 'About me',
  title: 'Turning research into production AI',
  lead: 'I am a Data Scientist and Machine Learning Engineer specialising in end-to-end video intelligence: object detection, tracking, pose estimation and event recognition. I also build LLM-powered applications, RAG systems and AI agent workflows, with scalable MLOps and real-time inference behind them.',
  media: { video: '/media/sports-vision.mp4', poster: '/images/sports-vision-poster.webp', alt: 'Real-time player and ball tracking from Hammad\'s sports vision system' },
  thumbs: ['/images/atlas.webp', '/images/creativescore.webp', '/images/drone-satellite.webp'],
  countValue: '30+',
  countLabel: 'production AI projects delivered',
  points: ['Research to production, end to end', 'Real-time, low-latency inference', 'Clear communication with global teams'],
  cta: { label: 'Download CV', href: LINKS.cv },
};

export const EXPERIENCE = {
  eyebrow: 'Career',
  title: 'Experience',
  lead: 'Five years of building computer vision and AI systems for startups, research labs and international clients.',
  roles: [
    {
      period: 'June 2025 – Present',
      role: 'Computer Vision Engineer (Sports AI)',
      company: 'Sportunity · Sports Analytics Platform',
      points: [
        'Built a real-time sports computer vision system for soccer, tennis and volleyball using live RTSP (HIKvision) camera feeds.',
        'Implemented YOLOv8m + ByteTrack + TrackNet for player and ball detection and multi-object tracking under low-latency constraints.',
        'Developed event detection pipelines: ball bounce detection, trajectory interpolation, speed and acceleration estimation and shot classification.',
        'Designed multi-camera synchronisation for cross-angle tracking, enabling match reconstruction and highlight generation.',
        'Integrated MediaPipe pose estimation for biomechanics analysis and optimised inference with ONNX + TensorRT.',
        'Built an automated AI coaching system generating real-time analytics dashboards for coaches and athletes.',
      ],
    },
    {
      period: 'June 2023 – June 2025',
      role: 'AI Consultant (Computer Vision & Generative AI)',
      company: 'Markify / CreativeScore AI · London, UK',
      points: [
        'Developed neuromarketing AI systems analysing ad effectiveness with computer vision and multimodal signals.',
        'Built attention prediction and saliency mapping models to identify high-impact visual regions in ads.',
        'Designed emotion recognition pipelines using deep CNNs and transformer-based encoders.',
        'Implemented Pix2PixHD, GAN-based augmentation and diffusion-based creative optimisation.',
        'Built end-to-end FastAPI + AWS + Azure CI/CD pipelines and delivered the creativescore.ai platform.',
      ],
    },
    {
      period: 'Sept 2021 – June 2023',
      role: 'Research Assistant (AI & Computer Vision)',
      company: 'LUMS · AI & Big Data Centre, Pakistan',
      points: [
        'Developed ML-based livestock health monitoring using image classification and sensor data.',
        'Worked on flood and drought prediction with LSTM and RNN time-series models.',
        'Built agricultural AI for crop monitoring and yield prediction from satellite imagery.',
        'Implemented classical ML pipelines with Scikit-learn, XGBoost, Flask and SQL-based deployments.',
      ],
    },
    {
      period: 'Aug 2021 – Jul 2023',
      role: 'Computer Vision & ML Consultant',
      company: 'Freelance · Upwork & Fiverr',
      points: [
        'Delivered end-to-end ML and computer vision solutions for global clients in sports analytics, document AI and geospatial intelligence.',
      ],
    },
  ],
  education: {
    school: 'Namal University, Mianwali',
    degree: 'BSc Computer Science, specialisation in Machine Learning',
    period: '2017 – 2021',
    note: 'CGPA 3.46 / 4.0',
  },
  certifications: [
    'Deep Learning Specialization · DeepLearning.AI',
    'Machine Learning Engineering for Production (MLOps) · DeepLearning.AI',
    'Machine Learning Specialization · DeepLearning.AI & Stanford Online',
    'AWS Machine Learning Foundations · Udacity',
    'Computer Vision · Coursera',
  ],
};

export const FAQ = {
  title: 'Frequently asked questions',
  lead: 'Quick answers before we start working together.',
  items: [
    {
      q: 'What kind of AI projects do you take on?',
      a: 'Computer vision and video analytics, real-time sports AI, generative and multimodal AI, LLM applications with RAG and agents, and AI automation. I work end to end, from data and model training to deployment.',
    },
    {
      q: 'Can you take a model all the way to production?',
      a: 'Yes. I ship models behind FastAPI services with Docker, CI/CD, MLflow and DVC on AWS or Azure, and optimise inference with ONNX and TensorRT for edge and GPU deployment.',
    },
    {
      q: 'Do you work with remote and international teams?',
      a: 'Yes. I am based in Punjab, Pakistan, and have worked with a London-based AI company as well as clients worldwide through Upwork and Fiverr.',
    },
    {
      q: 'How can we start working together?',
      a: 'Send me an email with a short description of your project, or reach me on LinkedIn, Upwork or Fiverr. I will reply with questions and a suggested next step.',
    },
  ],
};

export type Testimonial = { name: string; role: string; body: string; link?: string };

export const TESTIMONIALS = {
  title: 'What clients say',
  lead: 'Recommendations from founders and team leads I have built AI systems with.',
  items: [
    {
      name: 'Garry Doel',
      role: 'Co-Founder, CreativeScore AI',
      body: 'Muhammad Hammad Bashir has been working with us for approximately three years. Throughout this time, he has consistently demonstrated exceptional expertise in Machine Learning, Computer Vision, and AI deployment.\n\nHammad successfully handled complex image and video datasets and delivered advanced AI pipelines for advertisement scoring, video emotion analysis, and intelligent recommendation systems. One of his strongest qualities is his ability to balance performance and cost, helping us significantly reduce infrastructure expenses by identifying and implementing efficient GPU solutions.\n\nI would confidently recommend Hammad for any Machine Learning, Computer Vision, or AI Engineering role.',
      link: 'https://www.linkedin.com/in/garrydoel/',
    },
    {
      name: 'Vincent',
      role: 'Founder, Sportunity',
      body: 'Muhammad Hammad Bashir played a critical role in the development of multiple sports analytics and computer vision solutions for Sportunity.\n\nHis work included player detection, player tracking, ball detection, automated match report generation, serve and volley event detection, and extensive research and experimentation to improve model performance and accuracy.\n\nI would highly recommend him for any Computer Vision, Sports Analytics, or AI Engineering project.',
      link: 'https://sportunity.com/',
    },
    {
      name: 'Dr. Azad Kabir',
      role: 'Founder, Doctor AI',
      body: 'Bashir is one of the best professionals I have worked with. He is extremely friendly, collaborative, and a true team player.\n\nHe contributed significantly to our AI healthcare initiatives, including LLM-powered disease diagnosis systems, patient fall-alert detection, and remote patient monitoring solutions. His willingness to learn new technologies and consistently deliver results made him an invaluable contributor to our team.',
      link: 'https://www.linkedin.com/in/azadkabir/',
    },
    {
      name: 'Hassan Karim',
      role: 'Vice President, Comerica Bank',
      body: 'Muhammad Hammad Bashir assisted me with a startup initiative focused on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and custom knowledge systems built on extensive datasets from the oil and gas industry.\n\nHis ability to understand complex business requirements and translate them into practical AI applications was instrumental to the project\'s success.',
      link: 'https://www.linkedin.com/in/hassankarimcissp/',
    },
    {
      name: 'Zlatica',
      role: 'Team Lead',
      body: 'We had the opportunity to work with Muhammad on the development of a comprehensive AI platform and toolset. He managed the entire lifecycle of the project, including data annotation, model training, optimization, deployment, and production support.\n\nMuhammad consistently demonstrated deep technical expertise, professionalism, and excellent communication skills.',
    },
  ] as Testimonial[],
};

export const CONTACT = {
  eyebrow: 'Have a project in mind?',
  title: "Let's build something intelligent",
  lead: 'Tell me about your idea or challenge and let\'s see how AI can move it forward.',
  primary: { label: 'Email me', href: LINKS.email },
  secondary: { label: 'Download CV', href: LINKS.cv },
  social: [
    { label: 'LinkedIn', href: LINKS.linkedin },
    { label: 'GitHub', href: LINKS.github },
    { label: 'Upwork', href: LINKS.upwork },
    { label: 'Fiverr', href: LINKS.fiverr },
  ],
};

/** URL-safe id for a project, used in `#/work/<slug>` routes. */
export const projectSlug = (project: Project) =>
  project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

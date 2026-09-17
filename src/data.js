export const profile = {
  name: 'Nitheesh Kumar\nThadikamalla',
  role: 'AI Engineer Intern @ Quiddity Software Solutions',
  tagline:
    "B.Tech CS grad building retrieval-augmented systems, computer vision pipelines, and full-stack apps — currently shipping RAG infrastructure on AWS and looking for entry-level SWE / GenAI roles.",
  tags: ['RAG & LLMs', 'Computer Vision', 'AWS Bedrock', 'Full-Stack'],
  email: 'nitheeshkumar.th@gmail.com',
  github: 'https://github.com/nitheeshkumarth-byte',
  linkedin: 'https://www.linkedin.com/in/nitheesh-kumar-thadikamalla-a397b2235/',
};

export const about = {
  paragraphs: [
    "I'm a 2024 Computer Science graduate from SRM University AP, based in Hyderabad. My work sits at the intersection of applied ML and full-stack engineering — I like taking a model or a retrieval pipeline and wiring it into something people can actually use.",
    "Right now I'm at Quiddity Software Solutions as an AI Engineer Intern, and I recently completed Java Full Stack training at J-Spiders. Recent work spans AWS Bedrock RAG systems, YOLO-based object detection, and Flask apps powered by generative AI.",
  ],
  facts: [
    { label: 'based in', value: 'Hyderabad, Telangana, IN' },
    { label: 'education', value: 'B.Tech CS, SRM University AP' },
    { label: 'grad year', value: '2024' },
    { label: 'languages', value: 'Telugu, Hindi, English' },
    { label: 'looking for', value: 'SWE / GenAI, entry-level' },
  ],
};

export const experience = [
  {
    period: 'Jul 2026 — present',
    role: 'AI Engineer Intern',
    org: 'Quiddity Software Solutions, Hyderabad',
    desc: 'Working on applied AI/LLM systems, including retrieval-augmented generation infrastructure.',
  },
  {
    period: 'May 2025 — Nov 2026',
    role: 'Java Full Stack Developer Training',
    org: 'J-Spiders, Hyderabad',
    desc: 'Structured training program covering full-stack Java development.',
  },
  {
    period: 'Apr — May 2023',
    role: 'Web Developer Intern',
    org: 'Corizo Virtual',
    desc: 'Early internship focused on web development fundamentals.',
  },
];

export const projects = [
  {
    id: 'rag',
    name: 'RAG-Based Knowledge Assistant',
    desc: 'A domain-focused RAG chat tool: point it at a set of documents and let people query them conversationally. Built on AWS Bedrock Knowledge Bases for retrieval, with a Gradio front end, containerized and deployed via App Runner.',
    stack: ['AWS Bedrock', 'OpenSearch', 'S3', 'LlamaIndex', 'Gradio', 'ECR', 'App Runner', 'Terraform'],
    links: [
      { label: 'app repo', url: 'https://github.com/nitheeshkumarth-byte/RAG-Chatbot.git' },
      { label: 'infra (terraform)', url: 'https://github.com/nitheeshkumarth-byte/terraform-aws-infrastructure.git' },
    ],
    icon: 'chat',
  },
  {
    id: 'recipe-box',
    name: 'Recipe Box',
    desc: 'An AI-powered recipe manager that uses the Google Gemini API to generate and organize recipes, with a Flask backend and a persistent SQLite store.',
    stack: ['Flask', 'SQLAlchemy', 'SQLite', 'Gemini API', 'Jinja2', 'JavaScript'],
    links: [{ label: 'repo', url: 'https://github.com/nitheeshkumarth-byte/recipe-box.git' }],
    icon: 'pot',
  },
  {
    id: 'Object-Detection',
    name: 'Object Detection Pipeline',
    desc: 'A real-time object detection system built on the YOLOv3 architecture, covering model training, inference, and evaluation on custom image data.',
    stack: ['YOLOv3', 'TensorFlow', 'Keras', 'OpenCV'],
    links: [
      { label: 'app repo', url: 'https://github.com/nitheeshkumarth-byte/Object-Detection.git' } ],
    icon: 'camera',
  },
];

// Approval gate for auto-fetched projects.
// Nothing from GitHub shows on the site just because a repo exists —
// a repo only appears once its name is added to this list, committed, and pushed.
// Metadata (description, language, topics) is then pulled live from the GitHub API,
// so you don't have to retype it here.
//
// Repos already covered above in `projects` (by matching name) are skipped automatically
// to avoid duplicate slides.
export const githubUsername = 'nitheeshkumarth-byte';
export const approvedRepos = [
  // 'some-new-repo-name',
];

export const skillGroups = [
  { title: 'languages', skills: ['Python', 'PHP', 'JavaScript', 'SQL'] },
  { title: 'frameworks & data', skills: ['Django', 'Flask', 'MySQL', 'MongoDB'] },
  {
    title: 'ai / ml',
    skills: ['LlamaIndex', 'RAG', 'Prompt Engineering', 'TensorFlow', 'Keras', 'OpenCV', 'YOLOv3'],
  },
  {
    title: 'cloud & tooling',
    skills: ['AWS Bedrock', 'S3', 'OpenSearch', 'IAM', 'ECR', 'App Runner', 'Docker', 'Git'],
  },
];

export const certifications = [
  'HackerRank — Problem Solving',
  'Introduction to Programming Using Java',
  'Prompt Design in Vertex AI',
  'Inspect Rich Documents with Gemini',
  'Multimodality and Multimodal RAG Skill Badge',
  'Introduction to Japanese Language and Culture',
];

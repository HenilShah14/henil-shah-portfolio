import {
  PersonalInfo,
  SkillItem,
  JourneyStep,
  ExploringTopic,
  FutureGoal,
  FutureProjectPlaceholder,
} from '../types';

/**
 * =======================================================================
 * HENIL SHAH - PORTFOLIO CONFIGURATION DATA
 * =======================================================================
 * You can edit all your personal information, links, skills, and goals here!
 */

export const personalInfo: PersonalInfo = {
  fullName: "Henil Shah",
  displayName: "Henil",
  title: "BTech Student",
  identity: "First-year BTech student beginning his journey in software development and technology.",
  tagline: "Exploring technology, building skills, and creating my path as a developer.",
  bio: "I'm a first-year BTech student with a growing interest in software development, artificial intelligence, and modern technology. I'm currently strengthening my programming fundamentals, exploring different technologies, and learning how ideas can be transformed into useful digital experiences.",
  
  // Contact & Social Links
  emailPlaceholder: "shahhenil140408@gmail.com",
  githubPlaceholder: "https://github.com/henilshah",
  linkedinPlaceholder: "https://linkedin.com/in/henilshah",
};

export const rotatingTitles: string[] = [
  "Developer",
  "Learner",
  "Tech Explorer",
  "Problem Solver",
];

export const aboutCards = [
  {
    number: "01",
    title: "LEARN",
    description: "Building strong programming and technical fundamentals.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    number: "02",
    title: "EXPLORE",
    description: "Exploring development, AI/ML, and emerging technologies.",
    accent: "from-cyan-500/20 to-indigo-500/10",
  },
  {
    number: "03",
    title: "GROW",
    description: "Improving through continuous learning and experimentation.",
    accent: "from-purple-500/20 to-blue-500/10",
  },
];

export const skillsData: SkillItem[] = [
  // PROGRAMMING
  {
    name: "C",
    category: "PROGRAMMING",
    status: "Fundamentals",
    iconName: "Binary",
    description: "Memory management, pointers, and computational logic foundations.",
  },
  {
    name: "C++",
    category: "PROGRAMMING",
    status: "OOP & Logic",
    iconName: "Code2",
    description: "Object-oriented programming, standard template library, and data structuring.",
  },
  {
    name: "Python",
    category: "PROGRAMMING",
    status: "Core Syntax",
    iconName: "FileCode",
    description: "Algorithmic thinking, data handling, scripting, and problem solving.",
  },
  // WEB
  {
    name: "HTML",
    category: "WEB",
    status: "Structure",
    iconName: "Globe",
    description: "Semantic web page structure, accessible layouts, and document hierarchy.",
  },
  {
    name: "JavaScript",
    category: "WEB",
    status: "Interactivity",
    iconName: "Zap",
    description: "Client-side scripting, DOM manipulation, and dynamic user interface logic.",
  },
  // TOOLS
  {
    name: "GitHub",
    category: "TOOLS",
    status: "Version Control",
    iconName: "GitBranch",
    description: "Source code management, branch workflows, and developer collaboration.",
  },
  // EXPLORING
  {
    name: "AI / ML",
    category: "EXPLORING",
    status: "Exploring",
    iconName: "Sparkles",
    description: "Beginning to explore machine learning concepts, neural patterns, and intelligent workflows.",
  },
];

export const learningJourney: JourneyStep[] = [
  {
    step: "01",
    title: "FOUNDATIONS",
    description: "Building programming fundamentals with C and C++.",
    tag: "Core Engineering",
    status: "completed",
  },
  {
    step: "02",
    title: "PYTHON",
    description: "Developing Python knowledge and problem-solving skills.",
    tag: "Logic & Scripting",
    status: "completed",
  },
  {
    step: "03",
    title: "WEB DEVELOPMENT",
    description: "Exploring HTML and JavaScript to understand modern web development.",
    tag: "Web Systems",
    status: "current",
  },
  {
    step: "04",
    title: "AI / ML",
    description: "Beginning to explore artificial intelligence and machine learning.",
    tag: "Emerging Tech",
    status: "current",
  },
  {
    step: "05",
    title: "WHAT'S NEXT",
    description: "Building real projects, strengthening problem-solving skills, and exploring new technologies.",
    tag: "Future Milestones",
    status: "upcoming",
  },
];

export const exploringTopics: ExploringTopic[] = [
  {
    title: "C++",
    category: "System Architecture",
    iconName: "Cpu",
    focus: "Low-level system understanding, memory concepts, and algorithmic efficiency.",
  },
  {
    title: "Python",
    category: "Programming & Scripts",
    iconName: "Terminal",
    focus: "Writing concise scripts, automating tasks, and exploring computational math.",
  },
  {
    title: "Web Development",
    category: "Modern Interfaces",
    iconName: "Layout",
    focus: "Building responsive layouts, clean UI components, and fluid user interactions.",
  },
  {
    title: "AI / ML",
    category: "Intelligent Systems",
    iconName: "BrainCircuit",
    focus: "Understanding foundational machine learning workflows and mathematical modeling.",
  },
  {
    title: "Technology",
    category: "Digital Architecture",
    iconName: "Layers",
    focus: "Tracking software trends, operating systems, and developer ecosystems.",
  },
  {
    title: "Problem Solving",
    category: "Algorithmic Thinking",
    iconName: "Compass",
    focus: "Practicing data structures, analytical debugging, and structured problem decomposition.",
  },
];

export const futureGoals: FutureGoal[] = [
  {
    title: "BUILD",
    highlight: "Real-world projects",
    description: "Create real-world projects that solve genuine problems and showcase practical technical abilities.",
    iconName: "Hammer",
  },
  {
    title: "LEARN",
    highlight: "CS Fundamentals",
    description: "Strengthen programming and computer science fundamentals, data structures, and software principles.",
    iconName: "BookOpen",
  },
  {
    title: "GROW",
    highlight: "Continuous Evolution",
    description: "Explore advanced technologies, contribute to developer communities, and become a better developer every single day.",
    iconName: "TrendingUp",
  },
];

/**
 * =======================================================================
 * FUTURE PROJECTS TEMPLATE
 * =======================================================================
 * When you build your first projects, simply add them to this array!
 * We keep this ready for you so you can plug in your work whenever you want.
 */
export const futureProjects: FutureProjectPlaceholder[] = [
  /* Example future project structure:
  {
    id: "project-1",
    title: "Project Name",
    description: "What the project does and the problem it solves.",
    technologies: ["C++", "Python"],
    githubUrl: "https://github.com/...",
    liveDemoUrl: "https://...",
  }
  */
];

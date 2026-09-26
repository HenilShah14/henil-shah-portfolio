export interface SkillItem {
  name: string;
  category: 'PROGRAMMING' | 'WEB' | 'TOOLS' | 'EXPLORING';
  status?: string; // e.g. "Active", "Exploring", "Core"
  iconName: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  tag: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface ExploringTopic {
  title: string;
  category: string;
  iconName: string;
  focus: string;
}

export interface FutureGoal {
  title: string;
  highlight: string;
  description: string;
  iconName: string;
}

export interface FutureProjectPlaceholder {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface PersonalInfo {
  fullName: string;
  displayName: string;
  title: string;
  identity: string;
  tagline: string;
  bio: string;
  emailPlaceholder: string;
  githubPlaceholder: string;
  linkedinPlaceholder: string;
  profilePhoto?: string;
  fallbackPhoto?: string;
}

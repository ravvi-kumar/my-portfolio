export interface SocialLink {
  platform: string;
  url: string;
  displayText?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
  tags?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
  };
  social: SocialLink[];
  projects: Project[];
}

export type IconSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type CardVariant = 'default' | 'elevated' | 'outlined';
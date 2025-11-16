import type { PortfolioData } from '$lib/types/index';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Ravi Chopra',
    title: 'Software Developer',
    description: 'Software Developer with AI-Driven Mindset',
    email: 'ravi@chopra.dev'
  },
  social: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com',
      displayText: 'Instagram'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com',
      displayText: 'Twitter'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      displayText: 'Linkedin'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Elara',
      image: 'https://picsum.photos/300',
      description: 'An innovative AI-powered project showcasing modern web technologies.'
    },
    {
      id: '2',
      title: 'Verve',
      description: 'A dynamic web application focused on user experience and performance.'
    },
    {
      id: '3',
      title: 'Zephyr',
      description: 'A lightweight, responsive design system for rapid development.'
    }
  ]
};

export const aboutText = `Ravi Chopra is a skilled software developer, specializing in modern web technologies and AI-driven solutions. Based in the tech industry, he crafts innovative digital experiences that blend cutting-edge technology with clean, efficient code.`;

export const navLinks = [
  { href: '#projects', text: 'Projects' },
  { href: '#about', text: 'About' },
  { href: '#contact', text: 'Contact' }
];
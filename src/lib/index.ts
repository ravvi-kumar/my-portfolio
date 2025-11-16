// Re-export types
export * from './types/index';

// Re-export data
export * from './data/portfolio';

// Re-export common components
export { default as Card } from './components/common/Card.svelte';
export { default as Button } from './components/common/Button.svelte';
export { default as DecorativeIcon } from './components/common/DecorativeIcon.svelte';
export { default as ArrowIcon } from './components/common/ArrowIcon.svelte';

// Re-export section components
export { default as Header } from './components/sections/header.svelte';
export { default as Intro } from './components/sections/intro.svelte';
export { default as About } from './components/sections/about.svelte';
export { default as Contact } from './components/sections/contact.svelte';
export { default as Projects } from './components/sections/projects.svelte';
export { default as Social } from './components/sections/social.svelte';
export { default as Portrait } from './components/sections/portrait.svelte';

# Portfolio Library Structure

This directory contains the organized library for the portfolio website with improved code quality and maintainability.

## Directory Structure

```
src/lib/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Card.svelte
│   │   ├── Button.svelte
│   │   ├── DecorativeIcon.svelte
│   │   └── ArrowIcon.svelte
│   └── sections/         # Page section components
│       ├── header.svelte
│       ├── intro.svelte
│       ├── about.svelte
│       ├── contact.svelte
│       ├── projects.svelte
│       ├── social.svelte
│       └── portrait.svelte
├── data/                 # Centralized data
│   └── portfolio.ts
├── styles/               # CSS organization
│   ├── tokens.css        # Design tokens
│   └── components.css    # Component utilities
├── types/                # TypeScript definitions
│   └── index.ts
├── assets/               # Static assets
│   └── favicon.svg
└── index.ts              # Barrel exports
```

## Key Improvements

### 1. **Type Safety**
- Added comprehensive TypeScript interfaces in `types/index.ts`
- Type-safe props for all components
- Proper data contracts for portfolio content

### 2. **Component Organization**
- **Common Components**: Reusable UI elements (Card, Button, Icons)
- **Section Components**: Page-specific sections
- Clear separation of concerns

### 3. **Data-Driven Architecture**
- Centralized portfolio data in `data/portfolio.ts`
- Components consume data from single source of truth
- Easy to update content without touching components

### 4. **Eliminated Code Duplication**
- Extracted duplicate SVG into reusable `DecorativeIcon.svelte`
- Created `ArrowIcon.svelte` for consistent arrow graphics
- Common styling patterns extracted to utility classes

### 5. **Improved CSS Organization**
- **Design Tokens**: Centralized design system values
- **Component Styles**: Reusable utility classes
- Better maintainability and consistency

### 6. **Fixed Naming Consistency**
- Standardized all references to "Ravi Chopra"
- Updated email, bio, and all placeholder content
- Consistent branding across components

## Usage Examples

### Using the centralized data:
```typescript
import { portfolioData } from '$lib/data/portfolio';

// Access personal info
const name = portfolioData.personal.name;
const email = portfolioData.personal.email;

// Access projects
const projects = portfolioData.projects;
```

### Using common components:
```svelte
<script>
  import { Card, Button, DecorativeIcon } from '$lib/index';
</script>

<Card variant="elevated" padding="large">
  <DecorativeIcon size="medium" opacity={0.3} />
  <Button href="/contact">Get in Touch</Button>
</Card>
```

## Component Props

### Card.svelte
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'small' | 'medium' | 'large'
- `class`: Additional CSS classes

### Button.svelte
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `href`: Optional URL (renders as <a> if provided)
- `disabled`: Boolean for disabled state

### DecorativeIcon.svelte
- `size`: 'small' | 'medium' | 'large'
- `opacity`: Number (0-1)

### ArrowIcon.svelte
- `size`: 'small' | 'medium' | 'large'
- `hover`: Boolean for hover effects

## Data Structure

The portfolio data follows this structure:

```typescript
interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
  };
  social: SocialLink[];
  projects: Project[];
}
```

## Benefits

1. **Maintainability**: Clear organization and single source of truth
2. **Scalability**: Easy to add new components or modify existing ones
3. **Type Safety**: Catch errors at development time
4. **Consistency**: Centralized design tokens and reusable components
5. **Performance**: Reduced code duplication and optimized imports
6. **Developer Experience**: Better IDE support and easier refactoring

## Next Steps

To extend this architecture:

1. Add new common components to `components/common/`
2. Create new section components in `components/sections/`
3. Extend types in `types/index.ts` as needed
4. Add new data to `data/portfolio.ts`
5. Update design tokens in `styles/tokens.css`

This structure provides a solid foundation for a scalable and maintainable portfolio website.
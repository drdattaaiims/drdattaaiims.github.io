# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach** - Inspired by Apple's design language for a futuristic, minimalist aesthetic that reflects Dr. Datta's cutting-edge work in AI and radiology.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: Deep space black (220 5% 8%)
- Surface: Dark charcoal (220 8% 12%) 
- Electric blue primary: (220 100% 60%)
- Text primary: Pure white (0 0% 100%)
- Text secondary: Light gray (220 10% 70%)

**Light Mode:**
- Background: Clean white (0 0% 98%)
- Surface: Light gray (220 5% 96%)
- Electric blue primary: (220 90% 50%)
- Text primary: Deep charcoal (220 15% 15%)
- Text secondary: Medium gray (220 8% 45%)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Accent Font**: JetBrains Mono (Google Fonts) - for technical details and code references
- **Hierarchy**: h1 (3xl), h2 (2xl), h3 (xl), body (base), small (sm)

### C. Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Micro spacing: 2, 4 (buttons, form elements)
- Component spacing: 6, 8 (card padding, gaps)
- Section spacing: 12, 16, 24 (between major sections)

### D. Component Library

**Navigation:**
- Fixed header with glassmorphism effect (backdrop-blur-lg)
- Smooth scroll navigation with active section highlighting

**Cards:**
- Subtle border with rounded corners (rounded-xl)
- Hover elevation with shadow transitions
- Glassmorphism backgrounds for featured content

**Buttons:**
- Primary: Electric blue with subtle glow effect
- Secondary: Outline style with backdrop blur when on images
- Interactive: Smooth scale transitions (hover:scale-105)

**Pills/Chips:**
- Rounded full design for skills
- Color-coded by category (AI/ML: blue, Medical: green, Research: purple)
- Hover effects with gentle color intensification

**Timeline:**
- Vertical line design with connection dots
- Cards alternate left/right on desktop
- Stacked mobile layout

### E. Visual Effects
- **Glassmorphism**: Subtle blur effects on hero elements and navigation
- **Gradients**: Electric blue to cyan gradients for accent elements
- **Hover States**: Gentle scale and glow transitions
- **Loading States**: Skeleton screens with shimmer effects
- **Micro-animations**: Fade-in on scroll, subtle pulse on CTAs

## Images
**Hero Section:**
- Professional headshot of Dr. Datta (right side of hero)
- High-quality, well-lit portrait against neutral background
- Alternative: Futuristic medical/AI visualization as background with overlay

**Institution Logos:**
- Partner logos: Ashoka University, Harvard Medical School, AIIMS Delhi, RSNA
- Grayscale by default, color on hover
- Arranged in horizontal strip at bottom of page

**Project Visuals:**
- Research diagrams or AI model visualizations for flagship projects
- Medical imaging examples (anonymized) for radiology work
- Conference presentation screenshots

## Special Considerations
- Responsive breakpoints: Mobile-first design with tablet (768px) and desktop (1024px) optimizations
- Accessibility: High contrast ratios, keyboard navigation, screen reader support
- Performance: Optimized images, lazy loading, smooth 60fps animations
- Professional tone: Clean, authoritative design befitting academic and medical expertise
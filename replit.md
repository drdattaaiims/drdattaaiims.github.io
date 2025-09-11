# Dr. Suvrankar Datta - Portfolio Website

## Overview

This is a futuristic, minimalist portfolio website for Dr. Suvrankar Datta, a Radiologist and AI researcher. The application showcases his professional journey as Faculty Fellow at Ashoka University (KCDH-A), Lead of CRASH Lab, and Visiting Researcher at Harvard Medical School (Rajpurkar Lab). The site is designed with a modern, Apple-inspired aesthetic featuring dark/light mode support and focuses on presenting his work in responsible AI, radiology research, and healthcare innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system based on Apple's design language
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Component Structure**: Single-page application with section-based navigation

### Design System
- **Theme**: Custom dark/light mode with CSS variables
- **Typography**: Inter (primary) and JetBrains Mono (accent) fonts from Google Fonts
- **Color Palette**: Electric blue primary (220 100% 60%) with deep space backgrounds for dark mode
- **Layout**: Apple-inspired minimalist design with glassmorphism effects
- **Responsive**: Mobile-first design with Tailwind breakpoints

### Data Architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User authentication schema (currently minimal, expandable for future features)
- **Storage**: In-memory storage implementation with interface for future database integration

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Hot module replacement with Vite integration
- **API Structure**: REST endpoints with `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging system

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Vite build with esbuild for server bundling
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Assets**: Static asset handling with custom alias resolution

### Content Management
- **Static Content**: Hardcoded data in React components (awards, experience, research, etc.)
- **Assets**: PDF CV and profile images served from attached_assets directory
- **Contact Forms**: Email integration using mailto links for simplicity

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component

### Database and ORM
- **Neon Database**: Serverless PostgreSQL with @neondatabase/serverless driver
- **Drizzle ORM**: Type-safe ORM with automatic schema generation
- **Drizzle Kit**: Database migration and schema management tools

### Development Tools
- **Vite**: Fast build tool with React plugin and development server
- **TypeScript**: Static type checking with strict configuration
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with cartographer and error overlay plugins

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Utilities
- **Class Variance Authority**: Utility for creating component variants
- **clsx**: Utility for constructing className strings conditionally
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator

### Authentication (Prepared)
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Express Session**: Session middleware for authentication (infrastructure ready)

The application is structured as a modern full-stack TypeScript application with a focus on developer experience, type safety, and performance. The architecture supports future expansion into dynamic content management, user authentication, and real-time features while maintaining the current static portfolio functionality.
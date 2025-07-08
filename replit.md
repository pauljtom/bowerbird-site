# Portfolio Website

## Overview

This is a full-stack portfolio website built with React and Express.js, featuring a modern design with shadcn/ui components, contact form functionality, and PostgreSQL database integration through Drizzle ORM. The application showcases a developer's work with sections for about, skills, projects, and contact information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Structure**: RESTful API with JSON responses
- **Development**: Vite for development server and hot module replacement

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contacts Table**: Contact form submissions with name, email, message, and timestamp
- **Schema Validation**: Zod schemas for runtime validation and type safety

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin endpoint)

### Frontend Pages
- **Home Page**: Complete portfolio layout with all sections
- **Navigation**: Smooth scrolling between sections
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Professional background and statistics
- **Skills Section**: Technical skills with rating system
- **Projects Section**: Portfolio showcase with project cards
- **Contact Section**: Contact form with real-time validation
- **Footer**: Social links and quick navigation

### UI Components
- Comprehensive shadcn/ui component library
- Custom components for portfolio sections
- Responsive design with mobile-first approach
- Toast notifications for user feedback
- Form validation with error handling

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Frontend validates input using Zod schema
   - POST request to `/api/contact` endpoint
   - Server validates and stores in PostgreSQL
   - Success/error feedback via toast notifications

2. **Development Workflow**:
   - Vite serves frontend with hot reload
   - Express serves API endpoints
   - Database migrations managed by Drizzle Kit
   - TypeScript compilation for type safety

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: UI component primitives
- **wouter**: Lightweight React router
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **drizzle-kit**: Database migration management
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Build Process
- `npm run build`: Creates production build using Vite and esbuild
- Frontend assets built to `dist/public`
- Backend compiled to `dist/index.js`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment flag for production/development
- **REPL_ID**: Replit-specific environment detection

### Database Management
- **Migrations**: Stored in `./migrations` directory
- **Schema**: Defined in `./shared/schema.ts`
- **Push**: `npm run db:push` applies schema changes

### Production Deployment
- Built application runs on Node.js
- Static assets served by Express
- Database connection via Neon serverless PostgreSQL
- Session management with PostgreSQL store

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
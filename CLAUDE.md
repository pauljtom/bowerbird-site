# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a full-stack TypeScript application with a React frontend and Express backend:

- **Frontend**: React 18 with Vite, TypeScript, Tailwind CSS, and shadcn/ui components
- **Backend**: Express.js server with TypeScript 
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # React components (shadcn/ui + custom)
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
├── server/                 # Express backend
│   ├── index.ts           # Main server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database connection
│   └── vite.ts            # Vite dev server integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Drizzle database schema
└── attached_assets/        # Static assets
```

### Path Aliases

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (frontend + backend)
- `npm run start` - Run production build
- `npm run check` - TypeScript type checking

### Database Commands
- `npm run db:push` - Push database schema changes to PostgreSQL

### Production Deployment
- `npm run serve` - Build and serve with static file server (requires sudo)
- `build-static.bat` - Windows batch script for building

## Key Technologies

### Frontend Stack
- **React Router**: Uses Wouter instead of React Router
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme system
- **Icons**: Lucide React and React Icons
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion and Tailwind CSS animations

### Backend Stack
- **ORM**: Drizzle with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Express sessions (configured for production)

### Development Tools
- **TypeScript**: Strict mode enabled with path mapping
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Backend bundling for production

## Database Schema

The application uses two main tables:
- `users`: User authentication (id, username, password)
- `contacts`: Contact form submissions (id, name, email, message, createdAt)

Schema definitions are in `shared/schema.ts` with Zod validation schemas.

## Environment Variables

Required for database connection:
- `DATABASE_URL`: PostgreSQL connection string

## Server Configuration

- Development: Vite dev server on port 5000
- Production: Express serves static files from `dist/public/`
- API routes: Prefixed with `/api`
- The server always runs on port 5000 (not configurable)

## Component Architecture

Uses shadcn/ui component system with:
- `components/ui/`: Base UI components (buttons, forms, etc.)
- `components/`: Feature-specific components
- Consistent theming via CSS custom properties
- Dark mode support via `next-themes`
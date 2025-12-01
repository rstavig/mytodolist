# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 todo list application built as a learning project. Stack includes Next.js, TypeScript, Prisma, PostgreSQL (Neon), ShadCN UI, and Tailwind CSS.

## Common Commands

### Development
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Database
```bash
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Run migrations in development
npx prisma studio        # Open Prisma Studio GUI
```

## Architecture

### Database Layer
- **Prisma Client**: Centralized instance at `db/prisma.ts` configured with Neon serverless adapter and Prisma Accelerate extension
- **Important**: Always import prisma from `@/db/prisma`, NOT by creating new PrismaClient instances (except in `app/page.tsx` which has a local instance for data fetching)
- **Database**: PostgreSQL hosted on Neon with connection pooling
- **Schema**: Single `Todo` model at `prisma/schema.prisma`

### Server Actions Pattern
- All data mutations use Next.js Server Actions in `app/actions/todoActions.tsx`
- Server Actions marked with `"use server"` directive
- After mutations, use `revalidatePath("/")` to trigger UI updates
- Available actions: `create`, `edit`, `deleteTodo`, `todoStatus`

### Component Structure
```
components/
  shared/          # Reusable todo components (AddTodo, EditTodo, DeleteTodo, ChangeTodo, Todo, InfoDialog)
  todos/           # Feature-specific components (todo-list.tsx)
  ui/              # ShadCN UI primitives
```

### Data Flow
1. `app/page.tsx` fetches todos via `getData()` function
2. Data passed to `<Todo>` components as props
3. User interactions trigger Server Actions via form submissions
4. Server Actions mutate database and call `revalidatePath("/")`
5. Next.js re-renders page with updated data

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Use `@/` for all imports (e.g., `@/db/prisma`, `@/components/shared/Todo`)

### Type System
- Todo type definition at `types/todoTypes.ts`
- Prisma generates types automatically in `node_modules/.prisma/client`

### Styling
- Tailwind CSS 4.0 with custom configuration
- ShadCN components using `cn()` utility from `lib/utils.ts`
- Component styling uses inline styles for dynamic states (see Todo.tsx)
# Orbital CTF

A space-themed Capture The Flag platform built with Next.js, Prisma, and Tailwind CSS.

## Features

- User authentication (individual and team registration)
- Challenge management
- Real-time scoring
- Dark theme with space-inspired design
- Mobile-responsive layout

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- SQLite (included with Prisma)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/orbital-ctf.git
cd orbital-ctf
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma migrate dev
```

4. Seed the database with initial challenges:
```bash
npm run prisma:seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/app/` - Next.js app router pages and API routes
- `src/components/` - Reusable React components
- `prisma/` - Database schema and migrations
- `public/` - Static assets

## Database Schema

The application uses the following main models:

- `User` - User accounts (individuals or team members)
- `Team` - Team information and scores
- `Challenge` - CTF challenges with points and flags
- `Submission` - User/team submissions for challenges

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.

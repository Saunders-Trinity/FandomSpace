# FandomSpace
Fandom Space is an in progress app to being people in fandoms together to share content, write media and discuss lore of their favorite people and characters.
This project is currently a work in progress.

# Front End
FrameWork - Next.js React
Launguage - TypeScript
Styling - TailWind css  + shadcn/ui
Data Fetch -  React Query
Real-time Client - socket.io-client

# BackEnd
Platform- Node.js + TypeScript
Framework- NestJS
Auth- Passport.js strategies (Local + JWT) + Bcrypt for password hashing
Real-time- @WebSocketGateway (Socket.io) for joining “space” rooms & broadcasting posts

# DataBase and ORM 
Primary DB: PostgreSQL
ORM: Prisma

# Storage and Media
Blobs (video):
AWS S3 

# DevOps & Deployment
Local Dev:Docker Compose spins up Postgres + API container
CI/CD:GitHub Actions: lint, test, build Docker image → push to registry
Hosting:Frontend → Vercel (automatic Next.js optimizations)
Backend → AWS ECS/Fargate (Docker), or DigitalOcean App Platform

# Testing & Quality
Unit & Integration:Jest on both front- and back-end
React Testing Library for components
Supertest for HTTP endpoints
Linting & Formatting:
ESLint + Prettier across full-stack

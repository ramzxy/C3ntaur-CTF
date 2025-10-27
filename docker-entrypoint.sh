#!/bin/sh
set -e

# Ensure prisma directory exists and has correct permissions
mkdir -p /app/prisma
touch /app/prisma/dev.db || true

# Run migrations
npx prisma migrate deploy

# Seed the database
npx prisma db seed || true

# Start the application
exec npm start


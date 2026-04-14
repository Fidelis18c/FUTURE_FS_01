const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// Initializing the PostgreSQL connection pool
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

// Setting up the Prisma adapter for PostgreSQL (required in Prisma 7)
const adapter = new PrismaPg(pool);

// Creating the Prisma client instance with the adapter
const prisma = new PrismaClient({ adapter });

module.exports = prisma;

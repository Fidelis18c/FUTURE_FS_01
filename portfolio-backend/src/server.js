const app = require('./app');
const prisma = require('./config/db');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit if database is not reachable
  }
});

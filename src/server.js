import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.routes.js';
import AdminRoutes from './routes/admin.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove the deprecated option
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', AdminRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

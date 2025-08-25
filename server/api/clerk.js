import connectDB from '../configs/mongoDB.js';
import { clerkWebhooks } from '../controllers/webhooks.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB();
    return clerkWebhooks(req, res);
  }
  res.status(405).json({ message: 'Method Not Allowed' });
}

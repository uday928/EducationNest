import connectDB from '../configs/mongoDB.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await connectDB();
    return res.status(200).json({ message: 'API working' });
  }
  res.status(405).json({ message: 'Method Not Allowed' });
}

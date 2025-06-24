import { NextApiRequest, NextApiResponse } from 'next';

const VALID_USER = {
  email: 'admin@example.com',
  password: '123456',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (email === VALID_USER.email && password === VALID_USER.password) {
    // Retorna token fake
    return res.status(200).json({
      token: 'fake-jwt-token-1234567890',
      user: { email },
    });
  }

  return res.status(401).json({ error: 'Invalid email or password' });
}

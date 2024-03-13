import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: '¡Hola desde Next.js API con TypeScript!' });
  } else {
    res.status(405).end(); // Método no permitido
  }
};
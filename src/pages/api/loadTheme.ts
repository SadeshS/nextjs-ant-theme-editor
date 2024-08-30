import dbConnect from '@/lib/dbConnect';
import Theme from '@/models/Theme';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  theme?: Object;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
  const { clientId } = req.query;

  await dbConnect();

  try {
    const theme = await Theme.findOne({ clientId });
    res.status(200).json({ success: true, theme: theme ? theme.theme : null });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

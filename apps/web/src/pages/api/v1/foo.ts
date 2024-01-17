import type { NextApiRequest, NextApiResponse } from 'next'

async function handler (req: NextApiRequest, res: NextApiResponse) {
  console.log('foo')
  console.error('bar')

  res.json({})
}

export default handler

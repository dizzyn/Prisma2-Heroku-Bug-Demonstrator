import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const client = new PrismaClient()

export default async function generate(req: NextApiRequest, res: NextApiResponse) {
  const apples = await client.apples.findMany({})
  res.send(`apples ${apples.length}`)
}

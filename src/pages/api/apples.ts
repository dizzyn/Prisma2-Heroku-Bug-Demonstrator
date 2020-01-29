import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const client = new PrismaClient()

export default async function generate(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.apples.create({ data: { color: 'green' } })
    const apples = await client.apples.findMany({})
    res.send(`apples ${apples.length}`)
  } catch (e) {
    res.status(500)
    console.log(e)
    res.send(e.message)
  }
}

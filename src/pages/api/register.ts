import { db } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'
import { createJWT, hashPassword } from '@/lib/auth'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, firstName, lastName } = req?.body
  if (req.method === 'POST') {
    const user = await db.user.create({
      data: {
        email,
        password: await hashPassword(password),
        firstName,
        lastName
      }
    })

    const jwt = await createJWT(user)

    res.setHeader(
      'Set-Cookie',
      serialize(process?.env?.COOKIE_NAME as string, jwt, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    )
    res.status(201)
    res.end()
  } else {
    res.status(402)
    res.end()
  }
}

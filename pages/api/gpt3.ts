// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const configuration = new Configuration({
    organization: 'org-qJ4yiDheV2dVdOSFafLuhZrT',
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)
}

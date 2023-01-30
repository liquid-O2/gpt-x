// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})
const openAI = new OpenAIApi(configuration)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { model, temperature, prompt } = req.body
    const response = await openAI.createCompletion({
      model: model.type,
      prompt,
      temperature: temperature.type,
      max_tokens: 3000,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })
    res.status(200).send({ response: response.data.choices[0].text })
  } catch (err) {
    res.status(500).send({ err })
    console.log(err)
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body // passando O Id do Produto.

  // if(!priceId) {
  //   return res.status(400).json({error: 'Price not found.'})
  // }

  // if(req.method !== 'POST') {
  //   return res.status(405).json({error: 'Method not allowed.'})
  // }

  const successUrl = `${process.env.Next_URL}/success`
  const cancelUrl = `${process.env.Next_URL}/`
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
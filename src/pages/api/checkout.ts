import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = 'price_1M4TMQDqllUhDDEz2h2XCQbh'

  const sucessUrl = `${process.env.Next_URL}/success`
  const cancelUrl = `${process.env.Next_URL}/`
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
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
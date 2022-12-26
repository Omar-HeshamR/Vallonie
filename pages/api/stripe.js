import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
        // console.log(req.body.cartItems)
    try {
      function CheckForDiscount(item){
        if(item.discountOn == true){
          return item.discount * 100;
        }else{
          return item.price * 100;
        }
      }
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },   
        shipping_options: [
          { shipping_rate: 'shr_1LmIfFFCTsAPiKxZjr9jH4Ft' },
          { shipping_rate: 'shr_1LmIdjFCTsAPiKxZcvcLlqaR' },
        ],
        line_items: req.body.cartItems.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/agepc6ts/production/').replace('-png', '.png');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: CheckForDiscount(item),
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

  //agepc6ts
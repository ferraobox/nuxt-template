import stripeLib from 'stripe'
import getAgoliaApis from '../algolia/apis'
import { rejectHitBadRequest, sendJSON } from '../helpers'

export default function () {
  const agoliaAuth = this.options.privateRuntimeConfig.algolia
  const apis = getAgoliaApis(agoliaAuth)

  const secretKey = this.options.privateRuntimeConfig.stripe.secretKey
  const stripe = stripeLib(secretKey)
  const cloudName = this.options.cloudinary.cloudName
  const cloudUrl = this.options.cloudinary.url
  const rootUrl = this.options.rootUrl

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api/stripe/create-session', createSession)
  })

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/hooks/stripe', async (req, res) => {
      const meta = req.body.data.object.metadata
      const book = { start: meta.start, end: meta.end }
      await apis.user.bookHome(meta.identity.id, meta.homeId, book)
      res.end(`${meta.identityId} booked ${meta.homeId}!!!!`)
    })
  })

  //MDW for handle stripe payment
  async function createSession(req, res) {
    const body = req.body
    if (!body || !body.homeId || !body.start || !body.end || !body.start >= body.end) {
      return rejectHitBadRequest(res)
    }

    const home = (await apis.home.get(body.homeId)).json
    const nights = (body.end - body.start) / 86400
    const session = await stripe.checkout.sessions.create({
      metadata: {
        identityId: req.identity.id,
        homeId: body.homeId,
        start: body.start,
        end: body.end,
      },
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${rootUrl}/home/${body.homeId}?result=success`,
      cancel_url: `${rootUrl}/home/${body.homeId}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'USD',
            unit_amount: home.pricePerNight * nights * 100,
            product_data: {
              name: 'Reservation for ' + home.title,
              images: [`${cloudUrl}/${cloudName}/image/upload/${home.images[0]}`],
            },
          },
        },
      ],
    })

    sendJSON({ id: session.id }, res)
  }
}

const axios = require('axios')
require('dotenv').config()
;(async (min = 10, intervalSeconds = 30) => {
  try {
    const TIMEOUT = 1000 * 60 * min
    const INTERVAL_TIME = 1000 * intervalSeconds
    const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'no-vercel-project-id'
    const VERCEL_DEPLOY_TOKEN = process.env.VERCEL_DEPLOY_TOKEN || 'no-deploy-token'
    let runTimeCounter = parseInt(TIMEOUT / INTERVAL_TIME)

    console.log(
      { TIMEOUT },
      { INTERVAL_TIME },
      { VERCEL_PROJECT_ID },
      { VERCEL_DEPLOY_TOKEN },
      { runTimeCounter }
    )

    // const deployRequest = await axios.post(
    //   `https://api.vercel.com/v1/integrations/deploy/${VERCEL_PROJECT_ID}/${VERCEL_DEPLOY_TOKEN}`
    // )

    // console.log({ deployRequest: deployRequest.data })

    const interval = await setInterval(async () => {
      if (runTimeCounter <= 10) {
        clearInterval(interval)
        console.log('Deployment timed out')
        return process.exit(1)
      }

      const deployStatus = await axios.get(
        `https://api.vercel.com/v1/integrations/deploy/${VERCEL_PROJECT_ID}/${VERCEL_DEPLOY_TOKEN}`
      )

      console.log({ deployStatus: deployStatus.data })

      if (deployStatus.data.job.state === 'success') {
        console.log('Deployment successful!!')
        clearInterval(interval)
        return process.exit(0)
      } else if (deployStatus.data.job.state === 'failed') {
        console.log(`Deployment failed - id is: ${deployStatus.data.job.id}`)
        clearInterval(interval)
        return process.exit(1)
      } else {
        console.log('Deployment in progress...')
        runTimeCounter--
      }
    }, INTERVAL_TIME)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
})()

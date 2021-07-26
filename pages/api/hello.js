// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')

export default function handler(req, res) {
  let financeUrl = `https://quizapi.io/api/v1/questions?apiKey=NO9367LnqoEXNu5hv33VZJbtftSxXPxaEcF1vxGb&limit=10&tags=HTML`
    axios.get(financeUrl)
    .then(apiRes => {
      let financeData = apiRes.data
      res.status(200).json({ financeData }) 
  })
}

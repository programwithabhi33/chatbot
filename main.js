const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const { Configuration, OpenAIApi } = require("openai");

 
// create application/json parser
let jsonParser = bodyParser.json()

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())

app.get('/',(req, res) => {
  res.send('Hello World!')
})
app.post('/getChatBot',jsonParser, async (req, res) => {
    let message = req.body.message;
  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey:Your_openai_api_key,
  });
  const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-001",
        prompt: message,
        temperature: 0.4,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data.choices[0].text);
      let send_response = response.data.choices[0].text
      res.send({send_response})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
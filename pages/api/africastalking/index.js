const credentials = {
    apiKey: process.env.AT_APIKEY,
    username:process.env.AT_USERNAME
}

const AfricasTalking = require('africastalking')(credentials)


const airtime = AfricasTalking.AIRTIME

export default function handler(req, res) {
    let options = {
        recipients: [{
            phoneNumber: "+254706757828",
            currencyCode: "KES",
            amount: 10
        }]
    };
 console.log(options)

}
  
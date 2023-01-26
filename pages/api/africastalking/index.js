const credentials = {
    apiKey: process.env.AT_APIKEY,
    username:process.env.AT_USERNAME
}

const AfricasTalking = require('africastalking')(credentials)


const airtime = AfricasTalking.AIRTIME

export default function handler(req, res) {
    if (req.method === 'POST') {
        const contact = req.body.contact
        const amount = req.body.data
        console.log(typeof contact, typeof amount)
        const options = {
            recipients: [{
                phoneNumber: contact,
                currencyCode: "KES",
                amount: amount
            }]
        };
        console.log(options)
        airtime.send(options)
        .then(response => {
            console.log("response", response);
        }).catch(error => {
            console.log("error", error);
        });
    
    }
    res.status(200).json({ data: 'success' });
}
  
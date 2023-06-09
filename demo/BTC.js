const request = require("request");
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let history_currency_rate = []
let current_currency_rate = []

// Get current BTC currency rate
function getCurencyRate(){
    request({
        url:'https://api.coindesk.com/v1/bpi/currentprice.json',
        json: true
    },(err, response, body) => {
        console.log(body)
    
        current_currency_rate = {
            "USD_rate": body.bpi.USD.rate_float,
            "GBP_rate": body.bpi.GBP.rate_float,
            "EUR_rate": body.bpi.EUR.rate_float,
        }    
        
        history_currency_rate.push(current_currency_rate)

        console.log(`current_currency_rate`)
        console.log(current_currency_rate)
        console.log(`history_currency_rate`) 
        console.log(history_currency_rate)
    })
}

// Get current BTC currency rate evey 1 min
function requestBitcoinRate(number){
    getCurencyRate()
    setInterval(() => {
        getCurencyRate()
      }, 1000*60)
}

// calculate number of BTC from input currency amount and currency type
function calBTC(currency_amount, currency_type){
    if(currency_type == 'USD'){
        currecy_rate = current_currency_rate.USD_rate
    } else if(currency_type == 'GBP') {
        currecy_rate = current_currency_rate.GBP_rate
    } else if(currency_type == 'EUR') {
        currecy_rate = current_currency_rate.EUR_rate
    }

    numberOfBTC = currency_amount/currecy_rate
    console.log(`currency_amount = ${currency_amount}`)
    console.log(`currency_type = ${currency_type}`)
    console.log(`currecy_rate = ${currecy_rate}`)
    console.log(`numberOfBTC = ${numberOfBTC}`)
}

// Get input currency type and currency amount to calculate number of BTC
setTimeout(() => {
    reader.question("Please enter currency type (USD, GBP, EUR) : ", currency_type => {
        reader.question("Please enter currency amount : ", currency_amount => {
            calBTC(parseFloat(currency_amount), currency_type)
        })
    })
  }, 1000*3)

requestBitcoinRate();
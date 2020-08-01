const rp = require('request-promise')

const url = 'https://back.bitcointoyou.com/API/price?pair=BTC_BRLC'

async function getPrice() {

  const res = await new Promise((resolve, reject) => {
    rp(url)
      .then(resolve)
      .catch(reject)
  })

  console.log('res async function', res)
  return res
}

async function getPrice2() {

  const res = new Promise((resolve, reject) => {
    rp(url)
      .then(resolve)
      .catch(reject)
  })

  console.log('res2 async function', res)
}

async function getPrice3() {
  
  const res = await rp(url)
  
  console.log('res3 async function', res)
  return res;
}


console.log('getPrice')
getPrice()

console.log('getPrice2')
const res2 = getPrice2()
console.log('res2', res2)

console.log('getPrice3')
const res = getPrice3()
console.log('res3', res)
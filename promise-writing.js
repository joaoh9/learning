const rp = require('request-promise')

const url = 'https://back.bitcointoyou.com/API/price?pair=BTC_BRLC'

const p1 = new Promise(function(resolve, reject) {
  rp(url)
  .then(resolve)
  .catch(reject)
})

let price = 'prices'

p1.then(res => {
  price = res;
})

console.log('price')
console.log(price)

const p2 = new Promise((resolve, reject) => {
  rp(url)
  .then(resolve)
  .catch(reject)
})

const p3 = new Promise((res, rej) => {
  rp(url)
  .then(res)
  .catch(rej)
})

const p4 = new Promise(function (res, rej) {
  rp(url)
  .then(res)
  .catch(rej)
})

const p5 = new Promise(function (resolve, reject) {
  rp(url)
  .then(function (answer) {
    return resolve(answer)
  })
  .catch(function (error) {
    return reject(error)
  })
})

const p6 = new Promise(function (resolve, reject) {
  rp(url)
  .then((answer) => {
    resolve(answer)
  })
  .catch(function (error) {
    return reject(error)
  })
})


const p7 = new Promise(function (resolve, reject) {
  rp(url)
  .then(function (answer) {
    resolve(answer)
  })
  .catch(function (error) {
    reject(error)
  })
})

const p8 = new Promise(function (res, rej) {
  rp(url)
  .then(answer => {
    res(answer)
  })
  .catch(rej)
})

const p9 = new Promise(function (res, rej) {
  rp(url)
  .then(answer => {
    res(answer)
  })
  .catch(error => {
    rej(error)
  })
})

const p10 = new Promise(function (res, rej) {
  rp(url)
  .then(answer => res(answer))
  .catch(error => rej(error))
})


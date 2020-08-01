const rp = require('request-promise')

const url = 'https://back.bitcointoyou.com/API/price?pair=BTC_BRLC'

async function foo1() {
  return rp(url)
}

async function foo2() {
  rp(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    })
}

console.log('calling foo2')
const resFoo2 = foo2()
console.log('res foo 2');
console.log(resFoo2);

async function foo3() {
  return new Promise((resolve, reject) => {
    rp(url)
      .then(res => {
        console.log(res);
        resolve(res)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

console.log('calling foo3');
const resFoo3 = foo3();
console.log('res foo 3');
console.log(resFoo3);
// Async Await

/**
  Notes
  - Works with promises
  -  Javascript will resolve the promise and then move 
  on to the next line. In a nutshell, we change the 
  asynchronous code to read like synchronous code while 
  still running asynchronously.
 */

function _fetch() {
  return new Promise((resolve) => {
    resolve('{ "price": 100 }');
  })
}

async function getSomethingFromPublicApi() {
  let result = await _fetch();
  console.log(result);
  console.log('Done');
}

getSomethingFromPublicApi();

console.log('Hello');

/**
 * Try catch
 */
// function _fetch2() {
//   return new Promise((resolve, reject) => {
//     reject('{ "error": "Something happened..." }');
//   })
// }

// async function getSomethingFromPublicApi2() {
//   try {
//     let result = await _fetch2();
//   } catch (e) {
//     console.log(e)
//   }
// }

// getSomethingFromPublicApi2();
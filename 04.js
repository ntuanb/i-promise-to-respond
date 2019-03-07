// Async Await

/**
  Notes
  - Works with promises
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
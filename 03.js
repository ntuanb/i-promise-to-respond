// Initial

/**
  Notes
  - Promise all waits for all even if 1 fails
  - Promises cannot be cancelled
 */

const JSON_RESPONSE_ERROR = "{ 'response': 'something happened' }";
const JSON_RESPONSE_GOOGLE = "{ 'response': 'google.com' }";
const JSON_RESPONSE_FACEBOOK = "{ 'response': 'facebook.com' }";
const JSON_RESPONSE_DISNEY = "{ 'response': 'disney.com' }";

let fetchFromGoogle = () => {
  return new Promise((resolve, reject) => {
    let shouldRespond = true;
    
    if (shouldRespond) {
      setTimeout(() => {
        resolve(JSON_RESPONSE_GOOGLE);
      }, 5000);
    } else {
      reject(JSON_RESPONSE_ERROR);
    }
  });
}

let fetchFromFacebook = () => {
  return new Promise((resolve, reject) => {
    let shouldRespond = true;

    if (shouldRespond) {
      setTimeout(() => {
        resolve(JSON_RESPONSE_FACEBOOK);
      }, 2500);
    } else {
      reject(JSON_RESPONSE_ERROR);
    }
  });
}

let fetchFromDisney = () => {
  return new Promise((resolve, reject) => {
    let shouldRespond = false;

    if (shouldRespond) {
      setTimeout(() => {
        resolve(JSON_RESPONSE_DISNEY);
      }, 2500);
    } else {
      setTimeout(_ => {
        reject(JSON_RESPONSE_ERROR)
      });
    }
  });
}

Promise.all([
  fetchFromGoogle('https://google.com/json'),
  fetchFromFacebook('https://facebook.com/json'),
  fetchFromDisney('https://disney.com/json')
])
.then(results => {
  console.log(results);
})
.catch(error => {
  console.log(error);
})
.finally(_ => {
  console.log('Finally');
});
// Initial

/**
  Notes
  - ES6
  - There are no return statements
  - .finally() available node >10
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
      }, 2500);
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
    let shouldRespond = true;

    if (shouldRespond) {
      setTimeout(() => {
        resolve(JSON_RESPONSE_DISNEY);
      }, 2500);
    } else {
      reject(JSON_RESPONSE_ERROR);
    }
  });
}

fetchFromGoogle()
  .then(response => {
    console.log(response);

    // We can do something here to proceed

    return fetchFromFacebook();
  })
  .then(response => {
    console.log(response);

    // We can do something here to proceed

    return fetchFromDisney();
  })
  .then(response => {
    console.log(response);

    // We can do something here to proceed
    
    console.log('Here is all the data.');
  })
  .catch((error) => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Finish.');
  });

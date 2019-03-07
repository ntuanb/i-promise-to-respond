// Initial

/**
  Notes
  - ES6
  - There are no return statements
  - .finally() available node >10
  - Are resolved as the responses come
 */

let iPromiseToCleanTheDishes = () => {
  return new Promise((resolve, reject) => {
    let isClean = true;
  
    if (isClean) {
      resolve('We have clean dishes to eat food off of.');
    } else {
      reject('clean the dishes.');
    }
  });
}

let iPromiseToDoTheLaundry = () => {
  return  new Promise((resolve, reject) => {
    let isLaundryDone = true;

    if (isLaundryDone) {
      resolve('I now have fresh clothes.');
    } else {
      reject('do the laundry.');
    }
  });
}

let iPromiseToBuyEggs = () => {
  return new Promise((resolve, reject) => {
    let isEggsPurchased = true;

    if (isEggsPurchased) {
      resolve('Eggs are purchased.');
    } else {
      reject('purchase the eggs.');
    }
  });
}

iPromiseToCleanTheDishes()
  .then(areTheDishesClean => {
    console.log(areTheDishesClean);
    return iPromiseToDoTheLaundry();
  })
  .then(isTheLaundryDone => {
    console.log(isTheLaundryDone);
    return iPromiseToBuyEggs();
  })
  .then(doIHaveEggsForBreakfast => {
    console.log(doIHaveEggsForBreakfast);
    console.log('YES! Chores are done. Now I can watch Netflix.');
  })
  .catch((why) => {
    console.log('Shit! I forgot to', why);
  })
  .finally(() => {
    console.log('Go to bed.');
  });
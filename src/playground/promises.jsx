const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Bart',
      age: 23
    })
    // reject('Something went wrong');
  }, 1500);
});

console.log('before');

promise
  .then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise');
        // reject('Something went wrong');
      }, 1500);
    });
  }).then((str) => {
    return console.log('does this run?', str); //chaining
  })
  .catch((error) => console.log(error));


console.log('after');



// promise
//   .then((data) => {
//     console.log('1', data);
//     return 'some data';
//   }).then((str) => {
//     return console.log('does this run?', str); //chaining
//   })
//   .catch((error) => console.log(error));

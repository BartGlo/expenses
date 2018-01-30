//OBJECT DESTRUCTURING

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'London',
//     temp: 42
//   }
// }
//
// const {name = 'Anonymous', age} = person;
//
// console.log(`${name} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
// console.log(`It's ${temperature} in ${city}`);
//
//
// const book = {
//   title: 'Ego's the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


//ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffe(hot)', '2.00$', '2.50$', '2.75$'];

const [coffeeName, ,mediumPrice] = item;

console.log(`A medium ${coffeeName} costs ${mediumPrice}.`);

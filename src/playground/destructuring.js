// const person = {
//     name: 'Matthew',
//     age: 18,
//     location: {
//         town: 'Wellingborough',
//         temp: 17
//     }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { town, temp: temperature } = person.location;
//
// if (town && temperature) {
//     console.log(`It's ${temperature} in ${town}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
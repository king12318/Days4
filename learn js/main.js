   // Promise.all:
   //  Promise.all is a method in JavaScript that allows us to run promises at the same time and wait for the results of all of them to return. It returns a newly resolved Promise when all passed Promises have resolved.
// var promise1 = new Promise(
//     function(resolve){
//     setTimeout(function(){
//       resolve([1]);  
//     },2000)
// });
// var promise2 = new Promise(
//     function(resolve){
//     setTimeout(function(){
//       resolve([2,3]);  
//     },7000)
// });
// Promise.all([promise1,promise2]) //give turn promise1, promise 2
//     .then(function(results){ // When all the promises are finished, it will go to .then
//         // console.log(results); //[Array(1), Array(2)] 7s
//         var results1 = results[0];
//         var results2 = results[1];
//         console.log(results1.concat(results2));
//     });


   //Promise.resolve: always return success status
    //Promise.reject: always return error status
// var promise = Promise.resolve('success!');

// promise
// .then(function(results){
//     console.log('results:', results ); //success!
// })
// .catch(function(results){
//     console.log('results:',results );// never run into catch, unless in .then we return a promise that was "rejecte"

// })


//Promise.race:Promise.race is a method in JavaScript that allows us to run promises at the same time and wait for the fastest Promise result to return. It returns a newly resolved Promise when any passed Promise has resolved.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'Promise 1 is resolved');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 10000, 'Promise 2 is resolved');
//   });
  
//   Promise.race([promise1, promise2])
//     .then((value) => {
//       console.log(value); // "Promise 1 is resolved"
//     });



//Promise.any: Promise.any is a new method introduced in ECMAScript 2021 (ES12) that allows us to run promises and wait for the result of the first promise to be resolved. If all passed Promises fail, it will return an error.
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'Promise 1 is rejected');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'Promise 2 is resolved');
//   });
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'Promise 3 is resolved');
//   });
  
//   Promise.any([promise1, promise2, promise3])
//     .then((value) => {
//       console.log(value); // "Promise 3 is resolved"
//     });
    // .catch((error) => {
    //   console.log(error); // AggregateError: All promises were rejected
    // });


// Fetch:Fetch is an API supported in modern browsers to send HTTP requests (GET, POST, PUT, DELETE, etc) to a specific URL and get the responses back. Fetch returns a Promise and uses the then() method to process the response data.
// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h')
//   .then(response => response.json())
//   .then(data => console.log(data)); 



  //Object.value:Object.values() is a method in JavaScript that takes all the values ​​of the properties of an object and returns a new array containing those values.
  //Object.key: Object.keys() is a method in JavaScript that takes all the property names of an object and returns a new array containing those property names.
//   const object = { x: '100', y: '200', z: '300' };
// // const values = Object.values(object);
// // console.log(values); // ["100", "200", "300"]
//    const keys = Object.keys(object);
//    console.log(keys); // ["x","y","z"]

// POST, PUT, PATCH, and DELETE are methods in HTTP that are used to perform operations corresponding to resources on the server.

// POST: Add a new resource to the server.
// PUT: Change all resources on the server.
// PATCH: Change a resource on the server.
// DELETE: Removes the resource from the server.


//JSON.stringify, JSON.parse:
//JSON.stringify is a method in JavaScript that converts a JavaScript object into a JSON string. JSON.parse is a method to convert a JSON string into a JavaScript object.

// const object = { x: '100', y: '200', z: '300' };
// const jsonString = JSON.stringify(object);
// console.log(jsonString); // "{"x":"100","y":"200","z":"300"}"

// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject); // { x: "100", y: "200", z: "300
//- let: Variables defined with let are not re-declared. Must be declared before use. Must be defined with block scope {}. Only works in the block in which it is declared.
//- Var: Has scope for the entire function. Can re-declare and use any value in the scope of the function
//- Const: There is scope of operation in the block, cannot assign or declare any value when assigned an initial value, if the variable is assigned an object, the object properties can still be changed.
//- Undefined: A special value when a variable is declared but has not been assigned any value, if a function k has a return value, the return value of the function is undefined.
//- Null: Is a special value to indicate that a variable has no value or an object does not exist, when a variable is assigned null, the variable has no value, is a value of data type is "Object".




var dogs = [
    "Alaska",
    "Husky",
    "Corgi",
    "ChouChou"
  // console.log(Array.isArray(new Array[]));  check if it is an array
  // console.log(dogs.length)  check the length of the array
  // console.log(dogs[3]) get the value in the array that is 'Chou Chou"
  
  
  ];
  let dogs1 = dogs[0]; //Accessing array elements
  dogs[2] = "Golden"; // Changing an Array Element
  
  
  // const dogs = [];
  // dogs[0]= "Alaska";
  // dogs[1]= "Husky";
  // dogs[2]= "Corgi";
  // dogs[3]= "ChouChou";
  
  
  // var dogs = new Array(
  //   "Alaska",
  //   "Husky",
  //   "Corgi",
  //   "ChouChou"
  //  //No difference at all but not recommended because the "new Array" keyword will take more time and execute the statement slower 
  //  // Inefficient in terms of efficiency: If you use "new array" to create a large array, this can cause time and resource woes when JavaScript has to allocate memory for the array. Instead, you can use other methods, such as "Array.from()" or "Array(n).fill()" to create arrays with predefined sizes and values.
  // );
  console.log(dogs);
  
  //object
  const person = {
    firstName: "Le",
    lastName: "Hoang",
    hobbies: "playing poker",
    age: "20"
  };
  let fullName =  person.firstName + " " + person.lastName + " " + person.age;
  console.log(fullName);
  
  const person1 = [
    "Hoang",
    "Good Boy",
    "21",
    "Play badminton"
  ];
  showMe = person1.join(" ");
  console.log(showMe);
  
  //push method
  person1.push("Male");
  console.log(person1);
  
  
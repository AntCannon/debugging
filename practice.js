const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    contact: {
      email: "john.doe@example.com",
      phone: {
        mobile: "555-1234",
        home: "555-5678"
      }
    },
    hobbies: ["Reading", "Traveling"],
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
      university: {
        name: "Tech University",
        location: "Cityville"
      }
    },
    isStudent: false,
    friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 }
    ]
  };
  
  
  function getEducationHistory(person) {
    let { education } = person;
    let degree = education.degree;
    let major = education.major;
    let university = education.university.name;
  
    return `My name is ${person.firstName}, and I graduated from ${university} with a ${degree} in ${major}.`
  }
  // SyntaxError: Unexpected token '}' -- line 41 had a period outside. need backticks for string interpolation
  
  console.log(getEducationHistory(person))

  function logAllFriendsNamesAndAges(person) {
    let [ friends ] = person;
  
    for (const friend in friends) {
      console.log(friend[name] + " " + friend[age]);
    }
  }
  
  function addAreaCodeToPhoneNums(person, areaCode) {
    let [ phone ] = person;
  
    for (const key of phone) {
      phone.key = "(" + areaCode + ") " + phone.key;
      // SyntaxError: Unexpected identifier 'areaCode' - missing addition operator left of 'areaCode'
    }
    return phone;
  }
  
  function logFullAddress(person) {
    const [ address ] = person;
    let singleAddressStr = "";
    
    for (const key in address) {
      singleAddressStr = address.key + (key === "country" ? "" : ", ");
    }
    console.log(singleAddressStr);
  }
  
  function logIfCanDrive(person) {
    if (person[age] === "true") {
      console.log("This person is of the legal age to drive.");
    } else {
      // SyntaxError: Unexpected token '{'-- else if requires a conditional. dev probably meant else.
      console.log("This person cannot legally drive.")
    }
  }
  
  function addHeightProperty(person, height) {
    person[height] = height;
    return person;
  }
  
  function ageUpPerson1Year(person) {
    person[age]++;
    // SyntaxError: Invalid left-hand side in assignment. function intends to add 1 year to person age.
  }
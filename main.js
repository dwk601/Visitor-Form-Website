// take a log of the personal information of the user
// and store it in the database
// this is the main function of the app
function logPersonalInfo() {
  // get the personal information of the user
  var personalInfo = getPersonalInfo();
  // store the personal information in the database
  storePersonalInfo(personalInfo);
}

// Path: main.js
// get the personal information of the user
function getPersonalInfo() {
  // get the name of the user
  var name = getName();
  // get the address of the user
  var address = getAddress();
  // get the phone number of the user
  var phoneNumber = getPhoneNumber();
  // get the email of the user
  var email = getEmail();
  // return the personal information of the user
  return {
    name: name,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
  };
}

console.log(getPersonalInfo());

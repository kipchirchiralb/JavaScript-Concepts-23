// sequence, selection(if..else if..else, switch),looping/iteration(for loop)

let users = {
  user1: {
    name: "Albert",
    age: 39,
    position: "Doctor", // "Doctor", "Nurse", "Patient"
  },
  user2: {
    name: "Robert",
    age: 39,
    position: "Nurse", // "Doctor", "Nurse", "Patient"
  },
  user3: {
    name: "Gilbert",
    age: 39,
    position: "Patient", // "Doctor", "Nurse", "Patient"
  },
  user4: {
    name: "Brian",
    age: 39,
    position: "Doctor", // "Doctor", "Nurse", "Patient"
  },
  user5: {
    name: "Patterson",
    age: 39,
    position: "Patient", // "Doctor", "Nurse", "Patient"
  },
};
function joinClub(userAge) {
  if (userAge < 18) {
    console.log("Sorry, you're too young for this");
  } else if (userAge > 35) {
    console.log("Sorry, you're too old for this");
  } else {
    console.log("Allowed to join the club");
  }
}

// joinClub(userData.age);

switch (users.user3.position) {
  case "Doctor":
    console.log("Role: Doctor");
    break;
  case "Nurse":
    console.log("Role: Nurse");
    break;
  case "Patient":
    console.log("Role: Patient");
    break;
  default:
    console.log("Role: Unknown - Not allowed to use");
}

// for loop
// let i = 0;
// for (i; i <= 10; i = i + 1) {
//   console.log(i);
// }

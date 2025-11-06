interface Teacher {
    readonly firstName: string, // modifiable only after initialized
    readonly lastName: string, // modifiable only after initialized
    fullTimeEmployee: boolean,
    yearsOfExperience?: number, // optional
    location: string,
    [key: string]: any; // For the posibility to add extra attributes
}

// Example 1
const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false, // this extra attribute was not listed above (no typed error)

    // NB: yearsOfExperience attribute was excluded but no typed error because it was set to optional (?)
}

// Example 2
const teacher4: Teacher = {
  firstName: "James",
  lastName: "Agalga",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Accra",
  contract: false,
  department: "Science" // another extra attribute
};

console.log(teacher3)
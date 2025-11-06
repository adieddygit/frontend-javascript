interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student ={
    firstName: "Emmanuel",
    lastName: "Adi",
    age: 30,
    location: "Ghana"
}

const student2: Student = {
    firstName: "Selasie",
    lastName: "Mummin",
    age: 25,
    location: "Ethiopia"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table"); //Create a table
const tableBody = document.createElement("tbody") //Make the part to hold the rows

// Create a new row for each student innthe table
studentsList.forEach((student)=>{
    const row = document.createElement("tr"); 

    const firstNameCell = document.createElement("td"); // Cell for student first name
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td"); // Cell for student location
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell); // Put cells of first names into rows
    row.appendChild(locationCell); // Put cells of locations into rows
    tableBody.appendChild(row); // Adding rows to the table body
});

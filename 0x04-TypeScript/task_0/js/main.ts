interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string
}

const studentA: Student = {
        firstName: "Tofunmi",
        lastName: "Akinola",
        age: 2,
        location: "Lagos, Nigeria"
}

const studentB: Student = {
        firstName: "Tomiwa",
        lastName: "Adekeye",
        age: 2,
        location: "Lagos, Nigeria"
}

const studentList: Array<Student> = [studentA, studentB]

const table = document.createElement('table')
const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.innerHTML = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.innerHTML = "Location";

studentList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.innerHTML = student.firstName;
        const locationCell = row.insertCell();
        locationCell.innerHTML = student.location;
});
document.body.appendChild(table)

var students = [
    { rollNo: 814842, name: "Rashid", course: "CS" },
    { rollNo: 814843, name: "Nowshad", course: "Math" },
    { rollNo: 814844, name: "Luqman", course: "Physics" },
    { rollNo: 814845, name: "sajjad", course: "Chem" }
];
var inputRoll = prompt(parseInt("Please enter Student Roll Number:"));
var found = false;
for (var i = 0; i < students.length; i++) {
    if (students[i].rollNo == inputRoll) {
        alert("Student Found!\nName: " + students[i].name + "\nCourse: " + students[i].course);
        found = true;
        break; 
    }
}

if (found === false) {
    alert("Error: Student with Roll No " + inputRoll + " not found.");
}

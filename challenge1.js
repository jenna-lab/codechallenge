const prompt = require("prompt-sync")();
//user is prompted to enter the student marks
const marks = prompt("Please Enter Student Marks: ");
//the differrent grading in ranges of marks 0-100
function gradeGenerator() {
  if (marks > 79 && marks < 100) {
    console.log(`A`);
  } else if (marks >= 60 && marks <= 79) {
    console.log(`B`);
  } else if (marks >= 49 && marks <= 59) {
    console.log(`C`);
  } else if (marks >= 40 && marks <= 48) {
    console.log(`D`);
  } else if (marks >= 0 && marks <= 39) {
    console.log(`E`);
  } else {
    console.log(`unKnown`);
  }
}
//finally after user entered the student marks now,we call the function to get the grade
gradeGenerator();

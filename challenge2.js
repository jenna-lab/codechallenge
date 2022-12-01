const prompt = require("prompt-sync")();
//user is prompted to enter the car speed
const speed = prompt("Enter Car Speed:");
//calculation for points
let points = (speed - 70) / 5;
//function for diffrent entries by the user and different outputs
function speedDetector() {
  if (speed < 70) {
    console.log(`OK`);
  } else if (points > 12) {
    console.log(`license suspended`);
  } else console.log(`points:${points}`);
}
//finally we call the function and we get our final desired output
speedDetector();

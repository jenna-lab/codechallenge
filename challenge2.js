const prompt = require("prompt-sync")();
const speed = prompt("Enter Car Speed:");
let points = (speed - 70) / 5;
function speedDetector() {
  if (speed < 70) {
    console.log(`OK`);
  } else if (points > 12) {
    console.log(`license suspended`);
  } else console.log(`points:${points}`);
}
speedDetector();

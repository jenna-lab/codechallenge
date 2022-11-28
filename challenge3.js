//created a prompt to ask user to input monthly salary for calulations.
const prompt = require("prompt-sync")();
let grossSalary = prompt("What is your monthly gross salary?");
console.log(`The gross salary input is :${grossSalary}.`);
//Kenyan tax relief is fixed at 2400
let personalRelief = 2400;
function NHIFDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1500;
  } else if (grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary <= 99999) {
    return 1600;
  } else if (grossSalary <= 100000) {
    return 1700;
  }
}

//function for NHIF deductions according to gross salary input.
let NHIF = NHIFDeductions(grossSalary);
//Takes gross salary and calculates amount of deductions to be done an outputs it.
console.log(`NHIF: ${NHIF}.`);
//calculations for NSSF  deductions to be done with new rates on website provided.
function NSSFDeductions(grossSalary) {
  if (grossSalary <= 18000) {
    return grossSalary * 0.06;
  } else if (grossSalary > 18000) {
    return 18000 * 0.06;
  }
}
//calculation for amount of NSSF to be deducted from gross salary
let NSSF = NSSFDeductions(grossSalary);
console.log(`NSSF deducted from salary:${NSSF}.`);

//Calculations for Total income from input prompt.
let taxableIncome = grossSalary - (NHIF + NSSF);
console.log(`PAYE:${taxableIncome}.`);

//PAYE calculations
function paye(taxableIncome) {
  if (taxableIncome <= 24000) {
    return 0;
  } else if (taxableIncome >= 24001 && taxableIncome <= 3233) {
    return taxableIncome * 0.25 - personalRelief;
  } else {
    return taxableIncome * 0.3 - personalRelief;
  }
}

//prints PAYE
let PAYE = paye(taxableIncome);
console.log(`PAYE:${PAYE}.`);

//after all deduction calculation(NSSF,NHIF and PAYE)we calculate salary
//we take gross salary and subtract all deductions for the final net salary.
function netSalary(grossSalary) {
  return grossSalary - (NHIF + NSSF + PAYE);
}
//we print the net salary.
let netIncome = netSalary(grossSalary);
console.log(`Your net salary:${netIncome}.`);

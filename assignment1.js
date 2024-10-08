// prompts for user to input their score
let score = prompt("Enter your score:");

//Conditional statements for assigning grades
let grade =
  score >= 97 ? "1.00" :
  score >= 94 ? "1.25" :
  score >= 91 ? "1.50" :
  score >= 88 ? "1.75" :
  score >= 85 ? "2.00" :
  score >= 82 ? "2.25" :
  score >= 79 ? "2.50" :
  score >= 76 ? "2.75" :
  score >= 75 ? "3.00" :
  score >= 72 ? "4.00" :
  "5.00";

//If..else if..else Statements to assign final remarks
let remarks = "";
if (score >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  remarks = "AVERAGE PASS";
} else if (score >= 75) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}
//grade and remarks to the console
console.log('Your equivalent Grade is "{grade}" Average \nFinal Remarks: {remarks}');
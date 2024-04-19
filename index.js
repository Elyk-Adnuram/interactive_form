const cardholderName = document.getElementById("name");
const cardholderNameDisplay = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("number");
const cardNumberDisplay = document.getElementById("card-number");
const cardMonth = document.getElementById("numberMonth");
const cardMonthDisplay = document.getElementById("exp-date-month");
const cardYear = document.getElementById("numberYear");
const cardYearDisplay = document.getElementById("exp-date-year");
const cardCVV = document.getElementById("cvc");
const cardCVVDisplay = document.getElementById("CVV");

function displayUserInputs(input1, input2) {
  if (input1 && input2) {
    input1.addEventListener("change", (e) => {
      console.log(e.target.value);
      if (input1.length === cardMonth) {
        input2.textContent = `${e.target.value} /`;
      }
      input2.textContent = e.target.value;
    });
  } else {
    alert("Error, please retry");
  }
}

displayUserInputs(cardholderName, cardholderNameDisplay);
displayUserInputs(cardNumber, cardNumberDisplay);
displayUserInputs(cardMonth, cardMonthDisplay);
displayUserInputs(cardYear, cardYearDisplay);
displayUserInputs(cardCVV, cardCVVDisplay);

// alert("hello world");

//create function to prevent user from entering more than 32 letters in cardholderName
function limitCardholderName(input) {
  input.addEventListener("change", (e) => {
    console.log(e);
    if (e.target.length > 32) {
      alert("too many letters");
    }
  });
}

limitCardholderName(cardholderName);
//create function to prevent user from entering more than 16 numbers in const cardNumber = document.getElementById("number");

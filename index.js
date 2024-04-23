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
      let eventTarget = e.target.value;
      // console.log(e.target.value);
      if (input1 === cardNumber) {
        let cardNumberGroup1 = eventTarget.substring(0, 4);
        let cardNumberGroup2 = eventTarget.substring(4, 8);
        let cardNumberGroup3 = eventTarget.substring(8, 12);
        let cardNumberGroup4 = eventTarget.substring(12, 16);
        input2.textContent = `${cardNumberGroup1} ${cardNumberGroup2} ${cardNumberGroup3} ${cardNumberGroup4}`;
      } else if (input1 === cardMonth) {
        input2.textContent = `${eventTarget} /`;
      } else {
        input2.textContent = e.target.value;
      }
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

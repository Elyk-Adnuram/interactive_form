const cardholderName = document.getElementById("name");
const cardholderNameDisplay = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("number");
const cardNumberDisplay = document.getElementById("card-number");

function displayUserInputs(input1, input2) {
  if (input1 && input2) {
    input1.addEventListener("change", (e) => {
      console.log(e.target.value);
      input2.textContent = e.target.value;
    });
  } else {
    alert("Error, please retry");
  }
}

displayUserInputs(cardholderName, cardholderNameDisplay);
displayUserInputs(cardNumber, cardNumberDisplay);

// alert("hello world");

const cardholderName = document.getElementById("name");
let cardholderNameDisplay = document.getElementById("cardholder-name");

cardholderName?.addEventListener("input", (e) => {
  cardholderNameDisplay = e.target.value;
});

alert("hello world");

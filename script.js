// Элементы формы
const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numPeopleInput = document.getElementById("numPeople");
const calculateBtn = document.getElementById("calculateBtn");
const totalText = document.getElementById("totalText");
const perPersonText = document.getElementById("perPersonText");
const errorEl = document.getElementById("error");

function calculate() {
  errorEl.textContent = "";

  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value, 10);

  if (isNaN(billAmount) || billAmount < 0) {
    errorEl.textContent = "Введите корректную сумму счёта.";
    return;
  }
  if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100) {
    errorEl.textContent = "Введите процент чаевых от 0 до 100.";
    return;
  }
  if (isNaN(numPeople) || numPeople < 1) {
    errorEl.textContent = "Количество человек должно быть не меньше 1.";
    return;
  }

  const tipAmount = (tipPercentage / 100) * billAmount;
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson = totalAmount / numPeople;

  totalText.textContent = `Всего (с чаевыми): $${totalAmount.toFixed(2)}`;
  perPersonText.textContent = `С каждого: $${amountPerPerson.toFixed(2)}`;
}

calculateBtn.addEventListener("click", calculate);

// Пересчёт при нажатии Enter в любом поле
[billAmountInput, tipPercentageInput, numPeopleInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculate();
  });
});

// Первый расчёт при загрузке страницы
calculate();

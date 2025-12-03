function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultBox = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultBox.innerHTML = "❌ Please enter valid numbers";
    resultBox.classList.add("error");
    return;
  }

  let result;

  if (operation === "add") {
    result = num1 + num2;
  } 
  else if (operation === "sub") {
    result = num1 - num2;
  } 
  else if (operation === "mul") {
    result = num1 * num2;
  } 
  else if (operation === "div") {
    if (num2 === 0) {
      resultBox.innerHTML = "❌ Cannot divide by zero";
      resultBox.classList.add("error");
      return;
    }
    result = num1 / num2;
  }

  resultBox.classList.remove("error");
  resultBox.innerHTML = `✅ Result: ${result}`;
}

function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let add = num1 + num2;
  let multi = num1 * num2;
  let div = num1 / num2;
  let sub = num1 - num2;
  let mod = num1 % num2;

  document.getElementById("result").innerHTML = `
    Addition of ${num1} and ${num2} = ${add}<br>
    Multiplication of ${num1} and ${num2} = ${multi}<br>
    Division of ${num1} by ${num2} = ${div}<br>
    Subtraction of ${num1} from ${num2} = ${sub}<br>
    Modulus of ${num1} and ${num2} = ${mod}<br>
  `;
}

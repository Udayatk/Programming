function fibGen() {
  let firstNumber = 0;
  let secondNumber = 1;
  let inputNumber = document.getElementById("inputNumber").value;
  resultPar = document.getElementById("result");
  let thirdnumber;
  let resultString = firstNumber + " " + secondNumber;

  while (firstNumber + secondNumber < inputNumber) {
    thirdnumber = firstNumber + secondNumber;
    resultString = resultString + " " + thirdnumber;
    firstNumber = secondNumber;
    secondNumber = thirdnumber;
  }
  resultPar.innerHTML = resultString;
}

function square() {
  let inputNumber = document.getElementById("inputNumber").value;
  resultPar = document.getElementById("result");
  let iterable = 1;
  let resultString = 0;
  while (iterable < inputNumber) {
    resultString = resultString + " " + iterable * iterable;
    iterable++;
  }
  resultPar.innerHTML = resultString;
}

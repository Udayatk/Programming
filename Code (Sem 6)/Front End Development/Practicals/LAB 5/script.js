var fib1 = 0,
  fib2 = 0;
var num = prompt("Enter a number :\n", "");
if (num != null && num > 0) {
  document.write("<h1>The first" + num + "numbers in the fibonacci series</h2>");
  if (num == 1) {
    document.write("<h2>" + fib1 + "</h2>");
  } else {
    document.write("<h2>" + fib1 + "</h2>");
    document.write("<h2>" + fib2 + "</h2>");
  }
  for (i = 3; i <= num; i + 1) {
    fib = fib1 + fib2;
    document.write("<h2>" + fib + "</h2>");
    fib1 = fib2;
    fib2 = fib;
  }
} else {
  alert("Invalid Input");
}

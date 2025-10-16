function calc_math() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let res = document.getElementById("result");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.value = "Please enter all coefficients!";
    return;
  }

  if (a === 0) {
    if (b === 0) {
      res.value = c === 0 ? "Infinite solutions" : "No solution";
    } else {
      res.value = "x = " + (-c / b).toFixed(2);
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      res.value = "No real solution";
    } else if (delta === 0) {
      let x = -b / (2 * a);
      res.value = "x1 = x2 = " + x.toFixed(2);
    } else {
      let x1 = (-b - Math.sqrt(delta)) / (2 * a);
      let x2 = (-b + Math.sqrt(delta)) / (2 * a);
      res.value = `x1=${x1.toFixed(2)} ; x2=${x2.toFixed(2)}`;
    }
  }
}
function add(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Not a number');
  }
}

function subtract(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    throw new Error('Not a number');
  }
}

function multiply(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  } else {
    throw new Error('Not a number');
  }
}

function divide(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a / b;
  } else {
    throw new Error('Not a number');
  }
}

function isNumber(n) {
  if (typeof n === 'string' || n instanceof String) {
    return false
  } else {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}

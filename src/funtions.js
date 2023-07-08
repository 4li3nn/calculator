export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "+/-":
      computation = -currentOperand;
      break;
  }
  return computation.toString();
};
export const reverse = (text) => {
  const result = parseFloat(text);
  return -result.toString();
};

export const percent = (text) => {
  const result = parseFloat(text) / 100;
  return result.toString();
};

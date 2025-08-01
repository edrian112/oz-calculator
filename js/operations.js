export default function calculateOperation(
  firstNumber,
  secondNumber,
  operator
) {
  let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) throw new Error("0으로 나눌 수 없습니다.");
      result = firstNumber / secondNumber;
      break;
    default:
      throw new Error("유효한 연산자를 선택하세요.");
  }
  return result;
}

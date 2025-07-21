import calculateOperation from "./operations.js";
import { showError, removeError } from "./error.js";
import saveHistory from "./history.js";

const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/"];

let history = [];
let currentInput = "";
let firstNumber = null;
let operator = null;
let isError = false;

const resetDisplay = () => {
  const display = document.getElementById("display");
  display.textContent = "0";
  currentInput = "";
};

const setDisplay = (text) => {
  const display = document.getElementById("display");
  display.textContent = text;
};

const subDisplay = () => {
  currentInput = currentInput.slice(0, -1);
  if (!currentInput) {
    resetDisplay();
  } else {
    setDisplay(currentInput);
  }
};

const appendNumber = (number) => {
  removeError();

  if (!VALID_NUMBERS.includes(number)) {
    isError = true;
    showError("유효한 숫자를 입력하세요.");
    return;
  }

  currentInput += number;
  setDisplay(currentInput);
};

const setOperator = (op) => {
  removeError();

  if (!VALID_OPERATORS.includes(op)) {
    isError = true;
    showError("유효한 연산자를 선택하세요.");
    return;
  }

  if (!currentInput) {
    isError = true;
    showError("숫자를 먼저 입력하세요.");
    return;
  }

  firstNumber = Number(currentInput);
  operator = op;
  resetDisplay();
};

export default function calculate() {
  removeError();

  try {
    if (firstNumber === null || operator === null || !currentInput) {
      throw new Error("계산에 필요한 값이 부족합니다.");
    }

    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) {
      throw new Error("유효한 숫자를 입력하세요.");
    }

    const result = calculateOperation(firstNumber, secondNumber, operator);
    saveHistory(firstNumber, operator, secondNumber, result, history);

    const resultElement = document.getElementById("result");
    resultElement.classList.remove("d-none", "alert-danger");
    resultElement.classList.add("alert-info");
    resultElement.textContent = `결과: ${result}`;

    // 상태 초기화
    currentInput = "";
    firstNumber = null;
    operator = null;
    resetDisplay();
  } catch (error) {
    showError(error.message);
  }
}

export {
  appendNumber,
  setOperator,
  subDisplay,
  resetDisplay,
  VALID_NUMBERS,
  VALID_OPERATORS,
};

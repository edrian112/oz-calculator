import calculate from "./index.js";
import {
  appendNumber,
  setOperator,
  subDisplay,
  resetDisplay,
  VALID_NUMBERS,
  VALID_OPERATORS,
} from "./index.js";

// 숫자 버튼 등록
VALID_NUMBERS.forEach((num) => {
  const btn = document.getElementById(`btn-${num}`);
  if (btn) {
    btn.addEventListener("click", () => appendNumber(num));
  }
});

// 연산자 버튼 등록
VALID_OPERATORS.forEach((op) => {
  const btn = document.getElementById(`btn-${op}`);
  if (btn) {
    btn.addEventListener("click", () => setOperator(op));
  }
});

// =
const equalsBtn = document.getElementById("btn-equals");
if (equalsBtn) {
  equalsBtn.addEventListener("click", () => calculate());
}

// C
const clearBtn = document.getElementById("btn-clear");
if (clearBtn) {
  clearBtn.addEventListener("click", () => resetDisplay());
}

// 키보드 입력
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (VALID_NUMBERS.includes(key)) {
    appendNumber(key);
  }
  if (VALID_OPERATORS.includes(key)) {
    setOperator(key);
  }
  if (key === "Enter") {
    calculate();
  }
  if (key === "Backspace") {
    subDisplay();
  }
});

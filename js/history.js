export default function saveHistory(
  firstNumber,
  operator,
  secondNumber,
  result,
  history
) {
  const record = { firstNumber, operator, secondNumber, result };
  history.push(record);

  // 콘솔 출력
  console.log("계산 기록:", JSON.stringify(history, null, 2));

  // 화면에 표시
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
  historyList.appendChild(li);

  return history;
}

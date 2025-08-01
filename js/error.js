const showError = (message) => {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("d-none", "alert-info");
  resultElement.classList.add("alert-danger");
  resultElement.textContent = `에러: ${message}`;
};

const removeError = () => {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("alert-danger");
  resultElement.textContent = "";
};

export { showError, removeError };

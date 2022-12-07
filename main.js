// when submitBtn is clicked, submit the form
document.getElementById("visitorForm").submit();

// when submitBtn is clicked, save the value of the input field to localStorage
// then, when logBtn is clicked, log the value of the input field to the console
const submitBtn = document.querySelector("#submitBtn");
const logBtn = document.querySelector("#logBtn");
const input = document.querySelector("#input");

submitBtn.addEventListener("click", () => {
  localStorage.setItem("input", input.value);
});

logBtn.addEventListener("click", () => {
  console.log(localStorage.getItem("input"));
});

// Path: index.html

const buttons = document.querySelectorAll("#keyboard button");
const display = document.getElementById("display");
let displayContent = [];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    displayContent.push(btn.textContent); // s
    display.textContent = displayContent.join("") // scrive il numero cliccato
  });
});
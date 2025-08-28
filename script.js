const buttons = document.querySelectorAll("#keyboard button");
const display = document.getElementById("display");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    display.textContent = btn.textContent; // scrive il numero cliccato
  });
});
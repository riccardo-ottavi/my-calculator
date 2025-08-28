const buttons = document.querySelectorAll("#keyboard button");
const display = document.getElementById("display");
let displayContent = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    if (value === "=") {
        try {
            displayContent = eval(displayContent).toString(); 
        } catch(e) {
            displayContent = "Errore";
        }
    } else if (value === "C") {
        displayContent = ""; 
    } else if (value === "x") {
        displayContent += "*";
    }else if (value === "AC") {
        displayContent = displayContent.slice(0, -1);
    }
    else {
        displayContent += value;
    }

    display.textContent = displayContent;
  });
});
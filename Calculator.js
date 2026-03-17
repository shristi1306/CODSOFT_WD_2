let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = this.innerText;

        if (value === "C") {
            currentInput = "";
            display.value = "";
        }
        else if (value === "=") {
            display.value = eval(currentInput);
            currentInput = display.value;
        }
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
}
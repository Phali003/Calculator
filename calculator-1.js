
//Javascript for the colors-manipulation
const calculator = document.getElementById("calculator-1");
const checkbox = document.getElementById("light-toggle");
const thisScreen = document.querySelector(".screen");




checkbox.addEventListener("change", function(){
    if(this.checked){
        calculator.style.backgroundColor = "#524C42";
        calculator.style.transition = "0.5s";
        buttons.forEach(button =>{
            button.style.backgroundColor = "#31363F";
            thisScreen.style.backgroundColor = "#87A2FF"; 
            clearBtn.style.backgroundColor = "#31363F";
           deleteBtn.style.backgroundColor = "#31363F";
           equalBtn.style.backgroundColor ="#31363F";
           bracketBtn.style.backgroundColor = "#31363F";
           percentBtn.style.backgroundColor = "#31363F";
        });
    }
    else {
        calculator.style.backgroundColor = "aqua";
        calculator.style.transition = "0.5s";
        buttons.forEach(button =>{
            button.style.backgroundColor = "#2c9d9d";
            thisScreen.style.backgroundColor = "#75ffff"; 
            clearBtn.style.backgroundColor = "#2c9d9d";
            deleteBtn.style.backgroundColor = "#2c9d9d";
           equalBtn.style.backgroundColor ="#2c9d9d";
           bracketBtn.style.backgroundColor = "#2c9d9d";
           percentBtn.style.backgroundColor = "#2c9d9d";

        });
    }
});

// Javascript for mathematical-manipulation
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.getElementById("deleteButton");
const equalBtn = document.querySelector(".equal-btn");
const bracketBtn = document.querySelector(".bracket-btn");
const percentBtn  = document.querySelector(".percent-btn");
const pointBtn = document.querySelector(".point-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetButton = e.target.closest('.btn');
        if (targetButton) {
            let value = targetButton.dataset.num;
            // Check if the value is a decimal point
            if (value === ".") {
                // Prevent adding another decimal point if one already exists in the last number
                const lastNumber = screen.value.split(/[\+\-\*\/]/).pop();
                if (!lastNumber.includes(".")) {
                    screen.value += value;
                }
            } else {
                screen.value += value;
            }
        }
    });
});


clearBtn.addEventListener("click", function (e) {
    screen.value = "";
});

deleteBtn.addEventListener("click", function (e) {
    if (screen.value.length > 0) { // This one helps to check if there is a value to delete
        screen.value = screen.value.slice(0, -1);
    }
});


equalBtn.addEventListener("click", function (e) {
    try {
        if (screen.value === "") {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer < 0 ? `-${Math.abs(answer)}` : answer.toString();
        }
    } catch (error) {
        screen.value = "Error";
    }
});


percentBtn.addEventListener("click", function (e){
    if(screen.value){
        let currentValue = parseFloat(screen.value);
        screen.value = currentValue/100;
    }
});

bracketBtn.addEventListener("click", function (e) {
    const openBrackets = (screen.value.match(/\(/g) || []).length;
    const closeBrackets = (screen.value.match(/\)/g) || []).length;

    if (openBrackets > closeBrackets) {
        screen.value += ")";
    } else {
        screen.value += "(";
    }
});

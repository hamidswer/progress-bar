const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
const line4 = document.querySelector("#line4");
console.log(line3);
let count = 1;
console.log(count);
next.addEventListener("click", (e)=>{
    e.preventDefault();
    if (count <= 3) {
        count++;
        previous.classList.remove("disable");
        let number = `number${count}`;
        let currentNumber = document.querySelector(`#${number}`);
        currentNumber.classList.add("active");
        let line = `line${count}${count}`;
        let currentLine = document.querySelector(`#${line}`);
        currentLine.classList.remove("disable-line");
        currentLine.classList.remove("disable");
        currentLine.classList.add("active");
    }
    if (count == 4) {
    next.classList.add("disable");
    };
    console.log(count);
})
previous.addEventListener("click", (e)=>{
    e.preventDefault();
    if (count >= 2 ) {
        count--;
        next.classList.remove("disable");
        let number = `number${count+1}`;
        let currentNumber = document.querySelector(`#${number}`);
        currentNumber.classList.remove("active");
        let line = `line${count+1}${count+1}`;
        let currentLine = document.querySelector(`#${line}`);
        currentLine.classList.remove("active");
        currentLine.classList.add("disable");
    };
    if (count == 1) {
        previous.classList.add("disable");
    };
})

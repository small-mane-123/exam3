const answer = document.getElementById("answer")
const addBtn = document.getElementById("addBtn")
const subBtn = document.getElementById("subBtn")
const resetBtn = document.getElementById("resetBtn")
const divideBtn = document.getElementById("divideBtn")
const multiplyBtn = document.getElementById("multiplyBtn")
const task = document.getElementById("task")
let count = 0;

addBtn.onclick = () => {
    count++;
    answer.textContent = count;
    task.textContent = "INCREASING..."
}

subBtn.onclick = () => {
    count--;
    answer.textContent = count;
    task.textContent = "DECREASING..."
}

resetBtn.onclick = () => {
    count = 0;
    answer.textContent = count;
    task.textContent = "CALCULATOR"
}

mutiplyBtn.onclick = () => {
    count = 0;
    answer.textContent = count;
    task.textContent = "CALCULATOR"
}

divideBtn.onclick = () => {
    count = 0;
    answer.textContent = count;
    task.textContent = "CALCULATOR"
}
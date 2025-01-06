const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Adds the "×" symbol for task removal
        li.appendChild(span);
    }
    inputBox.value = "";  // Clears the input box
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  // Saves tasks in localStorage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");  // Loads tasks from localStorage
}

window.onload = function() {
    showTask();
};
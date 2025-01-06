const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item (li) for the task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  // Set the task text
        listContainer.appendChild(li);  // Append the task to the list

        // Create a span for the "×" button to remove the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Adds the "×" symbol for task removal
        li.appendChild(span);

        // Reset the input box after adding the task
        inputBox.value = "";

        // Save the updated tasks to localStorage
        saveData();
    }
}

// Event listener to mark tasks as completed or remove them
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class when clicking on the task
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task when clicking on the "×"
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save the task list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load the tasks from localStorage when the page is loaded
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Ensure the tasks are loaded when the page is opened
window.onload = function() {
    showTask();
};

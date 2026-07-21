/*
  Tasks:
   A) Adding a task when click To Add button 
    1) check if there is a no value alert message You Must add a value 
    2) check if there is a value then create list item and add this list item to ul 

   B) clear input after adding a new task 
   C) onClick to circle let task to be checked/unchecked
   D) onClick to x icon remove a task

   E) add fuctionality when click enter it will add a new task

   F) save tasks in the local storage
   G) load the saved tasks from local storage

*/

const inputTask = document.getElementById("input-task");
const ulTask = document.getElementById("ul-list");
// const btn = document.getElementsByClassName("btn")[0];
const btn = document.querySelector(".btn");

// Add new task to the list
function addTask () {
    let taskValue = inputTask.value;
    // A)1) check if there is a no value alert message You Must add a value 
    if (!taskValue) {
        alert("You must add a value");
    // A)2) check if there is a value then create list item and add this list item to ul
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskValue;
        span.innerHTML = "&times;";
        li.appendChild(span);
        ulTask.appendChild(li);    
        // B) clear input after adding a new task 
        inputTask.value = "";
    }
    setTask();
}
// A) Adding a task when click To Add button
btn.addEventListener("click", addTask);

ulTask.addEventListener("click", function (e) {
    // C) Toggle 'checked' class on LI click (not on its child SPAN (x icon))
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        setTask();
    // D) Delete task on SPAN or (x) click
    } else if (e.target.tagName === "SPAN")
        e.target.parentElement.remove();
        setTask();
})

// E) add fuctionality when click enter it will add a new task
inputTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
})

// F) save list data to local storage
function setTask() {
    localStorage.setItem("lists", ulTask.innerHTML);
}

// load the saved tasks from local storage
function loadTask() {
    ulTask.innerHTML = localStorage.getItem("lists");
}

loadTask();

const userInput = document.querySelector("#input");
const inputbtn = document.querySelector("#addTaskBtn");
const warningText = document.querySelector("p");
const ulList = document.querySelector("ul");
const counter = document.querySelector("small");
const clearAllBtn = document.querySelector("#clearAllBtn");

let countedTasks = 0;

counter.innerText = `${countedTasks} completed`;


const taskArray = [];


inputbtn.addEventListener("click", function () {
  const userInfo = userInput.value;


// userInfo ? warningText.innerText =  null : warningText.innerText = "Input must not be empty";
  if(userInfo === '') {
    warningText.innerText = "Input must not be empty"
    setTimeout(() => {
      warningText.remove()
      
    }, 2000);
  return;
   
 } 

  
 
  


  const newTask = {
    title: userInfo,
    id: Date.now(),
  };

  taskArray.push(newTask);


  const taskItem = document.createElement("li");
  ulList.appendChild(taskItem);

  const spanTag = document.createElement("span");
  spanTag.classList.add("spanTag");
  spanTag.innerText = userInfo;
  taskItem.appendChild(spanTag);


  const trashCan = document.createElement("span");
  trashCan.innerHTML = "&#128465;";
  trashCan.setAttribute("class", "trashCan");
  taskItem.appendChild(trashCan);

  

  spanTag.addEventListener("click", function () {
    if (spanTag.getAttribute("class") == "completed") {
      spanTag.setAttribute("class", "");
   
      countedTasks--;
    } else {
      spanTag.setAttribute("class", "completed");

      countedTasks++;
    }
    counter.innerText = `${countedTasks} completed`;
  });


  // clearAllBtn.addEventListener("click", function () {
    // taskArray.length = 0;
    // countedTasks = 0;
    // counter.innerText = `tasks done: ${countedTasks}`;
    // taskItem.remove();
  // });


  trashCan.addEventListener("click", function (event) {
    const textContainer = event.target.previousSibling;
    if (textContainer.getAttribute("class") == "completed") {
      countedTasks--;
    }
    counter.innerText = ` ${countedTasks} completed`;
    let removeText = taskItem.firstChild.firstChild.textContent;
    let indexToRemove = taskArray.indexOf(removeText);
    taskArray.splice(indexToRemove, 1);

    taskItem.remove();
  });


  userInput.value == "";
  
});




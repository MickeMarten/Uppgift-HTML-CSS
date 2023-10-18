//Saved variables from HTML
const userInput = document.querySelector("#input");
const inputbtn = document.querySelector("#addTaskBtn");
const warningText = document.querySelector("p");
const ulList = document.querySelector("ul");
const counter = document.querySelector("small");
const clearAllBtn = document.querySelector("#clearAllBtn");
// JavaScript variables
let countedTasks = 0;
// Shows tasks done, "Small-html"
counter.innerText = `${countedTasks} Completed`;

// Arrays
const taskArray = [];

// Event when "Add button is pushed"
inputbtn.addEventListener("click", function () {
  const userInfo = userInput.value;
// if user input is 0 letters
  if (userInfo.length == 0) {
    warningText.innerText = "Input must not be empty";
    return;
  } else {
    warningText.innerText = "";
  }
// Saves user input in object with unique ID 
  const newTask = {
    title: userInfo,
    id: Date.now(),
  };
// Pushed user input and object into array
  taskArray.push(userInfo);

  // Creates new html elements for user input.
  const taskItem = document.createElement("li");
  ulList.appendChild(taskItem);

  const spanTag = document.createElement("span");
  spanTag.classList.add("spanTag");
  spanTag.innerText = userInfo;
  taskItem.appendChild(spanTag);

  //Creates Trashcan icon for user to delete specific task
  const trashCan = document.createElement("span");
  trashCan.innerHTML = "&#128465;";
  trashCan.setAttribute("class", "trashCan");
  taskItem.appendChild(trashCan);

  
  // lets user cross over completed tasks. Gets css/HTML element.
  spanTag.addEventListener("click", function () {
    if (spanTag.getAttribute("class") == "completed") {
      spanTag.setAttribute("class", "");
      // Removes number to "small" counter
      countedTasks--;
    } else {
      spanTag.setAttribute("class", "completed");
// adds number to "small" counter
      countedTasks++;
    }
    counter.innerText = `${countedTasks} Completed`;
  });

  // Button that clears all tasks and resets counter to 0 and clears array.
  // clearAllBtn.addEventListener("click", function () {
    // taskArray.length = 0;
    // countedTasks = 0;
    // counter.innerText = `tasks done: ${countedTasks}`;
    // taskItem.remove();
  // });

  // Trashcan works. USer can remove specific tasks, also removes task from Array.
  trashCan.addEventListener("click", function () {
    if (taskItem.getAttribute("class") == "completed") {
      countedTasks--;
    }
    counter.innerText = ` ${countedTasks} Completed`;
    let removeText = taskItem.firstChild.firstChild.textContent;
    let indexToRemove = taskArray.indexOf(removeText);
    taskArray.splice(indexToRemove, 1);

    taskItem.remove();
  });

  // restores input field to 0.
  userInput.value = "";
});




// Todo-appen ska ha styling som motsvarar det som visas i den bifogade videon, avseende färger, mått, typografi, etc.

// När man kommer in på sidan ska hela sidan animeras enligt videofilen: flyga ner uppifrån och fade in

// När man lägger till nya punkter i listan genom att skriva in dem och klicka på OK ska de animeras in enligt videofilen: fade-in och glidning uppåt

// När man klickar på en punkt för att markera den som klar ska den animeras enligt videofilen: Fade till grå



// Om man försöker lägga till en tom punkt ska felmeddelandet animeras enligt videofilen: Blinka rött


//  Precis som i föregående uppgift ska det också vara möjligt att radera en punkt i listan, och en synlig räknare ska öka varje gång man markerar en punkt som klar.
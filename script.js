const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const error = document.getElementById("error");
const doneCount = document.getElementById("doneCount");

// Array som lagrar uppgifterna
var mytodo = [];

btn.addEventListener("click", function() {
  const text = input.value.trim();
  if (text.length === 0) {
    error.innerText = "Input must not be empty";

    // Tar bort klassen och lägger tillbaka den efter.
    error.classList.remove('blink');
    setTimeout(function() {
      error.classList.add('blink');
    }, 50);
    return;
  } else {
    error.innerText = "";
    error.classList.remove('blink');
  }

  // Lägg till uppgiften i arrayen och markera som ny för animation
  mytodo.push({ text: text, done: false, isNew: true });
  input.value = "";

  renderTasks();
});

function renderTasks() {
  list.innerHTML = "";

  mytodo.forEach((task, index) => {
    const li = document.createElement("li");

    // Texten på uppgiften
    const span = document.createElement("span");
    span.innerText = task.text;
    li.appendChild(span);

    if (task.done) li.classList.add("completed");

    // Kollar om uppgiften är ny
if (task.isNew) {
  // Lägg till klassen "new" för att starta animationen
  li.className += ' new';
  
  // När animationen är slut, kör denna funktion
  li.onaanimationend = function() {
    // Ta bort klassen "new" så animationen slutar
    li.className = li.className.replace(' new', '');
    // Säg att uppgiften inte är ny längre
    task.isNew = false;
  };
}

  // Klicka på texten → klar/inte klar
  span.addEventListener("click", function() {
    task.done = !task.done;
    renderTasks();
  });

  // Papperskorg
  const del = document.createElement("span");
  del.innerText = "🗑️";
  del.classList.add("deleteBtn");
  del.addEventListener("click", function(e) {
    e.stopPropagation();
    mytodo.splice(index, 1);
    renderTasks();
  });
  li.appendChild(del);

  list.appendChild(li);
});


  // Uppdatera räknare
  doneCount.innerText = mytodo.filter(t => t.done).length;
}

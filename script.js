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

  // Lägg till uppgiften i arrayen
  tasks.push({ text: text, done: false });
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

    // Om uppgiften är ny (isNew) så lägg på klassen 'new' och
    // ta bort klassen + flaggan efter animationen. Detta förhindrar
    // att andra renderingar (t.ex. toggle completed) triggar animation.
   if (task.isNew) {
  li.classList.add('new');

  li.addEventListener('animationend', () => {
    li.classList.remove('new');
    task.isNew = false;
  }, { once: true }); 

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

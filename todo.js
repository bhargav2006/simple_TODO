// todo.html
const name = localStorage.getItem("username");
if (name) {
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
} else {
  document.getElementById("greeting").textContent = "Hello!";
}
alert(
  "Welcome to the Todo App , " +
    name +
    " ! \n" +
    "You can add your tasks here and delete them when you are done."
);
function hide() {
  document.getElementById("addform").hidden = true;
  console.log("hidden");
}

let form = document.getElementById("addform");
let task = document.getElementById("addtaskip");
let taskclr = document.getElementById("addtaskclr");
let tasklist = document.getElementById("tasklist");

i = 0;
document.getElementById("addtask").addEventListener("click", function () {
  form.removeAttribute("hidden");
});

function addTask() {
  i++;

  if (task.value == "") {
    alert("Please enter a task");
    return;
  }

  let tskid = "tsk" + i;
  let li = document.createElement("li");
  let delbtn = document.createElement("button");

  li.setAttribute("class", "task");
  // li.setAttribute("class", "list-group-item");
  li.setAttribute("id", tskid);

  delbtn.setAttribute("onclick", "del(this.id)");
  delbtn.setAttribute("class", "delbtn");
  delbtn.setAttribute("id", tskid);
  delbtn.textContent = "Delete";

  li.textContent = task.value;
  tasklist.appendChild(li);
  li.appendChild(delbtn);

  form.setAttribute("hidden", true);
  task.value = "";
  toggleTaskHeading();
}
function del(tid) {
  let litsk = document.getElementById(tid);
  tasklist.removeChild(litsk);
  toggleTaskHeading();
}

function toggleTaskHeading() {
  const heading = document.getElementById("tasklist-heading");
  const tasklist = document.getElementById("tasklist");
  if (tasklist.getElementsByTagName("li").length > 0) {
    heading.style.display = "";
  } else {
    heading.style.display = "none";
  }
}

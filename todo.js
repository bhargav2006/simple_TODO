let form = document.getElementById("addform");
let task = document.getElementById("addtaskip");
// let taskbtn = document.getElementById("addtaskbtn");
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
  li.setAttribute("class", "task");
  li.setAttribute("id", tskid);
  let delbtn = document.createElement("button");
  delbtn.setAttribute("onclick", "del(this.id)");
  delbtn.setAttribute("class", "delbtn");
  delbtn.setAttribute("id", tskid);
  delbtn.textContent = "Delete";
  li.textContent = task.value;
  tasklist.appendChild(li);
  li.appendChild(delbtn);
  form.setAttribute("hidden", true);
  task.value = "";
}
function del(tid) {
  let litsk = document.getElementById(tid);
  tasklist.removeChild(litsk);
}

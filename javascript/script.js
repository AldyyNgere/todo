// DATABASE TODO
const dbActivity = [];
const dbDueTime = [];
const dbDones = ["Yeay finally done", "Iam aweosome", "Yes I did it"];

// DATA TODO MASUK
document.getElementById("add").onclick = (e) => {
  e.preventDefault();

  const activity = document.forms["todo-form"]["activity"].value;
  const dueTime = document.forms["todo-form"]["dueTime"].value;
  dbActivity.push(activity);
  dbDueTime.push(dueTime);
  dataProcess();
  document.forms["todo-form"].reset();
};

// PROSES DATA TODO
function dataProcess() {
  clearData();
  for (let i = 0; i < dbActivity.length; i++) {
    const dataActivity = dbActivity[i];
    const dataDueTime = dbDueTime[i];

    templateTodo(dataActivity, dataDueTime, i);
  }
}

// TEMPLATE DATA TODO
function templateTodo(activity, dueTime, index) {
  let tr = document.createElement("tr");
  let tdActivity = document.createElement("td");
  tdActivity.textContent = activity;
  tr.appendChild(tdActivity);
  let tdDueTime = document.createElement("td");
  tdDueTime.textContent = dueTime;
  tr.appendChild(tdDueTime);
  let tdButton = document.createElement("td");
  const btnDone = document.createElement("button");
  btnDone.textContent = "Done";
  btnDone.onclick = function () {
    todoDone(index);
  };
  tdButton.appendChild(btnDone);
  tr.appendChild(tdButton);
  const tbody = document.getElementById("tbody-todo");
  tbody.appendChild(tr);
}

// FUNGSI BUTTON DONE
function todoDone(index) {
  dbActivity.splice(index, 1);
  dbDueTime.splice(index, 1);
  let randomDones = getRandomDones();
  let alertDone = dbDones[randomDones];
  alert(alertDone);
  dataProcess();
}
// MENDAPATKAN RANDOM ALERT DONE
function getRandomDones() {
  return Math.floor(Math.random() * dbDones.length);
}

// CLEAR DATA TODO
function clearData() {
  const tbody = document.getElementById("tbody-todo");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// FUNGSI TOMBOL RESET
document.getElementById("reset").onclick = function () {
  document.forms["todo-form"].reset();
};

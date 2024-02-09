const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ""){
    alert("write something!!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    saveData();
  }
  inputBox.value = '';
}

listContainer.addEventListener("click", function(val){
  if(val.target.tagName === "LI"){
    val.target.classList.toggle("checked");
  }
  else if(val.target.tagName === "SPAN"){
    val.target.parentElement.remove();
  }
  saveData();
});

document.addEventListener("keydown", function(e){
  console.log(e);
  if(e.key === "Enter"){
    e.preventDefault();
    addTask(e);
  }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
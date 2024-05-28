function start() {
  const inputEl = document.getElementById("input");
  inputEl.addEventListener("click", showDropDown);
  inputEl.addEventListener("keypress", search);
  document.addEventListener("click", hideDropDown);
}
start();

function search(e) {
  const compArray = ["HTML", "CSS", "REACT", "JAVASCRIPT"];
  let inputValue = document.getElementById("input").value;
  console.log(inputValue);
  inputValue = inputValue + e.key;
  let index = compArray.indexOf(inputValue);
  console.log(index);
  if (index >= 0) {
    console.log("object");
    const dropDown = document.getElementById("dropDown");
    console.log(dropDown);
    dropDown.innerText = inputValue;
  } else {
    dropDown.innerText = "";
  }
}

function hideDropDown(e) {
  if (e.target.id !== "input") {
    const dropDown = document.getElementById("dropDown");
    if (dropDown) {
      dropDown.remove();
    }
  }
}

function showDropDown() {
  const dropDown = document.getElementById("dropDown");
  if (!dropDown) {
    const div = document.createElement("div");
    div.setAttribute("id", "dropDown");

    const child1 = document.createElement("p");
    child1.innerText = "HTML";
    div.appendChild(child1);

    const child2 = document.createElement("p");
    child2.innerText = "CSS";
    div.appendChild(child2);

    const child3 = document.createElement("p");
    child3.innerText = "JAVASCRIPT";
    div.appendChild(child3);

    const child4 = document.createElement("p");
    child4.innerText = "REACT";
    div.appendChild(child4);

    document.body.appendChild(div);
  }
}

let textArea = document.querySelector(".textArea");
let button = document.querySelector(".button");
let mainbody = document.querySelector("#mainbody");
let addpara = document.querySelector("#addpara");

function createPara() {
  let x = document.createElement("button");
  addpara.append(x);
  x.classList.add("para")
  x.innerText = textArea.value;
  button.innerText = "submit";
  x.addEventListener("click",()=>{
    x.classList.toggle("complete")
  })
  return x;

}

button.addEventListener("click", () => {
  if (textArea.value === "") {
    button.innerText = "write smthng";
    return;
  }
  else{
  createPara();
  textArea.value = "";
}
});



let newPara = document.createElement("p");
newPara.innerText= "Loser will do the dishes😊";
let insert = document.querySelector(".first");
insert.prepend(newPara)
newPara.classList.add("newPara")
let reset = document.querySelector(".reset");
let btns = document.querySelectorAll(".box");
let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let flag = true;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    
        if(btn.innerText !=="") return;
        if(flag == true){
            btn.innerText = "X";
            flag = false;
        }
        else{
            btn.innerText = "O";
            flag = true;
        }
        checkWinner();
})
})

reset.addEventListener(("click"),()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.disabled = false;
    })
    flag = true;
    winner.innerText = "Winner"
    newPara.innerText= "Loser will do the dishes😊";
})
let winner = document.querySelector("#win");

function checkWinner(){
    for(let pattern of winnerPattern){
        let pattern1Val = btns[pattern[0]].innerText;
        let pattern2Val = btns[pattern[1]].innerText;
        let pattern3Val = btns[pattern[2]].innerText;
        if(pattern1Val!="" && (pattern1Val===pattern2Val) &&         (pattern2Val===pattern3Val)){
            winner.innerText = pattern1Val + " wins!";
            btns.forEach(btn => btn.disabled = true);
            newPara.innerText=winner.innerText+" the free card" ;
            newPara.style.color = "red"
        }
}
}

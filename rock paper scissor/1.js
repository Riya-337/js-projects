let btn1 = document.querySelectorAll(".btn1")
let btn4 = document.querySelector(".btn4")
let restart = document.querySelector(".restart")
let flag = true;
let player1Choice = null;
let player2Choice = null;
let c1 =0;
let c2 =0;
btn1.forEach((btn) => {
    btn.addEventListener("click",()=>{

        const choice = btn.dataset.choice;
        if(flag){
            player1Choice = choice;
            flag = false;
        }
        else{
            player2Choice = choice;
            flag = true;
            winner(player1Choice,player2Choice);
        }
    });
    
});



function winner(player1, player2){
if(player1 == player2){
    btn4.innerHTML = "its a tieeee!!!";

}else if(
    (player1 === "rock" && player2 === "scissor") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissor" && player2 === "paper")
  ) {
    btn4.innerText = "player 1 wins!!!"

}
else{
    btn4.innerText = "player 2 wins!!!"

}

}


restart.addEventListener("click",()=>{
    player1Choice = null;
    player2Choice = null;
    btn4.innerText = "who is the winner?";
    flag=true;
    c1 = 0;
    c2 = 0;

})

let result = document.querySelector(".result");
while(restart){
    if (btn4.innerText == "player 1 wins!!!"){
        c1++;
    }
    else if( btn4.innerText == "player 2 wins!!!"){
        c2++
    }
    else{
        continue;
    }
}

let para1 = document.createAttribute("p")
let para2 = document.createAttribute("p")
let final = document.createAttribute("h2")
result.append(para1);
result.append(para2);
para1.append(final);
result.addEventListener("click",()=>{
    para1.innerText = c1;
    para2.innerText = c2;
    if(c1>c2){
        final.innerText = "player1 wins the final game!!"
    }
    else if(c1<c2){
        final.innerText = "player 2 wins the final game!!"
    }
    else{
        final.innerText = "its a tie!!"
    }

})

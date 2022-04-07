const btns = document.querySelectorAll(".buttons button");
const time = document.querySelector(".time");
const guess = document.querySelector(".win");
const img = document.querySelector(".image");
const sc= document.getElementById("sc");
const v = document.getElementById("var");
const grey = document.querySelector("grey");
const sound = new Audio("dices.mp3");

startGame();

let i=5,ti=Math.floor(Math.random()*6)+1,score=0;


btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
       var clik = btn.getAttribute("value");
       v.innerText = `Selected Variable:${clik}`;
       console.log(clik+" "+ti);
       if(clik==ti){
           score++;
           sc.innerText=`Score: ${score}`
           guess.innerText="Your guess was right";
           grey.style.backgroundColor="aliceblue";
       }else{
        guess.innerText="Your guess was wrong"; 
       }
    })
})




function startGame(){
    window.addEventListener("keydown",()=>{
        time.innerText=`The dice will change in ${i} seconds`;
        const b = setInterval(increment,1000);
        diceThrow();
    })
}

function diceThrow(){
     
     img.style.backgroundImage = `url("images/dice${ti}.png")`;
     ti = Math.floor(Math.random()*6)+1;
}

function increment(){
    if(i==0){
        i=5;
        diceThrow();
        sound.play();
    }
    
    else
    i--;
    time.innerText = `The dice will change in ${i} seconds`;
}


    

const btns = document.querySelectorAll(".buttons button");
const guess = document.querySelector(".win");
const img = document.querySelector(".image");
const sc= document.getElementById("sc");
const time = document.querySelector(".time");
const v = document.getElementById("var");
const grey = document.querySelector(".grey");
const sound = new Audio("dices.mp3");
const startButton = document.querySelector(".start-button button");

startButton.addEventListener("click",()=>{
    startGame();
    diceThrow();
    guess.innerText="Your guess is wrong";
    startButton.remove();
});

let i=5,ti=Math.floor(Math.random()*6)+1,score=0;
let once=1;

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
       var clik = btn.getAttribute("value");
       v.innerText = `Selected Variable:${clik}`;
       if(clik==ti && once==1){
           score++;
           sc.innerText=`Score: ${score}`
           guess.innerText="Your guess was right";
           grey.style.backgroundColor="aliceblue";
           guess.style.color="#393E46";
           once++;
           console.log(once);
       }else{
        guess.innerText="Your guess was wrong"; 
       }
    })
})




function startGame(){
    time.style.display="inline";
        time.innerText=`The dice will change in ${i} seconds`;
        const b = setInterval(increment,1000);
        diceThrow();
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
        once=1;
    }
    else
    i--;
    time.innerText = `The dice will change in ${i} seconds`;
    //console.log(once);
    grey.style.backgroundColor="#393E46";
    guess.style.color="aliceblue";
}


    


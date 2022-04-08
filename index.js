// getting all the HTML elements required for manipulation

const btns = document.querySelectorAll(".buttons button");
const guess = document.querySelector(".win");
const img = document.querySelector(".image");
const sc= document.getElementById("sc");
const time = document.querySelector(".time");
const v = document.getElementById("var");
const grey = document.querySelector(".grey");
const sound = new Audio("dices.mp3");
const startButton = document.querySelector(".start-button button");


// declaring all the constants required for functions.
let i=5,ti=Math.floor(Math.random()*6)+1,score=0;
let once=1;

// adding event listener to start button and removing it
startButton.addEventListener("click",()=>{
    startGame();
    diceThrow();
    guess.innerText="Your guess is wrong";
    startButton.remove();
});

// startGame function which starts the game. 
function startGame(){
        time.style.display="inline";
        // using template literals for changing the seconds
        time.innerText=`The dice will change in ${i} seconds`;
        // using setInterval method to call "increment" function every second
        const b = setInterval(increment,1000);
        diceThrow();
    }

// diceThrow function which picks a random dice face
function diceThrow(){
       // using template literals to change the image
        img.style.backgroundImage = `url("images/dice${ti}.png")`;
        ti = Math.floor(Math.random()*6)+1;
}

// increment function
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
    grey.style.backgroundColor="#393E46";
    guess.style.color="aliceblue";
}

// adding event listeners to all the buttons and check if guess is right or wrong
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
       }else if(clik==ti && once>1){
          guess.innerText="Your guess was right";
       }else{
        guess.innerText="Your guess was wrong"; 
       }
    })
})









    


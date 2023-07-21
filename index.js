let computerGuess;
let userGuess = [];
let maxGuess;
let music1 = new Audio('./music/audio1.mp3')
let music2 = new Audio('./music/audio2.mp3')
let remainValue;
let userNumber;

const init = ()=>{
    computerGuess = Math.floor(Math.random() * 100+1);
    document.getElementById("game-start").style.display= "none" ;
    document.getElementById("new-start").style.display= "none" ;
} 
init()

const startGame=()=>{
    document.getElementById("game-start").style.display= "block" ;
    document.getElementById("front-dbox").
    style.display="none"
   
music2.play();
    
}

let startAgain=()=>{
 
window.location.reload();
music2.play();
}

const inputValue=()=>{
     userNumber=Number(document.getElementById("myInput").value);
    userGuess =[...userGuess,userNumber];
    music1.play();
    document.getElementById("guess").innerHTML= userGuess;
     document.getElementById("attemps").innerHTML=
    userGuess.length

    //check the value is high or low
if(userGuess.length < maxGuess){
    if(userNumber>computerGuess){
       
        document.getElementById("guess-heading").innerHTML = "Your guess is High 😲";
        document.getElementById("myInput").value="";
       
    }
    else if(userNumber<computerGuess){
        document.getElementById("guess-heading").innerHTML = "Your guess is low 😔";
        document.getElementById("myInput").value="";
    }
    else{
        document.getElementById("guess-heading").innerHTML = "Your guess is correct 😍👍🎉";
        document.getElementById("myInput").value="";
        document.getElementById("myInput").setAttribute("disabled",true);
        document.getElementById("new-start").style.display= "inline" ;
        document.getElementById("icons").innerHTML="✅"
        startGame();
        music1.pause();
        music2.play();
    }
}else {
    if(userNumber>computerGuess) {
        document.getElementById("guess-heading").innerHTML = `You Loose!!😔 correct number was ${computerGuess}`;
        document.getElementById("myInput").value="";
        document.getElementById("myInput").setAttribute("disabled",true);
        document.getElementById("new-start").style.display= "inline" ;
        document.getElementById("icons").innerHTML="❌"
        startGame();
        music2.play();
        music1.pause();
    }
    else if(userNumber<computerGuess){
        document.getElementById("guess-heading").innerHTML = `You Loose!!😔 correct number was ${computerGuess}`;
        document.getElementById("myInput").value="";
        document.getElementById("myInput").setAttribute("disabled",true);
        document.getElementById("new-start").style.display= "inline" ;
        document.getElementById("icons").innerHTML="❌"
        startGame();
        music2.play();
        music1.pause();
    }
    else{
        document.getElementById("guess-heading").innerHTML = "Your guess is correct 😍👍🎉"
        document.getElementById("myInput").value=""
        document.getElementById("myInput").setAttribute("disabled",true);
        document.getElementById("new-start").style.display= "inline" ;
        document.getElementById("icons").innerHTML="✔"
        startGame();
        music2.play();
        music1.pause();
    }
}

}

const easyMode = ()=> {
   
    
    maxGuess=10;
 startGame();
 document.getElementById("data-info").innerHTML=`Easy Mode you have ${ maxGuess} attempts `
 
 }
 const heardMode =() => {
     maxGuess = 5;
     startGame();
     document.getElementById("data-info").innerHTML=`Heard Mode you have ${ maxGuess} attempts `
 }

let isDark = false;
let mode = document.getElementById("mode")
 mode.innerHTML="Dark Mode"
darkFunction=()=>{
  isDark = !isDark
  if(isDark){
    document.body.classList.add("dark-mode");
     mode.innerHTML="Light Mode"
     
}else {
    document.body.classList.remove("dark-mode");
       mode.innerHTML="Dark Mode"
}

} 
    


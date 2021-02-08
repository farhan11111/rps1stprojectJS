let userscore=0;
let computerscore=0;
const userscore_span= document.getElementById("user_score");
const computerscore_span=document.getElementById("computer_score");
const scoreboard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scisor_div=document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber= Math.floor(Math.random() * 3);
	return choices[randomNumber];

}
function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "scisor";
}


function win(userChoice, computerChoice){
	 const smalluserword = "user".fontsize(3).sub();
     const smallcompword = "comp".fontsize(3).sub();
     const userChoice_div =  document.getElementById(userChoice);
     userscore++;
     userscore_span.innerHTML = userscore;
     computerscore_span.innerHTML = computerscore;
 	 result_p.innerHTML = `${convertToWord(userChoice)}${smalluserword}  beats  ${convertToWord(computerChoice)}${smallcompword}  ,You Win!`;
	 userChoice_div.classList.add('green_glow');
 	 setTimeout(() => userChoice_div.classList.remove('green_glow'), 500);
}

function lose(userChoice, computerChoice){
 computerscore++;
 userscore_span.innerHTML = userscore;
 computerscore_span.innerHTML = computerscore;
 const smalluserword = "user".fontsize(3).sub();
 const smallcompword = "user".fontsize(3).sub();
 result_p.innerHTML = `${convertToWord(userChoice)}${smalluserword}  loses  ${convertToWord(computerChoice)}${smallcompword}  ,You lost!`;
 userChoice_div.classList.add('red_glow');
 setTimeout(() => userChoice_div.classList.remove('red_glow'), 500);;
}
function draw(userChoice, computerChoice){
 userscore_span.innerHTML = userscore;
 computerscore_span.innerHTML = computerscore;
 const smalluserword = "user".fontsize(3).sub();
 const smallcompword = "user".fontsize(3).sub();
 result_p.innerHTML = `${convertToWord(userChoice)}${smalluserword}  equals  ${convertToWord(computerChoice)}${smallcompword}  ,its a draw!`;
 userChoice_div.classList.add('gray_glow');
 setTimeout(()=> userChoice_div.classList.remove('gray_glow'), 500);
}


function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
   	case "rs":
   	case "pr":
   	case "sp":
    win(userChoice, computerChoice);
   	break;
   	case "rp":
   	case "ps":
   	case "sr":
   	lose(userChoice, computerChoice);
   	break;
   	case "rr":
   	case "pp":
   	case "ss":
   	draw();
   	break;

   }
 

}


function main(){
 rock_div.addEventListener('click', ()=> game("r"));
 
 paper_div.addEventListener('click', ()=> game("p"));
 
 scisor_div.addEventListener('click', ()=> game("s"));
 
}

main();
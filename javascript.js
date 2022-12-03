function computerSelection(){
    let x = Math.floor(Math.random() * 10);
    if((x)%5 == 0){
        return "scissor";
    }else if((x)%2 == 0){
        return "rock";
    }else if((x)%2 != 0){
        return "paper";
    }
}

function playerSelection(){
    let userInput = prompt('Enter Rock, Paper, or Scissor');
    userLowerCase = userInput.toLowerCase();
    if(userLowerCase==='rock' || userLowerCase==="paper" || userLowerCase==="scissor"){
         return userLowerCase;
     }else{
        return "Invalid";
      }
    }



function game(){
    let i = 5;
    let computerwon = 0;
    let playerwon = 0;
    let tie = 0;

    while(i>0){

    let computer = computerSelection();
    let player = playerSelection();

    if(player=="Invalid"){
     continue;
    }else{
     i--;
    }

    if(computer===player){
        tie++;
    }else if(computer === "rock" && player == "paper"){
        playerwon++;
    }else if(computer === "scissor" && player == "paper"){
        computerwon++;
    }else if(computer === "rock" && player == "scissor"){
        computerwon++;
    }else if(computer === "paper" && player == "scissor"){
        playerwon++;
    }else if(computer === "paper" && player == "rock"){
        computerwon++;
    }else if(computer === "scissor" && player == "rock"){
        playerwon++;
    }else{
        continue;
    }

    }

    if(computerwon==playerwon){
        console.log("It's a tie");
        
    }else if(computerwon>playerwon){
        console.log("Sorry, You Lost!");
       
    }else if(computerwon<playerwon){
        console.log("Hurrah, You Won!");
        
    }
    console.log(`Computer Score: ${computerwon}`);
    console.log(`Your Socre: ${playerwon}`);
    console.log(`Tie Matches: ${tie}`);

}

game();
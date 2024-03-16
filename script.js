let userscore=0
let compscore=0

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const option=["rock","paper","scissor"]
  const randIdx= Math.floor(Math.random()*3)
  return option[randIdx];

}

const drawgame=()=>{
    console.log("Draw")
};

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const showWinner=(userwin)=>{
    if(userwin){
        userscore++
        userscorepara.innerHTML=userscore
        console.log("Win")
        msg.innerText="Winner"
    }
    else{
        console.log("Lose")
        compscore++
        compscorepara.innerHTML=compscore
        msg.innerText="Loser"
    }

}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    //Generate computer choice
    const CompChoice=genCompChoice();
    console.log("Comp choice=",CompChoice)

    if(userchoice==CompChoice){
        //Draw
        drawgame();
        msg.innerText="Draw"
    

    }
    else{
        let userwin=true;
        
        if(userchoice=="rock"){
            ///scissor,paper
            userwin=CompChoice=="paper"?false:true;
           
        }
        else if(userchoice=="paper"){
            userwin=CompChoice=="scissor"?false:true;
        }
        else{
            userwin=CompChoice=="rock"?false:true;
        }
        showWinner(userwin)
    }
   
}


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    console.log("choice is selected",userchoice);
    playgame(userchoice);
});
});


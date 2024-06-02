let boxes=document.querySelectorAll('.tick');
let newgame=document.querySelector('.newgame');
let turnno=true;
let msg=document.querySelector(".msg");
let arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText===""){
            if(turnno){
                box.innerText="O";
                turnno= false;
            }
            else {
                box.innerText="X";
                turnno=true;
              
            }
            box.disable=true;
            checkwinner();
        }
       
    })
   
       
})
const showwinner=(winner)=>{
    if(msg){
        msg.innerText=`winner of the game is ${winner}`;
        boxes.forEach((box)=>box.disable=true);
    }

} 

const checkwinner = () => {
    for (let pattern of arr) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") { 
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                return; // Stop further checks after a winner is found
            }
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        if (msg) {
            msg.innerText = "It's a draw!";
        }
    }
};
    if(newgame){
        newgame.addEventListener("click",()=>{
           
            boxes.forEach((box)=>{
                box.innerText="";
                box.disable=false;
                console.log("click")
            });
            if(msg){
                msg.innerText=" ";
            }
            turnno=true;
        });
       
    }

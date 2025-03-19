let buttons = document.querySelectorAll('.btns button');
let reset_btn= document.querySelector('.reset');
let nwegamebtn= document.querySelector('#newgame');
let msgContainer = document.querySelector('.msg-Container');
let msg = document.querySelector('#msg');





let arr=Array.from(buttons);
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]; 

const disabledButtons=()=>{
    for(let button of buttons){
      button.disabled = true;
    }
}

const enabledButtons=()=>{
  for(let button of buttons){
    button.disabled = false;
    button.innerText='';
    msgContainer.classList.add('hide');
  }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledButtons();
}
let checked=true;
arr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    
    if (checked==true){ 
        button.innerText= 'X';
        checked=false;
    }
    else{
      button.innerText='O';
      checked=true;
    }
    button.disabled=true;

    checkwinner();
  })
})

const checkwinner=()=>{
  for (let pattren of winPatterns){
    let pos1val=  buttons[pattren[0]].innerText;
    let pos2val=  buttons[pattren[1]].innerText;
    let pos3val=  buttons[pattren[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val=== pos2val && pos2val === pos3val ){
        showWinner(pos1val);
      }
    }
  }
  
const resetgame = ()=>{
  checked= true;
  enabledButtons();
}

}

reset_btn.addEventListener('click',enabledButtons);
nwegamebtn.addEventListener('click',enabledButtons)

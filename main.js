
//getting interactive elements the butttons in header and divs in game-cell
const statusHead = document.querySelectorAll('.header-button');
const gameCells = document.querySelectorAll('.game-cell');
const footer = document.querySelector('.footer button');


//game variables
let xIsNext = true;
let xWins = 0;
let oWins = 0;


//functions for eventhandlers
const move = (e) =>{
  if(e.target.innerHTML==='X' || e.target.innerHTML==='O'){
    return;
  }

  if(xIsNext){
    e.target.innerHTML= 'X';
    xIsNext = !xIsNext;
  }else{
    e.target.innerHTML= 'O';
    xIsNext = !xIsNext;
  }
}

const restart = (e) =>{
  for(const cellDiv of gameCells){
    cellDiv.innerHTML = '';
  }
}

//eventhandlers
for(const cellDiv of gameCells){
  cellDiv.addEventListener('click', move);
}
footer.addEventListener('click',restart);

//functions
const cpuPlay = () =>{
  
}

const isWinner =(p)=> ////if p wins return true
{
  let N = 9;
  let boardCopy = [...gameCells];
    for (let i = 0; i < N; i = i + 3)
    {
        if (
            boardCopy[i] == p &&
            boardCopy[i + 1] == p &&
            boardCopy[i + 2] == p
           )
        {
            return true;
        }
    }
    for (let i = 0; i < N - 6; i++)
    {
        if (
            boardCopy[i] == p &&
            boardCopy[i + 3] == p &&
            boardCopy[i + 6] == p
           )
        {
            return true;
        }
    }
    if (
        boardCopy[0] == p &&
        boardCopy[4] == p &&
        boardCopy[8] == p
       )
    {
        return true;
    }
    if (
        boardCopy[2] == p &&
        boardCopy[4] == p &&
        boardCopy[6] == p
       )
    {
        return true;
    }
    return false;
}



statusHead[0].innerHTML = `X  :   ${xWins}`;
statusHead[1].innerHTML = `O  :   ${oWins}`;
let buttons = document.getElementsByClassName("card");
let message = document.getElementById("message");
let turn = 0;
let symbols = ['O', 'X'];

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    document.getElementById('reset').onclick = startGame;
    startGame();
  }
};

function somebodyWon() {
  //Spaces:
  // 0 1 2
  // 3 4 5
  // 6 7 8
  //Is this the last turn? If so, and no win, then game is over and its a draw
  return checkLineForWin([0, 1, 2]) || checkLineForWin([3, 4, 5]) || checkLineForWin([6, 7, 8]) || checkLineForWin([0, 3, 6]) || checkLineForWin([1, 4, 7]) || checkLineForWin([2, 5, 8]) || checkLineForWin([0, 4, 8]) || checkLineForWin([2, 4, 6]);
}

function checkLineForWin(line) {
  //Should return T or F
  //login for checking whether there are all X. or all Os on the given line

  let first = buttons[line[0]].innerHTML;
  if (first != '' && first == buttons[line[1]].innerHTML && first == buttons[line[2]].innerHTML) {
    return true;
  }
  return false;
}

function startGame() {
  turn = 0;
  message.innerHTML = 'Now it is ' + symbols[(turn + 1) % 2] + ' turn';
  for (let i = 0; i < buttons.length; i++) {
    //Blank out the innerHTML for the spaces
    buttons[i].addEventListener('click', takeSpace);
    buttons[i].innerHTML = '';
  }
}
function takeSpace() {
  turn++;

  this.innerHTML = symbols[turn % 2];
  this.removeEventListener('click', takeSpace);

  if (somebodyWon()) {
    message.innerHTML = symbols[turn % 2] + ' won! Yay!';
    removeClicksFromSpaces();
  } else if (turn == 9) {
    message.innerHTML = message.innerHTML = "It is a draw! Please play again.";
    removeClicksFromSpaces();
  } else {
    message.innerHTML = "It is " + symbols[(turn + 1) % 2] + "'s turn!'";
  }
}

function removeClicksFromSpaces() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', takeSpace);
  }
}

/*
let top_left=document.getElementById('box-top-left');
let top_middle=document.getElementById('box-top-middle');
let top_right=document.getElementById('box-top-right');
let center_left=document.getElementById('box-center-left');
let center_middle=document.getElementById('box-center-middle');
let center_right=document.getElementById('box-center-right');
let bottom_left=document.getElementById('box-bottom-left');
let bottom_middle=document.getElementById('box-bottom-middle');
let bottom_right=document.getElementById('box-bottom-right');
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      game();
    }
}


    // Create event listeners on every button
    let buttons = document.getElementsByClassName("card");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",
        function(){top_left.innerHTML ="X";
                  top_middle.innerHTML="O";
                  top_right.innerHTML="X";
                  center_left.innerHTML="X";
                  center_middle.innerHTML="O";
                  center_right.innerHTML="O";
                  bottom_left.innerHTML="X";
                  bottom_middle.innerHTML="O";
                  bottom_right.innerHTML="X";
});
    }
function game(){

let random_player = Math.floor(Math.random() * 2) + 1;
let random_symbol = Math.floor(Math.random() * 10) + 1;
function x_or_o(){

    if(random_symbol % 2 == 0){
        random_symbol = 'X';
        document.document.getElementById('box').innerHTML = "X";
        alert("Player "+ random_player +" will go first and will be "+ random_symbol );
      }else{
        random_symbol = 'O';
        document.document.getElementById('box').innerHTML = "O";
        alert("Player "+ random_player  + " will go first and will be " + random_symbol);
      }
  }
  const board=[[top_left,top_middle,top_right],[center_left,center_middle,center_right],[bottom_left,bottom_middle,bottom_right]];
  let win1=0;
  let win2=0;
  let win3=0;
  let win4=0;
  let win5=0;
  let win6=0;
  let win7=0;
  let win8=0;
function game(){
for(let x=0;x < board.length;x++){
  switch (board[i][j]) {
    case board[0][0]:
      win3+=1;
      win4+=1;
      win7+=1;
      document.top_left.disabled = true;
      break;
    case board[0][1]:
      win3+=1;
      win5+=1;
      document.top_middle.disabled = true;
      break;
    case board[0][2]:
      win3+=1;
      win6+=1;
      win8+=1;
      document.top_right.disabled = true;
      break;
    case board[1][0]:
      win1+=1;
      win4+=1;
      document.center_left.disabled = true;
      break;
    case board[1][1]:
      win1+=1;
      win5+=1;
      win7+=1;
      win8+=1;
      document.center_middle.disabled = true;
      break;
    case board[1][2]:
      win1+=1;
      win6+=1;
      document.center_right.disabled = true;
      break;
    case board[2][0]:
      win2+=1;
      win4+=1;
      win8+=1;
      document.bottom_left.disabled = true;
      break;
    case board[2][1]:
      win2+=1;
      win5+=1;
      document.bottom_middle.disabled = true;
      break;
    case board[2][2]:
      win2+=1;
      win6+=1;
      win7+=1;
      document.bottom_right.disabled = true;
      break;

      }
    }
  }
}
*/
var turn = 0;
board = [" ", " ", " ",
         " ", " ", " ",
         " ", " ", " "];

//returns the appropriate character
function player(){
  if (turn == 0){
    turn = 1;
    return "X";
  }
  else {
    turn = 0;
    return "O";
  }
}

//checks if a single space is filled
function spaceIsFilled(value){
  if (value == " "){
    return false;
  }

  else {
    return true;
  }
}

//updates the board for our use
function updateBoard(){
  ids = [ '#place0', '#place1', '#place2',
          '#place3', '#place4', '#place5',
          '#place6', '#place7', '#place8'];

  for(var i = 0; i < 9; i++){
      board[i] = ($(ids[i]).attr('value'));
  }
  // ["", "X",...]
}

//checks if the board is full
function boardIsFull(){
  for (var i = 0; i < 9; i++){
    if (board[i] == " ") return false;
  }

  return true;
}


function checkWinner(){
//checks player 2 win conditions
  if (board[0] == "X" && board[1] == "X" && board[2] == "X"){
    window.alert("Player one you have won");
  }else if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
    window.alert("Player one you have won");
  }else if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
    window.alert("Player one you have won");
  }else if (board[0] == "X" && board[3] == "X" && board[6] == "X"){
    window.alert("Player one you have won");
  }else if (board[1] == "X" && board[4] == "X" && board[7] == "X"){
    window.alert("Player one you have won");
  }else if (board[2] == "X" && board[5] == "X" && board[8] == "X"){
    window.alert("Player one you have won");
  }else if (board[0] == "X" && board[4] == "X" && board[8] == "X"){
    window.alert("Player one you have won");
  }else if (board[2] == "X" && board[4] == "X" && board[6] == "X"){
    window.alert("Player one you have won");
  }//checks player 2 win conditions
  else if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
    window.alert("Player two you have won");
  }else if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
    window.alert("Player two you have won");
  }else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
    window.alert("Player two you have won");
  }else if (board[0] == "O" && board[3] == "O" && board[6] == "O"){
    window.alert("Player two you have won");
  }else if (board[1] == "O" && board[4] == "O" && board[7] == "O"){
    window.alert("Player two you have won");
  }else if (board[2] == "O" && board[5] == "O" && board[8] == "O"){
    window.alert("Player two you have won");
  }else if (board[0] == "O" && board[4] == "O" && board[8] == "O"){
    window.alert("Player two you have won");
  }else if (board[2] == "O" && board[4] == "O" && board[6] == "O"){
    window.alert("Player two you have won");
    }
}

function changeId(){
  $("input").click(function(){

    //game system
    if (boardIsFull()){
      window.alert("Game over");
    }

    else {
      var id = "#" + this.id;
      var value = $(id).attr('value'); // either be " ", "X", "O"
      // this = "input"
      // this.id = the id
      //check if it's already filled
      if (!spaceIsFilled(value)){ //if it's not filled
        $(id).val(player());
      }

      else if (spaceIsFilled(value)){ //if it's filled
        window.alert("The space is already filled.");
      }
      //updates the board
      updateBoard();
      //checks for win conditions
      checkWinner();
      // return $(id).val(player());
    }
  });

}

// function checkFilled(){
//   if ($(changeId()).val() == "X"){
//     $(changeId()).val() !== "O";
//   }else if ($(changeId()).val() == "O"){
//     $(changeId()).val() !== "X";
//   }
// }


$(document).ready(changeId);



// function player(turn){
//     for (turn = 0; turn < 9; turn+=1) {
//         if (turn==0 || turn ==2 || turn==4 || turn==6 || turn==8){
//             player_one_turn = True
//             var player_symbol = $('#place').val();
//         }else if (turn==1 || turn==3 || turn==5 || turn==7) {
//             player_one_turn = False
//          }
//     }



// console.log("player_one_turn")

            // function myGreeting(){
            //   console.log('button was clicked');
            //   var userName = $('#username').val();
            //   console.log(userName);
            //   var userAge = $('#userage').val();
            //   console.log(userAge);
            //   $('#pink').text('welcome, ' + userName)
            // }

// $(document).ready(setup);

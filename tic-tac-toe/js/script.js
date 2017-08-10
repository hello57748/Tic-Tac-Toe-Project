var turn = 0;
var last_person = "#player1";
var most_recent = "";
var win = false;
var winner = "";
var character = " "
board = [character, character, character,
         character, character, character,
         character, character, character];

  function checkWinner(){
  //checks player 2 win conditions
    if (board[0] == "X" && board[1] == "X" && board[2] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[0] == "X" && board[3] == "X" && board[6] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[1] == "X" && board[4] == "X" && board[7] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[2] == "X" && board[5] == "X" && board[8] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[0] == "X" && board[4] == "X" && board[8] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[2] == "X" && board[4] == "X" && board[6] == "X"){
      win = true;
      winner = $(most_recent).attr('value');
    }//checks player 2 win conditions
    else if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[0] == "O" && board[3] == "O" && board[6] == "O"){
      win = true;
      winner = $(most_recent).attr('value');
    }else if (board[1] == "O" && board[4] == "O" && board[7] == "O"){
      win = true;
      winner = $(most_recent).attr('value');
      }else if (board[2] == "O" && board[5] == "O" && board[8] == "O"){
        win = true;
        winner = $(most_recent).attr('value');
      }else if (board[0] == "O" && board[4] == "O" && board[8] == "O"){
        win = true;
        winner = $(most_recent).attr('value');
      }else if (board[2] == "O" && board[4] == "O" && board[6] == "O"){
        win = true;
        winner = $(most_recent).attr('value');
        }
      }


function declareWinner(){
  if (win == true){
    window.alert(winner + " you have won.");
  }
}


//returns the appropriate character
function player(){
  if (turn == 0){
    turn = 1;
    most_recent = "#player1";
    last_person = "#player2";
    return "X";
  }
  else {
    turn = 0;
    most_recent = "#player2";
    last_person = "#player1";
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
      if (win){
        return;
      }

      else {
        if (!spaceIsFilled(value)){ //if it's not filled
          $(id).val(player());
        }

        else if (spaceIsFilled(value)){ //if it's filled
          window.alert("The space is already filled.");
        }
        //updates the board
        updateBoard();

        // return $(id).val(player());
        if (turn === 0){
          $("#player1").css("color", "red");
          $("#player2").css("color", "black");
        }

        else if (turn === 1){
          $("#player1").css("color", "black");
          $("#player2").css("color", "red");
        }
      }
    }

    checkWinner();
    declareWinner();

  });

}

$(document).ready(function(){
  $("#player1").css("color", "red");
  changeId();

});

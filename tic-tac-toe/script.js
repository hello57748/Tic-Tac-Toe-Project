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

function changeId(){
  $("input").click(function(){
    //updates the board
    updateBoard();

    //check for winner
    

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

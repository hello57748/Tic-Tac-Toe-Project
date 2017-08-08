for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}


function player(turn){
    for (turn = 0; turn < 9; turn+=1) {
        if (turn==0 || turn ==2 || turn==4 || turn==6 || turn==8){
            player_one_turn = True
            var player_symbol = $('#place').val();
        }else if (turn==1 || turn==3 || turn==5 || turn==7) {
            player_one_turn = False
         }
    }



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

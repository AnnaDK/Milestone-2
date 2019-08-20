$(document).ready(function(){
    
 /*Rules block*/
$(".rules").click(function() {
  $( ".block_text" ).toggle( 300 );
});

/*Puzzle layout*/
$("#field_2").click(function(){
$(".game_field").addClass("displayNone"); 
$(".game_field_2").removeClass("displayNone");
});
$("#field_1").click(function(){
$(".game_field_2").addClass("displayNone"); 
$(".game_field").removeClass("displayNone");
});

$(".btn").click(function(){
		$(this).toggleClass("disabled");
		});

  
 
$("#mario").on("click", function() {
    
    $(".tile1").removeClass("tile01").addClass("mario01")
 	$(".tile2").removeClass("tile02").addClass("mario02")
 	$(".tile3").removeClass("tile03").addClass("mario03")
    $(".tile4").removeClass("tile04").addClass("mario04")
    $(".tile5").removeClass("tile05").addClass("mario05")
 	$(".tile6").removeClass("tile06").addClass("mario06")
 	$(".tile7").removeClass("tile07").addClass("mario07")
    $(".tile8").removeClass("tile08").addClass("mario08")
    $(".tile9").removeClass("tile09").addClass("mario09")
 	$(".tile10").removeClass("tile010").addClass("mario010")
 	$(".tile11").removeClass("tile011").addClass("mario011")
    $(".tile12").removeClass("tile012").addClass("mario012")
    $(".tile13").removeClass("tile013").addClass("mario013")
 	$(".tile14").removeClass("tile014").addClass("mario014")
 	$(".tile15").removeClass("tile015").addClass("mario015")
    });
$("#mario_team").on("click", function() {
 	$(".tile1").removeClass("tile01").addClass("mario_team01")
 	$(".tile2").removeClass("tile02").addClass("mario_team02")
 	$(".tile3").removeClass("tile03").addClass("mario_team03")
    $(".tile4").removeClass("tile04").addClass("mario_team04")
    $(".tile5").removeClass("tile05").addClass("mario_team05")
 	$(".tile6").removeClass("tile06").addClass("mario_team06")
 	$(".tile7").removeClass("tile07").addClass("mario_team07")
    $(".tile8").removeClass("tile08").addClass("mario_team08")
    $(".tile9").removeClass("tile09").addClass("mario_team09")
 	$(".tile10").removeClass("tile010").addClass("mario_team010")
 	$(".tile11").removeClass("tile011").addClass("mario_team011")
    $(".tile12").removeClass("tile012").addClass("mario_team012")
    $(".tile13").removeClass("tile013").addClass("mario_team013")
 	$(".tile14").removeClass("tile014").addClass("mario_team014")
 	$(".tile15").removeClass("tile015").addClass("mario_team015")
    
});

/*

    $(".tile1").removeClass("tile01").addClass("mario01_3x3")
 	$(".tile2").removeClass("tile02").addClass("mario02_3x3")
 	$(".tile3").removeClass("tile03").addClass("mario03_3x3")
    $(".tile4").removeClass("tile04").addClass("mario04_3x3")
    $(".tile5").removeClass("tile05").addClass("mario05_3x3")
 	$(".tile6").removeClass("tile06").addClass("mario06_3x3")
 	$(".tile7").removeClass("tile07").addClass("mario07_3x3")
    $(".tile8").removeClass("tile08").addClass("mario08_3x3") 
        
        
    



*/
}); 







/*Game functionality and logic. Move tiles. Shuffel*/
function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}


 function shuffle() {
    
//Use nested loops to access each cell of the 4x4 grid
for (var i=1;i<=4;i++) { //For each row of the 4x4 grid
   for (var j=1;j<=4;j++) { //For each column in this row
  
    var k=Math.floor(Math.random()*4+1); //Pick a random row from 1 to 4
    var m=Math.floor(Math.random()*4+1); //Pick a random column from 1 to 
    
   swapTiles("cell"+i+j,"cell"+k+m);} //Swap the look & feel of both cells
  } 
 }


/*for the 3x3 grid
function shuffle () {
    
    for (var i=1;i<=3;i++) {
   for (var j=1;j<=3;j++) { 
  
    var k=Math.floor(Math.random()*3+1);
    var m=Math.floor(Math.random()*3+1); 
    
   swapTiles("cell"+i+j,"cell"+k+m);} 
  } 
 }*/

    



function clickTile(i,j) {
    
  var cell = document.getElementById("cell"+i+j);
  var tile = cell.className;
 if (tile!="tile16") { 
       //Checking if white tile on the right
       if (j<4) {
         if ( document.getElementById("cell"+i+(j+1)).className=="tile16") {
           swapTiles("cell"+i+j,"cell"+i+(j+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (j>1) {
         if ( document.getElementById("cell"+i+(j-1)).className=="tile16") {
           swapTiles("cell"+i+j,"cell"+i+(j-1));
           return;
         }
       }
         //Checking if white tile is above
       if (i>1) {
         if ( document.getElementById("cell"+(i-1)+j).className=="tile16") {
           swapTiles("cell"+i+j,"cell"+(i-1)+j);
           return;
         }
       }
       //Checking if white tile is below
       if (i<4) {
         if ( document.getElementById("cell"+(i+1)+j).className=="tile16") {
           swapTiles("cell"+i+j,"cell"+(i+1)+j);
           return;
         }
       }}}
  




 

// Puzzle images and images array

let mario = [{ src: "assets/images/puzzle_images/mario.png" }];
let mario_luigi = [{ src: "assets/images/puzzle_images/mario_luigi.jpg" }];
let mario_team = [{ src: "assets/images/puzzle_images/mario_team.jpg" }];
let mario_toad = [{ src: "assets/images/puzzle_images/mario_toad.jpg" }];

let puzzleImages = [mario, mario_luigi, mario_team, mario_toad];

let timerFunction;

//----------------Loading the game . Chooising a level and the puzzle image.

//load() https://api.jquery.com/load/ jQuery API documentation
//The .val() method https://api.jquery.com/val/#val is primarily used to get the values of form elements such as input, select and textarea
//How to get the value of selected radio button in a group using jQuery information and code found:
//https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
//This function let us choice puzzle image and level of game. 
//We have information wich image choisen by toggle class "active" on "dashboard-btn"
//and wich game level from "radio:checked"

$(function load() {

    let gameField = $("#gameLevels :radio:checked").val(); /*.val() method is primarily used to get the values of form elements such as input */
    puzzleGame.loadingGame(puzzleImages[0], gameField);
    let currentImage = puzzleImages[0];
    $(".dashboard-btn").click(function () { /*button Another Photo, changing picture*/

        $(this).toggleClass("active");
        let gameField = $("#gameLevels :radio:checked").val();
        if ($("#mario").hasClass('active')) {
            $(this).removeClass('active');

            puzzleGame.loadingGame(puzzleImages[0], gameField);
            currentImage = puzzleImages[0];
        }
        else if ($("#mario_luigi").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.loadingGame(puzzleImages[1], gameField);
            currentImage = puzzleImages[1];
        }
        else if ($("#mario_team").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.loadingGame(puzzleImages[2], gameField);
            currentImage = puzzleImages[2];
        }
        else if ($("#mario_toad").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.loadingGame(puzzleImages[3], gameField);
            currentImage = puzzleImages[3];
        }
        else {
            puzzleGame.loadingGame(puzzleImages, gameField);
        }

    });
    $('#gameLevels :radio').change(function () {
        let gameField = $(this).val();
        puzzleGame.loadingGame(currentImage, gameField);
    });
});

//------------------------------Game Audio
// Adding Audio to Your App with jQuery information and code found: https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97

$('button').click(function () {
    playButtonAudio();
});

function playButtonAudio() {
    $('#choice')[0].currentTime = 0;
    $('#choice')[0].play();
}

function playCheckButton() {

    $('#checked')[0].currentTime = 0;
    $('#checked')[0].play();

}
function playWinner() {

    $('#winner')[0].currentTime = 0;
    $('#winner')[0].play();

}
$('.check_btn').click(function () {
    playCheckButton();
});

function playDropLi() {

    $('#step_0')[0].currentTime = 0;
    $('#step_0')[0].play();

}
//Mute audio code and explanation found at: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/

$("#muteButton").click(function () {
    $(".sound").toggle();
    muteAudio();
});
let silence = false;

function muteAudio() {

    let allaudio = $('audio');

    if (silence) {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
        }
        silence = false;
    }
    else {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = true;
        }
        silence = true;
    }

}

 //Building game object
 //How to buid a game object reference: https://www.w3schools.com/graphics/game_canvas.asp
// 

let puzzleGame ={
    startTime: new Date().getTime(),
    countingSteps: 0,
    loadingGame: function(puzzleImages, gameField){
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        /*this.tick();*/
        this.buildImage(puzzleImages, gameField);
        this.swap("#sortable li");
        },
 
buildImage: function(puzzleImages, gameField) {
    let n = gameField;
    if (window.matchMedia('(min-width: 575.98)').matches){
        n = gameField || 4;
        puzzleWidth = 400;
    } else {
        n = gameField||3;
        puzzleWidth = 300;
    }
    let loadingImage = puzzleImages[0];
    let percent = 100 / (n - 1);
    $("ul").empty();  
    
    for (let i = 0; i < n * n; i++ ){
        let x = (percent * ( i % n)) + "%";
        let y =  (percent * Math.floor(i / n)) + "%";
        let li = $('<li data-value="' + (i) + '"></li>');
        
       
        (li).css({
                background: 'url(' + loadingImage.src + ')',
                backgroundSize:(n * 100) + '%',
                backgroundPosition: x + ' ' + y 
            })
                .width(puzzleWidth / n)
                .height(puzzleWidth / n)
                $("ul").append(li).randomize("li");
            
        
    }
   
  
} ,      
   swap: function () {
        $("li").draggable({
            snap: "#droppable",
            snapMode: "outer",
            revert: "invalid",
            helper: "clone"
        });
        $("li").droppable({
                drop: function (event, ui) {
                var $dragElem = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);
                playDropLi();

                
                puzzleGame.swap(this);
                puzzleGame.swap($dragElem);
            }
        });}}          
    
   





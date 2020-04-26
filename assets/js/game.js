// Puzzle images and images array

let mario = [{ src: "assets/images/puzzle_images/mario.png" }];
let mario_luigi = [{ src: "assets/images/puzzle_images/mario_luigi.jpg" }];
let mario_team = [{ src: "assets/images/puzzle_images/mario_team.jpg" }];
let mario_toad = [{ src: "assets/images/puzzle_images/mario_toad.jpg" }];

let puzzleImages = [mario, mario_luigi, mario_team, mario_toad];



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

let puzzleGame = {
    startTime: new Date().getTime(),
    countingSteps: 0,
    loadingGame: function (puzzleImages, gameField) {
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
        this.buildImage(puzzleImages, gameField);
        this.swap("ul li");
        $("ul li").shuffle();
    },

    buildImage: function (puzzleImages, gameField) {
        n = gameField || 4;
        if (window.matchMedia('(min-width: 575.98px)').matches) {
            puzzleWidth = 400;

        } else {
            puzzleWidth = 300;

        }
        var percent = 100 / (n - 1);
        let loadImage = puzzleImages[0];
        $("ul").empty();
        for (var i = 0; i < n * n; i++) {
            var x = (percent * (i % n)) + "%";
            var y = (percent * Math.floor(i / n)) + "%";/* data-* attributes allow us to store extra information on standard, semantic HTML elements*/
            var li = $('<li class ="item" data-value="' + (i) + '"></li>');
            (li).css({
                background: 'url(' + loadImage.src + ')',
                backgroundSize: (n * 100) + '%',
                backgroundPosition: x + ' ' + y,

            })
                .width(puzzleWidth / n)
                .height(puzzleWidth / n)
            $("ul").append(li);
        }
        $("ul").shuffle("li");

    },
   

    swap: function () {
        $("li").draggable({
            snap: "#droppable",
            snapMode: "outer",
            revert: "invalid",
            helper: "clone"
        });
        /*The replaceAll() method is an inbuilt method in jQuery which is used to replace selected elements with new HTML elements. Parameters: This method accepts two parameter as mentioned above and described below: content: It is the required parameter which is used to specify the content to insert.*/
        /*drop jQuery ui event*/
        $("li").droppable({
            drop: function (event, ui) {
                var $draggableLi = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);
                playDropLi();
                 puzzleGame.stepCount++;


                liArray = $("li").map(function () { return $(this).attr("data-value"); });


                //Return an array with the data-value of "li"
                //https://api.jquery.com/map/

                if (isSorted(liArray)) {
                    $( "li" ).draggable({
                    disabled: true});
                    $('.list-group').empty().html($('#puzzleCompleted').html());
                    playWinner();
                    
                    $('ul>li').css({ "border": "none" });
                    $('.list-group').empty().html($('#puzzleCompleted').html());
                
                    //the  puzzle borders gone as soon as puzzle complete for clear image
                  }
                else {
                   
                    var start= new Date().getTime();
                    $("#counting_Steps").text(puzzleGame.stepCount);
                    $(".countingSteps").text(puzzleGame.stepCount+1);
                    $(".countingTime").text(parseInt((start - puzzleGame.startTime) / 1000, 10));
}
                puzzleGame.swap(this);
                puzzleGame.swap($draggableLi);
            }
        });
    },
   

/* tick() function to use in games 
setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.
The first parameter is a function to be executed.
The second parameter indicates the number of milliseconds before execution.
JavaScript Timing Events https://www.w3schools.com/js/js_timing.asp
Elapsed time is simply the amount of time that passes from the beginning of an event to its end.
parseInt -  change to string
$('#timer').text() just display it in the game*/

    tick: function () {
        var start = +new Date();
        var elapsed = parseInt((start - puzzleGame.startTime) / 1000, 10);
        
        $('#timer').text(elapsed);
        window.setTimeout("puzzleGame.tick()", 1000);
    },
};

 

$.fn.shuffle = function () {
    $.each(this.get(), function (_index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function () {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
};







function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != i)
            return false;
    }
    return true;

}




/*---Resizing the screen will make window pop up. The best way I found right now to fix problem with puzzle on small screens. 
Code will be changed in future if will find better solution
More explanation in README.md--*/


$(window).resize(function () {

    if (window.matchMedia('(min-width: 575.98px)').matches) {
        $('#sortable').empty().html($('#puzzleReset').html());

    }
    return false;
});

/*--Modal--*/
$('#myModal').modal('handleUpdate');







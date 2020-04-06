


let mario = [{ src: "assets/images/puzzle_images/mario.png" }];
let mario_luigi = [{ src: "assets/images/puzzle_images/mario_luigi.jpg" }];
let mario_team = [{ src: "assets/images/puzzle_images/mario_team.jpg" }];
let mario_toad = [{ src: "assets/images/puzzle_images/mario_toad.jpg" }];


images =[mario, mario_luigi, mario_team, mario_toad];


//----------------Loading the game . Chooising a level and a puzzle image.

$(function load() {
    var gridSize = $("#gameLevels :radio:checked").val(); /*.val() method is primarily used to get the values of form elements such as input */
    puzzleGame.startGame(images[0], gridSize);
    currentImage=images[0];
    $(".dashboard-btn").click(function () { /*button Another Photo, changing picture*/

        $(this).toggleClass("active");
        var gridSize = $("#gameLevels :radio:checked").val(); 
        if ($("#mario").hasClass('active')) {
            $(this).removeClass('active');

            puzzleGame.startGame(images[0], gridSize)
            currentImage=images[0];
        }
        else if ($("#mario_luigi").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.startGame(images[1], gridSize)
            currentImage=images[1];
        }
        else if ($("#mario_team").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.startGame(images[2], gridSize)
            currentImage=images[2];
        }
        else if ($("#mario_toad").hasClass('active')) {

            $(this).removeClass('active');
            puzzleGame.startGame(images[3], gridSize)
            currentImage=images[3];
        }
        else {
            puzzleGame.startGame(images, gridSize)
        }

    });
    $('#gameLevels :radio').change(function () {
        var gridSize = $(this).val();
        puzzleGame.startGame(currentImage, gridSize);
       


    });
});








//------------------------------Audio

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
$('.check_btn').click(function () {
    playCheckButton();
});
//----------- mute audio  original code from: https://css-tricks.com/forums/topic/mute-unmute-sounds-on-website/

$("#muteButton").click(function () {
    $(".sound").toggle();
    muteAudio()
});
var silence = false;

function muteAudio() {

    var allaudio = $('audio');

    if (silence) {
        for (var j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
        }
        silence = false;
    }
    else {
        for (var j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = true;
        }
        silence = true;
    }

};

let timerFunction;

let puzzleGame = {  //building game object
    countingSteps: 0,
    startTime: new Date().getTime(),
    startGame: function (images, gridSize) {
        this.setImage(images, gridSize);

        $("#sortable").randomize();
        this.swap("#sortable li");
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
    //-----------setTimeout() Method https://www.w3schools.com/jsref/met_win_settimeout.asp
    //-----------elapsedTime https://stackoverflow.com/questions/3528425/how-to-display-moving-elapsed-time-in-jquery
    
    tick: function () {
        var now = new Date().getTime();
        var elapsedTime = parseInt((now - puzzleGame.startTime) / 1000, 10);
        
        $('#timer').text(elapsedTime);
        timerFunction = setTimeout(puzzleGame.tick, 1000);
    },

    //----https://stackoverflow.com/questions/5794574/getting-jquery-sortable-droppable-and-draggable-to-work-together
    // "Getting jQuery sortable, droppable and draggable to work together"
    swap: function (element) {
        $(element).draggable({
            snap: "#droppable",
            snapMode: "outer",
            revert: "invalid",
            helper: "clone"
        });
        $(element).droppable({
            drop: function (event, ui) {
                var $dragElem = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);
                playDropLi();

                currentList = $("#sortable>li").map(function (i, el) { return $(el).attr("data-value"); });
                if (sorted(currentList)) {
                    $('.list-group').empty().html($('#gameOver').html());
                    playWinner();
                    $('#sortable>li').css({ "border": "none" });

                }
                else {
                    var now = new Date().getTime();
                    puzzleGame.stepCount++;
                    $(".stepCount").text(puzzleGame.stepCount);
                    $(".timeCount").text(parseInt((now - puzzleGame.startTime) / 1000, 10));
                }

                puzzleGame.swap(this);
                puzzleGame.swap($dragElem);
            }
        });
    },
/* Set and break the image. Empty the #sortable element . 
The gridSize indicates that how many parts the image needs to be broken 
each side (horizontally as well as vertically). 
  Some help on this site
 https://www.bennadel.com/blog/1009-jquery-demo-creating-a-sliding-image-puzzle-plug-in.htm*/

    setImage: function (images, gridSize) {
        gridSize = gridSize || 4; //default 4

        var percentage = 100 / (gridSize - 1);
        var image = images[0];
        $("#sortable").empty();
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + "%";
            var ypos = (percentage * Math.floor(i / gridSize)) + "%";
            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image.src + ')',
                'background-size': (gridSize * 100) + '%',
                'background-position': xpos + ' ' + ypos,
                'width': 400 / gridSize,
                'height': 400 / gridSize
            });
            $("#sortable").append(li);
        }
        $("#sortable").randomize("li");
        
    }
};
$('li').draggable();

/*Randomize a sequence of elements with jQuery from https://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery*/
$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};


function sorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != i)
            return false;
    }
    return true;

};

$('#myModal').modal('handleUpdate');

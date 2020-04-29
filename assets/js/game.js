// Puzzle images and images array

let mario = [{ src: "assets/images/puzzle_images/mario.png" }];
let mario_luigi = [{ src: "assets/images/puzzle_images/mario_luigi.jpg" }];
let mario_team = [{ src: "assets/images/puzzle_images/mario_team.jpg" }];
let mario_toad = [{ src: "assets/images/puzzle_images/mario_toad.jpg" }];

let puzzleImages = [mario, mario_luigi, mario_team, mario_toad];



/*Loading the game. Choosing a level and the puzzle image.
This function lets us choose the puzzle image and level of the game. 
We have information wich image chosen by toggle class "active" on "dashboard-btn"
and wich game level from "radio: checked"*
 Load data from the server and place the returned HTML into the matched elements using load()
 reference: https://api.jquery.com/load/ jQuery API documentation.
 The .val() method https://api.jquery.com/val/#val is primarily used to get the values of form elements such as input, select, and textarea.
 Getting the value of the selected radio button in a group. reference:
https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
*/

$(function load() {

    let gameField = $("#gameLevels :radio:checked").val();
    puzzleGame.loadingGame(puzzleImages[0], gameField);
    let currentImage = puzzleImages[0];
    $(".dashboard-btn").click(function () {

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


/*Building the game puzzleGame 
including all functionlities: time and steps count, loading and breaking the image
adding dgaggable and droppable events, shuffle.
How to buid a game  i could learn at "Games & Visualizations khanacademy" https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations,
 "Mastering jQuery UI" google books (https://books.google.nl/books?id=nFjTBgAAQBAJ&pg=PA24&dq=jQuery+puzzle&hl=en&sa=X&ved=0ahUKEwiR6c_4y4jpAhVNLewKHY9mA_kQ6AEIKDAA#v=onepage&q=jQuery%20puzzle&f=false
 and in Game tutorial from w3schools https://www.w3schools.com/graphics/game_intro.asp
*/

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
    /*Function that will build a broken image for the puzzle.
     Get the number of columns and rows. Get the puzzle width. Empty the element for the game. 
     Loop over the columns and row to create each of the pieces. Set the background image of each li.
     Broken effect can be achieved by using  background-image and background-position styles.
    Assigning data attribute(it allow us to store extra information on the standard, semantic HTML elements)  
     Set the CSS properties. Add to the "ul" element. Use the function to shuffle elements.
	*/
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
            var y = (percent * Math.floor(i / n)) + "%";
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

    /*Using jQuery UI to make elements draggable, droppable, and swap them.
    Checking if the puzzle sorted with function isSorted(). Returning complete image without the borders. 
    Making draggable elements disable. Congratulating the player with "Winner" audio and with
    displayed time and amount of moves were taken .
    jQuery API documentation https://api.jqueryui.com/category/interactions/
    The replaceAll() https://api.jquery.com/replaceAll/ method is an inbuilt method in jQuery which is used to replace selected elements with new HTML elements. 
    Return an array with the data-value of "li" https://api.jquery.com/map/*/


    swap: function () {
        $("li").draggable({
            snap: "#droppable",
            snapMode: "outer",
            revert: "invalid",
            helper: "clone"
        });

        $("li").droppable({
            drop: function (event, ui) {
                var $draggableLi = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);
                playDropLi();
                puzzleGame.stepCount++;


                liArray = $("li").map(function () { return $(this).attr("data-value"); });

                if (isSorted(liArray)) {
                    $("li").draggable({
                        disabled: true
                    });
                    $('.list-group').empty().html($('#puzzleCompleted').html());
                    playWinner();

                    $('ul>li').css({ "border": "none" });
                    $('.list-group').empty().html($('#puzzleCompleted').html());


                }
                else {

                    var start = new Date().getTime();
                    $("#counting_Steps").text(puzzleGame.stepCount);
                    $(".countingSteps").text(puzzleGame.stepCount + 1);
                    $(".countingTime").text(parseInt((start - puzzleGame.startTime) / 1000, 10));
                }
                puzzleGame.swap(this);
                puzzleGame.swap($draggableLi);
            }
        });
    },


    /*Setting  timer effect for the puzzle
 tick() function 
   setTimeout(function, milliseconds)
   Executes a function, after waiting a specified number of milliseconds.
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


/* function to randomize li elements in the puzzle
code from stackoverflow https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order/39492527#39492527
and based on Fisher–Yates shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
another function is also working and I was using it is Shuffle Children from css tricks https://css-tricks.com/snippets/jquery/shuffle-children/
*/

$.fn.shuffle = function () {
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
};

/*Function to check if our puzzle is sorted. We have to loop through the array and compare the values.
after trying more methods this one only works without fail. 
 "Check if all values of the array are equal"
 https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal*/

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] != i) {
            return false;
        }
    }
    return true;
}




/*--Resizing the screen will make window pop up. The best way I found right now to fix problem with puzzle on small screens. 
Code will be changed in future if i will find better solution
More explanation in README.md
reference about  Window.matchMedia() at https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
*/


$(window).resize(function () {

    if (window.matchMedia('(min-width: 575.98px)').matches) {
        $('#sortable').empty().html($('#puzzleReset').html());

    }
    return false;
});



/* function reset form in modal window.  */

$("#resetBtn").click(function () {
    $(".form-control").val("");
});

/* Code for sending an email from user to developer.
all information found https://www.emailjs.com/
Code written according documentation from https://www.emailjs.com/docs/rest-api/send/ 
*/


let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
        service_id: "gmail",
        template_id: "contact_form",
        user_id: "user_s4RVkzg99PAXo4f1SDiFd",
        template_params: {
            "name": contactForm.name.value,
            "email": contactForm.email.value,
            "message": contactForm.message.value
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $("#contact-form").empty().html("<h3 style='padding-top:1em;'>Your email has been sent ! <br /> <button class='btn btn-outline-light'  onclick='window.location.reload(true);'><i class='fas fa-check'></i></button></h3>")

    }).fail(function (error) {
        console.log('Oops... ' + JSON.stringify(error));
        $("#contact-form").empty().html("<h3 style='padding-top:1em;'>Oops, something went wrong...<br /> Please, try again <br /> <button class='btn btn-outline-light'  onclick='window.location.reload(true);'><i class='far fa-times-circle'></i></button></h3>")
    });
}); 

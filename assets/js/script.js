var images = [
                { src: '../images/puzzle_images/mario.png'},
                { src: '../images/puzzle_images/mario_team.jpg' },
                { src: '../images/puzzle_images/mario_toad.jpg'}
                
            ];
$(function (){
    var gridSize = $('#levelPanel :radio:checked').val();
    imagePuzzle.startGame(images, gridSize);
    $('#mario').click(function(){
        var gridSize = $('#levelPanel :radio:checked').val()// Take the updated gridSize 
        imagePuzzle.startGame(images, gridSize);
    });
    $('#mario_team').click(function(){
        var gridSize = $('#levelPanel :radio:checked').val()// Take the updated gridSize 
        imagePuzzle.startGame(images, gridSize);
    });
    $('#mario_toad').click(function(){
        var gridSize = $('#levelPanel :radio:checked').val()// Take the updated gridSize 
        imagePuzzle.startGame(images, gridSize);
    });
    
    $('#levelPanel :radio').change(function (e){
        var gridSize = $(this).val();
        imagePuzzle.startGame(images, gridSize);
    });
});

var timerFunction;

var imagePuzzle= {
    stepCount: 0,
    startTime: new Date().getTime(),
    startGame: function(images, gridSize){
        this.setImage(images, gridSize);
        $('#playPanel').show();
        $('#sortable').randomize();
        this.enableSwapping('#sortable li');
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
    tick: function(){
        var now = new Date().getTime();
        var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
        $('#timerPanel').text(elapsedTime);
        timerFunction = setTimeout(imagePuzzle.tick, 1000);
    },
    
}
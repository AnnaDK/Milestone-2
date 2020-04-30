<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">

# Interactive Frontend Development Milestone Project

![responsive Screens](assets/images/images_for_readme/ms2_responsive.png)


# PUZZLE GAME 

"Puzzle Game" is a fun puzzle for children. It has a choice of images for the game field, three levels of difficulty, child-friendly design, and easy control features. The game has a timer and a step counter.

[Click To Play !](https://annadk.github.io/PuzzleGame/)

****
## Table of Contents


## 1. [UX](#ux) 
   * ### [Project Goals](#project-goals)
   * ### [Player Goals](#player-goals)
   * ### [Developer Goals](#developer-goals)
   * ### [User Stories](#user-stories)
   * ### [Game Design](#game-design)
   * ### [Wireframes](#wireframes)

## 2. [Features](#features)
   * ### [Existing Features](#existing-features)
   * ### [Features Left To Implement](#features-left-to-implement)

## 3. [Technologies Used](#technologies-used)

## 4. [Testing](#testing)

## 5. [Credits](#credits)
---------------------------------------------------------------

## [UX](#ux)

### [Project Goals](#project-goals)

This game is designed for primary school children *. Collecting puzzles promotes the development of figurative and logical thinking, voluntary attention, perception, in particular, the distinction of individual elements in color, shape, and size.
Also, it teaches children how to perceive the connection between the part and whole The complexity of the puzzle within the same number of elements is determined by the pattern, and the main criterion is the number of elements itself - the higher it is, the puzzle is bigger and more complex.

*(Dutch children begin school at age four-five)

### [Player goals](#player-goals)

 Player goals:

- Attractive design for kids
- Intuitive control
- An exciting game process
- Motivation in goal achievement
- The visual result when passing the game
- The ability to choose levels and picture for the puzzle

Puzzle game met these goals:

- Bright colors, clear design, attractive puzzle images 
- Game management easy for kids
- Player straight see the result of the game process and want to continue till puzzle will be solved
- The player can keep playing and improve results
- The results visually available during the game process and when the puzzle completed
- The game allows you to combine different images and levels of difficulty 


### [Developer Goals](#developer-goals)

- Create the Second Milestone Project which meets requirements from Code Institute
- Create the independent project after learning of JavaScript and  jQuery.
- More practise in HTML, CSS, JavaScript
- The second  independent project in the portfolio of the developer
- Create an interesting and functional game which is fun to play.

### [User Stories](#user-stories)

As a child who plays "Puzzle Game" I want:

1. Easy to understand what type of game it is
2. Easy understand how to play
3. Have a funny sound following my action
4. Have a fun game design
5. Interesting recognizable images as a puzzle layout
6. To see how fast I can complete a puzzle
7. Try to play different levels

### [Game Design](#game-design)

#### Puzzle theme

Famous "Super Mario" game chosen as a design reference for this project.
Characters of the game recognizable and famous among children. Also the "Super Mario" theme suitable for both genders. 
This project created is only for educational purposes for "Code Institute" and as a part of the developer portfolio.
For commercial use of the game images for puzzle layout and the background image should be replaced.

##### Background

The background image is a famous well recognizable image from the "Super Mario" game.

##### Puzzle images:

The selection of images chosen to represent different levels. From easiest to more difficult one
Mario: The easiest image. Clear image with big details.
Mario and Luigi:  More details but still bigger objects, easy to complete image.
Mario-Team:  More details, smaller objects. The more difficult level than the first two images.
Mario-Toad: A lot of details, small objects, randomly positioned around an image. The most difficult puzzle image.

 ### [Wireframes](#wireframes)

The wireframes were created using  [Balsamiq Wireframes](https://balsamiq.com/).

Web site design and mobile display [here](assets/references/wireframes_images/wireframes_puzzle.pdf)

----------------------------------------------------------------------


## [Features](#features)

### [Existing Features](#existing-features)

#### Main display

Title of the game

 1. Game field :

    * Puzzle image. 
      The game starts always with the easiest level "Mario" image and 3 x 3 layout. 
      It makes it easy for small children to get familiar with the game.
      With the left click and hold of the mouse or finger touch and hold on mobile devices,
      the player can move and swap puzzle pieces around the game field.

 2. Game control field:

    * Time and Step section:
      Displaying timer and number of moves when players moving a puzzle pieces.
      The timer automatically starts as soon as the game open. 
      The player can renew a timer and start it from zero just clicking on the puzzle image button.
      Step counting starts as soon as the first puzzle piece moved.

 3. Rules, Contact and Audio section: 

    * The question mark icon is responding on mouse click or finger touch on mobile devices. 
      A Modal window with a short game instruction will pop up.
    * The star icon On/ will open a "Contact Us" modal.
      It gives the ability for users to contact the developer
    * Audio On/Off icon - responding on mouse click or finger touch on mobile devices.
      Making game sound on/off. 
      
  4. Puzzle images section:
     * Big buttons representing images of the puzzle. 
      Responding on mouse click or finger touch on mobile devices.  
      Easy to choose and swap between images.
      
  5. Game levels section: 
     * Radio check buttons. 
     Responding on mouse click or finger touch on mobile devices. 
     The Player can choose between  "Easy"- 3x3, "Medium"- 4x4, and "Hard"- 5x5 puzzle layout.   

<p align="center">
   <img width="500" height="" src="assets/images/images_for_readme/ms2_main_screen.png">
</p>
  
   

#### Puzzle complete display:

   * Game field :
      Completed puzzle image. 
      New html element replacing game-comtrol field:
      Congratulation text. Time and amount of steps.
      Button "Play again" responding on mouse click or finger touch on mobile devices will bring the player back to the main screen.

<p align="center">
  <img width="500" height="" src="assets/images/images_for_readme/ms2_hooray.png">
</p>

  
#### Mobile devices display

* Main display. Puzzle. Responding on finger touch.
* Game-Control section. Responding on finger touch.
  * Steps and Time display. The timer starts as soon as the game loaded.
    Step count starts from the first move of the puzzle piece.
  * <p><i class="fas fa-question"></i></p> 

  
  <p align="center">
  <img width="150"  m-5 height="" src="assets/images/images_for_readme/ms2_puzzle_mobile.png">
   <img width="150" pl-2 height="" src="assets/images/images_for_readme/ms2_control_mobile.png">
   <img width="150" p-2 height="" src="assets/images/images_for_readme/ms2_rules_mobile.png">
   <img width="150" p-2 height="" src="assets/images/images_for_readme/ms2_form_mobile.png">
</p>

 #### Tablet display 

  [Game Winner](assets/images/images_for_readme/ms2_tablet.png)
  


  

### [Features Left to Implement](#features-left-to-implement)

1. Saving game results.
   Add a "Results" button to the game control menu where is the Star icon. Keep Modal window, 
   but create a score-table instead of "Contact Us" form
   "Contact Us" feature can be moved to the footer.
   Numbering images for the playing layout
   After the end of the game, a window pops up asking "Save the result? Yes No"
   If “No”, the window closes and the main display opens.
   If "Yes", a text appears asking you to enter a name or nickname.
   The player’s name is saved with the number of puzzle images, difficulty level, time, and steps.

2. Add additional difficulty levels. The code must be added in script.js.
   Visually in the game menu "Easy" "Medium" "Hard" can be replaced with 
   "3x3", "4x4", "5x5" and extra "6x6", "7x7", "8x8" etc. added

3. Add additional images.
   When expanding the game and moving to a larger selection of possible images for the playing field, remove the buttons with pictures by replacing them with the list of possible images. The player can select an image with the radio check button from the list.
   Or use the button "Next Image". Which will switch to the next picture
   The main code for the game logic must be changed in script.js.
   In index.html to replace section with dashboard-buttons with toggle-section "List of images"


## [Technologies Used](#technologies-used)
This project uses HTML, CSS and JavaScript programming languages.

#### [Balsamiq](https://balsamiq.com/)
The project uses Balsamiqo to build wireframes in the planning stage of development.
#### [GitPod](https://www.gitpod.io/)
The project uses GitPod to build the website.
#### [JQuery](https://jquery.com/)
The project uses JQuery as JS library to make HTML document traversal and manipulative
#### [jQuery UI](https://jqueryui.com/)
The project uses jQuery UI to build functionaly of the game.
#### [Bootstrap](https://getbootstrap.com/)
The project uses the Bootstrap framework to help create some elements 
#### [FontAwesome](https://fontawesome.com/)
The project uses FonAwesome to use an icons from the library.
#### [Google Fonts](https://fonts.google.com/)
The project uses Google fonts to style the website fonts.
#### [GitHub](https://github.com/)
To store and share all project code remotely.
#### [jQuery UI Touch Punch](http://touchpunch.furf.com/)
As touch Event Support for jQuery UI
#### [Browserstack](https://www.browserstack.com/)
The project used Browserstack to test functionality on all browsers and devices.
#### [AutoPrefixer](https://autoprefixer.github.io/)
The project used AutoPrefixer to add prefixes in the CSS for cross-browser support.
#### [Google Chrome - Dev Tools]
The project used Google Chrome Dev Tools to debug code. Check responsiveness.
#### [Favicon generator](https://favicon.io/)
The project uses Favicon generator to create a puzzle favicon
#### [EmailjS](https://www.emailjs.com/)
To connect mail service to the web site and be able to receive feedback and messages from users.
#### [Audio](https://freesound.org/)
To download audio for project
#### [Audio](https://www.noiseforfun.com/)
To use audio for project from website
#### [Color Hex Color Codes](https://www.color-hex.com/)
To chooise colors and take a code for the project
#### [Stackoverflow](https://stackoverflow.com/)
To find a thouthand answers for a thouthand questions. 


## [Testing](#testing)

Automated Testing
Validation Tools
These tools were used to test the validity of the code for this project:

W3C HTML Validator was used to validate HTML.
W3C CSS validator was used to validate CSS.
JSHint was used to validate JavaScript.

### [Problems and Solutions](#problems)

## [Credits](#credits)
Text within this project was written by the developer.

#### Code

* The game idea and game design was created by the developer.
* The HTML and CSS code was written by the developer ,parts of code which not are marked by the comments.
* The Java Script code game logic and functionality was recreated using the tutorial from [Anurag Gandhi](https://www.codeproject.com/Articles/810978/Image-Puzzle-An-HTML-Game)
* All other credits, references on soursec and links are collected, organized and can be found in the document [references.md](assets/references/references.md)
  Hope it can help other students

## [Disclaimer]()
The "Puzzle Game" project is created for educational purposes.









 # Testing

 ## [Puzzle Game](https://annadk.github.io/PuzzleGame/)

 ## [README.md](https://github.com/AnnaDK/Milestone-2/blob/54c24d6c2bfaab200439a4cbd6cfd7ac637eccfc/README.md)

 ***************************
 # Automated Testing

 ### Validation services

 Services used to check the validity of the code: 

 [W3C Markup Validation used to validate HTML.](https://validator.w3.org/)<br>
 
 [W3C CSS validation  used to validate CSS.](https://jigsaw.w3.org/css-validator/)<br>
 
 [JSHint used to validate JavaScript](https://jshint.com/)<br>

 ---------------------------------------------------------------------------

  # Client stories testing

  ## User stories from readme.md :

  The game was tested by 8 children 4-10 years old and their parents.

  #### As a child who plays "Puzzle Game" I want:

  1. **Easy to understand what type of game it is**

  Each child who was asked to play this game straight could see that it's a Puzzle. It's a well recognizable game among the children. 
  Design making it obvious what type of game it is.

 
  2. **Easy understand how to play**

   Loaded broken image taking attention.  Following an intuition child beginning to move pieces of the puzzle. 

  3. **Have a funny sound following my action** 
    
   When each button on the game is pressed or the puzzle piece is moved there is an audio response.

  4. **Have a fun game design**

   The game has bright bold colors. Design is attractive to children.   No unnecessary features or game controls added. 
   Children gave a positive reaction as soon as they saw the game

  5. **Interesting recognizable images as a puzzle layout**

   The current design includes images from famous among children computer games. 
 
  6. **To see how fast I can complete a puzzle**

  The game includes a timer and step counting functions. Results can be seen during the game process and at the end of the game.

  7. **Try to play different levels**

  To challenge themselves children able to play different game levels with the same image.  Or mixing images and levels

   ------------------------------------------------------------------

 # Manual testing
 
  Information about all manual testing that has been done 
  to make sure all areas of the "Puzzle Game" are working as expected.
 
  Browsers:  **Google; Opera; Firefox ; Internet Explorer.**

 Browser  width

 xs = Extra small <576px
 
 sm = Small ≥576px
  
 md = Medium ≥768px

 lg = Large ≥992px

 xl = Extra large ≥1200px


 



 |      | XS  |  SM  |  MD  |  LG  |  XL |
 | ---- |-----| ---- | ---- | ---- | --- | 
 | Google  | Ok | Ok | Ok | Ok | Ok |
 | Firefox | Ok | Ok | Ok | Ok | Ok |
 | Opera   | Ok | Ok | Ok | Ok | Ok |
 | IE      | Ok | Ok | Ok | Ok | Ok |

  
 In each browser in each size were tested :

 Web page :
     
  * Open/Close .
  * Refresh.
  * Resize with browser window.
  * Responsiveness with dev tools.

  Design :
   
   * Colors.
   * Text shadows
   * Box shadows
   * Fonts
   * Images 

   Layout :

   * Flex box is working and responsive.
   
   Game functionality:
    
  * Droppable; Draggable 
  * Timer; Step-counting
  * All buttons are working
  * Modal windows are working
  * Contact form is working and can be submitted.
  * Audio is working
 
 -------------------------------------------------------------------------------

 # Problems discovered
  
 1. **Problems with responsivness of the Game field :**
     
     * **Problem:** <br>
       The game field had a fixed width. It cost a problem with XS small screen sizes. 
       Was not perfectly fitted in the frame. 

     * **Solution:** <br> 
       Window.matchMedia() function added in game.js. 
       Code added in game.js for changing fixed width in a smaller size and build a game 
       field according to new parameters.

     **Problem -Fixed** 

     ----------------------------

     * **Problem:**
       After the previous problem was solved new problem appeared.
       With changing screen size manually, puzzle field was loosing a square shape.
       After page refreshing everything is ok.
       When game load, no metter what size of screen- also everything ok.

     * **Solution:** 
       If screen size changed manually - the "Restart-section" appear instead of the Game Field.
       By pressing Play buttom user refreshing the page and Game field loading in the right size.

      **Problem-Fixed.**
       
       (I know it is not the best solution. But the best what I 
       could achieve right now with my level of knowledge.
       Mentioned in the section **Features Left to Implement** of the main readme.md file)

       -----------------------------------------

     * **Problem** :
     
      The previous problem still appear sometimes. With manual screen changing.
      Most of the time while opening **Dev Tools**
      After clicking on "Mobile-screen" sighn in the Dev-Tools, everything Ok.

      * **Solution**:
        Didn't found.

        **Problem- Not Fixed.**

     ------------------------------------------
        
     **How this trouble look like** :

     <p align="center">
     <img width="250"   height="" src="assets/images/images_for_readme/ms2_restart_tablet.png">
     <img width="150"  height="" src="assets/images/images_for_readme/ms2_problem.png">
     </p>
 
      -----------------------------------------------------------------
  
  2. **Problems with Contact-form  :**

      * **Problem:**
       Contact-form nor resetting after been closed if it not sent.
       If to open it again input fields still have previously filled data

     * **Solution:** 
       Function added in JS 
       to reset input fields.

      **Problem-Fixed.**

      ------------------------------------------------------------
 
  3. **Problem with Text and Box shadows :**

      * **Problem:**
       Text and box shadows wasn't seen in IE and Safari browsers

     * **Solution:** 
       Color system was changed
       From **rgb** in **hex**

      **Problem-Fixed.**

      --------------------------------------------------------------

 4. **Problems with Flex-box in IE and Firefox browsers:**

      * **Problem:**
       Flex-box layout which works perfectly in Google and Opera
       was tottaly out of the way in IE and after problem was fixed, Game-control
       section lost responsivness in Firefox

     * **Solution:** 
       For fixing page in IE browser all flex parameters in style.css were changed to **flex : 1 0 0 ;**
       For Firefox : problem  and what must be changed was discovered with **Dev Tool**
       Advice about code to Implement this solution was found on [stackowerflow](https://stackoverflow.com/)
        @-moz-document url-prefix() { } were added in mediaQuery section of style.css
 
      **Problem-Fixed.**

      -----------------------------------------------------------------------------

  5. **Problem with jQuery UI :**

      * **Problem:**
       Draggable, Droppable functionality sometimes stuck. 
       Cloned elements keep appearing.
       Happened not very often. On different devices. 
       Game was sent to 10 users to test on their devices. 
       1 user had this problem twice, during testing.
       1 user had this problem one time, during testing.
       After refreshing the page-  working OK

     * **Solution:** 
       Try to search for solution or information.
       Found mostly explanation of the same problem .
       And references on problem with jQuery UI Interactions itself. 
       Didn't find propper solution to use in my project now . 

      **Problem- Not Fixed.**

     ---------------------------------------------------------------------------------------

  6. **Problem jQuery touchPunch:**

      * **Problem:**
       Draggable, Droppable functionality 
       not workin in Firefox browser while using **Dev Tools**.
       Here screen shot with the problem
       [Screenshot](assets/images/images_for_readme/ms2_jQuery_touch_problem.png)

       


     * **Solution:** 
       I download Firefox browser on my Android mobile phone.
       check - everything working.
       

      **Problem -  working on mobile devices, not workind in Dev Tools**


  ----------------------------------------------------------------------



 # Real Time Testing.

 Asked my friends and family to check the web page on their devices.
 Play the game, send a message through the contact form. Press buttons a lot of times. Resize screen.

 **Feed back**.
 Game were checked on different mobile devices and descktops.
 Everything working apart of problems which were in description above.
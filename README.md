# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
----------------------
## I have made the below changes to finish the Project

## Downloading the Project
+ I have downloaded the skeleton of the project by using GitHub link provided by Udacity in rubric structure.
+ I have extracted the project zip file. I have gone through the code provided and identified that `app.js` file need changes mostly.
+ noticed the shuffle function in `app.js` file which was already defined by stackoverflow. Created an array named as cardList to store all the cards.
+ I have defined a function refresh to restart the game.
+ whenever window is refreshed, gameBegins method will be called and all the cards will be shuffled and appended to deck surface.   
+ I have added event listener to all the cards. By clicking on a card, openCard method will be called and status will be checked.
+ If the flag status is 1 timer will be started and displays time.
+ Based on the given conditions stars will be displayed.
+ Once a card is opened that will be disabled. Only two cards can be opened and compared at a time.
+ If two cards are matched then those two will be disabled and added to match class. Otherwise those two cards will be added unmatch class and removed from disable class.
+ moves count will be incremented for each comparison. And count for cardsFixed will be incremented based matched cards.
+ If cardsFixed is equal to 16 then timer will be stopped and a message will be displayed on the screen greeting the player. Shows number of stars the player gained and time.
+ Designed media queries for mobile view and tablet view.

"use strict";
var deckSurface = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
var cards = document.getElementsByClassName("card");
var cardList = [...cards];
// a flag variable to start the timer
let flag = 0;
// variable to store the moves count
var movesCount = 0;
var moves = document.getElementById("moves");
// array to store cards and compare cards that are opened
var store = [];
var displayTime = document.getElementById("time");
var starGrade = [...document.getElementsByClassName("fa-star")];
var starsGrade = 3;
// variable to start and stop timer
var time;
// variables to display timer
var second = 0;
var minute = 0;
var hour = 0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
// refresh function which refreshes the window by clicking on refresh button
function refresh() {
	window.location.reload();
}
window.onload = gameBegins();
// shuffling and then adding the cards to the deck
function gameBegins() {
	var changedCards = shuffle(cardList);
	var j = 0;
	while (j < changedCards.length) {
		deckSurface.append(changedCards[j]);
		j++;
	}
}
// adding event listener to all cards
for (var i = 0; i < cardList.length; i++) {
	cardList[i].addEventListener("click", openCard)
}
var cardsFixed = document.getElementsByClassName("match");
// method to show the cards
function openCard() {
	if (flag == 0) {
		runTimer();
		flag = 1;
	}
	starGrading();
	this.classList.add("card", "disable");
	this.classList.add("open");
	this.classList.add("show");
	store.push(this);
	// comparing whether opended cards are matched or not
	if (store.length == 2) {
		movesCount = movesCount + 1;
		moves.innerHTML = movesCount;
		if (store[0].children[0].classList.item(1) == store[1].children[0].classList.item(1)) {
			store[0].classList.add("match", "disable");
			store[1].classList.add("match", "disable");
			if (cardsFixed.length == 16) {
				clearInterval(time);
				Swal.fire({
					title: ' Congragulations! You Won  ' + starsGrade + ' Stars  ' + hour + ":" + minute + ":" + second,
					confirmButtonText: 'Play Again',
					customClass: {
						popup: 'animated tada'
					}
				}).then(() => {
					refresh()
				});
			}
		} else {
			store[0].classList.add("unmatch");
			store[1].classList.add("unmatch");
			store.map((card) => {
				setTimeout(() => {
					card.classList.remove("unmatch", "open", "show", "disable");
				}, 300)
			})
		}
    store = [];
	}
}
// function to give stars
function starGrading() {
	if (movesCount > 10) {
		starsGrade = 2;
		starGrade[2].style.display = "none";
	}
	if (movesCount > 20) {
		starsGrade = 1;
		starGrade[1].style.display = "none";
	}
}
// runTimer() function to strat timer
function runTimer() {
	time = setInterval(() => {
		second = second + 1;
		if (second == 59) {
			minute = minute + 1;
			second = 0;
		}
		if (minute == 60) {
			hour = hour + 1;
			minute = 0;
		}
		displayTime.innerHTML = hour + ":" + minute + ":" + second;
	}, 1000)
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

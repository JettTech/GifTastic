$(document).ready(function() { //difference from:  $(fucntion({ //; }) ???!!!  --> these both wait to trigger the JS file until the page is loaded, correct?
	console.log("Page has loaded...")

	createGifButton (searchTermArray, "Make up a class name", "") //gifArea
});

	var	searchTermArray = ["Batman", "Superman", "Poison Ivy", "Wonderwoman"];
	// var gifSearches = [];

	function createGifButton(searchArray, gifClass, gifPostArea) {
		$(gifPostArea).empty();
		for (var i = 0; i < searchArray.length; i++) {
			var button = $("<button>");
			button.addClass('gifButton');
			button.attr("data-type", "searchArray[i]"); //this assigns an attribue called 'data-type' with a value that ==== the value of the current index in the sesarchTermArray, which in this case is a superhero name (ie. batman).
			button.text(searchArray[i]); //this displays the value (in this case === a superhero name) of the item in the area.
			$(gifPostArea).append(button);
		}
	};




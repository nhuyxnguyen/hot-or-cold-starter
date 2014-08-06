
$(document).ready(function(){
	var count = 0,
		randomNum = generateNum(),
		$count = $('#count'),
		$feedback = $('#feedback'),
		$guessButton = $('#guessButton'),
		$guessList = $('#guessList'),
		$userGuess = $('#userGuess');

	function newGame() {
		count = 0;
		generateNum();
		randomNum = generateNum();
		$feedback.text('Make Your Guess!');
		$guessButton.attr('disabled', false);
		$userGuess.attr('disabled', false);
		$guessList.empty();
		$count.text(count);
	};

	function generateNum() {
		return Math.floor((Math.random() * 100) + 1);
	};

	function trackGuess() {
		count++;
		$count.text(count);
		$guessList.prepend('<li>' + $userGuess.val() + '</li>');
	};

	function guessParameters(num) {
		if(num == 0) {
			$feedback.text('Correct!');
			$guessButton.attr('disabled', true);
			$userGuess.attr('disabled', true);
		}
		else if(num <= 5) {
			$feedback.text('Mount Vesuvius');
		}
		else if(num <= 10) {
			$feedback.text('Very Hot');
		}
		else if(num <= 20) {
			$feedback.text('Hot');
		}
		else if(num <= 30) {
			$feedback.text('Warm');
		}
		else if(num <= 40) {
			$feedback.text('Cold');
		}
		else if(num <= 50) {
			$feedback.text('Very Cold');
		}
		else {
			$feedback.text('I See Penguins!');
		}
	};

	// Conditional on User's Input
	$guessButton.click(function(){
		if($userGuess.val() >= 1 && $userGuess.val() <= 100) {
			guessParameters(Math.abs($userGuess.val() - randomNum));
			trackGuess();
		}
		else{
			alert('Plase supply a number from 1 to 100');
		}
		$userGuess.val('');
		return false;
	});

	// Click to start new game
	$('.new').click(newGame);

	// Display information modal box
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});

  	// Hide information modal box
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

});
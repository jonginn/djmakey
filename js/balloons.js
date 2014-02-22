var interval = 0;
var handsLength = 0;
var isBalloonBeingMade = false;
var balloonSuccess = false;
var timeBallooning = 0;
var balloonbg = null;

var sound = document.getElementById('balloon-noise');
var successSound = document.getElementById('success-noise');
var scratchSound = document.getElementById('scratch-noise');

// The code for this is ridiculously simple and probably not very good.

$(document).ready(function() {

	Leap.loop(function(frame) {

		if (frame.hands === undefined ) { 
			var handsLength = 0 
		} else {
			var handsLength = frame.hands.length;
		}

		if(handsLength > 1){
			scratchSound.play();
		} else {
			scratchSound.pause();
		}

	});

});
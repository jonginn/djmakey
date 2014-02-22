var sound = document.getElementById('balloon-noise');
var successSound = document.getElementById('success-noise');
var scratchSound = document.getElementById('scratch-noise');

var keyW = 87, keyA = 65, keyS = 83, keyD = 68, keyF = 70, keyG = 71,
    keyUpArrow = 38, keyLeftArrow = 37, keyRightArrow = 39, keyDownArrow = 40;
var currentSoundDeck = 0;

var sounds = [
  {
    "87": successSound,
    "83": scratchSound
  },
  {
    "87": sound,
    "83": successSound
  }
];

jQuery(document).ready(function($) {
  function changeSoundDeck(keyPress, currentSoundDeck, soundsLength){

    if(keyPress === keyUpArrow){
      currentSoundDeck++;

      if (currentSoundDeck >= soundsLength){
        currentSoundDeck = 0;
      }
    }

    if(keyPress === keyDownArrow){
      currentSoundDeck--;

      if (currentSoundDeck < 0){
        currentSoundDeck = soundsLength;
      }
    }

    return currentSoundDeck;
  }

  function playSound(keyPress, currentSoundDeck){
    if(keyPress === keyW || keyPress === keyA || keyPress === keyS || keyPress === keyD){
      sounds[currentSoundDeck][keyPress].play();
    }
  }


  $(window).keydown(function( event ) {
    keyPress = event.keyCode;

    if ( event.which == 13 ) {
     event.preventDefault();
    }

    if(keyPress === keyUpArrow || keyPress === keyDownArrow){
      currentSoundDeck = changeSoundDeck(keyPress, currentSoundDeck, sounds.length);
    }

    $(".keyCode").text(keyPress + " Sound Deck: " + currentSoundDeck);

    playSound(keyPress, currentSoundDeck);

  });

});
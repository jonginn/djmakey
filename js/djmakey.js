var keyW = 87, keyA = 65, keyS = 83, keyD = 68, keyF = 70, keyG = 71,
    keyUpArrow = 38, keyLeftArrow = 37, keyRightArrow = 39, keyDownArrow = 40,
    keySpace = 32;
var currentSoundDeck = 0;

var sounds = [
  {
    "87": {
      "name": 'Fade In',
      "sound": fadeinsound,
      "loop": false
    },
    "83": {
      "name": 'Voice',
      "sound": voicesound,
      "loop": false
    }
  },
  {
    "87": {
      "name": 'Sound',
      "sound": bass_loop_2sound,
      "loop": false
    },
    "83": {
      "name": 'Scratch',
      "sound": techno_2sound,
      "loop": true
    }
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
      sounds[currentSoundDeck][keyPress]['sound'].loop = sounds[currentSoundDeck][keyPress]['loop'];
      sounds[currentSoundDeck][keyPress]['sound'].play();
    }
  }

  function stopAll(){
    $.each($('audio'), function () {
        this.loop = false;
        // this.stop();
        this.currentTime = 0;
    });
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

    if(keyPress === keySpace){
      stopAll();
    }

  });

});
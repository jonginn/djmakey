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
  "65": {
    "name": 'Voice',
    "sound": voicesound,
    "loop": false
  },
  "83": {
    "name": 'clap',
    "sound": clapsound,
    "loop": false
  },
  "68": {
    "name": 'Kick',
    "sound": kicksound,
    "loop": false
  },
  "70": {
    "name": 'invasion',
    "sound": invasionsound,
    "loop": false
  },
  "71": {
    "name": 'melodic',
    "sound": melodicsound,
    "loop": false
  }
},
{
  "87": {
    "name": 'Bass Loop',
    "sound": bass_loopsound,
    "loop": true
  },
  "65": {
    "name": 'Bass Loop 2',
    "sound": bass_loop_2sound,
    "loop": true
  },
  "83": {
    "name": 'Success',
    "sound": successsound,
    "loop": false
  },
  "68": {
    "name": 'Snares',
    "sound": snaressound,
    "loop": false
  },
  "70": {
    "name": 'techo 1',
    "sound": techno_1sound,
    "loop": false
  },
  "71": {
    "name": 'techno 2',
    "sound": techno_2sound,
    "loop": false
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
      currentSoundDeck = soundsLength - 1;
    }
  }

  $(".deck-num").text(currentSoundDeck+1);

  return currentSoundDeck;
}

function playSound(keyPress, currentSoundDeck){
  if(keyPress === keyW || keyPress === keyA || keyPress === keyS || keyPress === keyD || keyPress === keyF || keyPress === keyG){
    sounds[currentSoundDeck][keyPress]['sound'].loop = sounds[currentSoundDeck][keyPress]['loop'];
    sounds[currentSoundDeck][keyPress]['sound'].volume = 1;
    sounds[currentSoundDeck][keyPress]['sound'].play();
    $(".sound-item").text(sounds[currentSoundDeck][keyPress]['name']);
  }
}

function stopAll(){
  $.each($('audio'), function () {
      this.loop = false;
      // this.stop();
      this.volume = 0;
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

  playSound(keyPress, currentSoundDeck);

  if(keyPress === keySpace){
    stopAll();
  }

});

});
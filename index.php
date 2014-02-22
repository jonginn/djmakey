<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DJ MAKEY MAKEY</title>
  <link href='http://fonts.googleapis.com/css?family=Archivo+Black' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/style.css">
  <?php
  $dir_handle = './sound';
  $sounds = array_diff(scandir($dir_handle), array('.', '..', 'index.php', '.DS_Store', 'dj', '.gitignore'));
  ?>
  <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>


  <div class="container">
    <div class="row">
      <div class="columns eight offset-by-four first">
        <div class="box">
          <h1>DJ IN A BOX</h1>
        </div>
        <div class="box smaller">
          <p><strong>Sounds:</strong> W, A, S, D, G, F</p>
          <p><strong>Change Deck:</strong> Up, Down</p>
          <p><strong>Stop all sound</strong> Space</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="columns four offset-by-four first">
        <div class="box">
          <h2>DECK</h2>
          <span class="deck-num">1</span>
        </div>
      </div>

      <div class="columns four">
        <div class="box">
          <h2>SOUND</h2>
          <span class="sound-item"></span>
        </div>
      </div>
    </div>
  </div>


  <?php

  // Loop through the files
  foreach($sounds as $file) {
    $fileID = str_replace(".mp3", "", $file);
    ?>
    <audio id="<?php echo $fileID ?>-noise">
      <source src="sound/<?php echo $file ?>" type='audio/mpeg; codecs="mp3"'></source>
    </audio>
    <?php
  }
  ?>

  <script type="text/javascript">
  <?php
    // Loop through the files
  foreach($sounds as $file) {
    $fileID = str_replace(".mp3", "", $file);
    ?>
    var <?php echo $fileID ?>sound = document.getElementById('<?php echo $fileID ?>-noise');
    <?php
  }
  ?>
  </script>
  <script type="text/javascript" src="js/djmakey.js"></script>
</body>
</html>
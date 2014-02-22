<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DJ MAKEY MAKEY</title>
  <?php
  $dir_handle = './sound';
  $sounds = array_diff(scandir($dir_handle), array('.', '..', 'index.php', '.DS_Store', 'dj', '.gitignore'));
  ?>
  <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>

  <p class="keyCode"></p>


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
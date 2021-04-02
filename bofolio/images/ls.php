<?php
/*
  JSON list of all images files in current directory
 */
$dir = ".";

$dh = opendir($dir);

$image_files = array();

while (($file = readdir($dh)) !== false) {
    $match = preg_match("/.*\.(jpg|png|gif|jpeg|bmp|svg)/", $file);
    if ($match) {
        $image_files []= $file;
    }
}

echo json_encode($image_files);

closedir($dh);
?>
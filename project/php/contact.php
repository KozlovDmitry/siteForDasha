<?php

$to = 'siderwinder@icloud.com';
$subject = $_POST['title'];
$message = $_POST['text'];

  $result = mail($to, $subject, $message);

if($result){
  echo 'OK';
} else {
  http_response_code(500);
  echo 'ERROR';
}
?>

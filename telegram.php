<?php

$token = "6010553958:AAFdxTRtHKcVpzjqgW5fmFMHPGijpBTcEPs";
$chat_id = "-4263391128";

$c = true;


foreach ($_POST as $key => $value) {
    if ($value != "") {
        $key = str_replace('_', ' ', $key);
        $txt .= "<b>".$key."</b> ".$value."%0A";
    }
}
  
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r"); 

if ($sendToTelegram) {

} else {
    echo "Error";
}
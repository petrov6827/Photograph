<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"],
    	'message' => $_POST["message"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>
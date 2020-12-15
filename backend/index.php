<?php
/**
 * Une requête HTTP est composée notamment de :
 * - un verbe (ou une méthode) okay
 * - une URL (éventuellement avec des paramètres qu'on appelle `query params`)
 * - des headers
 * - un body
 */

function getHTTPMethod() {
    return $_SERVER['REQUEST_METHOD'];
}

function getHTTPURL() {
    // TODO: ajouter le protocole en début de chaine (http ou https)
    return $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}

function displayGET() {
    print_r($_GET);
}

function displayPOST() {
    print_r($_POST);
}



echo 'La méthode est : ' . getHTTPMethod();
echo "\n<br>";
echo 'L\'URL est : ' . getHTTPURL();
echo "\n<br>";
echo "\n";
displayGET();
echo "\n";
displayPOST();

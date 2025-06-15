<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    $to = "nettsideekspertenjonli@gmail.com";
    $subject = "Ny melding fra $name";
    $body = "Navn: $name\nE-post: $email\n\nMelding:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Takk for meldingen!";
    } else {
        http_response_code(500);
        echo "Noe gikk galt. Prøv igjen senere.";
    }
} else {
    http_response_code(403);
    echo "Noe gikk galt. Prøv igjen senere.";
}
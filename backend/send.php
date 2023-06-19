<?php 
    require "connection.php"; 
    $pdo = connection();

    $firstname = $_POST[htmlentities('firstname')];
    $lastname = $_POST[htmlentities('lastname')];
    $email = filter_var($_POST[htmlentities('email')], FILTER_VALIDATE_EMAIL);
    $description = $_POST[htmlentities('description')];

    $sql = "INSERT IGNORE INTO hackers_poulette (firstname, lastname, email, description) VALUES (?,?,?,?)";
    $query= $pdo->prepare($sql);
    $query->execute([$firstname, $lastname, $email, $description]);

    $lastid = filter_var(htmlentities($pdo->lastInsertId()), FILTER_SANITIZE_NUMBER_INT);
    header('Location: /hackers-poulette/index.php?send='.$lastid);
?>
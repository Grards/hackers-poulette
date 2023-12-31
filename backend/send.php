<?php 
    ob_start();
    require "connection.php"; 
    require '../vendor/autoload.php';
    $pdo = connection();

    // Sanitization
    $firstname = $_POST[htmlentities('firstname')];
    $lastname = $_POST[htmlentities('lastname')];
    $email = filter_var($_POST[htmlentities('email')], FILTER_VALIDATE_EMAIL);
    $description = $_POST[htmlentities('description')];
    $address = $_POST[htmlentities('address')];

    // File validation
    define("ALLOWED_SIZE", 2097152);    // CHANGE ALLOWED SIZE AS YOUR NEED
    define("SAVED_DIRECTORY", "../assets/img/uploads/"); // CHANGE SAVED DIRECTORY AS YOUR NEED

    $allowed_extensions = array("jpeg", "jpg", "png"); // CHANGE allowed extension AS YOUR NEED

    if(isset($_FILES['file'])){
        $errors = array();
        
        $uploaded_file_name = $_FILES['file']['name'];
        $uploaded_file_size = $_FILES['file']['size'];
        $uploaded_file_tmp  = $_FILES['file']['tmp_name'];
        $uploaded_file_type = $_FILES['file']['type'];

        $file_compositions = explode('.', $uploaded_file_name);
        $file_ext = strtolower(end($file_compositions));
        
        $saved_file_name = $uploaded_file_name; // CHANGE FILE NAME AS YOUR NEED

        if(in_array($file_ext, $allowed_extensions) === false)
            $errors[] = 'Extension not allowed, please choose a JPEG or PNG file';

        if($uploaded_file_size > ALLOWED_SIZE)
            $errors[] = 'File size is too big';

        if(empty($errors) == true) { // if no error, uploaded image is valid
            move_uploaded_file($uploaded_file_tmp, SAVED_DIRECTORY . $saved_file_name);
        } else {
            print_r($errors);
        }
    }

    // Email validation
    $atPos = mb_strpos($email, '@');
    $domain = mb_substr($email, $atPos + 1);

    if (checkdnsrr($domain . '.', 'MX')) {
        if(!empty($_POST['address'])){
            var_dump($_POST['address']);
            header('Location: /hackers-poulette/index.php?err2');
            ob_end_flush();
        } else {
            try{
                $sql = "INSERT IGNORE INTO hackers_poulette (firstname, lastname, email, description, filename) VALUES (?,?,?,?,?)";
                $query= $pdo->prepare($sql);
                $query->execute([$firstname, $lastname, $email, $description, $_FILES['file']['name']]);
                $lastid = filter_var(htmlentities($pdo->lastInsertId()), FILTER_SANITIZE_NUMBER_INT);

                $transport = new Swift_SmtpTransport('smtp-relay.sendinblue.com', 587);
                $transport->setUsername('stevegrard1@gmail.com');
                $transport->setPassword('ZFTdgqLVROI8Q2nz');
            
                $mailer = new Swift_Mailer($transport);
            
                $message = new Swift_Message('Confirmation Email');
                $message->setFrom('stevegrard1@gmail.com');
                $message->setTo($email); 
                $message->setBody('Thank you for contacting us! We have received your message.');
            
                $result = $mailer->send($message);

                header('Location: /hackers-poulette/index.php?send='.$lastid);
                ob_end_flush();
            } catch(Exception $e){
                die('Erreur : '.$e->getMessage());
            }
        }
    }else {
        header('Location: /hackers-poulette/index.php?err1');
        ob_end_flush();
    }
?>
<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
//$userText = $_POST['userText'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
//require 'PHPMailerAutoload.php';
//require 'class.phpmailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.yandex.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    //$mail->phone = "+79263282890";
    $mail->Username   = "vpnprint@gmail.com";                    
    $mail->Password   = 'duj5hwgt4d';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('vpnprint@gmail.com', 'Павел');
    $mail->addAddress('vpnprint@gmail.com');     // 

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    =  "Имя пользователя: ${userName}, его телефон: ${userPhone}, почта :${userEmail}";

//урок 27
    if ($mail->send()) {
        echo "ok";
        //header('Location: index.html')
    } else {
        echo "Письмо не отправлено. Ошибка: {$mail->ErrorInfo}";
    }
}    catch (Exception $e) {
        echo "Письмо не отправлено. Ошибка: {$mail->ErrorInfo}";
    }
 ?>
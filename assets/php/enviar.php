<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	require 'PHPMailer/Exception.php';
	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';

	$body = "<table>
				<tr>
					<th>Nombre:</th>
					<td>".$name."</td>
				</tr>
				<tr>
					<th>Correo:</th>
					<td>".$email."</td>
				</tr>
				<tr>
					<th>Mensaje:</th>
					<td>".$message."</td>
				</tr>
			</table>";

	$mail = new PHPMailer(true);

	// try {
	//Server settings
	$mail->SMTPDebug = 0;                      //Enable verbose debug output
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'miguelaglvs@gmail.com';                     //SMTP username
	$mail->Password   = 'uvqbjufazleuagjy';                               //SMTP password
	$mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
	$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

	//Recipients
	$mail->setFrom($email, $name); //envia
	$mail->addAddress('miguelvportafolio@gmail.com');   //resive

	//Content
	$mail->isHTML(true);                                  //Set email format to HTML
	$mail->Subject = '(portafolio) Nuevo mensaje de contacto';
	$mail->Body    = $body;
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if ($mail->send()) {
		echo json_encode('exito');
	} else {
		echo json_encode('error');
	}
}

<?php 

if (isset($_POST['enviar'])){
	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['service']) && !empty($_POST['subject'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$service = $_POST['service'];
		$subject = $_POST['subject'];
		$header = "From: gustavovazco@allsdigital.net" . "\r\n";
		$header.= "Reply-To: gustavovazco@allsdigital.net" . "\r\n";
		$header.= "X-Mailer: PHP/". phpversion();

		$mail = @mail($email, $service, $subject, $header);

		if ($mail) {
			echo "<h4>¡Mail enviado exitosamente!</h4>";
		}
	}

}
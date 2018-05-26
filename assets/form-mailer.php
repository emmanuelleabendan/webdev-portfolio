<?php

	$name = $_POST['name'];
	$tel = $_POST['number'];
	$email = $_POST['email'];
	$form_message = $_POST['message'];

	$to = 'emmanuelle.abendan@gmail.com';

	$subject = 'Form message from portfolio.';

	
	$message = "
		<html>
			<head>
				<title>Form message from portfolio</title>
			</head>
			<body>
				<p>Name: ".$name."</p>
				<p>Tel: ".$tel."</p>	
				<p>Email: ".$email."</p>	
				<p>Message: ".$form_message."</p>				
			</body>
		</html>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= "From: <".$email.">" . "\r\n";

	if(mail($to,$subject,$message,$headers)){
		echo "
		<script>
			alert('Your message has been sent. I will get in touch with you as soon as possible.');
 			window.location='../index.html';
		</script>
		";
	} else {
		echo "
		<script>
			alert('Your message has not been sent. Please try again at a later.');
 			window.location='../index.html';
		</script>
		";	
	}
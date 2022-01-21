<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación del formulario</title>

    <!-- Additional CSS Files -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">

    <link rel="stylesheet" type="text/css" href="css/fullpage.min.css">

    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">

    <link rel="stylesheet" href="css/animate.css">

    <link rel="stylesheet" href="css/templatemo-style.css">

    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <?php

 function sanitize($data){
        trim($data);
        $data=stripslashes($data);
        $data=htmlspecialchars($data);
        return $data;
      }

$error=""; $exito="";

if($_SERVER["REQUEST_METHOD"]==="POST"){

	$email =isset($_REQUEST['email'])? $_REQUEST['email'] :"";
	$asunto =isset($_REQUEST['asunto'])? $_REQUEST['asunto'] :"";
	$contenido =isset($_REQUEST['contenido'])? $_REQUEST['contenido'] :"";

  /*  var_dump($email,$asunto,$contenido);*/

    if(empty($email)){
        $error .= "Email es un campo obligatorio. <br/>";
    }else if(filter_var($email, FILTER_VALIDATE_EMAIL)===false){
        $error .="Correo electrónico no válido.<br/>";
    }else{
         $email=sanitize($email);
    }


    if(empty($asunto)){
        $error .= "Asunto es un campo obligatorio. <br/>";
        //!is_string()
    }else if(strlen($asunto)<2||strlen($asunto)>40){
        $error .="Asunto no se ajusta al largo necesario.<br/>";
    }
    else{
         $asunto=sanitize($asunto);
        }

    if(empty($contenido)){
        $error .= "Nos interesa el contenido de tu mensaje y es un campo obligatorio. <br/>";
    }else if(strlen($contenido)<10||strlen($contenido)>200){
        $error .="Ajusta tu mensaje a un máximo de 200 carácteres.<br/>";
    }
    else{
         $contenido=sanitize($contenido);
        }

    if($error != ""){
        $error = '<div class="alert alert-danger" role="alert">TENEMOS ERRORES EN NUESTRO FORMULARIO!<br/>'.$error.'</div>';
        echo $error;
         header('refresh:4; url= http://cifolv21-22.biotaweb.com/jorge/porfolio/form_html.html');

    }
    else {
        $to       = "netxxi-CIFO@yahoo.com";
        $cabeceras  = "MIME-Version: 1.0 \r\n";
        $cabeceras .= "Content-type: text/html; charset=utf-8 \r\n";
        $cabeceras .= "Reply-To: ". $email . "\r\n";
      /*   $cabeceras .= "Cc: oscar@biotaweb.com \r\n"; */
       /*  $cabeceras .= "Bcc: birthdaycheck@example.com \r\n";*/

        if(mail($to,$asunto,$contenido,$cabeceras)){
            $exito = '<div class="success alert-success" role="">Correo enviado CORRECTAMENTE!<br/></div>';
            echo $exito;
              header('refresh:4; http://cifolv21-22.biotaweb.com/jorge/porfolio/form_html.html');


        }else {
            $error = '<div class="alert alert-danger" role="alert">NO HEMOS PODIDO ENVIAR EL CORREO!<br/></div>';
            echo $error;
              header('refresh:4; url= http://cifolv21-22.biotaweb.com/jorge/porfolio/form_html.html');
        }

    }
}
else{
 header('Location: http://cifolv21-22.biotaweb.com/jorge/porfolio/form_html.html');
}
?>

</body>
</html>

<?php

$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : "";
$asunto = isset($_REQUEST['asunto']) ? $_REQUEST['asunto'] : "";
$contenido = isset($_REQUEST['contenido']) ? $_REQUEST['contenido'] : "";


$to       = "netxxi-CIFO@yahoo.com";
$cabeceras  = "MIME-Version: 1.0 \r\n";
$cabeceras .= "Content-type: text/html; charset=utf-8 \r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";

mail($to, $asunto, $contenido, $cabeceras);

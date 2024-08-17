<?php
$server = "localhost";
$username = "c1912308_impre";
$password = "bipeba64BI";
$database = "c1912308_impre";

// Crear conexión
$Conexion = new mysqli($server, $username, $password, $database);

// Verificar conexión
if ($Conexion->connect_error) {
    die("Conexión fallida: " . $Conexion->connect_error);
} 
?>

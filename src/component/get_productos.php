<?php

require 'conexion.php';


// Verificar la conexión
if ($Conexion->connect_errno) {
    echo json_encode(['error' => 'Falló la conexión a la base de datos: ' . $Conexion->connect_error]);
    exit();
}

// Configurar la codificación de caracteres
$Conexion->set_charset("utf8");

// Consulta para obtener todos los datos
$query = "SELECT * FROM productos";
$resultado = $Conexion->query($query);

// Verificar si la consulta fue exitosa
if ($resultado) {
    $resultados = $resultado->fetch_all(MYSQLI_ASSOC);
    // Convertir los datos a JSON y enviarlos
    echo json_encode($resultados);
} else {
    echo json_encode(['error' => $Conexion->error]);
}

// Cerrar la conexión
$Conexion->close();
?>

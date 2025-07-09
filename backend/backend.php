<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$mysqli = new mysqli("localhost", "root", "", "razab");

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$images = $mysqli->query("SELECT url FROM Ejercicios");

$datos = [];

if ($images->num_rows > 0) {
    while ($fila = $images->fetch_assoc()) {
        $datos[] = $fila;
    }
}

// Cerrar conexión
$mysqli->close();

// Retornar los datos como JSON
echo json_encode($datos);
?>
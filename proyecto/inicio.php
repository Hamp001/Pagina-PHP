<?php
require_once "BaseDatos.php";
if($_POST) {
    // Obtener los datos del formulario
    $usuario = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validar los datos ingresados
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $conexion = new Conexion();
        $mysqli = $conexion->getConexion();

        $sql = "INSERT INTO usuarios (usuario, email, password) VALUES ('$usuario', '$email', '$password')";
        
        if ($mysqli->query($sql) === TRUE) {
            header("Location: inicio.html?mensaje=El usuario ha sido registrado exitosamente.");
            //echo "El usuario ha sido registrado exitosamente.";
        } else {
            header("Location: inicio.html?mensaje=Error: " . $sql . "<br>" . $conn->error);
            //echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conexion->close();
    } else {
        header("Location: inicio.html?mensaje=Los datos ingresados no son válidos.");
        //echo "Los datos ingresados no son válidos.";
    }
}
//http://192.168.1.71:8080/PROYECTO/inicio.html
?>

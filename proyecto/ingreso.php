<?php
require_once "BaseDatos.php";
    $nombre=$_POST["nombre"];
    $password=$_POST["password"];

    if(isset($_POST["boton"])){
        $boton=$_POST["boton"];
        switch($boton){
            case "entrada":
                entrada($nombre,$password);
                break;
            case "salida":
                salida($nombre,$password);
                break;
        }
    }
    function salida($nombre,$password){
        $query = "SELECT EXISTS(SELECT * FROM usuarios WHERE usuario='$nombre' AND password='$password') AS RESULT";

        $conexion = new Conexion();
        $mysqli = $conexion->getConexion();

        $resultado=$mysqli->query($query);
        // checar si el usuario y contraseña son correctos
        if ($resultado) {
            $fila = mysqli_fetch_assoc($resultado);
            $existeUsuario = $fila['RESULT'];
            if ($existeUsuario) {
                // insertar la salida en la bd
                insertarSalida($nombre,$mysqli);
                //mensaje "Registro exitoso" (procesado con javascrip)
                //header("Location: ingreso.html?error=1");
            } else {
                //mensaje "Usuario o contraseña incorrectoss" (procesado con javascrip)
                header("Location: ingreso.html?error=0");
            }
        } else {
            echo "Error al hacer la consulta";
        }
        $conexion->close();
    }

    function entrada($nombre,$password){
        $query = "SELECT EXISTS(SELECT * FROM usuarios WHERE usuario='$nombre' AND password='$password') AS RESULT";

        $conexion = new Conexion();
        $mysqli = $conexion->getConexion();

        $resultado=$mysqli->query($query);
        // checar si el usuario y contraseña son correctos
        if ($resultado) {
            $fila = mysqli_fetch_assoc($resultado);
            $existeUsuario = $fila['RESULT'];
            if ($existeUsuario) {
                // insertar la entrada en la bd
                insertarEntrada($nombre,$mysqli);
                //mensaje "Registro exitoso" (procesado con javascrip)
                header("Location: ingreso.html?error=1");
            } else {
                //mensaje "Usuario o contraseña incorrectoss" (procesado con javascrip)
                header("Location: ingreso.html?error=0");
            }
        } else {
            echo "Error al hacer la consulta";
        }
        $conexion->close();
    }
    function insertarSalida($nombre, $mysqli) {
        // Verificar registro de entrada
        $query = "SELECT COUNT(*) FROM entrada WHERE usuario = '$nombre'";
        $resultado = $mysqli->query($query);
        $entrada_existente = $resultado->fetch_row()[0];
        
        // Redirigir según el resultado de la consulta
        // no hay entrada registrada
        if ($entrada_existente=="0") {
            header("Location: ingreso.html?error=2");
        }
        else{
            // Insertar registro de salida y mensaje registro
            $query = "
            INSERT INTO salida(usuario, email, salida, fecha) 
            SELECT '$nombre', email, curtime(), CURDATE() 
            FROM usuarios 
            WHERE usuario = '$nombre' AND NOT EXISTS 
            (SELECT * FROM salida WHERE usuario = '$nombre' AND fecha = CURDATE());;
            ";
            $mysqli->query($query);
            header("Location: ingreso.html?error=1");
        }
    }
    
    function insertarEntrada($nombre,$mysqli){
        //ingresar en entrada solo con el usuario y solo uno por dia
        $query = "
            INSERT INTO entrada(usuario, email, entrada, fecha) 
            SELECT '$nombre', email, curtime(), CURDATE() 
            FROM usuarios 
            WHERE usuario = '$nombre' AND NOT EXISTS 
            (SELECT * FROM entrada WHERE usuario = '$nombre' AND fecha = CURDATE());;
        ";
        $resultado=$mysqli->query($query);
        if($resultado){
            echo "Datos ingresados correctamente";
        }else{
            echo "Error al insertar datos".$mysqli->error;
        }
    }
?>
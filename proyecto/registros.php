<?php 
require_once "BaseDatos.php";
if(isset($_GET["boton"])){
    //if else:
    $usuario = isset($_GET["usuario"]) ? $_GET["usuario"] : "";
    $buscar=$_GET["boton"];
    $fechaInicio=$_GET["fechaInicio"];
    $fechaFinal=$_GET["fechaFin"];
    //$tabla="";
    if ($fechaInicio != null) {
        $fechaInicio = $fechaInicio;
    } else {
        $fechaInicio = '1970-01-01';
    }
    if ($fechaFinal != null) {
        $fechaFinal = $fechaFinal;
    } else {
        $fechaFinal = '2100-12-31';
    }
    switch($buscar){
        case "buscar":
            $query = "SELECT id, usuario, email, entrada, salida, fecha 
            FROM vista_registro 
            WHERE usuario='$usuario' 
            AND fecha >= '$fechaInicio' 
            AND fecha <= '$fechaFinal'
            ORDER BY fecha DESC;"; 
            $tabla = buscar($usuario,$query);
            echo json_encode(array("tabla" => $tabla));
            break;
        case "MostrarTodos":
            $query = "SELECT id, usuario, email, entrada, salida, fecha 
            FROM vista_registro  
            WHERE fecha >= '$fechaInicio' 
            AND fecha <= '$fechaFinal'
            ORDER BY fecha DESC;";
            $tabla = buscar($usuario,$query);
            echo json_encode(array("tabla" => $tabla));
            break;
    }
}

function buscar($usuario,$query){

    $conexion = new Conexion();
    $mysqli = $conexion->getConexion();

    $resultado=$mysqli->query($query);
    $tabla = "";
    if ($resultado && mysqli_num_rows($resultado) > 0) {
        $tabla .= "<table>";
        $tabla .= "<tr>";
        $tabla .= "<th>id</th>";
        $tabla .= "<th>Usuario</th>";
        $tabla .= "<th>Email</th>";
        $tabla .= "<th>Entrada</th>";
        $tabla .= "<th>Salida</th>";
        $tabla .= "<th>Fecha</th>";
        $tabla .= "</tr>";
        while ($fila = mysqli_fetch_assoc($resultado)) {
            $tabla .= "<tr>";
            $tabla .= "<td>" . $fila['id'] . "</td>";
            $tabla .= "<td>" . $fila['usuario'] . "</td>";
            $tabla .= "<td>" . $fila['email'] . "</td>";
            $tabla .= "<td>" . $fila['entrada'] . "</td>";
            $tabla .= "<td>" . $fila['salida'] . "</td>";
            $tabla .= "<td>" . $fila['fecha'] . "</td>"; 
            $tabla .= "</tr>";
        }
        $tabla .= "</table>";
    } else {
        $tabla .= "No se encontraron resultados";
    }
    $conexion->close();
    return $tabla;
}
?>

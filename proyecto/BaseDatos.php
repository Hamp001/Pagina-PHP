<?php

class Conexion {
    private $host;
    private $user;
    private $password;
    private $database;
    private $conexion;

    public function __construct() {
        $this->host = "localhost";
        $this->user = "root";
        $this->password = "HU2001go09";
        $this->database = "pruebadb";

        $this->conexion = mysqli_connect($this->host, $this->user, $this->password, $this->database);

        if (!$this->conexion) {
            die("No se pudo establecer la conexión con la base de datos: " . mysqli_connect_error());
        }
    }

    public function getConexion() {
        return $this->conexion;
    }

    public function close() {
        $this->conexion->close();
    }
}



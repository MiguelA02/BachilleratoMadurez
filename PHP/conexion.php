<?php
    $conexion = pg_connect("host=localhost dbname=Bachillerato user=postgres password=11865866As");
if (isset($_POST['btnSubmit'])) {

    $user=trim($_POST['username']);
    $email=trim($_POST['email']);
    $password=trim($_POST['password']);
    $passwordConfirm = trim($_POST['passwordConfirm']);
    if ($password === $passwordConfirm)
    {
        $query = "INSERT INTO users (name, email, password) VALUES ('$user', '$email', '$password')";
        $consulta = pg_query($conexion, $query);
        include("../index.php");
    } else {
        echo "arregla la contra perra";
        
    }
    }
    
    

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Registro</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"
        rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/registro.css">
    
</head>

<body>
    
    <div class="registration-form">

        <form action="conexion.php" method="post">
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="username" name ='username' placeholder="Nombre">
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="email" name='email' placeholder="Correo">
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" name ="password"  placeholder="Contraseña">
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" name = "passwordConfirm" placeholder="Confirme su contraseña">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-block create-account" name = 'btnSubmit'>Crear usuario</button>
                
                <a href="../index.php">
                    <button type="button" class="btn btn-block create-account">Inicio</button>
                </a>
            </div>

        </form>

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
        <script src="assets/js/script.js"></script>
</body>

</html>
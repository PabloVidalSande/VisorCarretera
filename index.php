<!DOCTYPE html>

<html lang="es">

<head>
    <!-- Imports -->
    <link rel="stylesheet" type="text/css" href="styles/login.css">
    <link rel="stylesheet" type="text/css" href="scripts/login.js">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <style>
      .container{margin-top:100px}
    </style>

    <meta charset="UTF-8″>
    <meta name="viewport" content="width=device-width, initial-scale=1.0″>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Login Visor Carreteras</title>

</head>

<body>
    <div class="page">
        <div class="container">

            <!-- Parte izquierda -->
            <div class="izquierda">
                <div class="login">Login</div>
                <div class="mensaje">Acceso al Visor de Carreteras del Concello</div>
            </div>
        
            <!-- Parte derecha -->
            <div class="derecha">
                <form class="form" action='validar.php' method="POST">
                    <!-- Email -->
                    <div class="form-group">
                        <label for="usuario">Email</label>
                        <input type="email" class="form-control" id="correo" name="correo" required>
                    </div>
                    <!-- Contraseña -->
                    <div class="form-group">
                        <label for="contrasena">Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" name="contrasena" required>
                    </div>
                    <!-- Enviar -->
                    <button type="submit" class="btn btn-primary">Entrar</button>

                </form>
            </div>
        </div>
    </div>
</body>

</html>
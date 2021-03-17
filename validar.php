<?php

$usuario = $_POST['correo'];

$contrasena = $_POST['contrasena'];

session_start();

$_SESSION['usuario'] = $usuario;

$conexion = mysqli_connect("localhost", "root", "", "login_concello"); 

$consulta = "SELECT * FROM usuarios where correo='$usuario' and contrasena='$contrasena'";

$resultado = mysqli_query($conexion, $consulta);
if ($resultado) {

    $total = mysqli_num_rows($resultado);

} else {

    die(mysqli_error($conexion));    
}
$columna = mysqli_fetch_array($resultado);
$filas = mysqli_num_rows($resultado);

if ($filas) {

    $_SESSION['usuario'] = $usuario;

    header("location:index.html");

} else {

?>

    <?php

    include("index.php");

    ?>

    <h3 class="alert alert-danger">ERROR EN LA AUTENTIFICACIÓN</h3>

<?php

}

mysqli_free_result($resultado);

mysqli_close($conexion);
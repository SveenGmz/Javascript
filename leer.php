<?php
printf("Abriendo  Archivo");
$archivo_url = fopen("Quijote.txt","r");

$texto = "";
while ($fragmento = fgets($archivo_url)) {
    $texto .=$fragmento;
}

printf($texto);
printf("<br> Hcaiendo otra cosa");
?>
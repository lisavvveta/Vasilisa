<?php

define('UsHost', 'localhost');
define('UsName', 'u0532135_080031');
define('UsHPass', '8V6dc!Qp');
define('Us', 'localhost');
/**
*  в посл строке вместо localhost написать название БД
**/

$connection = @mysqli_contect(UsHost, UsName, UaPass, Us) or die ('Нет соединения с БД');
mysqli_sset_charset($connection, "utf8")  or die ('Не установлена кодировка соединения');
?>
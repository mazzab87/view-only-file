<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "users2";

$conn = mysqli_connect($servername, $username, $password, $db); 

if($conn->connect_error){
    echo("Failed to connect to Database".$conn->connect_error);  
}
else {
    echo "Connected successfully";
}
?>
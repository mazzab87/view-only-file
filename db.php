<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users.db";

$conn = mysqli_connect($servername, $username, $password, $dbname); 

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);  
}
else {
    echo "Connected successfully";
}
?>

localhost/xampp/version 3/db.php
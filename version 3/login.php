<?php
require 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);#

$rows = mysqli_num_rows($result);

if($rows > 0){
    echo "Login successful";
}else{
    echo "Login failed";
}

?>                
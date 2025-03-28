<?php
require 'db.php';

$user_id = $_POST['user_id'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE user_id = '$user_id' AND email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if($result->num_rows > 0){
    echo "Login successful";
}else{
    echo "Login failed";
}
?>                  
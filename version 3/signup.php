<?php 
require 'db.php';
if ($_SERVER[" REQUEST_METHOD"] == "POST") { 
     $first_ name = $_POST["first_name"]; 
     $last_name = $_POST["last_name"];  
     $password = md5($_POST["password"]); 
     $email = $_POST["email"]; 
     
     $query = "INSERT INTO users (first_name, last_name, password, email)" 
     VALUES "($first_name, $last_name, $password, $email)"; 

     if (mysqli_query($conn, $query)) {
        echo "Registration successful";
     }
     else {
        die("Registration failed: " . mysqli_error($conn));
     }

}
?>


 
<?php 
require ('db.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
     $first_name = $_POST["first_name"]; 
     $last_name = $_POST["last_name"];  
     $email = $_POST["email"];
     $password = md5($_POST["password"]);
     $password = md5($password);
      
     
     $query = "INSERT INTO 'users' (first_name, last_name, email, password) VALUES ($first_name, $last_name, $email, $password)"; 
     $result = mysqli_query($conn, $query);
     if ($result) {
        echo "Registration successful";
     }
     else {
        echo("Registration failed");
     }

}
?>


 
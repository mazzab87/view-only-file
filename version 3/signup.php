<?php 
require ('db.php');


error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    
    if (!isset($_POST["first_name"]) || !isset($_POST["last_name"]) || !isset($_POST["email"]) || !isset($_POST["password"])) {
        die("All fields are required");
    }

    // This part sanitizes the input
    $first_name = mysqli_real_escape_string($conn, $_POST["first_name"]); 
    $last_name = mysqli_real_escape_string($conn, $_POST["last_name"]);  
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = md5($_POST["password"]); // Single MD5 hash is sufficient
      
    
    $query = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$password')"; 
    
    // Execute query and handle errors
    $result = mysqli_query($conn, $query);
    
    if ($result) {
        echo "Registration successful";
    } else {
        echo "Registration failed: " . mysqli_error($conn);
    }
}
?>


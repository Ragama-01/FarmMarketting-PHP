<?php
// Start session
session_start();

// Create connection
$conn = new mysqli("localhost", "Ragama", "13082001#Ragama", "farm_marketting");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if email and password are set and not empty
    if (isset($_POST['emailLogin']) && isset($_POST['passwordLogin']) && !empty($_POST['emailLogin']) && !empty($_POST['passwordLogin'])) {
        // Retrieve email and password from the form
        $email = $_POST['emailLogin'];
        $password = $_POST['passwordLogin'];

        // Prepare and execute the query
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if the user exists
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            // Check if the password matches
            if ($password === $row['password']) {
                // Authentication successful, redirect to home page
                $_SESSION['emailLogin'] = $email;
                header("Location: home.html");
                exit();
            } else {
                // Authentication failed, redirect back to login page with an error message
                header("Location: login.html?error=InvalidCredentials");
                exit();
            }
        } else {
            // User does not exist, redirect back to login page with an error message
            header("Location: login.html?error=UserNotFound");
            exit();
        }
    } else {
        // Email or password is empty, redirect back to login page with an error message
        header("Location: login.html?error=EmptyFields");
        exit();
    }
} else {
    // Redirect back to login page if accessed directly without submitting the form
    header("Location: login.html");
    exit();
}
?>

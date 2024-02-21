<?php
/*
  A link variable that is used later in the code to connect to the database
  mysqlii_connect- This a amethod used to establish the connection and the connection 
  is assigned to the link variable. 
  mysqli_connect requires four arguments that is the database host machine,
  the user passsword and the database name.

*/
$link =mysqli_connect("localhost", "Ragama", "13082001#Ragama", "farm_marketting");

//To check for error
if(!$link){
  //die stops the script from being excecuted
    die("ERROR: Could not connect. " . mysqli_connect_error());
   }

   /*
    1.To check if the submit button is clicked
    2.$POST is a php global variable array it captures/harvests data that is posted using the POST method
   */
  
if(isset($_POST['submit'])){
    $firstname = $_POST['firstname'];
    $lastname  = $_POST['lastname'];
    $email  = $_POST['email'];
    $phonenumber  = $_POST['phonenumber'];
    $location  = $_POST['location'];
    $county  = $_POST['county'];
    $password  = $_POST['password'];

  /*The sql variable contains the query that will be used to insert the data to
    the database
  */
  $sql = "INSERT INTO users (firstname,lastname,email,phonenumber,location,county,password) VALUES ('$firstname', '$lastname','$email','$phonenumber','$location','$county','$password')";
  //mysqli_query is a method that excutes the query in the database
  if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
  } else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
  }
}
// close connection
mysqli_close($link);

?>


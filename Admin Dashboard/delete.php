<?php
include "conn.php";
$id = $_GET["id"]; 
$sql = "DELETE FROM `products` WHERE id = '$id'";
$result =mysqli_query($conn,$sql);
header("location: products.php");
?>


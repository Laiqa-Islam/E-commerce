<?php
include "conn.php";
$id = $_GET["id"]; 
$sql = "DELETE FROM `customer_details` WHERE id = '$id'";
$result =mysqli_query($conn,$sql);
header("location: orders.php");
?>


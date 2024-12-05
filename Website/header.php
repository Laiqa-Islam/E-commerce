<?php

include "conn.php";

if (isset($_POST['submit'])) {
    // Get customer details from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobNo = $_POST['mobNo'];
    $dob = $_POST['dob']; 
    $address = $_POST['address'];

    mysqli_begin_transaction($conn);

    $sqlDetails="INSERT INTO `customer_details`(`c_name`, `c_email`, `c_mob`, `c_address`, `c_dob`) VALUES ('$name','$email','$mobNo','$address','$dob')";
    $resultDetails=mysqli_query($conn, $sqlDetails);

    // Get the last inserted order ID
    $order_id = mysqli_insert_id($conn);

    // Get product titles and quantities from the form
    $productTitles = $_POST['productTitle'];
    $productQuantities = $_POST['productQuantity'];

    // Insert each product with its quantity into the 'order_items' table
    for ($i = 0; $i < count($productTitles); $i++) {
        $title = $productTitles[$i];
        $quantity = $productQuantities[$i];

        $sqlOrder="INSERT INTO `orders`( `order_id`, `product_title`, `product_quantity`) VALUES ('$order_id','$title','$quantity')";
        $resultOrder=mysqli_query($conn,$sqlOrder);
    }

   $end= mysqli_commit($conn);
    if($end){
        echo '<script>
                 alert("Order Placed!")
                 let cartItems=[];
                 sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
                   let checkoutProducts = document.querySelector(".checkoutProducts");
        checkoutProducts.innerHTML = " ";

            </script>';
    }else{
        echo '<script>
                alert("Something Went Wrong")
            </script>';
    }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Shopping Cart -->
    <div class="cart-win">
        <h2>Your Cart</h2>

        <div class="cartContent">
            <!-- Content Added by JS -->
        </div>

        <div class="total">
            <div class="total-title">Total Price:</div>
            <div class="total-price">$10</div>
        </div>

        <button class="checkout">Checkout</button>
        <div class="cart-close"><i class="fa-solid fa-xmark"></i></div>
    </div>

    <!-- Checkout Form -->
    <form action="" method="post">
        <div class="popUp">
            <div class="checkoutPopUp">
                <h2>Checkout Details</h2>
                <div class="checkoutInputs">
                    <input type="text" placeholder="Enter Your Name" name="name"><br>

                    <input type="email" placeholder="Enter Your Email" name="email"><br>

                    <input type="number" placeholder="Enter Your Mobile No. (e.g +92....)" name="mobNo"><br>

                    <input class="date" type="date" name="dob" id=""><br>

                    <input type="text" placeholder="Enter Your Address" name="address"><br>

                    <div class="closeCheckout"><i class="fa-solid fa-xmark"></i></div>
                    <div class="checkoutProducts">
                        <!-- Products added by JS -->
                    </div>
                    <div class="sub"><input type="submit" name="submit" value="Confirm Order" class="submit"></div>
                </div>
            </div>
        </div>
    </form>

    <!-- Nav Bar Start -->
    <nav>
        <div id="nav-top">
            <div id="logo">.crown & crystal</div>
            <div id="nav-center">
                <div id="nav-bottom">
                    <a class="nav-as" href="cosmetics.php">Cosmetics</a>
                    <a class="nav-as" href="skin-care.php">Skin Care</a>
                    <a class="nav-as" href="jewellery.php">Jewellery</a>
                    <a class="nav-as" href="perfumes.php">Perfumes</a>

                </div>
            </div>

            <div id="cart" class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="cart-counter">0</span>
            </div>
        </div>

    </nav>


    <!-- Slider Start -->
    <div id="page1">

        <div class="slider">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">

                        <img class="sliderImg" src="Images/perfume-1.webp" alt="">
                        <div class="sliderTitle">
                            <h4>Perfume By </h4><br>
                            <h1> HAIDER</h1>
                        </div>
                        <div class="sliderPrice"></div>
                        <a class="buy-now" href="perfumes.php#pro">Buy Now</a>

                    </div>
                    <div class="swiper-slide">

                        <img class="sliderImg" src="Images/jewellery-1.webp" alt="">
                        <div class="sliderTitle">
                            <h4>Wedding Bands By </h4><br>
                            <h1>TIFFANY & Co.</h1>
                        </div>
                        <div class="sliderPrice"></div>
                        <a class="buy-now" href="jewellery.php#pro">Buy Now</a>

                    </div>
                    <div class="swiper-slide">
                        <img class="sliderImg" src="Images/skin-care-3.jpg" alt="">
                        <div class="sliderTitle">
                            <h4>Night Cream By </h4><br>
                            <h1>AVANCHE</h1>
                        </div>
                        <div class="sliderPrice"></div>
                        <a class="buy-now" href="skin-care.php#pro">Buy Now</a>
                    </div>
                    <div class="swiper-slide">

                        <img class="sliderImg" src="Images/cosmetics-1.jpg" alt="">
                        <div class="sliderTitle">
                            <h4>Highlighter By </h4><br>
                            <h1> Gucci</h1>
                        </div>
                        <div class="sliderPrice"></div>
                        <a class="buy-now" href="cosmetics.php#pro">Buy Now</a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
    </div>
    <div id="features">
        <div class="feature">
            <i class="fa-solid fa-truck"></i>
            <div class="feature-Title">Free Shipping</div>
            <div class="feature-desc">Free worldwide shipping on all orders</div>
        </div>
        <div class="feature">
            <i class="fa-solid fa-box"></i>
            <div class="feature-Title">30 Day Return Policy</div>
            <div class="feature-desc">No questions and easy return in 30 days</div>
        </div>
        <div class="feature">
            <i class="fas fa-hand-holding-heart"></i>
            <div class="feature-Title">Gift Cards</div>
            <div class="feature-desc">Buy gift cards and use coupon codes easily</div>
        </div>
        <div class="feature">
            <i class="fas fa-paper-plane"></i>
            <div class="feature-Title">Contact Us!</div>
            <div class="feature-desc">Keep in touch via email and support system</div>
        </div>
    </div>
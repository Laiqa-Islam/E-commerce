<?php

include "conn.php";
include "header.php";

?>


<hr>
<h1 id="pro">Cosmetics</h1>
<div id="products">
    <div class="layer">
        <div class="cosmetic">
            
        <?php
            $sql = "SELECT * FROM `products` WHERE cat_id=5;";
            $result = mysqli_query($conn, $sql);

            while ($row = mysqli_fetch_array($result)) {



            ?>
                <div class="product">
                    <img class="productImage" src="<?= 'Images/' . $row[3] ?>" alt="">
                    <div class="product-info">
                        <div class="product-title"><?= $row[1] ?></div>
                        <div class="product-price">$<?= $row[4] ?></div>
                        <div class="product-desc"><?= $row[2] ?></div>
                        <button class="addCart product-buy" >Add to Cart</button>
                    </div>
                </div>

                    <?php
                }
                    ?>
            

          
           
        </div>
    </div>
</div>


<?php
include "footer.php";
?>
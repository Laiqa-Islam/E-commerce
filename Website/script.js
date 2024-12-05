// Active Page of NavBar

let activePage = window.location.pathname;
let nav_elem = document.querySelectorAll("nav a");

nav_elem.forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add("active");
    }
});

// Cart Counter
function updateCartCount() {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    let totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Sum of quantities
    document.querySelector('.cart-counter').innerText = totalItems;
}

// Load Cart Items From the Session Storage

document.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
    updateCartCount();
    update();
});

function loadCartItems() {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    cartItems.forEach(item => {
        let cartProductElement = cartProductComponent(item.title, item.price, item.imgSrc, item.quantity);
        let newNode = document.createElement("div");
        newNode.innerHTML = cartProductElement;
        document.querySelector(".cartContent").appendChild(newNode);
    });
}

// Open And Close Cart

let cart = document.querySelector("#cart");
let cart_win = document.querySelector(".cart-win");
let close_cart = document.querySelector(".cart-close");

cart.addEventListener("click", () => {
    cart_win.classList.add("active");
});

close_cart.addEventListener("click", () => {
    cart_win.classList.remove("active");
    // alert("btn was clicked");
});

// Document Ready

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
    // alert("dom has loaded")
} else {
    start();
}

// Start Function

function start() {
    update();
}

// Update All
function update() {
    cart_event();
    quantityChange();
    total_update();
    openCheckoutModal();
    closeCheckoutModal();
}

// Cart Events
// Product removed from Cart
function cart_event() {
    let product_remove = document.querySelectorAll(".cart-product-trash");

    product_remove.forEach(product => {
        product.addEventListener("click", () => {
            let productTitle = product.parentElement.querySelector(".cart-product-title").innerText;
            product.parentElement.remove();

            // Remove item from session storage
            let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
            cartItems = cartItems.filter(item => item.title !== productTitle);
            sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
            total_update();
            updateCartCount();
        })
    })
}

// Quantity Change
// function quantityChange() {
//     let quantity = document.querySelectorAll(".cart-quantity");

//     quantity.forEach(item => {
//         item.addEventListener("change", () => {
//             console.log("Quantity changed for item:", item.parentElement.querySelector(".cart-product-title").innerText);
            
//             if (isNaN(item.value) || item.value < 1) {
//                 item.value = 1;
//             }
//             item.value = Math.floor(item.value);

//             // Update the quantity in sessionStorage too
//             let productTitle = item.parentElement.querySelector(".cart-product-title").innerText;
//             let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

//             cartItems = cartItems.map(cartItem => {
//                 if (cartItem.title === productTitle) {
//                     cartItem.quantity = parseInt(item.value, 10); // Update quantity as a number
//                     console.log(`Updated quantity for ${productTitle}:`, cartItem.quantity);
//                 }
//                 return cartItem;
//             });
//             sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
//             console.log("Cart items after update:", cartItems);
//             total_update();
//             updateCartCount();
//         })
//     })
// }

function quantityChange() {
    let quantityFields = document.querySelectorAll(".cart-quantity");

    quantityFields.forEach(item => {
        let debounceTimer;

        item.addEventListener("input", () => {
            clearTimeout(debounceTimer);

            debounceTimer = setTimeout(() => {
                console.log("Quantity input detected:", item.parentElement.querySelector(".cart-product-title").innerText);

                if (isNaN(item.value) || item.value < 1) {
                    item.value = 1;
                }
                item.value = Math.floor(item.value);

                // Update the quantity in sessionStorage too
                let productTitle = item.parentElement.querySelector(".cart-product-title").innerText;
                let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

                cartItems = cartItems.map(cartItem => {
                    if (cartItem.title == productTitle) {
                        cartItem.quantity = parseInt(item.value, 10); // Update quantity as a number
                        console.log(`Updated quantity for ${productTitle}:`, cartItem.quantity);
                    }
                    return cartItem;
                });
                sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
                console.log("Cart items after update:", cartItems);
                total_update();
                updateCartCount();
            }, 300);  // Delay the session storage update for 300ms (you can adjust this)
        });
    });
}


// Updating total 

function total_update() {
    let cart_product = document.querySelectorAll(".cart-product");
    let total_price = document.querySelector(".total-price");
    let total = 0;

    cart_product.forEach(item => {
        let priceElement = item.querySelector(".cart-product-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));

        let quantity = parseInt(item.querySelector(".cart-quantity").value, 10);
        total += price * quantity;
    })
    total = total.toFixed(2);
    total_price.innerHTML = "$" + total;
}

// Add Cart Item
let addCart = document.querySelectorAll(".addCart");

addCart.forEach(item => {
    item.addEventListener("click", Add_cart_item);
})

function Add_cart_item() {
    // Getting the parent of AddCart element i.e product-info
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    // Getting the parent of product-info element i.e product
    let productParent = product.parentElement;
    let imgSrc = productParent.querySelector(".productImage").src;

    // Item already exists

    let newToAdd = {
        title,
        price,
        imgSrc,
        quantity: 1
    }

    // Retrieve the current cart items from session storage
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    if (cartItems.find((el) => el.title === newToAdd.title)) {
        alert("Item Already Exists in the Cart!")
        return;
    } else {
        cartItems.push(newToAdd);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems)); 
    }

    // Adding items to cart 
    let cartProductElement = cartProductComponent(title, price, imgSrc, newToAdd.quantity);

    let newNode = document.createElement("div"); 
    newNode.innerHTML = cartProductElement;

    let cartContainer = document.querySelector(".cartContent");

    cartContainer.appendChild(newNode);
    update();
    updateCartCount();
}

// CartProduct Components

function cartProductComponent(title, price, imgSrc, quantity) { 
    return ` <div class="cart-product">
                <img src="${imgSrc}" alt="">
                <div class="cart-product-info">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-product-price">${price}</div>
                    <input type="number" name="" id="" class="cart-quantity" value="${quantity}">
                </div>
                <div class="cart-product-trash"><i class="fa-solid fa-trash"></i></div>
            </div>`;
}

function openCheckoutModal() {
    // Open And Close Checkout Modal

    let popUp = document.querySelector(".popUp");
    let checkoutPopUp = document.querySelector(".checkoutPopUp");
    let checkoutBtn = document.querySelector(".checkout");

    checkoutBtn.addEventListener("click", () => {
        cart_win.classList.remove("active");
        popUp.classList.add("checkoutActive");
        checkoutPopUp.classList.add("checkoutActive");

        // Clear the checkout products list
        let checkoutProducts = document.querySelector(".checkoutProducts");
        checkoutProducts.innerHTML = '';

        // Getting cart items from session storage
        let UpdatedcartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

        // Loop through cart items and append to checkout modal
        UpdatedcartItems.forEach(item => {
            let checkoutProductHTML = checkoutProductComponents(item.title, item.quantity);
            let newNode = document.createElement("div");
            newNode.innerHTML = checkoutProductHTML;
            checkoutProducts.appendChild(newNode);
        });
    })
}

function checkoutProductComponents(title, quantity) {
    return `<div class="checkoutProductDetails">
                <div class="checkoutProductTitle" name="productTitle"><span>Product name:</span>  ${title}</div>
                <div class="checkoutProductQuantity" name="productQuantity"><span>Quantity</span>:  ${quantity}</div>
        </div>
        <input type="hidden" name="productTitle[]" value="${title}">
        <input type="hidden" name="productQuantity[]" value="${quantity}">
        
        `
}

function closeCheckoutModal() {
    let popUp = document.querySelector(".popUp");
    let checkoutPopUp = document.querySelector(".checkoutPopUp");
    let checkoutClose = document.querySelector(".closeCheckout");

    checkoutClose.addEventListener("click", () => {
        popUp.classList.remove("checkoutActive");
        checkoutPopUp.classList.remove("checkoutActive");
    })
}

function slider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        }
    });
}

slider();

let img = document.getElementById("sliderImg");

const CART_ITEMS_CONTAINER = document.getElementById("cart__items__container");
const DISPLAY_CART_TOTAL = document.getElementById("display__cart__total");
const CHECK_OUT_BTN = document.getElementById("check__out__btn");

class Product {
  constructor(product_id, product_name, product_image, product_price, product_quantity){

    this.product_id = product_id;
    this.product_name = product_name;
    this.product_image = product_image;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
  }
}

// An instance of the shopping cart
class ShoppingCartItems {
  constructor(cartItems) {
    this.cartItems = cartItems;
  }



// function to increase product quantity
increaseProductQuantity(productID) {
 
  for (let i = 0; i < this.cartItems.length; i++) {
    // check for the product that was click
  
    if (this.cartItems[i].product_id === productID) {
      console.log(cartItems[i].product_quantity);
      this.cartItems[i].product_quantity++;
    }
} 
this.display_cart_items() 
  }
  // method to decrease product quantity
 decreaseProductQuantity(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    if (
      cartItems[i].product_id === productID &&
      cartItems[i].product_quantity != 1
    ) {
      cartItems[i].product_quantity--;
    }
  }
  this.calculateCartTotal();
  this.display_cart_items();
}

    // a method to display cart items
 display_cart_items() {
  let product_to_display = [];

  for (let i = 0; i < this.cartItems.length; i++) {
    const cart_product = ` <!-- single cart product -->
          <div class="flex justify-between items-center shadow-md p-5">
            <div class="flex items-center gap-4">
              <img
                src=${this.cartItems[i].product_image}
                alt="product image"
                class="w-40 rounded-md"
              /> 
              <div>
                <h2 class="font-bold text-3xl">${this. cartItems[i].product_name}</h2>
                <button
                  class="delete_item bg-red-500 text-white font-semibold p-2 rounded-md mt-2"
                  id=${this.cartItems[i].product_id}
                >
                  Delete
                </button>
              </div>
            </div>

            <div class="text-center">
              <p class="font-bold text-xl">${this.cartItems[i].product_price}</p>
              <button
                class="increase_product_quantity bg-green-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
                id=${this.cartItems[i].product_id}
              >
                +
              </button>
              <span class="font-bold text-lg">${this.cartItems[i].product_quantity}</span>
              <button
                class="decrease_product_quantity bg-red-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
               id=${this.cartItems[i].product_id}
              >
                -
              </button>
            </div>
          </div>
          <!-- single cart product ends here -->`;

    product_to_display.push(cart_product);
  }

  if (product_to_display.length === 0) {
    CART_ITEMS_CONTAINER.innerHTML = `<h1 class="text-center text-3xl font-semibold">Cart is empty please add product 🥲🥲</h1>`;
    // DISPLAY_CART_TOTAL.textContent = 0;
    return;
  }

  CART_ITEMS_CONTAINER.innerHTML = product_to_display.join(" ");
  // increase quantity button
  const increaseProductQuantityBTN = document.querySelectorAll(".increase_product_quantity");
  increaseProductQuantityBTN.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let productID = parseInt(event.target.getAttribute("id"));
      this.increaseProductQuantity(productID)
    })
  });
// increase ends here

// increase quantity button
const decreaseProductQuantityBTN = document.querySelectorAll(".decrease_product_quantity");

   decreaseProductQuantityBTN.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let productID = parseInt(event.target.getAttribute("id"));
    this.decreaseProductQuantity(productID)
  })
});

const deleteItemBTN = document.querySelectorAll(".delete_item");

   deleteItemBTN.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let productID = parseInt(event.target.getAttribute("id"));
    this.removeItemFromCart(productID)
  })
});
// decrease button ends here.
   this.calculateCartTotal();
  // display_cart_items();
}

// A method for removing items from cart
// function to remove product from cart
 removeItemFromCart(productID) {
  const productsLeftInCart = [];
  for (let i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].product_id !== productID) {
      productsLeftInCart.push(this.cartItems[i]);
    }
  }
  this.cartItems = productsLeftInCart;
  this.display_cart_items();
  this.calculateCartTotal();
}


// a method to calculate total amount of products
 calculateCartTotal() {
  let totalCost = 0;
  for (let i = 0; i < this.cartItems.length; i++) {
    totalCost =
      totalCost + this.cartItems[i].product_price * this.cartItems[i].product_quantity;
    DISPLAY_CART_TOTAL.textContent = totalCost;
  }
  return totalCost;
}
 
}






let cartItems = [
  
    new Product(1, "Samsung",
"https://th.bing.com/th/id/R.00f0eb654b5f202b6156cd4f37437f78?rik=a3d6Tyo5aYH9TA&pid=ImgRaw&r=0", 
2000, 1
),


    new Product(
       2,
       "Iphone 12",
        "https://th.bing.com/th/id/OIP.-22fs7W_R-MVukHjyGOq1AHaEx?rs=1&pid=ImgDetMain",
       5000,
     1
    ),
    


    new Product(
       3,
       "Tecno Pop 2",
        "https://th.bing.com/th/id/OIP.b8RtZPhsoqNnFbpT0eZTXAHaHa?rs=1&pid=ImgDetMain",
      10000,
       1,
    ),
    
  
  
    new Product (
       4,
       "Infinix hot 5",
        "https://th.bing.com/th/id/OIP.Nuvc-slbqHCH0l169HCt_AHaHa?rs=1&pid=ImgDetMain",
     50000,
     1,
    ),
    
  
    new Product (
       5,
       "Oppo A5",
        "https://th.bing.com/th/id/R.b4b12bd39f278242c3a1201fce360bb2?rik=idzKC3GG3bCEcQ&pid=ImgRaw&r=0",
      25000,
     1,
    )
    
  
];

// create an instance of the shopping cartItems
const CustomerShoppingCart = new ShoppingCartItems(cartItems);
CustomerShoppingCart.display_cart_items();
CustomerShoppingCart.calculateCartTotal();






// function to decrease product quantity




// function to calculate cart total


CHECK_OUT_BTN.addEventListener("click", handleCheckOut);
function handleCheckOut() {
  console.log(cartItems);
  console.log(calculateCartTotal());
}

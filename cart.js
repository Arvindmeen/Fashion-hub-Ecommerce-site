// document.addEventListener("DOMContentLoaded", () => {
// let addcart=document.getElementById("addtocart");
// let cart_container=document.getElementById("cart_container");
// let card=document.getElementById("add");

// // console.log(addcart);
//   // console.log(cart_container);
// addcart.addEventListener(("click"),()=>{
//  cart_container.innerHTML=`
//              <div class="cart_box">
//                   <img src="image/Airbuds.webp" alt="" id="cartimg">
//                   <div class="cartbtn">
//                       <button>-</button>
//                       <button>1</button>
//                       <button>+</button>
//                   </div>
//                   <button id="remove">Remove</button>
//               </div> 
//             ` ;
//   // console.log(addcart);
//   // console.log(cart_container);
// });
// });


document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart_container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = `<p style="color:white" id="empty-msg">Your cart is empty</p>`;
      document.getElementById("count").innerText = 0;
      return;
    }

    cart.forEach((item, index) => {
      const box = document.createElement("div");
      box.className = "cart_box";
      box.innerHTML = `
        <img src="${item.image}" />
        <div class="cartbtn">
          <button class="decrease">-</button>
          <button class="qty">${item.quantity}</button>
          <button class="increase">+</button>
        </div>
        <button class="remove">Remove</button>
      `;

      // plus quantity
      box.querySelector(".increase").addEventListener("click", () => {
        cart[index].quantity++;
        saveCart();
        renderCart();
      });

      // minus quantity
      box.querySelector(".decrease").addEventListener("click", () => {
        if (cart[index].quantity > 1) {
          cart[index].quantity--;
        } else {
          cart.splice(index, 1);
        }
        saveCart();
        renderCart();
      });

      // Remove item
      box.querySelector(".remove").addEventListener("click", () => {
        cart.splice(index, 1);
        saveCart();
        renderCart();
      });

      cartContainer.appendChild(box);
    });

    document.getElementById("count").innerText = cart.length;
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  renderCart();
});

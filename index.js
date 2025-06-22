// navbar home..
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");
let home = document.getElementById("home");

shops.addEventListener("click", ()=>{
    shops.style.color="white";
    shops.style.borderBottom="2px solid white"
    reviews.style.color="#3a4452";
    blogs.style.color="#3a4452";
    contacts.style.color="#3a4452";
     home.style.color="#3a4452";
     home.style.borderBottom="none"
     reviews.style.borderBottom="none"
     blogs.style.borderBottom="none"
     contacts.style.borderBottom="none"

})

reviews.addEventListener("click", ()=>{
    reviews.style.color="white";
    reviews.style.borderBottom="2px solid white"
    shops.style.color="#3a4452";
    blogs.style.color="#3a4452";
    contacts.style.color="#3a4452";
     home.style.color="#3a4452";
     home.style.borderBottom="none"
     shops.style.borderBottom="none"
     blogs.style.borderBottom="none"
     contacts.style.borderBottom="none"
})

blogs.addEventListener("click", ()=>{
    blogs.style.color="white";
    blogs.style.borderBottom="2px solid white"
    reviews.style.color="#3a4452";
    shops.style.color="#3a4452";
    contacts.style.color="#3a4452";
     home.style.color="#3a4452";
     home.style.borderBottom="none"
     shops.style.borderBottom="none"
     reviews.style.borderBottom="none"
     contacts.style.borderBottom="none"
})

contacts.addEventListener("click", ()=>{
    contacts.style.color="white";
    contacts.style.borderBottom="2px solid white"
    reviews.style.color="#3a4452";
    blogs.style.color="#3a4452";
    shops.style.color="#3a4452";
     home.style.color="#3a4452";
     home.style.borderBottom="none"
     shops.style.borderBottom="none"
     blogs.style.borderBottom="none"
     reviews.style.borderBottom="none"
})


// navbar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});


  



// add cart


const product=[
    {
      image:"image/Airbuds.webp"
    },
    {
      image:"image/x10.webp"
    },
    {
      image:"image/x12.webp"
    }
];


// let addcart=document.getElementById("addtocart");
// let cart_container=document.getElementById("cart_container");
// // let card=document.getElementById("add");

// let i=0
// addcart.addEventListener(("click"),()=>{
// cart_container.innerHTML=product.map((item)=>{
//   var src=item;
//   return(
//     `<div class="cart_box">
// //                   <img src="image/Airbuds.webp" alt="" id="cartimg">
// //                   <div class="cartbtn">
// //                       <button>-</button>
// //                       <button>1</button>
// //                       <button>+</button>
// //                   </div>
// //                   <button id="remove">Remove</button>
// //               </div>`
//   )
// }).join();

// });

// document.addEventListener("DOMContentLoaded", () => {
// let addcart=document.getElementById("addtocart");
// let cart_container=document.getElementById("cart_container");
// // let card=document.getElementById("add");

// // console.log(addcart);
//   // console.log(cart_container);
// addcart.addEventListener(("click"),()=>{
//  cart_container.innerHTML=`
//              <div class="cart_box">
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





let cart= document.getElementById("cart");
let a=document.getElementById("a");
cart.addEventListener(("click"),()=>{
 a.href="cart.html";
})



// item page

let card = document.querySelectorAll(".crd");
let pageImg = document.querySelector("#itemImg");
let container = document.querySelector(".container");

let nav = document.querySelector("nav");
let itemPage = document.querySelector(".itemPage");
itemPage.style.display = "none";

//  let cost=document.getElementsByClassName("h31");
 let money=document.getElementById("h21")
 let cloth=document.getElementById("h20");

// console.log(pageImg);
// console.log(card);

card.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    itemPage.style.display = "block";
    itemPage.style.display = "flex";

    // let cost=document.getElementsByClassName("h31");
    const cost=curValue.querySelectorAll("h3");
    // const cloth=curValue.querySelectorAll("h3");

    container.style.display = "none";
    let imgSrc = curValue.firstElementChild.src;
    pageImg.src = imgSrc;
    cloth.innerText=cost[0].innerText;
    money.innerText=cost[1].innerText;
     


    let contentPage = document.querySelector(".content");
    let buyPage = document.querySelector(".buyPage");

    document.getElementById("buyBtn").addEventListener("click", function () {
      buyPage.style.padding = "44px";
      buyPage.style.display = "block";

      contentPage.innerHTML = `
             
         
        <h3>Enter Detail : </h3>
        <input type="text" placeholder="Enter Your Name" id="name"> <br>
        <input type="text" placeholder="Enter Your Adress" id="adress"> <br>
        <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
        <h3>Payment Option :</h3>
        <select name="" id="">
            <option value="Google-Pay">Google-Pay</option>
            <option value="Phone-Pay">Phone-Pay</option>
            <option value="Bharat-Pay">Bharat-Pay</option>
            <option value="Cash on Delivery">Cash on Delivery</option>


        </select><br>
        
         
            `;

      let submitBtn = document.createElement("button");
      submitBtn.innerText = "Submit";

      contentPage.appendChild(submitBtn);
      submitBtn.addEventListener("click", function () {
        let name = document.getElementById("name");
        let address = document.getElementById("adress");
        let num = document.getElementById("num");

        if (name.value == "" && address.value == "" && num.value == "") {
          alert("Please Enter Detail");
        } else {
          alert("Your Response Recorded");
          buyPage.style.display = "none";
        }
      });

      document.querySelector(".cross").addEventListener("click", function () {
        buyPage.style.display = "none";
      });
    });
  });
});




// connect


function connect(){
    let name = document.getElementById("name");
    let num = document.getElementById("number");
 

    if(name.value == "" || num.value == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }

}

  //dyanamic value assign
 









// show message

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Auto-hide after 2.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

document.getElementById("addtocart").addEventListener("click", () => {


  showToast("Item added to cart!");
});




// dyanamic card  


// Handle Add to Cart Click
document.querySelectorAll('.addtocart').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    const image = button.getAttribute('data-image');

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast("Added to cart!");
  });
});

// Update cart counter in navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("count").innerText = cart.length;
}
 
// Call on load
updateCartCount();

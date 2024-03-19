Preeti

let wishList = [];

function setup() 
{
    let products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
}

function addItem (e) {
    let productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        let productDiv = document.getElementById("product" + productId);

        let wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.setAttribute("class", "product");
        wishDiv.setAttribute("style", "margin-bottom: 10px;")
        wishDiv.innerHTML += productDiv.innerHTML;
        let removeBtn = document.createElement("input");
        removeBtn.setAttribute("id", "remove" + productId);
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("value", "Remove");
        // removeBtn.setAttribute("class", "removebut");
        removeBtn.onclick = () => removeItem(productId);
        wishDiv.appendChild(removeBtn);

        let aside = document.getElementById("wishlist");
        aside.appendChild(wishDiv);

        wishList.push(productId);
    }
}

function removeItem(productId) {
    document.getElementById("wish" + productId).remove();
    wishList = wishList.filter(element => element !== productId)
}

window.addEventListener("load", setup);
=======
// let menu=document.querySelector("#menu");
// let nav=document.querySelector("#navbar");
// window.onscroll=()=>{
//     menu.classList.remove("fa-times");
//     navbar.classList.remove("active")
// }
// menu.addEventListener(("click",()=>{
//     menu.classList.toggle("fa-times");
//     navbar.classList.toggle("active")
// }));


const id = document.querySelector("#discover");
const m = document.querySelector(".spa");
let flag=true
m.addEventListener("click", () => {
    if(flag==true){
        id.style.display="grid"
        flag=false
    }
    else{
        id.style.display="none"
        flag=true
    }
    
});


main

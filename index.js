
// let signupBtn=document.getElementById("signupBtn");
// let LoginBtn= document.getElementById("LoginBtn");
// let title=document.getElementById('title');
// let nameField = document.getElementById("nameField");

    
// //  document.getElementById("login_button").onclick = function () {
// //                         location.href = "#placeholder";
// //                     };

//     LoginBtn .onclick=function(){
//         // nameField.style.maxHeight = "0";
//         title.innerHTML= "login";
//         signupBtn.classList.add("disable");
//         LoginBtn.classList.remove("disable");
//     }
//     signupBtn .onclick=function(){
//         // nameField.style.maxHeight = "60px";
//         title.innerHTML= "sign up";
//         signupBtn.classList.remove("disable");
//         LoginBtn.classList.add("disable");
//     }


    document.addEventListener("DOMContentLoaded", function() {
        let signupBtn = document.getElementById("signupBtn");
        let loginBtn = document.getElementById("LoginBtn");
        let title = document.getElementById('title');
    
        loginBtn.onclick = function() {
            title.innerHTML = "Login";
            signupBtn.classList.remove("disable");
            loginBtn.classList.add("disable");
            location.href = "login.html";
        };
    
        signupBtn.onclick = function() {
            title.innerHTML = "Sign up";
            signupBtn.classList.add("disable");
            loginBtn.classList.remove("disable");
            location.href = "singup.html";
        };
    });
    
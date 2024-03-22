// const data = [
//     {
//        place:"India Gate",city:"Delhi",
//        place:"Bahai (Lotus) Temple",city: "Delhi",
//     },

//     {
//        place:"Bodh Gaya",city:"Bihar",
//        place:"Rajgir Glass Bridge",city: "Bihar",
//     },

//     {
//         place:"Aga Khan Palace",city:"Pune",
//         place:"SwamiNarayana-Temple",city: "Pune",
//     },

//     {
//         place:"Bhedaghat",city:"Madhya Pradesh",
//         place:"Pachmarhi",city: "Madhya Pradesh",
//     },

//     {
//         place:"Varanasi",city:"Uttar Pradesh",
//         place:"TajMahal,Agra",city: "Uttar Pradesh",
//     },

//     {
//         place:"Bangalore Palace",city:"Banglore,",
//         place:"Cubbon Park",city:"Banglore,",
//     }
// ];

// const searchbtn = document.getElementById("searchButton");
// const place = document.querySelectorAll(".visit");


// const search = () =>{
//     const searchbox = document.getElementById("locationInput").ariaValueMax.toUpperCase();
//     const storeitem = document.getElementsByClassName("place");
//     const place = document.querySelectorAll(".visit");
//     const location = document.getElementsByClassName("location");

//     for(let i = 0; i < location.length; i++){
//         let match = place[i].getElementsByClassName('location')[0];
        
//         if(match){
//            let textvalue =  match.textContent || match.innerHTML

//            if(textvalue.toUpperCase().indexOf(searchbox)> -1){
             
//              place[i].style.display = "";

//            }else{
//             place[i].style.display = "none";
//            }
//         }
//     }
// }


const search = () =>{
    let filter = document.getElementById('locationInput').value.toUpperCase();
    let ul = document.getElementById('myUl');

    let li = ul.getElementsByClassName('li');


}

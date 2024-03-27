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

const inputbox = document.getElementById('locationInput');
const searchButton = document.getElementById('searchbutton');

searchButton.addEventListener('click',function(){
    const locationInput = inputbox.value.toUpperCase();
    const visits = document.querySelectorAll('.visit');

    const result = document.getElementById('searchresult');
    result.innerHTML = '';

    const matchlocation = [];

    visits.forEach(function(visit){
        const location = visit.querySelector('.location').textContent.toLowerCase();
        const imgSrc = visit.querySelector('img').src;

        if(location.includes(locationInput)){
            const locationDiv = document.createElement('div');
            locationDiv.classList.add('location-item');


            const locationName = document.createElement('h2');
            locationName.textContent = visit.querySelector('label');

            const locationImage = document.createElement('img');
            locationImage.src = imgSrc;

            locationDiv.appendChild(locationName);
            locationDiv.appendChild(locationImage);

            result.appendChild(locationDiv);

            matchlocation.push(location);
        }
    });

      if(matchlocation.length === 0){
        alert('No locations found matching your search.');
      }
 
});



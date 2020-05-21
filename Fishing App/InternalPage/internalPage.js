let hamburgerOptions = document.querySelectorAll(".hamburgerOptions")
let threeLines = document.getElementById("threeLines");

threeLines.addEventListener("click", change)

function change(){
    for(let i = 0; i < hamburgerOptions.length; i++){
        hamburgerOptions[i].classList.toggle("hamburgerClick")
    }
}

// ----------------------------------------------  Map Div     ---------------------------------------------------


function initMap() {
                        
  let walton = {lat:51.4042, lng: -0.3947};
                 
  let map = new google.maps.Map(
  document.getElementById('map'), {zoom: 13, center: walton});                 
 let location = new google.maps.Marker({position: walton, map: map});
 
  }


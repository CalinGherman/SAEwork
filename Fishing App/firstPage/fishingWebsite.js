
//--------------- Hamburger Menu -------------------

let hamburgerOptions = document.querySelectorAll(".hamburgerOptions")
let threeLines = document.getElementById("threeLines")

threeLines.addEventListener("click", change)

function change(){
    for(let i = 0; i < hamburgerOptions.length; i++){
        hamburgerOptions[i].classList.toggle("hamburgerClick")
    }
}

// ---------------- Sliding Pictures Div ---------------


let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")


let smallImg1 = document.querySelector("#smallImg1")
let smallImg2 = document.querySelector("#smallImg2")
let smallImg3 = document.querySelector("#smallImg3")

smallImg1.addEventListener("click", function(){
    img1.classList.add('opacity')
    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.visibility = "hidden"
});
smallImg2.addEventListener("click", function(){
    img2.classList.add('opacity')
    img2.style.display = "block"
    img1.style.display = "none"
    img3.style.display = "none"
    img4.style.visibility = "hidden"
    
})
smallImg3.addEventListener("click", function(){
    img3.classList.add('opacity')
    img3.style.display = "block"
    img2.style.display = "none"
    img1.style.display = "none"
    img4.style.visibility = "hidden"
    
})

//------------------ Hidden Fish Type --------------


let pikeSpan = document.querySelector('#pikeSpan')
let catFishSpan = document.querySelector('#catFishSpan');
let eelSpan = document.querySelector('#eelSpan');

let pikeFishDivImg = document.querySelectorAll('.pikeFishDivImg')

pikeFishDivImg[0].addEventListener('mouseover', function(){
    pikeSpan.style.transition = "all 0.7s"
    pikeSpan.style.visibility = 'visible'
})
pikeFishDivImg[0].addEventListener('mouseout', function(){
    pikeSpan.style.visibility = 'hidden'
})



pikeFishDivImg[1].addEventListener('mouseover', function(){
    catFishSpan.style.transition = "all 0.7s"
    catFishSpan.style.visibility = 'visible'
})
pikeFishDivImg[1].addEventListener('mouseout', function(){
    catFishSpan.style.visibility = 'hidden'
})



pikeFishDivImg[2].addEventListener('mouseover', function(){
    eelSpan.style.transition = "all 0.7s"
    eelSpan.style.visibility = 'visible'
})
pikeFishDivImg[2].addEventListener('mouseout', function(){
    eelSpan.style.visibility = 'hidden'
})





// ---------------------------  Map Div   --------------------------------------------
function initMap() {
                        
    let weybridge = {lat:51.3821, lng: -0.4561};
                   
    let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 14.6, center: weybridge});                 
   let location = new google.maps.Marker({position: weybridge, map: map});
   
    }
let box2 = document.querySelectorAll(".second-box");
let box2Anchor = document.querySelectorAll(".second-box a")
let left = document.querySelector("#left");
let middle = document.querySelector("#middle");
let right = document.querySelector("#right");
let box = document.querySelectorAll(".box");
let boxh1 = document.querySelectorAll(".box h1");
const hr = document.querySelector("#hr");
const en = document.querySelector("#en");
const titleh1 = document.querySelector(".title h1");
const titleh2 = document.querySelector(".title h2");
const aboutText1 = document.querySelector(".about-text1");
const aboutText2 = document.querySelector(".about-text2");
const aboutText3 = document.querySelector(".about-text3");
const buttonText = document.querySelector ("#back-to-top");


const githubImg = document.createElement("img");
githubImg.src = "iconfinder_github_2561442.svg";

const youtubeImg = document.createElement("img");
youtubeImg.src = "iconfinder__youtube_video_2559760.svg"

const linkedinImg = document.createElement("img");
linkedinImg.src = "iconfinder-linkedin.svg";

const box2Appear = function(){ 
    for(let i=0; i<box2.length; i++){
        box2[i].classList.add("box2");
        box2[0].classList.add("box2-1");
        box2Anchor[0].appendChild(linkedinImg);
        box2[1].classList.add("box2-2");
        box2Anchor[1].appendChild(githubImg);
        box2[2].classList.add("box2-3");
        box2Anchor[2].appendChild(youtubeImg);
   
    }
}
setTimeout(box2Appear, 500);

/* for (let i=0 ; i<box.length ; i++){
    box[i].onmouseover = positionBottom;
    box[i].onmouseout = positionNone;
    function positionBottom(){
        boxh1[i].style.bottom = "30%";
    }
    function positionNone (){
        boxh1[i].style.bottom = "0%";
    }
} */


$('main button a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

$(".burger").click(function(){
    let active = true; 
    $(".links").css("display", "flex");
    function toggleNav (){
        $(".links").toggleClass("nav-active");
    }
    setTimeout(toggleNav, 100);
    $(".links li").css("opacity", "1");
    $("body").toggleClass("links-active");
    
})

 //Language change

 hr.addEventListener("click", function(){
    titleh1.textContent = "Dobrodošli u moj web dev portfolio!";
    titleh2.textContent = "Niže su neki moji prijašnji projekti";
    boxh1[0].textContent = "Mjerač";
    boxh1[1].textContent = "Brzinomjer";
    boxh1[2].textContent = "Memory";
    boxh1[3].textContent = "Semafor";
    boxh1[4].textContent = "Pogodi boju";
    boxh1[5].textContent = "Foto galerija";
    boxh1[6].textContent = "Foto rešetka";
    aboutText1.textContent = "Kao što vidite, ovi projekti su podijeljeni u dvije sekcije";
    aboutText2.textContent = "Prva sekcija uključuje moje originalne projekte, dok druga sekcija uključuje projekte sa Web Dev Bootcampa uz moju malu doradu";
    aboutText3.textContent = "Svjestan sam da su neki od ovih projekta iznimno jendostavni, početnički projekti, ali sam ih svejedno uključio";
    buttonText.textContent = "Nazad na vrh";
    $(".box .container button a").text("Posjetite");
}) 

en.addEventListener("click", function(){
    titleh1.textContent = "Welcome to my web dev portfolio!"
    titleh2.textContent = "Scroll down to see my past projects";
    boxh1[0].textContent = "Gauge";
    boxh1[1].textContent = "Speedometer";
    boxh1[2].textContent = "Memory Game";
    boxh1[3].textContent = "Score Keeper";
    boxh1[4].textContent = "Color Game";
    boxh1[5].textContent = "Photo Gallery";
    boxh1[6].textContent = "Photo Grid";
    aboutText1.textContent = "As you can see, these projects are separated into two sections";
    aboutText2.textContent = "The first section includes my original projects, and the second section includes projects from the Web Dev Bootcamp with minor changes made by me";
    aboutText3.textContent = "I realize that some of these are extremely simple beginner projects but I included them anyway";
    buttonText.textContent = "Back to top";
    $(".box .container button a").text("Visit");
})
let box2 = document.querySelectorAll(".second-box");
let box2Anchor = document.querySelectorAll(".second-box a")
let left = document.querySelector("#left");
let middle = document.querySelector("#middle");
let right = document.querySelector("#right");
let box = document.querySelectorAll(".box");
let boxh1 = document.querySelectorAll(".box h1");
const hr = document.querySelector("#hr");
const titleh1 = document.querySelector(".title h1");
const titleh2 = document.querySelector(".title h2");


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
    $(".links").toggleClass("nav-active");
    $(".links li").css("opacity", "1");
    $("body").toggleClass("links-active");
    
})

//Language change

/* hr.addEventListener("click", function(){
    titleh1.textContent = "Pozdrav, ja se zovem Dorian Antoniazzo";
    titleh2.textContent = "Ovo su neki moji projekti"
}) */
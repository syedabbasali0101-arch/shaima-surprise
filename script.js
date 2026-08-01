// Page System

const pages = document.querySelectorAll(".page");


function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });


    document.getElementById(id).classList.add("active");

}






// Continue Button


document.getElementById("continueBtn").onclick = ()=>{

    showPage("password");

};








// Password


const secretCode = "shaima";


document.getElementById("unlockBtn").onclick = ()=>{


    let input =
    document.getElementById("passInput")
    .value
    .toLowerCase();



    if(input === secretCode){


        showPage("intro");


        typingEffect();


    }else{


        document.getElementById("error").innerHTML =
        "Wrong Secret Code ❤️";


    }


};








// Intro Typing


let introText =
"Every memory with you is a beautiful chapter of my life ❤️";



function typingEffect(){


    let box =
    document.getElementById("typing");


    box.innerHTML="";


    let i=0;



    let timer=setInterval(()=>{


        box.innerHTML += introText[i];


        i++;


        if(i>=introText.length){


            clearInterval(timer);


        }


    },60);


}









// Start Memories



document.getElementById("startMemory").onclick=()=>{


    showPage("gallery");


    playMusic();


    startSlider();


};








// Music



function playMusic(){


    let music =
    document.getElementById("music");



    music.volume=0.5;


    music.play().catch(()=>{});


}









// Slider System



let slides =
document.querySelectorAll(".slider img,.slider video");



let currentSlide=0;


let started=false;






function startSlider(){


    if(started) return;


    started=true;



    slides.forEach(slide=>{

        slide.style.display="none";

    });



    showSlide();



    setInterval(()=>{


        hideSlide();



        currentSlide++;



        if(currentSlide >= slides.length){

            currentSlide=0;

        }



        showSlide();



    },2500);



}







function showSlide(){


    let current =
    slides[currentSlide];



    current.style.display="block";



    if(current.tagName==="VIDEO"){


        current.play().catch(()=>{});


    }


}








function hideSlide(){


    let current =
    slides[currentSlide];



    current.style.display="none";



    if(current.tagName==="VIDEO"){


        current.pause();


        current.currentTime=0;


    }


}









// Letter



document.getElementById("nextBtn").onclick=()=>{


    showPage("letter");


    startLetter();


};





let letterText =

`Dear Shaima ❤️

Thank you for always being there.

Our memories are very special for me.

May Allah always protect you,
keep you happy,
and bless every step of your life.

Always keep smiling 🌸

Ameen 🤲🏻`;






function startLetter(){


    let box =
    document.getElementById("letterText");


    box.innerHTML="";


    let i=0;



    let timer=setInterval(()=>{


        box.innerHTML += letterText[i];


        i++;



        if(i>=letterText.length){


            clearInterval(timer);


        }


    },45);



}








// Final Button



document.getElementById("finishBtn").onclick=()=>{


    showPage("final");


};









// Floating Hearts



function createHeart(){


    let heart =
    document.createElement("div");



    heart.innerHTML="❤️";



    heart.style.position="absolute";


    heart.style.left =
    Math.random()*100+"%";



    heart.style.bottom="-20px";



    heart.style.fontSize =
    Math.random()*20+15+"px";



    heart.style.animation =
    "float 6s linear";



    document.getElementById("hearts")
    .appendChild(heart);




    setTimeout(()=>{


        heart.remove();


    },6000);



}




setInterval(createHeart,600);










// Hidden 5 Heart Tap Feature ❤️🔐



let heartTapCount=0;



document.getElementById("secretHeart").onclick=()=>{


    heartTapCount++;



    if(heartTapCount===5){



        document.getElementById("secretMessage")
        .style.display="flex";



        heartTapCount=0;


    }


};





function closeSecret(){


    document.getElementById("secretMessage")
    .style.display="none";


}
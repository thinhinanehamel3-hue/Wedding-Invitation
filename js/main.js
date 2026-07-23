document.addEventListener("DOMContentLoaded", () => {



console.log("JS loaded");





/* =========================
        AOS
========================= */


if(window.AOS){

    AOS.init({

        duration:1200,

        once:true

    });

}







/* =========================
        LENIS
========================= */


if(window.Lenis){


    const lenis = new Lenis({

        duration:1.2

    });



    function raf(time){

        lenis.raf(time);

        requestAnimationFrame(raf);

    }


    requestAnimationFrame(raf);


}








/* =========================
        LOADER
========================= */


const loader = document.querySelector("#loader");



if(loader){


    setTimeout(()=>{


        gsap.to(loader,{

            opacity:0,

            duration:1,


            onComplete:()=>{

                loader.style.display="none";

            }

        });


    },1500);


}









/* =========================
        ELEMENTS
========================= */


const envelopeContainer =
document.querySelector("#envelope-container");


const envelopeSection =
document.querySelector("#envelope-section");


const envelope =
document.querySelector(".envelope-image");


const invitation =
document.querySelector("#invitation");









/* =========================
        ENVELOPE EFFECT
========================= */


if(envelopeContainer){





    envelopeContainer.addEventListener("mouseenter",()=>{


        gsap.to(envelope,{

            scale:1.03,

            duration:.5,

            ease:"power2.out"

        });


    });






    envelopeContainer.addEventListener("mouseleave",()=>{


        gsap.to(envelope,{

            scale:1,

            duration:.5

        });


    });









    envelopeContainer.addEventListener("click",()=>{


        const tl = gsap.timeline();





        tl.to(envelope,{

            scale:1.5,

            opacity:0,

            duration:1.4,

            ease:"power3.in"

        })





        .to(envelopeSection,{

            background:"#ffffff",

            duration:.5

        })





        .to(envelopeSection,{

            opacity:0,

            duration:1,


            onComplete:()=>{


                envelopeSection.style.display="none";


                showInvitation();


            }


        });



    });



}









/* =========================
        SHOW INVITATION
========================= */


function showInvitation(){



    invitation.style.display="block";



    gsap.to(invitation,{

        opacity:1,

        duration:1.5

    });




    animateTitle();



    initScrollAnimations();



}









/* =========================
        TITLE ANIMATION
========================= */


function animateTitle(){


    const title =
    document.querySelector(".split-text");



    if(!title){

        return;

    }




    gsap.from(title,{

        opacity:0,

        y:40,

        duration:1.2,

        ease:"power3.out"


    });



}









/* =========================
        SCROLL ANIMATIONS
========================= */


function initScrollAnimations(){



    if(!window.ScrollTrigger){

        return;

    }




    gsap.registerPlugin(ScrollTrigger);






    gsap.utils.toArray(

        ".invitation-text, .details, .card, .countdown-section"

    ).forEach(section=>{





        gsap.from(section,{

            scrollTrigger:{


                trigger:section,


                start:"top 80%",


                toggleActions:
                "play none none reverse"


            },



            opacity:0,

            y:80,

            duration:1.2,

            ease:"power3.out"


        });




    });



}









/* =========================
        COUNTDOWN
========================= */


const days =
document.getElementById("days");


const hours =
document.getElementById("hours");


const minutes =
document.getElementById("minutes");


const seconds =
document.getElementById("seconds");





if(days && hours && minutes && seconds){



    const weddingDate =
    new Date(
    "August 27, 2026 12:00:00"
    ).getTime();






    setInterval(()=>{



        const now =
        new Date().getTime();



        const distance =
        weddingDate - now;





        if(distance < 0){

            return;

        }





        days.innerHTML =
        Math.floor(
        distance/(1000*60*60*24)
        );





        hours.innerHTML =
        Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
        );





        minutes.innerHTML =
        Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
        );





        seconds.innerHTML =
        Math.floor(
        (distance%(1000*60))
        /1000
        );





    },1000);



}




});
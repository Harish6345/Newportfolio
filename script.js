 const btn=document.getElementsByClassName("btn")
 const bigtext=document.getElementsByClassName("Big-text")

 function Loadinganimation(buttons) {
    Array.from(buttons).forEach(button => {
        gsap.fromTo(button, {
            x: -3000, // Start position
        }, {
            x: 0, // End position
            ease: 'elastic', // Elastic easing effect
            duration: 3,
            stagger: 0.5, 
        });
    });
}

function textanimation (bigtext) {

    Array.from(bigtext).forEach((bigtext)=>{
        gsap.from(bigtext,{
            y:30,
            opacity:0,
            duration:0.8,
            delay:0.5,
            stagger: 0.2,
            
        });
           
      
       }
 )
  
        
    }
textanimation(bigtext)

Loadinganimation(btn);
gsap.registerPlugin(ScrollTrigger);

//ANIMATION DE LA SECTION 2 ..................................................

const section2 = document.querySelector('.section2');
gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    markers: true,
    start: 'top 100%',
    end: 'bottom 50%',
    trigger: section2,
  }
})

.from('.section2',{
  opacity:0,
  y:100
})


//ANIMATION SECTION 3........................................................

const section3 = document.querySelector('.section3');
gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    markers: true,
    start: 'top 100%',
    end: 'bottom 50%',
    trigger: section3,
  }
})

.from('.section3',{
  opacity:0,
  y:100
})


//Créer une variable pour le SVG 
//Utilise le "+2" pour l'ajouter à la class
var svg2 = document.querySelector('#svg'+2);
var tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    markers: true,
    start: 'top 100%',
    end: 'bottom 100%',
    trigger: section3,
  }
  
})

.to('.sectionSVG',{
  y:-150,
  delay: 0.9
})
.from('.megaphone',{
    rotation:50, 
    delay: 0.9
  })
.to('.megaphone',{
    rotation:-5, 
    transformOrigin:"50px 50px",
    ease: Back,
    delay: 0.9
  })

  //ANIMATION INFINI DE L'ECHO...............................
  const echo = document.querySelectorAll('.echo');
  gsap.timeline({
    scrollTrigger: {
      trigger: echo,
    }
  })
  .to('.echo',{
    scale:1.2,
    repeat: -1,
    yoyo: true,
    delay: 0.9
  })

  
  
//ANIMATION RECTANGLE............................................................

//Créer la fonction personnalisé
tl.add(rectangle(svg2));

//Cette fonction crée un tween qui va animer la stroke du SVG
function rectangle(svg) { 
   var trajet = {length:0, pathLength:svg.getTotalLength()}; 
   var animation = gsap.to(trajet, 2, {
       length:trajet.pathLength,
        onUpdate:drawLine, 
        onUpdateParams:[trajet, svg], 
        immediateRender:true
    });
   return animation;
};


 //Update de la stroke  
 function drawLine(obj, svg) {
  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
 };


 //ANIMATION SECTION 4........................................................

const section4 = document.querySelector('.section4');
gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    markers: true,
    start: 'top 75%',
    end: 'bottom 75%',
    trigger: section4,
  }
})

.from('.maison',{
    y: '100%',
    stagger: 0.2
})
.from('.sol',{
    scaleX: 0

})
//ANIMATION NUAGE INFINI.............................................
const nuage = document.querySelectorAll('.nuage');
gsap.timeline({
  scrollTrigger: {
    trigger: nuage,
  }
})
.to('.nuage',{
  x: '2600%',
  duration:50,
  delay:1,
  repeat: -1,
})
const nuage02 = document.querySelectorAll('.nuage02');
gsap.timeline({
  scrollTrigger: {
    trigger: nuage02,
  }
})
.to('.nuage02',{
  x: '2600%',
  duration:60,
  repeat: -1,
})
const nuage03 = document.querySelectorAll('.nuage03');
gsap.timeline({
  scrollTrigger: {
    trigger: nuage03,
  }
})
.to('.nuage03',{
  x: '-1800%',
  duration:90,
  repeat: -1,
})


 

 
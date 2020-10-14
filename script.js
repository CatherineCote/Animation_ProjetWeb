gsap.registerPlugin(ScrollTrigger);

const section2 = document.querySelectorAll('.section2');
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

const section3 = document.querySelectorAll('.section3');
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

//Créer la fonction personnalisé
tl.add(CreateLineSVG(svg2));

//this function creates a single tween that animates the stroke of an svg
function CreateLineSVG(svg) { 
   var trajet = {length:0, pathLength:svg.getTotalLength()}; 
   var tween = TweenLite.to(trajet, 2, {length:trajet.pathLength, onUpdate:drawLine, onUpdateParams:[trajet, svg], immediateRender:true});
   return tween;
};


 //update stroke   
 function drawLine(obj, svg) {
  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
 };
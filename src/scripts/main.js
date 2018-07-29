// import * as swal from 'sweetalert2'
import * as selftype from './itype'
// import * as popupStory from './popupStory'
import * as AnimateCss from './animateCss'
import swal from "sweetalert2"
import './calculate_ISS'
import './calculate_Risk'
import './popupPlotly'
import './popupHelpWindows'
import './popupStory'
import './bookIcon'

// for the reveal js setting
// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
    // Display controls in the bottom right corner
    controls: true,
    // Display a presentation progress bar
    progress: true,
    // Display the page number of the current slide
    slideNumber: false,
    // Push each slide change to the browser history
    history: true,
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    // Enable the slide overview mode
    overview: false,
    // Enables touch navigation on devices with touch input
    touch: true,
    // Enable slide navigation via mouse wheel
    mouseWheel: true,
    // Hides the address bar on mobile devices
    hideAddressBar: true,
    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow, \][    \][]
    backgroundTransition: 'fade',
    maxScale: 0.9
    
});

let scale = 0.6;
let currentState = {};
Reveal.addEventListener( 'slidechanged', function( event ) {

    // add it for removing  one of reveal two background class
    let backgroundColorClassArray = ["bg","bg-gb","bg-b","bg-gray"];
    backgroundColorClassArray.forEach(colorClass=>{
        document.querySelectorAll("."+colorClass).forEach(ele=>{
            if(ele.tagName === "SECTION"){
                ele.classList.toggle(colorClass)
            }
        })
    });

    // following need in front of keep the state code,and it is for navigation when popup
    if(swal.isVisible()){
        // keyboard: true,
        // touch: true,
        // mouseWheel: false,
        Reveal.configure({
            minScale: scale
        });
        Reveal.setState(currentState);
        return;
    }
    // add it for keep the state before popup
    let popupPages = [4,10,12,13,14,16,18];
    popupPages.forEach(page=>{
        if(event.indexh === 0 && event.indexv === page){
            currentState = Reveal.getState();
            // console.log(currentState)
            scale = Reveal.getScale();
            // console.log(scale);
        }
    })

    if(event.indexh === 0 && event.indexv === 1){
        selftype.page1Type1();
        selftype.page1Type2();
    }

    
    // console.log(swal.isVisible());
    // console.log(event.indexv === 3 || event.indexv === 5)
    // if(swal.isVisible() && (event.indexv === 3 || event.indexv === 5) ){
    //     // keyboard: true,
    //     // touch: true,
    //     // mouseWheel: false,
    //     Reveal.configure({
    //         minScale: scale
    //     });
    //     swal.close();
    //     // console.log(Reveal.getScale());
    // }else if(swal.isVisible()){
    //     // keyboard: true,
    //     // touch: true,
    //     // mouseWheel: false,
    //     // console.log(Reveal.getScale());
    //     Reveal.configure({
    //         minScale: scale
    //     });
    //     Reveal.setState(currentState);
    //     return;
    // }

    // add animation css on an itemID in the slideNumber
    // the animationStrategy if from AnimateCss
    let addAnimationCssOnSlide = (itemID,animationStrategy,slideNumber)=>{
        if(event.indexh === 0 && event.indexv === slideNumber-1){
            AnimateCss.detectAndSetTadaAnimateOn(itemID,false,animationStrategy);
        }
        if(event.indexh === 0 && event.indexv === slideNumber){
            AnimateCss.detectAndSetTadaAnimateOn(itemID,true,animationStrategy);
        }
        if(event.indexh === 0 && event.indexv === slideNumber+1){
            AnimateCss.detectAndSetTadaAnimateOn(itemID,false,animationStrategy);
        }
    }

    addAnimationCssOnSlide('calculate2',AnimateCss.toggleAnimateSwing,15);
    addAnimationCssOnSlide('calculate3',AnimateCss.toggleAnimateTada,16);
});

document.querySelectorAll(".slide_next").forEach(ele=>{
    ele.onclick = function(){
        Reveal.down();
    }
});
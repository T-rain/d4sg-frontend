// import * as swal from 'sweetalert2'
import * as selftype from './itype'
import * as popupStory from './popupStory'
import * as AnimateCss from './animateCss'
import swal from "sweetalert2"

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
    transition: 'concave', // none/fade/slide/convex/concave/zoom
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow, \][    \][]
});

// dependencies: [
//     { src: './bower_components/reveal.js/plugin/markdown/marked.js' },
//     { src: './bower_components/reveal.js/plugin/markdown/markdown.js' },
//     { src: './bower_components/reveal.js/plugin/notes/notes.js', async: true },
//     { src: './bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
// ]


let scale = 0.6;
let currentState = {};
Reveal.addEventListener( 'slidechanged', function( event ) {

    if(event.indexh === 0 && event.indexv === 1){
        document.querySelector('#bg2-one').textContent = "";
        document.querySelector('#bg2-two').textContent = "";
        selftype.page1Type1();
        selftype.page1Type2();
    }


    if(event.indexh === 0 && event.indexv === 3){
        document.querySelector('#tellstory').textContent = "";
        selftype.page3Type1();
    }

    // console.log(swal.isVisible());
    // console.log(event.indexv === 3 || event.indexv === 5)
    if(swal.isVisible() && (event.indexv === 3 || event.indexv === 5) ){
        // keyboard: true,
        // touch: true,
        // mouseWheel: false,
        Reveal.configure({
            minScale: scale
        });
        swal.close();
        // console.log(Reveal.getScale());
    }else if(swal.isVisible()){
        // keyboard: true,
        // touch: true,
        // mouseWheel: false,
        // console.log(Reveal.getScale());
        Reveal.configure({
            minScale: scale
        });
        Reveal.setState(currentState);
        return;
    }

    if(event.indexh === 0 && event.indexv === 4){
        scale = Reveal.getScale();
        popupStory.tell();
    }

    if(event.indexh === 0 && (event.indexv === 2 || event.indexv === 6)){
        Reveal.configure({
            minScale: 0.2
        });
    }

    if(event.indexh === 0 && event.indexv === 13){
        AnimateCss.detectAndSetTadaAnimateOn('calculate1',false, AnimateCss.toggleAnimateTada);
    }

    if(event.indexh === 0 && event.indexv === 14){
        AnimateCss.detectAndSetTadaAnimateOn('calculate1',true,AnimateCss.toggleAnimateTada);
        AnimateCss.detectAndSetTadaAnimateOn('calculate2',false,AnimateCss.toggleAnimateSwing);
    }

    if(event.indexh === 0 && event.indexv === 15){
        AnimateCss.detectAndSetTadaAnimateOn('calculate1',false,AnimateCss.toggleAnimateTada);
        AnimateCss.detectAndSetTadaAnimateOn('calculate2',true,AnimateCss.toggleAnimateSwing);

        currentState = Reveal.getState();
        console.log(currentState)
        scale = Reveal.getScale();
        console.log(scale);
    }

    if(event.indexh === 0 && event.indexv === 16){
        AnimateCss.detectAndSetTadaAnimateOn('calculate2',false,AnimateCss.toggleAnimateSwing);

        currentState = Reveal.getState();
        console.log(currentState)
        scale = Reveal.getScale();
        console.log(scale);
    }

    console.log(event);
});

document.querySelectorAll('.popup_story').forEach(ele=>{
    ele.onclick = function(){
        popupStory.tell();
    }
});


document.querySelectorAll('.testPlotly').forEach(ele=>{
    Plotly.plot(ele, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], { 
        margin: { t: 0 } } 
    );
});



// class=""


import './calculate_ISS'
import './popupHelpWindows'





// const x = 3, 
//       y = 5

// const result_add = calc.add(x, y)
// console.log(`${x} + ${y} = ${result_add}`)
// // 3 + 5 = 8

// const result_subtract = calc.subtract(x, y)
// console.log(`${x} - ${y} = ${result_subtract}`)
// // 3 - 5 = -2
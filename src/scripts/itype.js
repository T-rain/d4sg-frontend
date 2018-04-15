import { init } from 'ityped'
  
const oneElement = document.querySelector('#bg2-one')
const twoElement = document.querySelector('#bg2-two')
const tsElement = document.querySelector('#tellstory')


export const page1Type1 = () => {
    init(oneElement, { 
        /**
         * @param {Array} strings An array with the strings that will be animated 
         */
        strings: ['有個事實...你該知道'],
        
        /**
         * @param {Number} typeSpeed Type speed in milliseconds
         */
         typeSpeed:  100,
       
        /**
         * @param {Number} backSpeed Type back speed in milliseconds
         */
         backSpeed:  50,
        
        /**
         * @param {Number} startDelay Time before typing starts
         */
         startDelay: 500,
        
        /**
         * @param {Number} backDelay Time before backspacing
         */
         backDelay:  500,
        
        /**
         * @param {Bollean} loop The animation loop
         */
         loop:       false,
        
        /**
         * @param {Bollean} showCursor Show the cursor element
         */
         showCursor: false,
        
        /**
         * @param {Bollean} placeholder Write the string in the placeholder content
         */
         placeholder: false,
        
        /**
         * @param {Bollean} disableBackTyping Disable back typing for the last string sentence 
         */
         disableBackTyping: true,
        
        /**
         * @property {String} cursorChar character for cursor
         */
         cursorChar: "|",
        // optional: The callback called (if `loop` is false) 
        // once the last string was typed
        /**
         * @property {Function} onFinished The callback called , if `loop` is false,
         * once the last string was typed
         */
        onFinished: function(){},
    });
}

export const page1Type2 = () =>{
    init(twoElement, { 
        strings: ['一人住院，全家倒'],
        typeSpeed:  100,
        startDelay: 1500,
        loop:       false,
        showCursor: false,
        placeholder: false,
        disableBackTyping: true,
        cursorChar: "|",
    });
}

export const page3Type1 = () =>{
    //need to do with reveal js api
    init(tsElement, { 
        strings: ['來看個故事吧...'],
        typeSpeed:  100,
        startDelay: 500,
        loop:       false,
        showCursor: false,
        placeholder: false,
        disableBackTyping: true,
        cursorChar: "|",
    });
}



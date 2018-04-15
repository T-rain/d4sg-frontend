// this detect method need to be used in three page,just like main.js
export const detectAndSetTadaAnimateOn = (_id,_isSet,_animate)=>{
    if(!_animate){
        _animate = toggleAnimateTada;
    }
    if(!_isSet){
        let calclass = document.querySelector('#'+_id).classList;
        if(calclass.contains("animated")){
            _animate(calclass);
        }
    }else{
        let calclass = document.querySelector('#'+_id).classList;
        if(!calclass.contains("animated")){
            _animate(calclass);
        }
    }
}

// <!-- <h1 class="animated infinite bounce">Example</h1> -->
export const toggleAnimateTada = (targetClassList)=>{
    targetClassList.toggle("animated");
    targetClassList.toggle("tada");
}

export const toggleAnimateSwing = (targetClassList)=>{
    targetClassList.toggle("animated");
    targetClassList.toggle("swing");
}
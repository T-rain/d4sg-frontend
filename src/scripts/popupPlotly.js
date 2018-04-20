import swal from "sweetalert2"
//Plotly is included in Frontend Library


document.querySelector('#testclick').onclick = ()=>{

    document.querySelector('#after-testclick').parentNode.childNodes.forEach(ele=>{
       if(ele.className === "page-bg-right"){
            ele.classList.toggle("popup-plotly-disable");
       }
    });

    //return true is open,false is close
    document.querySelector('#after-testclick').classList.toggle("popup-plotly-disable");
    
}

document.querySelector('#back-testclick').onclick = ()=>{

    //return true is open,false is close
    document.querySelector('#after-testclick').parentNode.childNodes.forEach(ele=>{
       if(ele.className === "page-bg-right popup-plotly-disable"){
            ele.classList.toggle("popup-plotly-disable");
       }
    });

    document.querySelector('#after-testclick').classList.toggle("popup-plotly-disable");
    
}




document.querySelectorAll('#testPlotly').forEach(ele=>{
    Plotly.plot(ele, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], { 
        margin: { t: 0 } } 
    );
});
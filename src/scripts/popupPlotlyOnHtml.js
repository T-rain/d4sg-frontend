//Plotly is included in Frontend Library
const _preparePlotlyHtmlOn = (plotly_id,popup_plotly_id,popup_plotly_back_id,popup_plotly_after_id,plotly_on,idIsClass)=>{
    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    const plotlyTemplate = `
    <div id="${popup_plotly_after_id}" class="page-bg-right popup-plotly-disable popup-plotly-margin">
        <div style="display:flex">
            <div id='${popup_plotly_id}'></div>
            <a id="${popup_plotly_back_id}" href="javascript:void(0)"><i class="fa fa-window-close" aria-hidden="true"></i></a>
        </div>
    </div>
    `
    if(idIsClass){
        document.querySelector('.'+plotly_id).parentNode.appendChild(htmlToElement(plotlyTemplate));
    }else{
        document.querySelector('#'+plotly_id).parentNode.appendChild(htmlToElement(plotlyTemplate));
    }
    

    let theElement = document.querySelector('#'+popup_plotly_id);
    plotly_on(theElement);
}

const _setLinkToPlotlyOn = (plotly_link_id,popup_plotly_after_id,popup_plotly_back_id)=>{

    // add origin link to popup
    document.querySelector('#'+plotly_link_id).onclick = ()=>{
        document.querySelector('#'+popup_plotly_after_id).parentNode.childNodes.forEach(ele=>{
            if(ele.className === "page-bg-right"){
                ele.classList.toggle("popup-plotly-disable");
            }
           
            if(ele.className === "page-bg-right plotly_d6 plotly_d7"){
                ele.classList.toggle("popup-plotly-disable");
            }

        });
        //return true is open,false is close
        document.querySelector('#'+popup_plotly_after_id).classList.toggle("popup-plotly-disable");

    }

    // add back link to origin
    document.querySelector('#'+popup_plotly_back_id).onclick = ()=>{

        //return true is open,false is close
        document.querySelector('#'+popup_plotly_after_id).parentNode.childNodes.forEach(ele=>{
            if(ele.className === "page-bg-right popup-plotly-disable"){
                ele.classList.toggle("popup-plotly-disable");
            }

            if(ele.className === "page-bg-right plotly_d6 plotly_d7 popup-plotly-disable"){
                ele.classList.toggle("popup-plotly-disable");
            }
        });

        document.querySelector('#'+popup_plotly_after_id).classList.toggle("popup-plotly-disable");
        
    }
}


export const popupPlotly = (_theLinkIDToPlotly,_theContentBeOverlay,_plotlyMethod,idIsClass)=>{
    let iic = idIsClass || false;
    let plotly_link_id = _theLinkIDToPlotly
    let plotly_id = _theContentBeOverlay
    let plotly_on = _plotlyMethod

    // prepare html id
    // the popup div to show/not show
    let popup_plotly_after_id = "after_popup_"+plotly_id
    // the popup plotly div
    let popup_plotly_id = "popup_"+plotly_id
    // the popup back link
    let popup_plotly_back_id = "back_popup_"+plotly_id
    

    //draw
    _preparePlotlyHtmlOn(plotly_id,popup_plotly_id,popup_plotly_back_id,popup_plotly_after_id,plotly_on,idIsClass)
    _setLinkToPlotlyOn(plotly_link_id,popup_plotly_after_id,popup_plotly_back_id)

}
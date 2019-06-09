//Plotly is included in Frontend Library
import * as popupPlotlyOnHtml from "./popupPlotlyOnHtml"
import * as model from "./model"
import * as ds from './dataStatus';

//Plotly picture methods

const popupPlotlyT1 = ()=>{
    const plotly_t1 = (_ele)=>{

        const label = ["聘請外籍看護，全天候照顧", "白天聘請外籍看護，晚上家人輪替", "一位或多位家人輪流排班", "白天聘請本國看護，晚上家人輪替", "聘請本國看護，全天候照顧"]
        const value = [0.0724,  0.0184, 0.6544, 0.0674, 0.1874]
        let colorArray = ['Oxygen','Hydrogen','Carbon_Dioxide','Nitrogen', '#B94FFF']

        let plotlyData = [
            {
                labels: label,
                values: value,
                type: 'pie',
                marker: {
                    colors: colorArray,
                    line:{
                        color:'#FFFFFF',
                        width:1
                    }
                },
                text: label,
                textinfo:'percent',
                textposition: 'outside',
                hoverinfo:"text"
            }
        ]

        let layout = {
            title: "國人住院陪病照顧方式",
            autosize: false,
            width:'1000px',
            font: {
                size: 14,
            },
            xaxis:{
                showgrid:false, 
                zeroline:false,
                showticklabels:false
            },
            yaxis:{
                showgrid:false, 
                zeroline:false,
                showticklabels:false
            },
            showlegend:true,
        }
        Plotly.plot(_ele, plotlyData,layout,{
            displayModeBar: false
        });
    }

    popupPlotlyOnHtml.popupPlotly("plotly_t1_click","plotly_t1",plotly_t1);
}
// popupPlotlyOnHtml.popupPlotly("plotly_d6_click","plotly_d6",plotly_t1,true);
// popupPlotlyOnHtml.popupPlotly("plotly_d7_click","plotly_d7",plotly_t1,true);


const popupPlotlyD1 = ()=>{
    model.getD1Data()
    .then(function (data) {
        ds.dataStatus.d1 = true;

        const draw_plotly_d1 = (_ele)=>{
            data.x = data.x.reverse();
            data.y = data.y.reverse();
            //for text far from axis line
            data.y = data.y.map(text=>text+"  ");
            data.type='bar';
            let colorArray = ['rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(222,45,38,0.8)']
            data.marker= {
                color:colorArray,
                width: 1
            }
            data.orientation='h'
    
            let plotlyData = [data];
    
            let layout = {
                title: "70 歲以下之十大死因平均生命年數損失",
                autosize: true,
                font: {
                    size: 18,
                },
                xaxis:{
                    domain:[0.3,4],
                    title:"平均損失年數"
                },
                yaxis:{
                    domain:[0.1,4],
                    title:""
                }
            }
            Plotly.plot(_ele, plotlyData ,layout, {
                displayModeBar: false
            });
        }

        popupPlotlyOnHtml.popupPlotly("plotly_d1_click","plotly_d1",draw_plotly_d1);

    })
    .catch(function (err) {
        console.log('GetDataWrong', err);
        // reject(err)
    });
}


const popupPlotlyD2 = ()=>{
    model.getD2Data()
        .then(function (data) {
            ds.dataStatus.d2 = true;
            const draw_plotly_d2 = (_ele)=>{
                data.x = data.x.slice(0,10).reverse();
                data.y = data.y.slice(0,10).reverse();
                data.y = data.y.map(text=>text+"  ");
                data.type='bar';
                let colorArray = [
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)']
                data.marker= {
                    color:colorArray,
                    width: 1
                }
                data.orientation='h'
        
                let plotlyData = [data];
                let layout = {
                    title: "106年急診就診率",
                    autosize: true,
                    xaxis:{
                        domain:[0.4,1],
                        title: "就診率(每十萬人)",
                    },
                    yaxis:{
                        domain:[0.1, 1],
                        type: 'category',
                    },
                    font: {
                        size: 16,
                    },
                }
                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d2_click","plotly_d2",draw_plotly_d2);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
            // reject(err)
        });
}

const popupPlotlyD3 = ()=>{
    model.getD3Data()
        .then(function (data) {
            ds.dataStatus.d3 = true;

            // console.dir(data);
            let dataArray = Object.values(data);
            let xArray = dataArray.shift();
            let yArray = dataArray;

            let lineInfo = ["車禍","跌倒摔落","壓砸傷", "窒息", "穿刺切割傷","燒燙傷","電擊傷","中毒","溺水","自然災害","自殺","重大運輸事故"]

            let plotlyData = yArray.map((ele,index)=>{
                let data = {
                    "type": 'scatter',
                    "x": xArray,
                    "y": ele,
                    "mode":"line",
                    "name":lineInfo[index],
                }
                return data;
            });

            // console.log(xArray);
            // console.log(plotlyData);

            let multiButton = lineInfo.map((ele,index)=>{
                let button = {
                    method: 'restyle',
                    args: [{'visible': lineInfo.map(element=>element === ele)}],
                    label: lineInfo[index]
                } 
                return button;
            });

            let totalButton = {
                method: 'restyle',
                args: [{'visible':lineInfo.map(ele=>true)}],
                label: '全部'
            }

            multiButton.unshift(totalButton);

            // console.log(multiButton);
            
            
            const draw_plotly_d3 = (_ele)=>{
                let layout = {
                    title:"年齡與受傷機轉",
                    autosize: true,
                    font: {
                        size: 16,
                    },
                    xaxis:{
                        domain:[0.2,4],
                        title: "年齡",
                    },
                    yaxis:{
                        domain:[0.1,1],
                        title: "人次",
                    },
                    updatemenus: [{
                        xanchor: 'center',
                        yanchor: 'top',
                        x: -0.1,
                        y: 1.27,
                        type: 'button',
                        buttons: multiButton
                    }]
                }
                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d3_click","plotly_d3",draw_plotly_d3);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
        });
}

const popupPlotlyD4 = ()=>{
    model.getD4Data()
        .then(function (data) {
            ds.dataStatus.d4= true;

            const draw_plotly_d4 = (_ele)=>{
                let maleData = {
                    x: data.x_male,
                    y: data.y_male,
                    text: data.x_male,
                    marker:{'color':'#00BBFF'},
                    name:'男性',
                    type:'bar',
                    orientation:'h'
                }

                let femaleData = {
                    x: data.x_female,
                    y: data.y_female,
                    marker:{'color':'#FF3333'},
                    name:'女性',
                    type:'bar',
                    orientation:'h'
                }

                let plotlyData = [maleData,femaleData];
                let layout = {
                    title: "車禍人口金字塔",
                    bargape: 0.1,
                    barmode: 'overlay',
                    font: {
                        size: 18,
                    },
                    autosize: true,
                    xaxis:{
                        domain: [0.1,1],
                        title: "人數",
                    },
                    yaxis:{
                        domain: [0.1,1],
                        tickmode: 'array',
                        title: "年齡"
                    },
                    updatemenus: [{
                        type: 'button',
                        y: 0.5,
                        buttons: [{
                            method: 'restyle',
                            args: [{'visible': [true, true]}],
                            label: '全部'
                        },{
                            method: 'restyle',
                            args: [{'visible': [true, false]}],
                            label: '男'
                        },{
                            method: 'restyle',
                            args: [{'visible': [false, true]}],
                            label: '女'
                        }]
                    }]
                }

                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d4_click","plotly_d4",draw_plotly_d4);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
        });
}

const popupPlotlyD5 = ()=>{
    model.getD5Data()
        .then(function (data) {
            ds.dataStatus.d5 = true;
            console.log(data.x_male);
            const draw_plotly_d5 = (_ele)=>{
                let maleData = {
                    x: data.x_male,
                    y: data.y_male,
                    marker:{'color':'#00BBFF'},
                    name:'男性',
                    type:'bar',
                    orientation:'h'
                }

                let femaleData = {
                    x: data.x_female,
                    y: data.y_female,
                    marker:{'color':'#FF3333'},
                    name:'女性',
                    type:'bar',
                    orientation:'h'
                }

                let plotlyData = [maleData,femaleData];
                let layout = {
                    title: "跌倒人口金字塔",
                    bargape: 0.1,
                    barmode: 'overlay',
                    font: {
                        size: 18,
                    },
                    autosize: true,
                    xaxis:{
                        domain: [0.1,1],
                        title: "人數",
                    },
                    yaxis:{
                        domain: [0.1,1],
                        tickmode: 'array',
                        title: "年齡"
                    },
                    updatemenus: [{
                        type: 'button',
                        y: 0.5,
                        buttons: [{
                            method: 'restyle',
                            args: [{'visible': [true, true]}],
                            label: '全部'
                        },{
                            method: 'restyle',
                            args: [{'visible': [true, false]}],
                            label: '男'
                        },{
                            method: 'restyle',
                            args: [{'visible': [false, true]}],
                            label: '女'
                        }]
                    }]
                }

                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d5_click","plotly_d5",draw_plotly_d5);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
        });
}

const popupPlotlyD6 = ()=>{
    model.getD6Data()
        .then(function (data) {
            ds.dataStatus.d6 = true;
            const draw_plotly_d6 = (_ele)=>{
                // data.x = data.x.reverse();
                data.x = data.x.slice(0,10).reverse();
                data.y = data.y.slice(0,10).reverse();
                // data.y = data.y.reverse();
                console.log(data)
                data.type='bar';
                let colorArray = [
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)']
                data.marker= {
                    color: colorArray,
                    width: 1
                }
                data.orientation='h'
        
                let plotlyData = [data];
                let layout = {
                    title: "106年急診費用",
                    autosize: true,
                    xaxis:{
                        domain:[0.4,1],
                        title: "費用",
                    },
                    yaxis:{
                        domain:[0.1, 1],
                        type: 'category',
                    },font: {
                        size: 16,
                    },
                }
                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d6_click","plotly_d6",draw_plotly_d6,true);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
            // reject(err)
        });
}

const popupPlotlyD7 = ()=>{
    model.getD7Data()
        .then(function (data) {
            ds.dataStatus.d7 = true;
            const draw_plotly_d7 = (_ele)=>{
                data.x = data.x.slice(0,10).reverse();
                data.y = data.y.slice(0,10).reverse();
                data.type='bar';
                let colorArray = [
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                // 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
                'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)']
                data.marker= {
                    color:colorArray,
                    width: 1
                }
                data.orientation='h'
        
                let plotlyData = [data];
                let layout = {
                    title: "106年急診件數",
                    autosize: true,
                    xaxis:{
                        domain:[0.4,1],
                        title: "件數",
                    },
                    yaxis:{
                        domain:[0.1, 1],
                        type: 'category',
                    },font: {
                        size: 16,
                    },
                }
                Plotly.plot(_ele, plotlyData ,layout, {
                    displayModeBar: false
                });
            }

            popupPlotlyOnHtml.popupPlotly("plotly_d7_click","plotly_d7",draw_plotly_d7,true);

        })
        .catch(function (err) {
            console.log('GetDataWrong', err);
            // reject(err)
        });
}

export {
    popupPlotlyT1,
    popupPlotlyD1,
    popupPlotlyD2,
    popupPlotlyD3,
    popupPlotlyD4,
    popupPlotlyD5,
    popupPlotlyD6,
    popupPlotlyD7
};
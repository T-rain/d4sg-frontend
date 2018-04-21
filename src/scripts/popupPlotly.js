//Plotly is included in Frontend Library

import * as popupPlotlyOnHtml from "./popupPlotlyOnHtml"
import * as model from "./model"

//Plotly picture methods
// const plotly_test = (_ele)=>{
//     Plotly.plot(_ele, [{
//         x: [1, 2, 3, 4, 5],
//         y: [1, 2, 4, 8, 16] }], { 
//         margin: { t: 0 } } 
//     );
// }
// const plotly_d1 = (_ele)=>{
//     Plotly.plot(_ele, [{
//         x: [1, 2, 3, 4, 5],
//         y: [1, 2, 4, 8, 16] }], { 
//         margin: { t: 0 } } 
//     );
// }

// popupPlotlyOnHtml.popupPlotly("testclick","test_takecare",plotly_test);


/*
model.getD1Data()
    .then(function (data) {

        const draw_plotly_d1 = (_ele)=>{
            data.x = data.x.reverse();
            data.y = data.y.reverse();
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

model.getD2Data()
    .then(function (data) {
        const draw_plotly_d2 = (_ele)=>{
            data.x = data.x.reverse();
            data.y = data.y.reverse();
            data.type='bar';
            let colorArray = ['rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
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
                title: "105年急診就診率",
                autosize: true,
                font: {
                    size: 16,
                },
                xaxis:{
                    domain:[0.4,1],
                    title: "就診率(每十萬人)",
                },
                yaxis:{
                    domain:[0.1, 1],
                    type: 'category',
                }
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

model.getD3Data()
    .then(function (data) {
        console.dir(data);
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

        console.log(xArray);
        console.log(plotlyData);

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

        console.log(multiButton);
        
        
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
        // reject(err)
    });

model.getD4Data()
    .then(function (data) {
        const draw_plotly_d4 = (_ele)=>{
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
                title: "車禍人口金字塔",
                bargape: 0.1,
                barmode: 'overlay',
                font: {
                    size: 18,
                },
                autosize: true,
                xaxis:{
                    domain: [0.1,1],
                    title: "年齡",
                },
                yaxis:{
                    domain: [0.1,1],
                    tickmode: 'array',
                    title: "人數"
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
        // reject(err)
    });

model.getD5Data()
    .then(function (data) {
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
                    title: "年齡",
                },
                yaxis:{
                    domain: [0.1,1],
                    tickmode: 'array',
                    title: "人數"
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
        // reject(err)
    });

*/
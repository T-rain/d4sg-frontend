function processStatus(response) {
    // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
fetch('./iss_data.json')
    .then(processStatus)
    .then(
        function (response) {
            // Examine the text in the response
            response.json().then(function (_data) {
                let issHosArray = _data.data
                let getHospitalData = (hospital_id)=>{
                    let issHosNumArray = issHosArray.filter(ele => ele.hospital_id === hospital_id);

    
                    let level1 = issHosNumArray.filter(ele=>ele.ISS < 9)
                                                .reduce((a,cv) => a+cv["count(ISS)"],0);
    
                    let level2 = issHosNumArray.filter(ele=> ele.ISS >= 9 && ele.ISS < 16)
                                                .reduce((a,cv) => a+cv["count(ISS)"],0);
    
                    let level3 = issHosNumArray.filter(ele=> ele.ISS >= 16 && ele.ISS < 25)
                                                .reduce((a,cv) => a+cv["count(ISS)"],0);
    
                    let level4 = issHosNumArray.filter(ele=>ele.ISS >= 25)
                                                .reduce((a,cv) => a+cv["count(ISS)"],0);
                    let barTest_x = ["ISS < 9","ISS 9-15","ISS 16-24","ISS >= 25"]
                    let barTest_y = [level1,level2,level3,level4];
                    
                    // type:bar,scatter
                    let graphData = {
                        x: barTest_x,
                        y: barTest_y,
                        visible: true,//Each hospital default visible
                        name: 'Hospital' + hospital_id,
                        type: 'scatter'
                    }
                    return graphData;
                }
                
                let hospitalCount = Array.apply(null, new Array(23)).map((x, i)=> i+1);
                let multiHospitalData = hospitalCount.map(ele=>getHospitalData(ele));

                let getHospitalButton = (hospital_id)=>{
                    let hospitalButton = {
                        method: 'restyle',
                        args: ['visible', hospitalCount.map(ele=>ele===hospital_id?true:false)],
                        label: 'Hospital' + hospital_id
                    }
                    return hospitalButton;
                }

                let multiHospitalButton = hospitalCount.map(ele=>getHospitalButton(ele));
                let totalButton = {
                    method: 'restyle',
                    args: ['visible', hospitalCount.map(ele=>true)],
                    label: 'Hospital all'
                }
                multiHospitalButton.unshift(totalButton);

                let layout = {
                    title: "ISS vs Hospital",
                    autosize: false,
                    width: '1000px',
                    
                    barmode: 'group',
                    updatemenus: [{
                        y: 0.2,
                        yanchor: 'top',
                        buttons: [{
                            method: 'restyle',
                            args: ['type', 'scatter'],
                            label: 'scatter'
                        }, {
                            method: 'restyle',
                            args: ['type', 'bar'],
                            label: 'bar'
                        }]
                    },{
                        y: 1,
                        yanchor: 'top',
                        buttons: multiHospitalButton
                    }]
                }
                Plotly.plot('ISSandAge', multiHospitalData ,layout, {
                    displayModeBar: false
                });
            }); 
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
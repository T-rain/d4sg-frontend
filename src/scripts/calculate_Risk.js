import swal from "sweetalert2"
const api_server_location = "http://d4sgtrauma.sytes.net/api"

function processStatus(response) {
    // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

/* 
#gender: 男性:1;
#age: 實際年齡
#arrival_way: 事故現場:1
#OHCA: 否:0 ; 是:1
#ecode_type: 1~12 車禍, 跌倒摔落, 壓砸傷, 窒息, 穿刺切割傷, 燒燙傷, 電擊傷, 中毒, 溺水, 自然災害, 自殺, 重大運輸事故
*/

document.querySelector('#calculate2').onclick = function(){
    swal.setDefaults({
        animation: false,
        customClass: 'animated slideInRight',
        confirmButtonText: '下一步',
        cancelButtonText: '取消',
        showCancelButton: true,
        progressSteps: ['原因','性別', '年齡', '<i class="fa fa-heartbeat" aria-hidden="true"></i>','星期'],
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
    })
        
    // const reason = ["nouse","車禍", "跌倒摔落"]
    // let reasonObject = Object.assign({}, reason);
    // delete reasonObject['0'];
    let reasonObject = {
        'car':"車禍",
        'fall':"跌倒摔落"
    }
    
    let ageArray = Array.apply(null, Array(100)).map((x, i) => i);
    let ageObject = Object.assign({}, ageArray);
    delete ageObject['0'];

    let weekdayArray = [0,1,2,3,4,5,6,7];
    let weekObject = Object.assign({}, weekdayArray);
    delete weekObject['0'];

    var steps = [
        {
            title: '生存機率計算機',
            title: '先從受傷原因開始吧',
            input: 'select',
            inputOptions: reasonObject,
            animation: false
        },
        {
            title: '性別',
            input: 'select',
            inputOptions: {
                '1': '男',
                '2': '女',
            },
            animation: false
        },{
            title: '年齡',
            input: 'select',
            inputOptions: ageObject,
            animation: false
        },{
            title: 'OHCA',
            text: '到院前是否死亡',
            input: 'select',
            inputOptions: {
                '0': '否',
                '1': '是',
            },
            animation: false
        },{
            title: '到院時間_星期',
            text: '到院是星期幾呢',
            input: 'select',
            inputOptions: weekObject,
            animation: false
        }
    ]
    
    swal.queue(steps).then((result) => {
        swal.resetDefaults()
        if (result.value) {
            swal({
                title: '來看看預測的生存機率',
                animation: false,
                customClass: 'animated zoomIn',
                showCancelButton: true,
                confirmButtonText: '好啊',
                cancelButtonText: '不要',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return new Promise((resolve,reject) => {
                        let answerArray = result.value;
                        //insert 1 at arrival1
                        answerArray.splice(3, 0, 1);
                        const payload = {
                            "ecode_type": answerArray[0],
                            "gender":parseInt(answerArray[1]),
                            "age":parseInt(answerArray[2]),
                            "arrival_1":answerArray[3],
                            "OHCA": parseInt(answerArray[4]),
                            "weekday": parseInt(answerArray[5]),
                        }
                        const data = JSON.stringify(payload);
                        // console.log(data);
                        fetch(api_server_location+"/models/risk",{
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            method: "POST",
                            body: data
                        })
                            .then(processStatus)
                            .then(
                                function (response) {
                                    response.json()
                                    .then((data)=>{
                                        let predictionResult = data.prediction;
                                        resolve(predictionResult);
                                    }).catch((err)=>{
                                        // console.log('ParseError', err);
                                        reject(err)
                                    });
                                }
                            )
                            .catch(function (err) {
                                // console.log('Fetch Error :-S', err);
                                reject(err)
                            });
                    })
                },
                allowOutsideClick: () => !swal.isLoading()
                }).then((result) => {
                    // console.log(result);
                    if (result.value) {
                        swal({
                            type: 'warning',
                            title: '生存機率為: '+result.value,
                            html: '<p style="font-size:8px; color:#AAAAAA;">生活機率僅供參考</p>',
                            animation: false,
                            customClass: 'animated zoomIn'
                        })
                    }
                })
        }
    })
}






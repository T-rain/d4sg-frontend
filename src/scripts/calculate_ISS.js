import swal from "sweetalert2"



const api_server_location = "http://localhost:5000"

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

document.querySelectorAll('.abd').forEach(ele=>{
    ele.onclick = function(){
        swal.setDefaults({
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['原因','性別', '年齡', '<i class="fa fa-heartbeat" aria-hidden="true"></i>']
        })
          
        const reason = ["nouse","車禍", "跌倒摔落"]
        let reasonObject = Object.assign({}, reason);
        delete reasonObject['0'];
        
        let ageArray = Array.apply(null, Array(100)).map((x, i) => i);
        let ageObject = Object.assign({}, ageArray);
        delete ageObject['0'];

        var steps = [
            {
                title: 'ISS檢傷計算機',
                title: '先從受傷原因開始吧',
                input: 'select',
                inputOptions: reasonObject,
            },
            {
                text: '性別!',
                input: 'select',
                inputOptions: {
                    '1': '男',
                    '2': '女',
                }
            },{
                title: '年齡',
                input: 'select',
                inputOptions: ageObject
            },{
                title: 'OHCA',
                text: '到院前是否死亡',
                input: 'select',
                inputOptions: {
                    '0': '否',
                    '1': '是',
                }
            }
        ]
        
        swal.queue(steps).then((result) => {
            swal.resetDefaults()
            if (result.value) {
                swal({
                    title: '來看看預測的ISS指數是否大於16',
                    showCancelButton: true,
                    confirmButtonText: '好啊',
                    cancelButtonText: '不要',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                      return new Promise((resolve,reject) => {
                        let answerArray = result.value;
                        answerArray.splice(2, 0, 1);
                        const payload = {
                            "gender":parseInt(answerArray[0]),
                            "age":parseInt(answerArray[1]),
                            "arrival1":answerArray[2],
                            "ohca": parseInt(answerArray[3]),
                            "ecodetype": parseInt(answerArray[4]),
                        }
                        const data = JSON.stringify(payload);
                        console.log(data);
                        fetch(api_server_location+"/models/iss",{
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
                                    console.log(data);
                                    let predictionResult = data.prediction;
                                    resolve(predictionResult);
                                }).catch((err)=>{
                                    console.log('ParseError', err);
                                    reject(err)
                                });
                            }
                        )
                        .catch(function (err) {
                            console.log('Fetch Error :-S', err);
                            reject(err)
                        });
                        
                        // setTimeout(() => {
                        //   if ("abs" === 'taken@example.com') {
                        //     swal.showValidationError(
                        //       'This email is already taken.'
                        //     )
                        //   }
                        //   resolve(answer)
                        // }, 2000)
                      })
                    },
                    allowOutsideClick: () => !swal.isLoading()
                  }).then((result) => {
                    console.log(result);
                    if (result.value) {
                        let showType = ""
                        let showText = ""
                        const isOverSixteen = result.value === 1 ? true: false
                        if(isOverSixteen){
                            showType = 'warning'
                            showText = "您的預測ISS大於16!!嚴重外傷!!可申請重大傷病卡";
                        }else{
                            showType = 'info'
                            showText = "您的預測ISS小於16!!沒有超過!!不用太擔心";
                        }
                        swal({
                            type: showType,
                            title: showText,
                            html: '<p style="font-size:8px; color:#AAAAAA;">ISS指數評估一定有風險，在做任何決定前，先請醫生再評估免煩惱</p>'
                        })
                    }
                  })
            }
        })
    }
});






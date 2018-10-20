const api_server_location = "https://stark-bastion-43602.herokuapp.com/api";
function processStatus(response) {
    // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}


const getVizDataFromAPI = (subapi)=>{
    return new Promise((resolve,reject)=>{
        fetch(api_server_location+"/viz"+subapi,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "GET",
        })
            .then(processStatus)
            .then(function (response) {
                response.json()
                    .then((data)=>{
                        resolve(data);
                    }).catch((err)=>{
                        // console.log('ParseError', err);
                        reject(err)
                    });
            })
            .catch(function (err) {
                // console.log('Fetch Error :-S', err);
                reject(err)
            });
    });
}


export const getD1Data = ()=>{
    return getVizDataFromAPI("/d1");
}
export const getD2Data = ()=>{
    return getVizDataFromAPI("/d2");
}
export const getD3Data = ()=>{
    return getVizDataFromAPI("/d3");
}
export const getD4Data = ()=>{
    return getVizDataFromAPI("/d4");
}
export const getD5Data = ()=>{
    return getVizDataFromAPI("/d5");
}
export const getD6Data = ()=>{
    return getVizDataFromAPI("/d6");
}
export const getD7Data = ()=>{
    return getVizDataFromAPI("/d7");
}
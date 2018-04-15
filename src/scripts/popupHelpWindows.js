// let changeFullPageScrollTo = (isScroll)=>{
//     $.fn.fullpage.setMouseWheelScrolling(isScroll);
//     $.fn.fullpage.setAllowScrolling(isScroll);
// }

// the actions will do when user click back button
// let setBrowserButtonAction = ()=>{
//     window.onhashchange = function() {
//         swal.close();
//         changeFullPageScrollTo(true);
//     }
// }
import swal from "sweetalert2"
document.querySelectorAll('.popup_iss').forEach(ele=>{
    ele.onclick = function(){
        // changeFullPageScrollTo(false);
        // Template literals can be replace by following
        // <script id="tutorial-template" type="text/template"></script>
        let issTableString = `
            <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th class="text-center">部位</th>
                    <th class="text-center">外傷內容</th>
                    <th class="text-center">AIS</th>
                    <th class="text-center">前三高二次乘方</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>頭/頸部</td>
                    <td>腦挫傷</td>
                    <td>3</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>顏面部</td>
                    <td>無外傷</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr>
                    <td>胸部</td>
                    <td>鏈伽胸</td>
                    <td>4</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td rowspan="2" class="align-middle">腹部</td>
                    <td>肝臟輕微挫傷</td>
                    <td>2</td>
                    <td></td>
                </tr>
                <tr>
                    <td>粉碎性脾破裂</td>
                    <td>5</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>肢體</td>
                    <td>大腿骨骨折</td>
                    <td>3</td>
                    <td></td>
                </tr>
                <tr>
                    <td>外觀軟組織</td>
                    <td>無外傷</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr>
                    <td colspan="3"><span style="font-weight:bold;">外傷嚴重度分數</span></td>
                    <td>50</td>
                </tr>
            </tbody>
        </table>
        `;
        swal({
            imageUrl: './imgs/icons/volunteer.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'ISS_image',
            animation: true,
            showCloseButton: true,
            title:'ISS',
            html: "<p class='popupText'>外傷嚴重度分數（Injury Severity Score）是國際上最為廣泛使用於外傷病人嚴重度評分的計分制度，與死亡率、住院天數以及其他嚴重度等級相關聯。計算方式是運用每個身體部位的最高AIS分數，在不同的身體部位，三個最嚴重外傷的分數二次乘方且加總為ISS分數。<br/> ISS範圍為1至75分;<9分為輕度外傷;9-15分為中度外傷;≧16分為嚴重外傷。當ISS≧16分時可申請重大傷病卡。</p>",

            showCancelButton: true,

            confirmButtonText: '舉個例子',
            cancelButtonText: '原來如此',
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#3085d6',
            

        }).then((result) => {
            if (result.value) {
                swal({
                    html: issTableString+"<p>嚴重外傷!! ISS≧16!! 記得申請重大傷病卡</p>",
                    confirmButtonText: '原來如此'
                });
                // .then((result) => {
                //     changeFullPageScrollTo(true);
                // });
            }else{
                // changeFullPageScrollTo(true);
            }
        });

        // setBrowserButtonAction();
    }
});

document.querySelectorAll('.popup_ais').forEach(ele=>{
    ele.onclick = function(){
        // changeFullPageScrollTo(false);
        swal({
            imageUrl: './imgs/icons/transfusion.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'AIS_image',
            animation: true,
            showCloseButton: true,
            title:'AIS',
            html: "<p class='popupText'>簡易外傷分數（Abbreviated Injury Scale, AIS），是一種根據解剖位置發展的國際外傷分級系統。自1974年發展後，至今進行多次改版，目前最新版本為AIS2015（註）。<br/>AIS將身體分成六個解剖區域：頭/頸部、顏面部、胸部、腹部、肢體及外觀軟組織。依照受傷嚴重程度給予1至6分：1分為輕度、2分為中度、3分為重度、4分為嚴重、5分為危險、6分為極危險。<br/>許多研究證實AIS嚴重程度與生存（死亡）間具有相當強烈的相關性。（註：目前我國官方採用的版本為1990 年版，部分醫院採用AIS205update2008版。）</p>",
            confirmButtonText: '原來如此',
        })
        
        // .then((result) => {
        //     changeFullPageScrollTo(true);
        // });

        // setBrowserButtonAction();
    }
});


document.querySelectorAll('.popup_gcs').forEach(ele=>{
    ele.onclick = function(){
        // changeFullPageScrollTo(false);
        let gcsTableString = `
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th class="text-center" style="width:25%">分數</th>
                    <th class="text-center" style="width:25%">睜眼</th>
                    <th class="text-center" style="width:25%">言語</th>
                    <th class="text-center" style="width:25%">運動</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>6</td>
                    <td></td>
                    <td></td>
                    <td>可依指令動作</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td></td>
                    <td>說話有條理</td>
                    <td>施以刺激時，可定位出疼痛位置</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>自然睜眼</td>
                    <td>可應答，但有答非所問的情形</td>
                    <td>對疼痛刺激有反應，肢體會回縮</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>呼喚會睜眼</td>
                    <td>可說出單字</td>
                    <td>對疼痛刺激有反應，肢體會彎曲</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>對刺激或痛會睜眼</td>
                    <td>可發出聲音</td>
                    <td>對疼痛刺激有反應，肢體會伸直</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>對於刺激無反應</td>
                    <td>無任何反應</td>
                    <td>無任何反應</td>
                </tr>
            </tbody>
        </table>
        `;
        let gcsListString = `
        <table class="table table-bordered text-center">
            <tbody>
                <tr class="table-success">
                    <td>13-15分</td>
                    <td>輕度頭部外傷</td>
                </tr>
                <tr class="table-warning">
                    <td>9-12分</td>
                    <td>中度頭部外傷</td>
                </tr>
                <tr class="table-danger">
                    <td>3-8分</td>
                    <td>重度頭部外傷</td>
                </tr>
            </tbody>
        </table>
        `;

        swal({
            imageUrl: './imgs/icons/patientBed.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'GCS_image',
            animation: true,
            showCloseButton: true,
            title:'GCS',
            html: "<p class='popupText'>Glasgow Coma Scale（格拉斯哥昏迷指數）之縮寫，用來評估病人的意識狀態，為睜眼反應、說話反應與運動反應三個方面評估加總分數，各項評分標準如下所示。GCS分數介於3至15分，正常清醒為滿分15分，隨著昏迷程度加重，分數會遞減。頭部外傷的病人，<br/>以GCS來評估頭部受傷的嚴重程度。依程度分類，可分為：</p>"+gcsListString,
            showCancelButton: true,

            confirmButtonText: '評分依據',
            cancelButtonText: '原來如此',
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#3085d6',
        }).then((result) => {
            if (result.value) {
                swal({
                    html: gcsTableString,
                    confirmButtonText: '原來如此'
                })
                // .then((result) => {
                //     changeFullPageScrollTo(true);
                // });
            }else{
                // changeFullPageScrollTo(true);
            }
        });
        
        // setBrowserButtonAction();
    }
});                        

document.querySelectorAll('.popup_trauma_class').forEach(ele=>{
    ele.onclick = function(){
        // changeFullPageScrollTo(false);

        swal({
            imageUrl: './imgs/icons/ambulance.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'trauma_image',
            animation: true,
            showCloseButton: true,
            title:'檢傷分類',
            html: "<p class='popupText'>當病患至急診就醫時，檢傷站會先根據病患的主訴、疾病史、疾病的嚴重度與迫切性等進行分類，依照病情的輕重緩急，決定看診的優先順序，目的是希望將有限的緊急醫療資源，發揮最大的功效，使危急的病患及時獲得最妥適的醫療處置。<br/>新急診五級檢傷分類標準，將病患分為復甦急救、危急、緊急、次緊急、非緊急等5種等級，建議候診之時間分別為立即就診、10分鐘、30分鐘、60分鐘與120分鐘。為落實分級醫療，自民國106年4月15日起，於醫學中心急診檢傷1、2級病患，其部分負擔為450元，檢傷3、4、5級者則為550元。區域醫院與地區醫院不分級數，其部分負擔分別為300元與150元。參考網站：<a>https://goo.gl/rSbfVS</a></p>",
            confirmButtonText: '原來如此',
        })
        
        // .then((result) => {
        //     changeFullPageScrollTo(true);
        // });

        // setBrowserButtonAction();
    }
});

document.querySelectorAll('.popup_ohca').forEach(ele=>{
    ele.onclick = function(){
        // changeFullPageScrollTo(false);

        swal({
            imageUrl: './imgs/icons/icu-monitor.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'ohca_image',
            animation: true,
            showCloseButton: true,
            title:'OHCA',
            html: "<p class='popupText'>OHCA（Out-of-Hospital Cardiac Arrest，到院前心肺休止）:是指病患送達醫院前出現心肺功能停止的狀況。創傷性心肺功能停止必須考慮出血與呼吸道問題，當腦部缺氧4分鐘，腦細胞開始受損，缺氧10分鐘則，則會造成無法復原的傷害行成植物人或甚至死亡，在處置上分秒必爭！</p>",
            confirmButtonText: '原來如此',
        })
        
        // .then((result) => {
        //     changeFullPageScrollTo(true);
        // });

        // setBrowserButtonAction();
    }
});


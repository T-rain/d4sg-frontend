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

            confirmButtonText: '了解更多',
            cancelButtonText: '原來如此',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#28a745',
            

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
    }
});


document.querySelectorAll('.popup_gcs').forEach(ele=>{
    ele.onclick = function(){
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
            }
        });
    
    }
});                        

document.querySelectorAll('.popup_trauma_class').forEach(ele=>{
    ele.onclick = function(){
        swal({
            imageUrl: './imgs/icons/doctor (1).png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'trauma_image',
            animation: true,
            showCloseButton: true,
            title:'檢傷分類',
            html: "<p class='popupText'>當病患至急診就醫時，檢傷站會先根據病患的主訴、疾病史、疾病的嚴重度與迫切性等進行分類，依照病情的輕重緩急，決定看診的優先順序，目的是希望將有限的緊急醫療資源，發揮最大的功效，使危急的病患及時獲得最妥適的醫療處置。<br/>新急診五級檢傷分類標準，將病患分為復甦急救、危急、緊急、次緊急、非緊急等5種等級，建議候診之時間分別為立即就診、10分鐘、30分鐘、60分鐘與120分鐘。<br/>參考網站：<a href='https://goo.gl/rSbfVS'>https://goo.gl/rSbfVS</a></p>",
            confirmButtonText: '原來如此',
        })
    }
});

document.querySelectorAll('.popup_ohca').forEach(ele=>{
    ele.onclick = function(){
        swal({
            imageUrl: './imgs/icons/cpr-hand.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'ohca_image',
            animation: true,
            showCloseButton: true,
            title:'OHCA',
            html: "<p class='popupText'>OHCA（Out-of-Hospital Cardiac Arrest，到院前心肺休止）:是指病患送達醫院前出現心肺功能停止的狀況。創傷性心肺功能停止必須考慮出血與呼吸道問題，當腦部缺氧4分鐘，腦細胞開始受損，缺氧10分鐘則，則會造成無法復原的傷害行成植物人或甚至死亡，在處置上分秒必爭！</p>",
            confirmButtonText: '原來如此',
        })
    }
});



document.querySelectorAll('.iss_book').forEach(ele=>{
    ele.onclick = function(){
        swal.setDefaults({
            type: 'question',
            title: '',
            text: '',
            animation: false,
            customClass: 'animated fadeIn',
            showCloseButton: true,
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: '上一個',
            confirmButtonText: '下一個',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#28a745',
            // progressSteps: ['1', '2', '3','4','5','6']
        })
        


        



        let currentContext = 0;
        let books = [
            {
                showCancelButton: false,
                title: '重大傷病卡可以在醫院辦理嗎？',
                html: '經醫師診斷確定所罹患的傷病是屬於公告之重大傷病時，可檢具文件郵寄或親自送件，向健保分區業務組申請重大傷病證明。民眾對重大傷病有疑義，可洽詢轄區健保分區業務組(<a href="https://goo.gl/WE3Shi" target="_blank">https://goo.gl/WE3Shi</a>)',
                animation: false,
                customClass: 'animated fadeIn',
            },
            {
                title: '<p style="margin:0 auto">第一次申請重大傷病卡</p><p style="margin-top: 5px;margin-bottom: 0;">需要附上什麼資料?</p>',
                html: `<p style="text-align:left">(一) 重大傷病證明申請書<br/>
                (二) 三十日內開立之診斷證明書<br/>
                (三) 身分證明文件(正反面影本，兒童得以戶口名簿代替)
                現場臨櫃申請者，請盡量攜帶健保卡<br/>
                (四) 病歷摘要或檢查報告等相關資料</p>`,
                animation: false,
                customClass: 'animated fadeIn',
            },
            {
                title: '重大傷病卡多久可以拿到？',
                text: '如果診斷病名範圍明確者，可當日核發。要是診斷病名範圍不明確者或特殊疾病等狀況，需由健保署醫師專業審查通過後才會寄發，大概需要10個工作日。',
                animation: false,
                customClass: 'animated fadeIn',
            },
            {
                title: '重大傷病申請後是不是有一張卡？',
                text: '沒有另外一張卡，直接記載在健保卡裡面，健保署在94年3月起為預防掉卡的困擾，已將重大傷病卡的資料寫入在健保卡內以方便民眾就醫(精神疾病及愛滋病採取自由註記制度)',
                animation: false,
                customClass: 'animated fadeIn',
            },
            {
                title: '<p style="margin:0 auto">有重大傷病卡要怎麼使用？</p><p style="margin-top: 5px;margin-bottom: 0;">有什麼優惠？</p>',
                text: '持健保卡至醫療院所看診時，醫療院所讀取健保卡重大傷病註記，必須配合醫師卡才能讀取重大傷病代碼、有效起迄日期，經醫師診斷當次就醫確屬重大傷病或其相關治療，才可以免繳部分負擔費用',
                animation: false,
                customClass: 'animated fadeIn',
            },
            {
                showConfirmButton: false,
                title: '<p style="margin:0 auto">有重大傷病卡後</p><p style="margin-top: 5px;margin-bottom: 0;">在就醫上還有什麼要注意的嗎？</p>',
                text: '就醫時，務必主動提醒醫師「我有重大傷病」，請醫師協助讀取健保卡資訊',
                animation: false,
                customClass: 'animated fadeIn',
            },
        ];


        function swalISSbookAt(pageNumber){
            swal(
                books[pageNumber]
            ).then((result)=>{
                
                if(pageNumber === 0){
                    pageNumber = 6;
                }
                //result.value is left button
                //result.dismiss === 'cancel' is right button
                if(result.value){
                    swalISSbookAt((pageNumber+1)%6)
                }else if (result.dismiss === 'cancel'){
                    swalISSbookAt((pageNumber-1)%6)
                }
            });
        }
        swalISSbookAt(0);
    }
});
	
document.querySelector('#map_help').onclick = ()=>{
    const helpHtml = `
        <p style='text-align:left;'>
            
            <span style="color:#e4ba15">說明1:</span><br/>
            右下角顯示人口數量級距所對應的顏色深淺<br/>
            <span style="color:#e4ba15">說明2:</span><br/>
            地圖其圓圈顏色越深(紅色)代表相對於其他地區急救責任醫院越有群聚的狀況，圓圈內數值代表醫院家數。<br/>
            <span style="color:#e4ba15">說明3:</span><br/>
            游標為醫院地址之定位，游標顏色為急救責任醫院之分級。綠色代表「一般級」；橘色代表「中度級」；紅色代表「重度級」<br/>
            <span style="color:#e4ba15">說明4:</span><br/>
            游標滑曳，可以進一步在特定區域地理範圍中查看數量，明顯可以看到雙北地區即有39間急診責任醫院，佔約20%。<br/>
            各地區醫院間數如下:<br/>
            北部地區：63間/中部地區：52間<br/>
            南部地區：60間/東部地區：20間<br/>
            離島地區：4間<br/>
            <span style="color:#e4ba15">說明5:</span><br/>
            北部地區：臺北市、新北市、桃園市、新竹縣、新竹市與基隆市<br/>
            中部地區：臺中市、苗栗縣、南投縣、雲林縣與彰化縣<br/>
            南部地區：嘉義縣、嘉義市、台南市、屏東縣、高雄縣與高雄市<br/>
            東部地區：臺東縣、花蓮縣與宜蘭縣<br/>
            離島地區：金門縣、連江縣與澎湖縣
        </p>
    `;
    swal({
        animation: false,
        customClass: 'animated fadeIn',
        showCloseButton: true,
        width:'80%',
        title:'地圖說明',
        html:helpHtml,
        confirmButtonText: '關閉',
    })
};

// document.querySelector('#health_ten').onclick = ()=>{
//     swal({
//         animation: false,
//         customClass: 'animated fadeIn',
//         showCloseButton: true,
//         title:'2016年全民健康保險門診醫療費用前十大疾病',
//         html:`<table>
//         <thead>
//             <tr>
//                 <th>疾病</th>
//                 <th>門診醫療費用占率</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>腎衰竭</td>
//                 <td>10.33%</td>
//             </tr>
//             <tr>
//                 <td>口腔、唾液腺和頜(顎)骨疾病</td>
//                 <td>8.94%</td>
//             </tr>
//             <tr>
//                 <td>急性上呼吸道感染(症)</td>
//                 <td>5.62%</td>
//             </tr>
//             <tr>
//                 <td>糖尿病</td>
//                 <td>5.44%</td>
//             </tr>
//             <tr>
//                 <td>高血壓性疾病</td>
//                 <td>4.64%</td>
//             </tr>
//             <tr>
//                 <td>腦血管疾病</td>
//                 <td>1.94%</td>
//             </tr>
//             <tr>
//                 <td>食道、胃和十二指腸疾病</td>
//                 <td>1.90%</td>
//             </tr>
//             <tr>
//                 <td>消化器官的惡性腫瘤</td>
//                 <td>1.87%</td>
//             </tr>
//             <tr>
//                 <td>(新陳)代謝(性)疾患</td>
//                 <td>1.62%</td>
//             </tr>
//             <tr>
//                 <td>乳房的惡性腫瘤</td>
//                 <td>1.57%</td>
//             </tr>
//         </tbody>
//     </table>`,
//         confirmButtonText: '關閉',
//     })
// };

// document.querySelector('#hospital_ten').onclick = ()=>{
//     swal({
//         animation: false,
//         customClass: 'animated fadeIn',
//         showCloseButton: true,
//         title:'2016年全民健康保險住診醫療費用前十大疾病',
//         html:`<table>
//         <thead>
//         <tr>
//         <th>疾病</th>
//         <th>住診醫療費用占率</th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>流行性感冒[流感]及肺炎</td>
//         <td>6.34%</td>
//         </tr>
//         <tr>
//         <td>呼吸系統其他疾病</td>
//         <td>5.89%</td>
//         </tr>
//         <tr>
//         <td>缺血性心臟病</td>
//         <td>4.88%</td>
//         </tr>
//         <tr>
//         <td>因其他特定健康照護而接觸者</td>
//         <td>4.67%</td>
//         </tr>
//         <tr>
//         <td>消化器官的惡性腫瘤</td>
//         <td>4.34%</td>
//         </tr>
//         <tr>
//         <td>腦血管疾病</td>
//         <td>4.01%</td>
//         </tr>
//         <tr>
//         <td>精神分裂(症)、準精神分裂(症)性和妄想性疾患(障礙、病症)</td>
//         <td>3.84%</td>
//         </tr>
//         <tr>
//         <td>其他細菌性疾病</td>
//         <td>3.25%</td>
//         </tr>
//         <tr>
//         <td>其他類型心臟疾病</td>
//         <td>2.70%</td>
//         </tr>
//         <tr>
//         <td>關節(病)症</td>
//         <td>2.07%</td>
//         </tr>
//         </tbody>
//         </table>`,
//         confirmButtonText: '關閉',
//     })
// };

document.querySelector('#help_trauma').onclick = ()=>{
    swal({
        animation: false,
        customClass: 'animated fadeIn',
        showCloseButton: true,
        type: 'info',
        width:'80%',
        title:'外傷登錄系統的感傷',
        html:"<p class='popupText textWithPadding'>近年來「精準醫學」(Precision Medicine)為之風潮，精準醫學即為個別病人量身訂製出最佳的治療方案。<br/>導入如此的觀念，延伸到公共衛生學上，推行「精準公衛」(Precision Public Heath），提供政策擬定的精準方向，讓箭射在箭靶紅心點上，全力促進公眾健康！然而，精準公衛始於建構精準的登錄系統。<br/> 以衛生福利部公佈的資料所知，民國105年國人十大死因中，事故傷害排名第五，且居 1-14 歲及 15-24 歲死亡人口之首位死因，為 25-44 歲之死因第 2 位。 <br/> 想要像剝洋蔥一樣查看究竟，就得仰賴完整的外傷資料庫。外傷登錄是外傷資料庫系統中最重要的一環，民國94年台灣外傷醫學會啟用外傷登錄系統，各醫院採自願性自主參與，直至現今，以逾十餘年，仍是如此！詳實的資料建立取決於訓練有術的外傷登錄師。 <br/> 外傷登錄師必須通過嚴謹的培訓，才能取得證照，但可惜的是，不管是登錄系統的建立或是登錄師的訓練，皆由學會一手統籌，不見政府蹤影。 當國際社會已經成功地從外傷歷史資料萃取洞見時，我們政府卻連事故傷害流行病學資料也無法得知，更遑論要進行問題發掘及對策改善。 <br/> 外傷登錄師必須能全盤通透病人到院前、住院中以及出院後所有醫療處置，並詳細盤查所有檢查報告、病歷資料，依AIS評分標準，給予該病人最確實的ISS，此工作繁重，有時就像偵探一樣，得用放大鏡檢視所有的蛛絲馬跡，就是不肯放過任何一個小傷；有時也得打破砂鍋問到底，就是要確認傷害的程度。 <br/> 這種差事吃力不討好，要有豐富的醫學知識與臨床工作經驗，還要能善於溝通，但站在醫院的立場上，只不過是個登打資料的人，為了減少人事成本，往往以最低階的行政人員薪資聘用，或是以計畫方式一年一聘，有的醫院則是以現有人力來兼職，不穩定的人力流動，大大影響外傷登錄的資料品質。 <br/> 再者，外傷登錄系統的維護經費龐大，學會已無能力負擔，目前只剩下電腦單機版可使用，所有資料必須一一登打，無法與醫院資訊做串接，耗時又耗力，且無法減少人為疏失。欄位也是十幾年前的設計，有些已不符現況，即使輸入資料，該資料也無法分析。在資訊爆炸的時代裡，很難想像這種狀況還發生在台灣！ <br/> 要計算外傷嚴重分數(ISS)憑藉於簡易外傷分數(AIS)。為了解交通事故造成的外傷型態與嚴重度，美國汽車醫學發展協會在1969年推出外傷嚴重度計算標準(AIS)，以做為改善汽車安全設計之依據。此版本經過多年修訂，最新版本為AIS2015年版。 <br/> 但您不可不知的是，衛生福利部中央健康保險署公告的版本是西元1990年發布的，要與世界接軌還望塵莫及呢！在這種輪迴旋渦裡，資料庫中充斥著不可盡信的資料。外傷登錄系統最終只剩下醫院評鑑時可以交代的功能了！</p>",
        confirmButtonText: '關閉',
    })
};

document.querySelector('#help_data').onclick = ()=>{
    swal({
        animation: false,
        customClass: 'animated fadeIn',
        showCloseButton: true,
        type: 'info',
        width:'80%',
        title:'資料整理的痛苦',
        html:"<p class='popupText textWithPadding'>資料的取得是先由外傷醫學會發函給各家醫院，有些醫院很快速就回覆了，有些醫院則要一層又一層地請示過，最後回覆因為OOXX的原因，所以不便提供… <br/> 原發函給重度與中度急救責任醫院，共計47家，最後有33家醫院提供資料，但資料符合最低要求者只剩30家醫院。 <br/> 著手清洗這些資料，是痛苦的開始，也是最痛苦的時刻！這些資料來自30家不同的醫院，雖然學會有提供外傷登錄單機版供使用，但有些醫院鑑於個別因素，紛紛發展自己的登錄系統，而這些登錄系統匯出的欄位格式卻非當初學會所規範的樣式。 <br/> 光是時間格式，就有好幾種，有的欄位名稱取的名稱還不一樣，這時就得跟資料提供的醫院聯繫，以釐清欄位定義。這來來回回，真是勞心勞力啊！忍不住想跟所有的醫院大聲吶喊「資料欄位定義與格式的一致性，是相當重要的啊！」 <br/>  在整理資料的過程中，仍會看見有異常資料或遺漏的部分，面對這樣的資料，就只能忍痛捨棄。登錄一件完整的案件，快則30分鐘，慢則一小時，甚至耗時半天，而以重度急救責任醫院來說，一天收案約10件，日積月累之下，沉重的工作負荷，能理解外傷登錄師的辛苦。 <br/> 若登錄系統能與醫院系統接駁，自然可減少重工，也可降低人為錯誤，在資料的品質上就可大大提升！工欲善其事，必先利其器，有好的登錄系統，就是好的開始。政府可以花大把銀子建置癌症登錄系統，是否可以撥一些零頭來支持辛苦耕耘的外傷登錄系統？！</p>",
        confirmButtonText: '關閉',
    })
};

document.querySelector('#help_prevent').onclick = ()=>{
    const preventHtml = 
    `
    <p class='textWithPadding'>
     <br/>
        車禍:
        <ul style='text-align:left;'>
            <li>兒童:沒有乘坐安全座椅發生車禍的死亡率是有乘坐的8倍！36公斤以下之兒童，搭乘汽車時，記得正確地使用安全座椅並繫安全帶！</li>
            <li>成人:有駕照了嗎？沒有就趕快去考吧！騎機車要戴安全帽，搭乘汽車要繫安全帶，不要再忘記了！</li>
            <li>老人:深夜出門要穿淺色衣服「高齡駕駛人駕照管理新制」上路，75歲以上的駕駛人須做「體格檢查」和「認知功能測驗」，合格後才能換發有效期3年的駕照</li>
        </ul>
        跌倒:
        <ul style='text-align:left;'>
            <li>兒童:照顧者務必提供安全的環境：護欄、無絆倒物</li>
            <li>成人: 大多是因為工作引起，務必要做好防護措施</li>
            <li>老人:保證安全的環境：光亮的照明、無絆倒物、保持地面乾燥</li>
        </ul>
        壓砸傷
        <ul style='text-align:left;'>
            <li>兒童:照顧者務必提供安全的環境：家具固定、防護設備、不要使用桌巾</li>
            <li>成人:大多是因為工作引起，務必要做好防護措施</li>
            <li>老人:保證安全的環境：家具固定、防護設備、用具的安全</li>
        </ul>
        穿刺切割傷:
        <ul style='text-align:left;'>
            <li>兒童:危險物要好好存放，並教導兒童正確使用剪刀等物品照顧者務必提供安全的環境</li>
            <li>成人:大多是因為工作引起，務必要做好防護措施</li>
            <li>老人:保證安全的環境，提供光亮的照明設備</li>
        </ul>
        燒燙傷
        <ul style='text-align:left;'>
            <li>兒童:照顧者務必提供安全的環境：飲水機的安全設計、洗澡時要先放冷水再放熱水</li>
            <li>成人:注意環境的安全，不要輕忽危險</li>
            <li>老人:照顧者務必提供安全的環境：提供光亮的照明設備洗澡時要先放冷水再放熱水</li>
        </ul>
    </p>`;


    swal({
        animation: false,
        customClass: 'animated fadeIn',
        showCloseButton: true,
        type: 'info',
        width:'80%',
        title:'傷害預防',
        html:preventHtml,
        confirmButtonText: '關閉',
    })
};

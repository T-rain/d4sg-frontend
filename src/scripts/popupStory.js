import swal from "sweetalert2"

document.querySelector('#popupStory').onclick = ()=>{
    swal({
        animation: false,
        customClass: 'animated fadeIn allpage',
        showCloseButton: true,
        width:'100%',
        grow: 'fullscreen',
        title:'',
        // html:`
        // <img style="width:100%" src="./imgs/story/story1.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story2.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story3.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story4.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story5.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story6.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story7.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story8.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story9.jpg" alt="">
        // <img style="width:100%" src="./imgs/story/story10.jpg" alt="">,
        html:'<iframe src="./drauma0612.pdf#toolbar=0" width="100%" height="400px" frameborder="0"></iframe>',
        // html:'<embed src="/drauma.pdf#toolbar=0" type="application/pdf" width="100%" height="400px"></embed>',
        confirmButtonText: '關閉',
    })
};

document.querySelector('#popupStorySimple').onclick = ()=>{
    swal({
        animation: false,
        customClass: 'animated fadeIn',
        showCloseButton: true,
        width:'80%',
        title:'',
        html:`
        <img style="width:100%" src="./imgs/story/story1.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story2.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story3.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story4.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story5.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story6.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story7.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story8.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story9.jpg" alt="">
        <img style="width:100%" src="./imgs/story/story10.jpg" alt="">`,
        confirmButtonText: '關閉',
    })
};

// title:'外傷的生死交織與分野',
// html:"<p class='popupText textWithPadding'>鈴！鈴！鈴！急促的電話鈴響，就在兒童節這天的清晨6:00響起。「喂，我是屏東OO醫院，有一位15歲男童車禍，下半身被輾過，骨盆腔大量出血，腹部內臟破損，需要緊急手術，我們醫院沒有兒科加護病房，可以轉過去嗎？」<br/>苦惱的是，我院的兒科加護病房也都滿床，該拒絕嗎？但是，15歲！正是要綻放人生光彩的年齡，現在卻如走在懸崖邊，隨時都會墜落消逝… <br/> 基於不捨的心情，加速啟動加護病房調度機制，順利挪出一床兒科加護病床。 <br/> 6:30，回撥屏東的醫院，那頭的醫師正準備要將少年轉至另一間已滿床的醫學中心。我同他說「有床了，快過來吧！我們會先準備。」 <br/> 7：30，路上沒有以往上班時的車潮，銳利的救護車鳴笛聲在大聲喧揚，似乎吶喊著「我來了！」少年被快速推進急診外傷區，呼吸道插著氣管內管，急速閃爍的心電圖，始終沒有破百的血壓，看著這個數值，我心裡想著，正常15歲的少年這心跳和血壓應該要顛倒過來吧？！ <br/> 少年因為躁動而被約束，但他的躁動是因為休克而意識不清，或是因為疼痛，我已不得而知。我們蜂擁而上，外傷小組快打部隊，立‧刻‧啟‧動！ <br/> 一位外傷科醫師快速做了外傷超音波（FAST），另一位外傷科醫師處理了緊急醫屬與藥囑，骨科、外科及泌尿科醫師也快速做了評估。像疾駛在暴風雨中的船，情況再糟，也得穩住，外傷小組組長似船長般地發號司令「直接送開刀房！」 <br/> 在開刀房中，無影燈打在壯碩的少年身上，心電圖刺眼而激烈地跳動著，而那血壓無極限地一直朝低谷走，種種的一切，像是在嘲笑我們不自量力。 <br/> 外傷科醫師聯合外科醫師，操弄著再也熟悉不過的手術刀，快進快出，血裡來血裡去，不到30分鐘，便摘下了碎裂的脾臟；泌尿科醫師迅速地用軟式膀胱鏡，替少年放置了導尿管；骨科醫師則是架上了暫時的外固定。 <br/> 而那奔馳的心跳，總算不甘地漸趨正常，而血壓也緩慢地上升了。手術當中非常驚心動魄，體悟了「生與死在此交織，也在此分野」的心境。 <br/> 感謝所有辛苦的醫療人員，我們從來不畏戰，願意挺身而出做對的事，只要有信心，Do the right thing in the right time with the right people（在對的人上、在對的時間點，做對的事），這種核心價值將繼續生根茁壯！</p>",
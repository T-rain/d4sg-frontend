// var i = 0; 			// Start Point
// var images = [];	// Images Array
// var time = 3000;	// Time Between Switch
	 
// // Image List
// images[0] = "http://lorempixel.com/400/200/animals";
// images[1] = "http://lorempixel.com/400/200/sports";
// images[2] = "http://lorempixel.com/400/200/food";
// images[3] = "http://lorempixel.com/400/200/people";

// // Change Image
// function changeImg(){
// 	document.getElementById('workSlide').src = images[i];

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}
// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload=changeImg;
let nowPage = 1
const imageFolderSrc = "./imgs/work/"

const showDot = function(pageNumber){
  document.querySelectorAll('.dot').forEach(element => {
    element.className = "dot"
  });
  document.querySelector('#dotPage'+pageNumber+' .dot').className = "dot show"
}

document.querySelector('#dotPage1').onclick = ()=>{
  nowPage = 1
  showDot(nowPage)
  document.querySelector('#workTitle').innerHTML = "提案單位"
  document.querySelector('#workSlide').src = imageFolderSrc+"work-1.png"
}

document.querySelector('#dotPage2').onclick = ()=>{
  nowPage = 2
  showDot(nowPage)
  document.querySelector('#workTitle').innerHTML = "專案顧問"
  document.querySelector('#workSlide').src = imageFolderSrc+"work-2.png"
}

document.querySelector('#dotPage3').onclick = ()=>{
  nowPage = 3
  showDot(nowPage)
  document.querySelector('#workTitle').innerHTML = "資料英雄"
  document.querySelector('#workSlide').src = imageFolderSrc+"work-3.png"
}

setInterval(function(){
  if(nowPage === 3){
    nowPage = 1
  }else{
    nowPage = nowPage + 1
  }
  document.querySelector('#dotPage'+nowPage).click();
},3000)


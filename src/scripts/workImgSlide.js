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


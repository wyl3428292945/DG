var title = document.querySelector('title')
var navList = document.querySelectorAll('.nav li')
var conP = document.querySelector('.content>p')
window.onload = function () {
    if (!localStorage.username) {
        window.location.href = "./login.html"
    } else {
        title.innerHTML = localStorage.username + '的所有菜谱视频_豆果美食'
    }
}
var textArr = ['数据~','菜谱','菜单','笔记','收藏','美食笔记']
navList.forEach((item,index) => {
    item.onclick = function(){
        for(var i=0;i<navList.length;i++){
            navList[i].classList.remove('active')
        }
        item.classList.add('active')
        conP.innerHTML = "暂无"+textArr[index]
    }
})
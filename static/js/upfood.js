window.onload = function(){
    if(!localStorage.username){
        window.location.href = './login.html'
    }
}
var copyStr = `
    <p>
        <input type="text" class="food">
        <input type="text" class="usage">
        <span class="add" onclick="add()"></span>
        <span class="up" onclick="up()"></span>
        <span class="down" onclick="down()"></span>
        <span class="wrng" onclick="wrng()"></span>
    </p>
`
function add() {
    event.target.parentNode.outerHTML += copyStr
}
function up() {
    if (event.target.parentNode.previousElementSibling.nodeName == 'P') {
        event.target.parentNode.previousElementSibling.insertAdjacentElement('beforeBegin', event.target.parentNode)
    }
}
function down(){
    if (event.target.parentNode.nextElementSibling) {
        event.target.parentNode.insertAdjacentElement('beforeBegin', event.target.parentNode.nextElementSibling)
    }
}
function wrng() {
    event.target.parentNode.outerHTML = ""
}
function add2() {
    event.target.previousElementSibling.innerHTML += copyStr
}
var stepStr = `
    <li>
        <div class="a-upload">
            <input type="file" id="file" accept="image/*" onchange="changepic(this)">
            <div class="tiptxt">
                添加步骤图
            </div>
        </div>
        <textarea type="text"
            class="steptext">
        </textarea>
        <p>
            <span class="add" onclick="stepAdd()"></span>
            <span class="up" onclick="stepUp()"></span>
            <span class="down" onclick="stepDown()"></span>
            <span class="wrng" onclick="stepWrng()"></span>
        </p>
    </li>
`
function stepAdd(){
    event.target.parentNode.parentNode.outerHTML += stepStr
}
function stepUp(){
    if (event.target.parentNode.parentNode.previousElementSibling) {
        event.target.parentNode.parentNode.previousElementSibling.insertAdjacentElement('beforeBegin', event.target.parentNode.parentNode)
    }
}
function stepDown(){
    if (event.target.parentNode.parentNode.nextElementSibling) {
        event.target.parentNode.parentNode.insertAdjacentElement('beforeBegin', event.target.parentNode.parentNode.nextElementSibling)
    }
}
function stepWrng(){
    event.target.parentNode.parentNode.outerHTML = ""
}
function stepAdd2(){
    event.target.previousElementSibling.innerHTML += stepStr
}

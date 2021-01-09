var aUpload = document.querySelector('.a-upload')
var file = document.getElementById('file')
var rdCode = document.getElementById('rd-code')
var testCode = document.getElementById('test-code')
var cdName = document.getElementById('cdName')
var cdDesc = document.getElementById('cdDesc')

window.onload = function(){
    if(!localStorage.username){
        window.location.href = './login.html'
    }
    rdCode.innerHTML = random(1000,9999)
}

function rdC(){
    event.target.innerHTML = random(1000,9999)
}

function changepic() {
    var reads= new FileReader();
    f=file.files[0];
    reads.readAsDataURL(f);
    reads.onload=function (e) {
        aUpload.style.background=`url(${this.result}) no-repeat`;
        aUpload.style.backgroundSize= 'cover';
    };
}

function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}

function submit(){
    if(testCode.value == ""){
        alert("请填写验证码")
    }else if(cdName.value == ""){
        alert("请填写标题")
    }else if(cdDesc.value == ""){
        alter("请填写菜单介绍")
    }
}

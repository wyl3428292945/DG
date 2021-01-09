var tel = document.getElementById('tel')
var testCode = document.getElementById('test-code')
var pwd = document.getElementById('pwd')
var prompt = document.getElementById('prompt')
var marsk = document.querySelector('.marsk')
var mskIpt = document.querySelector('.msk-ipt')
var marP = document.querySelector('.mar-con p')
var rdCode = document.querySelector('.rd-code')
var telRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
var pwdRE = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/
function getCode(){
    if(telRE.test(tel.value)){
        marsk.style.display = 'block'
        rdCode.innerHTML = random(1000,9999)
    }else{
        prompt.innerHTML="请输入正确的手机号码"
    }
}
function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}
function del(){
    if(event.target.className=='marsk'){
        marsk.style.display = 'none'
        testCode.value = ""
        mskIpt.value = ""
        marP.innerHTML = "请输入验证码"
    }
    if(event.target.className=='msk-btn'){
        if(rdCode.innerHTML != mskIpt.value){
            marP.innerHTML = "输入验证码错误"
        }else{
            marsk.style.display = 'none'
            testCode.value = mskIpt.value
        }
    }
}
function submit(){
    if(!pwdRE.test(pwd.value)){
        prompt.innerHTML="密码长度为6-20位，不能含有空格"
    }else if(testCode.value!=rdCode.innerHTML){
        prompt.innerHTML="验证码填写错误"
    }else{
        prompt.innerHTML=""
        axios.put("http://localhost:3000/update",{
            tel: tel.value,
            pwd: pwd.value
        }).then(res=>{
            alert(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
}
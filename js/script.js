window.onload=()=>{
    // const contact= document.getElementById("contact") ;
    // contact.addEventListener("input", function (event) {
    //     if (contact.validity.patternMismatch) {
    //         contact.setCustomValidity("Please enter 10 digit mobile number");
    //     }
    // });
    generateCaptcha();
}
function generateCaptcha(){
    var code='';
    var letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (let i = 0; i < 5; i++) {
        var captchaNumber = letters[Math.ceil(Math.random()*62)];
        if(captchaNumber)
            code+=captchaNumber;
       }
    document.getElementById("txtCaptcha").value = code;
    document.getElementById("CaptchaDiv").innerHTML = code;
}
function checkform(){
    var theform = document.forms['loginForm'];
    var why = "";
    var m=theform.contact.value.match(/^(7|8|9)\d{9}/);
    if(m==null){
        var c=document.getElementById("contact");
        c.focus();
        return false;
    }
    if(theform.verificationCode.value != ""){
        if(ValidCaptcha(theform.verificationCode.value) == false){
            alert("- The CAPTCHA Code Does Not Match.\n");
            document.getElementById("verificationCode").focus();
            generateCaptcha();
            return false;
        }
    }
    return true;
}
    // Validate input against the generated number
    function ValidCaptcha(){
        var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
        var str2 = removeSpaces(document.getElementById('verificationCode').value);
        if (str1 == str2){
            return true;
        }else{
            return false;
        }
    }

    // Remove the spaces from the entered and generated code
    function removeSpaces(string){
        return string.split(' ').join('');
    }
// }
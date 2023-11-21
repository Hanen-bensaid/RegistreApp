const nom = document.querySelector('.nom');
const submit = document.querySelector('.submit');
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const conPass = document.querySelector('.conPass')
const error1 = document.querySelector('.error1')
const error2 = document.querySelector('.error2')
const error3 = document.querySelector('.error3')
const error4 = document.querySelector('.error4')

//test nom est vide

submit.addEventListener('click', (event) => {
    if (nom.value =="") {
        error1.innerHTML='<span>fuck u nom est vide</span>';
        return;
    }
    else{
        error1.innerHTML=""
    }
     if (email.value =="") {
        error2.innerHTML='<span>email est vide asshole</span>';
        return;
    } 
    else{
        error2.innerHTML=""
    }
    if (password.value =="") {
        error3.innerHTML='<span> are you sereuse password est vide </span>';
        return;
    }
    if(!/^[0-9a_zA-z]+*$/.test(password)){
        error3.innerHTML='it has to be number saykk'
    }
    else{
        error3.innerHTML=""
    }
    if(conPass != password.value){
        error4.innerHTML='check you password idiot'
    }
    else{
        error4.innerHTML=""
    }
})


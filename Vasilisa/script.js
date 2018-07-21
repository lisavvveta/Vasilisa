document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

function AddWord() {
    var mail = document.formLogin.email.value;
    
    if (mail == ''){windows.alert('Введите маил'); return '';}
}

 function validateEmail (mail){
         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(mail);
}

const form = document.getElementById('form')
form.addEventListener('submit', event => {
event.preventDefault()
})

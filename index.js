alert("hello");
 const form = document.querySelector("#form");
 const email = document.querySelector("#email");
 const password = document.querySelector("#password");
 const error = document.querySelector(".error");
 form.addEventListener('submit',(e) =>{
     e.preventDefault();
     let error_message = [];
     if(password.value.length <6){
         error_message.push("password cannot be less than 6");
         password.style.border='1px solid red';

     }
     if(email.value === ''){
    
         error_message.push('email cannot be empty');
         email.style.border='1px solid red';}
         else{
             email.style.border='1px solid green';
    
         }
        if(password.value === ''){
        error_message.push('password must not empty');
    password.style.border = '1px solid red';}

            else{
                 password.style.border='2px solid green';
             }
         error.style.color='red';
         error.style.background='pink';
         
     error.textContent=error_message.join(',');
 });
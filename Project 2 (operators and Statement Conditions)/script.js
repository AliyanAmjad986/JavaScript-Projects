let email = document.getElementById('email_io');
let username = document.getElementById('username_io');
let password = document.getElementById('password_io');
let message = document.getElementById('show-message')





function auths(){

let getusername = username.value;
let getemail = email.value;
let getpassword = password.value;
if(getusername == "Aliyan" && getpassword == "1234"){
    window.open('welcome.html');
}
if(getemail == "" || getpassword =="" || getusername ==""){
    message.innerText ="please fill it"
}
else if (getusername != "Aliyan"){
   message.innerText = "Invalid Username"
}else if (getpassword != "1234"){
    message.innerText = "Invalid Password"
}
}

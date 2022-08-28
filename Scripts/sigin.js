let SigninData=document.querySelector("#signinForm");
let SignupData=document.querySelector("#signupForm");
let upbtn=document.getElementById("signup");
let inbtn=document.querySelector("#signin");
let signupform=document.querySelector("#signup_container");
let signinform=document.querySelector("#signin_container");


let UpdateArr=[];
SignupData.addEventListener("submit",function(){
    event.preventDefault();
    let obj={
        first_name:SignupData.first_name.value,
        last_name:SignupData.last_name.value,
        email:SignupData.email.value,
        password:SignupData.password.value
    }
    UpdateArr.push(obj);
    alert(obj.first_name+" "+"Signup Successful")
})

SigninData.addEventListener("submit",function(){
    event.preventDefault();
       let inemail=SigninData.in_email.value;
       let inpassword= SigninData.in_password.value;
    //    console.log(inemail,inpassword)
       Validation(inemail,inpassword);
})


function Validation(inemail,inpassword){
    UpdateArr.forEach(function(ele){
        let email=ele.email;
        let password=ele.password;
        if(email==inemail && password==inpassword){
            return alert("Sign in Successful")
        }else{
            return alert("Enter Valid Email/Password")
        }
    })
}
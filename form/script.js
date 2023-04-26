
// console.log(window.pageYOffset)
  var user = document.getElementById("userName")
  var email = document.getElementById("email")
  var password = document.getElementById("password").value
  var confirmPassword = document.getElementById("confirmPassword").value
   flag =1
  function formValidate(){
   
   if(user.value==""){
    document.getElementById("userNameSpan").innerText=" plese enter user name"
    document.getElementById("userNameSpan").style.color = "red"
    flag =0
    
   }
   else if(user.value.length<3){
    document.getElementById("userNameSpan").innerText=" plese enter min 3 characters"
    document.getElementById("userNameSpan").style.color = "red"
    flag =0
   
   }
   else{
    document.getElementById("userNameSpan").innerText=""
    flag =1
   }
   if(email.value==""){
    document.getElementById("emailSpan").innerText=" email empty"
    document.getElementById("emailSpan").style.color = "red"
    flag =0
   }
   else{
    document.getElementById("emailSpan").innerText=""
    flag =1
   }
  if(password != confirmPassword){
    document.getElementById("confirmpasswordSpan").innerText=" password not match"
    document.getElementById("confirmpasswordSpan").style.color = "red"
    flag = 0
  }
  else{
    document.getElementById("confirmpasswordSpan").innerText="password"
    flag = 1
  }
  if(flag){
    return true
  }
  else{
    return false
  }
 
  }




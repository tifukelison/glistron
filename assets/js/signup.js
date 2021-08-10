 function register() {
   let  createUserEmail = document.querySelector('.createEmail').value;
let  createUserPass = document.querySelector('.createPassword').value;
let pwordCheck = document.querySelector('.confirm-password').value;
if(createUserPass === pwordCheck){
  firebase.auth().createUserWithEmailAndPassword(createUserEmail, createUserPass)
  .catch(
  function yo (error) {
    console.log(error.code);
    document.querySelector('small').innerHTML = `${error.message}`
    console.log(error.message)
  })
 } else {
  let message = "Passwords don't match"
  const error = document.querySelector('small');
  error.innerText = `${message}`
 }
}
  function myFunction() {
  var x = document.querySelector(".createPassword");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector('.fa-eye').style.color = "#333333"
  } else {
    x.type = "password";
     document.querySelector('.fa-eye').style.color = "white"
  }
}
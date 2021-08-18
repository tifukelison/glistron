const signUp = () => {
   document.querySelector('.succes_signup').classList.add('succes_signupu');

   let password = document.querySelector('.userpass').value;
  let userpass = document.querySelector('.confirmuserpass').value;
  if(userpass === password){
let email = document.querySelector('.useremail').value;
  let password = document.querySelector('.userpass').value;
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
  let username = document.querySelector('.username').value;
    var user = {
name: username,
 uid: user.uid,
            email: user.email
    }
    function writeUserData(user){
      firebase.database().ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
      })
    }
    writeUserData(user)

   console.log(user.uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}
  }
  

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    document.querySelector('.sign_up-form').style.display = "none"
    console.log(user.uid)
      console.log(user.email)  }
})


const signIn = () => {
  document.querySelector('.succes_signin').classList.add('succes_signinI');
  let signInEmail = document.querySelector('.email').value;
  let signInPass = document.querySelector('.password').value;
  firebase.auth().signInWithEmailAndPassword(signInEmail, signInPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
window.location.href = "index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.querySelector('.error-signIn').innerHTML = `${errorMessage}`
  });

}
const showstf = () =>{
  window.document.title = "Sign In | Glistron"
  document.querySelector('.sign_up-form').style.display = "none"
}
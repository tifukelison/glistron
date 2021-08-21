const signUp = () => {
   document.querySelector('.succes_signup').classList.add('succes_signupu');

   let password = document.querySelector('.userpass').value;
  let userpass = document.querySelector('.confirmuserpass').value;
  if(userpass === password){
let email = document.querySelector('.useremail').value;
  let password = document.querySelector('.userpass').value;
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let database = firebase.database()
  let username = document.querySelector('.username').value;
      firebase.database().ref('users/' + user.uid).set({
        name: username,
 uid: user.uid,
email: user.email
      }).catch(error => {
        console.log(error.message)
      })


   console.log(user.uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}else {
  
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

function googleAuth() {
  let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'it';
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    conssole.log(user)
    window.location.href = "index.html"
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}
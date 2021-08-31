const signUp = () => {
  document.querySelector('.error-signup').innerHTML = ""

  let password = document.querySelector('.userpass').value;
  let userpass = document.querySelector('.confirmuserpass').value;
  if (userpass === password) {
    let email = document.querySelector('.useremail').value;
    let password = document.querySelector('.userpass').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let username = document.querySelector('.username').value;
        let database = firebase.firestore()
        database.collection('usersNm').doc(user.uid).set({
          name: username,
          uid: user.uid,
          email: user.email
        })
      }
    })
    document.querySelector('.succes_signup').classList.add('succes_signupu');

  } else {
    document.querySelector('.error-signup').innerHTML = "Passwords do not match."
  }
}


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.querySelector('.sign_up-form').style.display = "none"
    console.log(user.uid)
    console.log(user.email)
  }
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
const showstf = () => {
  window.document.title = "Sign In | Glistron"
  document.querySelector('.sign_up-form').style.display = "none"
}
const auth = firebase.auth()
const googleAuth = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(googleProvider)
    .then(() => {
      window.location.assign('index.html')
    })
    .catch((error) => {
      console.error(error)
    })
}
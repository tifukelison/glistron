firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
   console.log('u signed out')
   console.log(user)
  }
});
 let name = document.querySelector('.name').value;
 let email = document.querySelector('.email').value;
function writeUserData(name, email) {

  firebase.database().ref('users/' + name).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  }).then(()=>{
    console.log("this is weird")
  })
}
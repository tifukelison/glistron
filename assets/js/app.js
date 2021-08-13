

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
    document.querySelector('.useremail').innerHTML = `${user.email}`
    // ...
  } else {
    // User is signed out
    // ...
   console.log('u signed out')
   console.log(user)
   window.location.href= "signINandUp.html"
  }
});

// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//   	  document.querySelector('.system').classList.add('blim');
//        document.getElementById('contents').style.visibility="hidden";
//   } else if (state == 'complete') {
//       setTimeout(function(){
//          document.getElementById('interactive');
//          document.getElementById('load').style.visibility="hidden";
//            document.querySelector('.system').style.transition="100ms";
//   document.querySelector('.system').classList.remove('blim');
//          document.getElementById('contents').style.visibility="visible";
//       },1000);
//   }
// }

function myFunction() {
  var x = document.querySelector(".password_field");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector('.fa-eye').style.color = "wheat"
  } else {
    x.type = "password";
     document.querySelector('.fa-eye').style.color = "white"
  }
}
const logOut = () => {
  firebase.auth().signOut().then(() => {
  window.location.href = "signINandUp.html"
}).catch((error) => {
  // An error happened.
});
}




function openHomeDrawer() {
  console.log("works")
  const menu = document.querySelector('.unstyled');
  menu.classList.toggle('styled')
}
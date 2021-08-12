let userId = "-Mgk7xGs1VOe_nf7bv-0";

var starCountRef = firebase.database().ref('storeInfo/' + userId);
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val().storeName;
  console.log(data)
});
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.email;
    console.log(uid + " is logged in")
    // ...
  } else {
  }
});

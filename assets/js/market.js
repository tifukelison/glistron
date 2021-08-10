

$(document).ready(function () {
  skrollr.init({
    smoothScrolling: true,
  });
});


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    console.log(uid);
    console.log(user.email)
    console.log(user.profileURL)
    document.querySelector('.login').innerHTML = `${user.email}`
  } else {
    // User is signed out
    // ...
  }
});

function threeDot() {
    console.log('Opened popup-box')
  const dots = document.querySelector('.shift');
  dots.classList.toggle('displaydots');
}
function showsearch() {
console.log('opened searchbar')
  const searchbar = document.querySelector('.search-bar')
   searchbar.classList.toggle('search-barpop')
}

function showDrawer() {
  console.log('opened drawer')
  const drawer = document.querySelector('.drawer');
  drawer.classList.toggle('showDrawer');

}
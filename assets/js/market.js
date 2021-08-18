

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
    document.querySelector('.login').innerHTML = `${user.email}`
     let db = firebase.firestore();
 db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
console.log(doc.data())
let div = document.querySelector('#content')
let div_4box = document.createElement('div');
div_4box.innerHTML= `<div class="item_info">
         
           <div class="image"><img src="${doc.data().photoUrl}">
        </div>
         <p class="itemName">Item Name: ${doc.data().ItemName} </p>
          <p>Tel: ${doc.data().ItemTel}</p>
          
          <p>Price: ${doc.data().ItemPrice}</p>
           <p>Description: ${doc.data().ItemDescription}</p>
          <button class="btn-secondary"><a style="color: white;" href="${doc.data().ItemContact}">Contact</a></button>
        </div>
`
div.appendChild(div_4box)
    });});
  } else {
    // User is signed out
    // ...
   console.log('u signed out')
   console.log(user)
   window.location.href= "signINandUp.html"
  }
});


$(document).ready(function () {
  skrollr.init({
    smoothScrolling: true,
  });
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

function searchQuery() {
  let input, filter, div, p, span, i, txtValue;
  input = document.querySelector('.searchbar__');
  filter = input.value.toUpperCase();
  div = document.querySelector('.item_info')
  p = div.querySelector('.itemName');

  //Loop through all divs and hid those who dont contain what is the search
console.log('')
   for (i = 0; i < p.length; i++) {
     span = p[i].querySelector('.itemName')[0];
     txtValue = span.textContent || span.innerText;
     if (txtValue.toUpperCase().indexOf(filter)> -1) {
      p[i].style.display = "";
     }else{
       p[i].style.display = "none"
     }
   }
}
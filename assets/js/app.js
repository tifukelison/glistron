

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
    document.querySelector('.useremail').innerHTML = `${user.email}`
     let db = firebase.firestore();
 db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
console.log(doc.data())
let div3_box = document.querySelector('.four_cards');
let div3 = document.createElement('div');
div3.innerHTML= `<div class="item_info">
          
           <div class="image"><img src="${doc.data().photoUrl}">
        </div><p>Item Name: ${doc.data().ItemName} </p>
          <p>Tel: ${doc.data().ItemTel}</p>
          
          <p>Price: ${doc.data().ItemPrice}</p>
          <button class="btn-secondary"><a style="color: white;" href="${doc.data().ItemContact}">Contact</a></button>
        </div>
`
div3_box.appendChild(div3)
    });});

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

function goToPost(e) {
  e.preventDefault();
  window.location.href="post.html"
}


function openHomeDrawer() {
  console.log("works")
  const menu = document.querySelector('.unstyled');
  menu.classList.toggle('styled')
}

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
}
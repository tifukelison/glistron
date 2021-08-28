firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    let db = firebase.firestore();
    db.collection('posts').get().then((querySnapshot)=>{
      // console.log(querySnapshot.val());
      let postss = [];
  querySnapshot.forEach((doc)=>{
    postss.push(doc.data());  })
  console.log(postss);
  for (var i = 3; i < postss.length; i++) {
    // console.log(postss[i].ItemLocation);
    let post= postss[i]
    let div3_box = document.querySelector('.four_cards');
let div3 = document.createElement('div');
div3.innerHTML= `<div class="item_info">
          
           <div class="image"><img src="${post.photoUrl}">
        </div><p>Item Name: ${post.ItemName} </p>
          <p>Tel: ${post.ItemTel}</p>
          
          <p>Price: ${post.ItemPrice}</p>
          <button class="btn-secondary"><a style="color: white;" href="${post.ItemContact}">Contact</a></button>
        </div>
`
div3_box.appendChild(div3)
  }
    })
  }
})

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
// console.log(doc.data())

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




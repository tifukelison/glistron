


firebase.auth().onAuthStateChanged((user) => {
  if (user) {

 let db = firebase.firestore();
 db.collection("users")
  .doc(user.uid)
  .get()
  .then(snapshot => {
    const doc = snapshot.data()
    console.log(document);
   window.document.title = `${doc.storeName} | Glistron`
       document.querySelector('.body').innerHTML = ` <header>
    <div class="header">
    <div class="store_img">
     </div>
    <div class="store_info">
      <h1 class="h1_storeName">${doc.storeName}</h1>
      <p class="p description">${doc.storeDescription}</p>
      <p class="p location">${doc.storeLocation}</p>
      <p class="p data_created">${Date()}</p>

    </div>
    </div>
  </header>
  <div class="box_aboutStore">
    <div class="store_img1">
      
    </div>
    <div class="store_info1">
      <h1 class="store_name">Store Name: ${doc.storeName}</h1>
      <p class="store_tagline">Store Catelog: ${doc.storeCategory}</p>
      <p class="store_description">Store Description: <br>${doc.storeDescription}</p>
      <div class="btns">
      <button class="edit_data">Edit</button>
      <button class="delete_data">Delete</button>
    </div>
    </div>
  </div>`
  })
//  db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
// console.log(doc.data())
// window.document.title = `${doc.data().storeName} | Glistron`
//        document.querySelector('.body').innerHTML = ` <header>
//     <div class="header">
//     <div class="store_img">
//      </div>
//     <div class="store_info">
//       <h1 class="h1_storeName">${doc.data().storeName}</h1>
//       <p class="p description">${doc.data().storeDescription}</p>
//       <p class="p location">${doc.data().storeLocation}</p>
//       <p class="p data_created">${Date()}</p>

//     </div>
//     </div>
//   </header>
//   <div class="box_aboutStore">
//     <div class="store_img1">
      
//     </div>
//     <div class="store_info1">
//       <h1 class="store_name">Store Name: ${doc.data().storeName}</h1>
//       <p class="store_tagline">Store Catelog: ${doc.data().storeCategory}</p>
//       <p class="store_description">Store Description: <br>${doc.data().storeDescription}</p>
//       <div class="btns">
//       <button class="edit_data">Edit</button>
//       <button class="delete_data">Delete</button>
//     </div>
//     </div>
//   </div>`
//     });
// });
const img = document.querySelector('.store_img');
img.addEventListener('click', ()=>{
  console.log(box)
  const box = document.querySelector('.box_aboutStore');
  box.classList.toggle('show_aboutStore');
})
  } else {
  }
});

const user = firebase.auth().currentUser;

if (user) {
  console.log(user.email)
} else {
 console.log('nathing')
}
// var uid = firebase.auth().currentUser.uid;
//  let db = firebase.firestore();
// var docRef = db.collection("users").doc(uid);

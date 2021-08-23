


firebase.auth().onAuthStateChanged((user) => {
  if (user) {

 let db = firebase.firestore();
 db.collection("users")
  .doc(user.uid)
  .get()
  .then(snapshot => {
    const doc = snapshot.data()
    console.log(doc.logoUrl);
// function to delete data

    // document.querySelector('.store_img').style.backgroundImage = `url("${doc.logoUrl}")`
   window.document.title = `${doc.storeName} | Glistron`
       document.querySelector('.body').innerHTML = ` <header>
    <div class="header">
    <div class="store_img">
    <img src="${doc.logoUrl}" alt="StoreLogo" /> 
    <p class="openPop">View Details</p>
     </div>
    <div class="store_info">
      <h1 class="h1_storeName">${doc.storeName}</h1>
      <p class="p number">${doc.storeNumber}</p>
      <p class="p description">${doc.storeDescription}</p>
      <p class="p location">${doc.storeLocation}</p>
      <p class="p data_created">${doc.storeCategory}</p>
    </div>
    </div>
  </header>
  <div class="box_aboutStore">
    <div class="store_img1">
      <img src="${doc.logoUrl}" alt="storeLogo"/>
    </div>
    <div class="store_info1">
      <h1 class="store_name"><b>Store Name:</b> ${doc.storeName}</h1>
      <p class="store_tagline"><b>Store Catelog:</b> ${doc.storeCategory}</p>
      <p class="store_description"><b>Store Description:</b> <br>${doc.storeDescription}</p>
      <div class="btns">
      <button class="edit_data"><a href="create_store.html">Edit</a></button>
      <button class="delete_data">Delete</button>
    </div>
    </div>
  </div>`
  let delBtn = document.querySelector('.delete_data');
 delBtn.addEventListener('click', ()=>{
  let docRef = firebase.firestore().collection('users').doc(user.uid);
  //delete the doc
  docRef.delete();
  console.log('document deleted')
document.querySelector('.storeDeletedi').style.display = "block";
 })
 let img = document.querySelector('.openPop');
img.addEventListener('click', ()=>{
  console.log('box')
  const box = document.querySelector('.box_aboutStore');
  box.classList.toggle('show_aboutStore');
})
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

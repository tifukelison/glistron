firebase.auth().onAuthStateChanged((user)=>{
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
  
    </div>
  </div>`
	}
)}});


firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    let something = firebase.database().ref('storePost/' + user.uid + "/posts");
    something.on('value', (snapshot)=>{
      const data = snapshot.val();
      console.log(data);
      Object.keys(snapshot.val()).forEach((key)=> {
        console.log(snapshot.val()[key].postUrl);
         let div = document.querySelector('.storeViewPost');
    let data = ` 
      <div class="storeImagePost">
        <img src="${snapshot.val()[key].postUrl}" alt="storePost">
      </div>
      <p class="priceh">Price: <span class="price">${snapshot.val()[key].ItemPrice}</span>Frs</p>
    </div>
  `
  let divs = document.createElement('div');
  divs.innerHTML = data;
  div.appendChild(divs)
         
      })
    })

  }
})
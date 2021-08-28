firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    let db = firebase.firestore();
 db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data());
   let div = document.querySelector('.stores');
    let data = ` 
      <div class="store animate__animated animate__fadeInUp">
              <img src="${doc.data().logoUrl}" alt='storeLogo' class="storeLogo">
              <h1>${doc.data().storeName}</h1>
              <p>${doc.data().storeDescription}</p>
              <a href="https://wa.me/${doc.data().storeNumber}?text=Hi%20I%20am%20from%20Glistron%20I%20want%20to%20have%20a%20chat%20with%20you">${doc.data().storeNumber}</p>
            </div>
  `
  let divs = document.createElement('div');
  divs.innerHTML = data;
  div.appendChild(divs)
         
    });
      
});
  }
})
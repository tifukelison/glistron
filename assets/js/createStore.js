//location: project/
let db = firebase.firestore();
 db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if(doc.exists){
         console.log(doc.id, " => ", doc.data());
      }else {
console.log('no such document');
      }
         
    });
      
});

const createStoreBtn = document.querySelector('.createStoreBtn')
createStoreBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	firebase.auth().onAuthStateChanged(function(user) {
 	const store_name = document.querySelector('.store_name').value;
const store_location = document.querySelector('.store_location').value;
const store_number = document.querySelector('.store_number').value;
const store_category = document.querySelector('.category').value;
const store_description = document.querySelector('.store_description').value;
const puf = firebase.storage().ref();
const file = document.querySelector('#file').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = puf.child("userStoreLogos/"+name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    let urlp = url;
let db = firebase.firestore();
var dbUser = db.collection('users')
.doc(user.uid).set({
   logoUrl: urlp,
 email: user.email,
storeName: store_name,
storeLocation: store_location,
storeNumber: store_number,
storeCategory: store_category,
storeDescription: store_description,

}).then(()=>{
	window.location.href="myshop.html"
}).catch((error) =>  {
   console.log("error adding shop")
});
console.log(logoUrl);
}).catch(console.error)


});

})

   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
   let db = firebase.firestore();
var dbUser = db.collection('users')
.doc(user.uid).get().then(res => console.log(res.data()))
.catch(console.log('no data found'))
console.log(db.collection('users').doc(user.uid));

      }
    });

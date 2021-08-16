// const userId = document.querySelector('#userId').value;

// const database = firebase.database();
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     createStoreBtn.addEventListener('click', (e)=>{
// 	e.preventDefault()
// 	const store_name = document.querySelector('.store_name').value;
// const store_location = document.querySelector('.store_location').value;
// const store_number = document.querySelector('.store_number').value;
// const store_category = document.querySelector('.category').value;
// const store_description = document.querySelector('.store_description').value;
// firebase.database().ref('storeInfo/' + uid).set({
// storeName: store_name,
// 		storeLocation: store_location,
// 		storeNumber: store_number,
// 		storeCategory: store_category,
// 		storeDescription: store_description 

// }).then(() => {
// 		console.log(user.email)
// 		window.location.href = "myshop.html"
// 	})
// 	.catch(error => {
// 		console.error(error)
// 	})
// 	
//     console.log(uid)
//   } else {
//     // User is signed out
//     // ...
//    console.log('u signed out')
//    console.log(user)
//   }
// });
let db = firebase.firestore();
 db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data());
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
let db = firebase.firestore();
var dbUser = db.collection('users')
 // const puf = firebase.storage().ref();
// const file = document.querySelector('.store_logo').files[0]
// const name = (+new Date()) + '-' + file.name;
// const metadata = {
//   contentType: file.type
// };
// const task = puf.child('/' +uid + '/'name).put(file, metadata);
// task
//   .then(snapshot => snapshot.ref.getDownloadURL())
//   .then((url) => {
//     console.log(url);
//   })
//   .catch(console.error);
// });
.doc(user.uid).set({
 email: user.email,
storeName: store_name,
storeLocation: store_location,
storeNumber: store_number,
storeCategory: store_category,
storeDescription: store_description,


}).then(()=>{
	window.location.href="myshop.html"
} )

});

})

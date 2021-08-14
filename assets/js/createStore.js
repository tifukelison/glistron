const userId = document.querySelector('#userId').value;

const database = firebase.database();
const rootRef = database.ref('/storeInfo/' + userId);
const createStoreBtn = document.querySelector('.createStoreBtn')
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
  } else {
    // User is signed out
    // ...
   console.log('u signed out')
   console.log(user)
  }
});
createStoreBtn.addEventListener('click', (e)=>{
	e.preventDefault()
	const store_name = document.querySelector('.store_name').value;
const store_location = document.querySelector('.store_location').value;
const store_number = document.querySelector('.store_number').value;
const store_category = document.querySelector('.category').value;
const store_description = document.querySelector('.store_description').value;


	const autoId = rootRef.push().key
	rootRef.child(autoId).set({
		storeName: store_name,
		storeLocation: store_location,
		storeNumber: store_number,
		storeCategory: store_category,
		storeDescription: store_description 

	})
	.then(() => {
		console.log('details sent')
	})
	.catch(error => {
		console.error(error)
	})
	const puf = firebase.storage().ref();
const file = document.querySelector('.store_logo').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = puf.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
  })
  .catch(console.error);
});

function updateStore (e){
	e.preventDefault();
	const newData = {
		storeName: storeUpdatedName,
		storeLocation: storeUpdatedLocation,
		storeNumber: storeUpdatedNumber,

	};
	const updates = {};
	updates['/storeInfo/' + userId] = newData;
	updates['/super-users/' + userId] = newData;
	database.ref().update(updates);
}

function deleteStore(e) {
	e.preventDefault();
	rootRef.child(userId).remove()
	.then(()=>{
		window.alert("user" + userId + "was removed from database");
	})
	.catch(error => {
		console.error(error)
	})
}



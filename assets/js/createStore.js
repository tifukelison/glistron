const userId = document.querySelector('#userId').value;
const store_name = document.querySelector('.store_name').value;
const store_location = document.querySelector('.store_location').value;
const store_number = document.querySelector('.store_number').value;
const createStoreBtn = document.querySelector('.createStoreBtn')
const store_category = document.querySelector('.category').value;
const store_description = document.querySelector('.store_description').value;


const database = firebase.database();
const rootRef = database.ref('storeInfo');

createStoreBtn.addEventListener('click', (e)=>{
	const autoId = rootRef.push().key
	rootRef.child(autoId).set({
		storeName: store_name,
		storeLocation: store_location,
		storeNumber: store_number,
		storeCategory: store_category,
		storeDescription: store_description 

	})
	.then(() => {
		window.location.href="myshop.html"
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

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
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


let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;



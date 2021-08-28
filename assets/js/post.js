let submit = document.querySelector('.submitBtn')
submit.addEventListener('click', (e)=>{
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
   var uid = user.uid;
  console.log('user email => ' + user.email)
  let item_name = document.querySelector('.item_name').value;
  let item_tel = document.querySelector('.item_tel').value;
   let message = `Hello, I'm from gliston, I'm interested in ${item_name}`
 let link = `https://wa.me/${item_tel}?text=${message}`
   let item_location = document.querySelector('.item_location').value;
  let item_price = document.querySelector('.item_price').value;
console.log(link)
  let item_description = document.querySelector('#item-description').value;
 const puf = firebase.storage().ref();
const file = document.querySelector('#file').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = puf.child("userPosts/"+name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    let urlp = url;
    
  let db = firebase.firestore();
  db.collection("posts").add({
    photoUrl: urlp,
   ItemName: item_name,
  ItemLocation: item_location,
  ItemPrice: item_price+"Frs",
  ItemTel: item_tel,
  ItemContact: link,
  ItemDescription: item_description
})
.then(() => {
    console.log("Document written with ID:");
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
document.querySelector('.successPost').style.display = "block";
document.querySelector('.container').classList.add('blur');
    console.log(urlp)
  })
  .catch(console.error);


  } else {
   console.log('no user signed in')
  }
});

})
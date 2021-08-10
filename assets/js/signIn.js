const swap = document.querySelector('.swap');
swap.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('switch to create user account')
  document.querySelector('.coverBox').style.transition = "1.2s";
  document.querySelector('.coverBox').style.marginLeft = "-262px"
})
const swap2 = document.querySelector('.swap2');
swap2.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log('switch to sign in');
    document.querySelector('.coverBox').style.transition = "1.2s";
  document.querySelector('.coverBox').style.marginLeft = "260px"
})




const signup = () => {
let name_input = document.querySelector('.name')
let createUserEmail = document.querySelector('.createEmail').value;
let createUserPass = document.querySelector('.createPass').value;
firebase.auth().createUserWithEmailAndPassword(createUserEmail, createUserPass)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    function writeUserData(userId, name_input, createUserEmail){
      console.log('works')
  firebase.database().ref('users/' + userId).set({
    username: name_input,
    email: createUserEmail,
  });
}
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
};

const login = () => {

  let loginEmail = document.querySelector('.login_email').value;
  let loginPassword = document.querySelector('.login_password').value;
  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.querySelector('small').innerHTML = `${errorMessage}`
  });
}


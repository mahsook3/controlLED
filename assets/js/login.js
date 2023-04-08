// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCIsroenbpuLVi6rBvG-4lnEwPPaw0SN18",
  authDomain: "loginpage-279b4.firebaseapp.com",
  projectId: "loginpage-279b4",
  storageBucket: "loginpage-279b4.appspot.com",
  messagingSenderId: "254045707148",
  appId: "1:254045707148:web:09aef06a878c806761d4a9",
  measurementId: "G-T7T24RBVV5"
};
firebase.initializeApp(firebaseConfig);

// Get elements
const username = document.getElementById("username");
const password = document.getElementById("password");

// Add login event
function signIn() {
  const email = username.value;
  const pass = password.value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "controlledpage.html"; // Redirect to controlledpage.html
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid email or password");
    });
}

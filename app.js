// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the LED state in the Firebase database
var ledRef = firebase.database().ref('led');

// Update the LED state when the "Turn On" button is clicked
document.getElementById("on-btn").addEventListener("click", function() {
	ledRef.set(true);
});

// Update the LED state when the "Turn Off" button is clicked
document.getElementById("off-btn").addEventListener("click", function() {
	ledRef.set(false);
});

// Listen for changes to the LED state in the Firebase database
ledRef.on('value', function(snapshot) {
	var ledState = snapshot.val();
	if (ledState) {
		document.querySelector(".led").style.backgroundColor = "green";
	} else {
		document.querySelector(".led").style.backgroundColor = "grey";
	}
});

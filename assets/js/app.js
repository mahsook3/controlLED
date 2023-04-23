// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the LED status in the Firebase database
var ledStatusRef = firebase.database().ref('led/status');

// Update the LED status when the "Turn On" button is clicked
document.getElementById("on-btn").addEventListener("click", function() {
    ledStatusRef.set(1);
    document.querySelector(".led").classList.add("active");
});

// Update the LED status when the "Turn Off" button is clicked
document.getElementById("off-btn").addEventListener("click", function() {
    ledStatusRef.set(0);
    document.querySelector(".led").classList.remove("active");
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

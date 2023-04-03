var firebaseConfig = {
    apiKey: "AIzaSyCC0FJvHzPlwbN_XKdk5m9hr8U1TGxKMYA",
  authDomain: "toggle-button-9fc98.firebaseapp.com",
  databaseURL: "https://toggle-button-9fc98-default-rtdb.firebaseio.com",
  projectId: "toggle-button-9fc98",
  storageBucket: "toggle-button-9fc98.appspot.com",
  messagingSenderId: "319945237151",
  appId: "1:319945237151:web:4d8730c3d09a25b79cf8aa",
  measurementId: "G-RXFZL260ZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});
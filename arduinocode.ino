#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>

// Replace with your own WiFi credentials
#define WIFI_SSID "your_wifi_ssid"
#define WIFI_PASSWORD "your_wifi_password"

// Replace with your own Firebase project credentials
#define FIREBASE_HOST "your_project_id.firebaseio.com"
#define FIREBASE_AUTH "your_firebase_auth_token"
#define FIREBASE_LED_PATH "/led"

// Initialize Firebase
FirebaseData firebaseData;
FirebaseAuth firebaseAuth;
FirebaseConfig firebaseConfig;

void setup() {
	// Start serial communication
	Serial.begin(9600);

	// Connect to WiFi
	WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
	while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		Serial.println("Connecting to WiFi...");
	}
	Serial.println("Connected to WiFi");

	// Initialize Firebase
	firebaseConfig.host = FIREBASE_HOST;
	firebaseConfig.auth = FIREBASE_AUTH;
	firebaseAuth.reconnectWiFi(true);
	Firebase.begin(firebaseConfig);

	// Set the built-in LED pin as output
	pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
	// Check for updates to the LED state in the Firebase database
	if (Firebase.getInt(firebaseData, FIREBASE_LED_PATH)) {
		bool ledState = firebaseData.intData();
		if (ledState) {
			digitalWrite(LED_BUILTIN, LOW);
			Serial.println("LED is ON");
		} else {
			digitalWrite(LED_BUILTIN, HIGH);
			Serial.println("LED is OFF");
		}
	}

	// Wait for 1 second
	delay(1000);
}

#include <Adafruit_NeoPixel.h>
#include <FirebaseESP8266.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#define WIFI_SSID "JASMINE" // your wifi SSID
#define WIFI_PASSWORD "8939997487" // your wifi PASSWORD

#define LedPin 16         // pin d0 as toggle pin
#define FIREBASE_HOST "controlled-f596b-default-rtdb.firebaseio.com/" // change here
#define FIREBASE_AUTH "yLifpGzz24JECxwfc4hLVZrddDKi0PN3eOpXy3mn"  // your private key
FirebaseData firebaseData;

void setup() {
  pinMode(LedPin, OUTPUT);
  Serial.begin(9600);
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
}

void loop() {
  if (Firebase.getString(firebaseData, "/Led1Status")) {
    String ledstatus = firebaseData.stringData();
    if (ledstatus.toInt() == 1) {
      digitalWrite(LedPin, HIGH);
      Serial.println("LED on");
    }
    else {
      digitalWrite(LedPin, LOW);
      Serial.println("LED off");
    }
  }
  else {
    Serial.print("Error in getInt, ");
    Serial.println(firebaseData.errorReason());
  }
}
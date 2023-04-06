# controlLED Firebase Toggle Button
This is a simple project that demonstrates how to use Firebase Realtime Database and a toggle button to control an LED connected to an Arduino board. The state of the LED is stored in the Firebase database, and the toggle button updates the state in real-time.

Getting Started
Prerequisites
Arduino board (tested on ESP8266 NodeMCU)
NeoPixel RGB LED
Jumper wires
Breadboard
Firebase account
Installing
Create a new project in the Firebase console.
Add a new app to the project and copy the Firebase configuration code.
Add the firebase-app.js and firebase-database.js scripts to your HTML file.
Connect your NeoPixel LED to your Arduino board.
Upload the Firebase_Toggle_Button.ino sketch to your Arduino board.
Update the WIFI_SSID, WIFI_PASSWORD, FIREBASE_HOST, and FIREBASE_AUTH variables in the Arduino sketch with your own values.
Open the index.html file in your web browser.
Usage
To use the toggle button, simply click on it. The state of the LED will be updated in real-time in both the Firebase database and the Arduino board.

Built With
Firebase Realtime Database - Database used to store LED state
jQuery - JavaScript library used for DOM manipulation
FontAwesome - Icon library used for toggle button icon
Arduino IDE - Integrated development environment used to write and upload code to the Arduino board
Authors
John Doe - Initial work
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Thanks to Firebase for providing a great platform for real-time data storage and synchronization.
Thanks to Adafruit for providing a great NeoPixel library for Arduino.
Thanks to the jQuery and FontAwesome communities for providing great libraries that make web development easier.

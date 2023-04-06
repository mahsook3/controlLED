# controlLED Firebase Toggle Button
This is a simple project that demonstrates how to use Firebase Realtime Database and a toggle button to control an LED connected to an Arduino board. The state of the LED is stored in the Firebase database, and the toggle button updates the state in real-time.

## Getting Started
### Prerequisites
* Arduino board (tested on ESP8266 NodeMCU)
* NeoPixel RGB LED
* Jumper wires
* Breadboard
* Firebase account

## Installing
1. Create a new project in the Firebase console.
2. Add a new app to the project and copy the Firebase configuration code.
3. Add the **'firebase-app.js'** and **'firebase-database.js'** scripts to your HTML file.
4. Connect your NeoPixel LED to your Arduino board.
5. Upload the [Toggle_button.ino](/Toggle_button.ino) sketch to your Arduino board.
6. Update the **'WIFI_SSID'**, **'WIFI_PASSWORD'**, **'FIREBASE_HOST'**, and **'FIREBASE_AUTH'** variables in the Arduino sketch with your own values.
7. Open the [index.html](/index.html) file in your web browser.

## Usage
To use the toggle button, simply click on it. The state of the LED will be updated in real-time in both the Firebase database and the Arduino board.

## Built With
[Firebase Realtime Database](https://firebase.google.com/docs/database) - Database used to store LED state
[jQuery](https://jquery.com/) - JavaScript library used for DOM manipulation
[FontAwesome](https://fontawesome.com/) - Icon library used for toggle button icon
[Arduino IDE](https://www.arduino.cc/en/software) - Integrated development environment used to write and upload code to the Arduino board

## Authors
[Mohamed Shaik Mahsook](https://github.com/mahsook3)

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledgments
* Thanks to Firebase for providing a great platform for real-time data storage and synchronization.
* Thanks to Adafruit for providing a great NeoPixel library for Arduino.
* Thanks to the jQuery and FontAwesome communities for providing great libraries that make web development easier.

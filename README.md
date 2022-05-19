<img src="src/assets/titleBanner.png" width="auto" />

<br>

## By Hayley McVay
<br>

### A mobile app to centralize and organize mutual aid efforts created with Javascript, React, and React Native.

<br>

## Technologies Used

* React
* React Native
* Javascript
* HTML


<br>

## Description

This project was created as an independent capstone project for Epicodus bootcamp. It shows proficiency in React Native and NoSQL.

TakeCare is a mobile application using React Native and Firestore to centralize and organize mutual aid requests and efforts. Users can post goods or services they are in need of - or offering - for other users to view. 

At this point in time, it is simply a digital bulletin board: a place to display your info or needs. It does not yet have a messaging feature, so it is not intended to be a platform to connect users, simply to view user information. 

<br>

## Setup/Installation Requirements

// TO BE WRITTEN LATER AFTER CODING BEGINS //

<br>

## Known Bugs

* None so far

<br>

## Planning & Progress Log

<br>

### [Friday, 4/29/22](https://github.com/hmcvay/capstone-pre-planning) (8 hours)
* 6:30am: Watch youtube tutorial on react
* 7:10am: Watch youtube tutorial on redux
* 8:30am: Group planning session with peers in discord
* 10:00am: Begin Codecademy course on React Native
* 12:00pm: LUNCH
* 1:00pm: Continue with Codecademy course
* 2:00pm: Add project proposal and README to repo
* 2:30pm: Make outline plan for next steps - done for the day. 

<br>

### [Friday, 5/6/22](https://github.com/hmcvay/TakeCare) (8 hours)

_started this new repo due to git auto initializing another git upon `create-react-native-app` in the previous repo. previous repo only contained planning logs/commit history which I've supplied above_

* 8:00am: Research expo
* 9:00am: Init new repository using Expo CLI & begin adding react-native-navigation to app
* 10:30am: Begin minor styling/onPress functions to take user through navigation screens
* 12:00pm: LUNCH
* 1:00pm: Continue creating/linking navigation screens to each other with onPress functions
* 3:00pm: Nav routes complete - begin research for adding dotenv and firebase packages
* 4:00pm: Add packages, config, and update gitignore
* 4:45pm: WIP 'addPost' async method - done for the day.

<br>

### [Friday, 5/13/22](https://github.com/hmcvay/TakeCare) (8 hour)

* 8:00am: Begin working with Adding a post from app to Firebase
* 11:30am: Errors, errors, errors with Expo re: firebase
* 12:00-1:00pm: LUNCH
* 2:00pm: After research, make the decision to switch from Expo to XCODE because Expo (all it's versions) are pretty much broken with all Firebase versions at this time. BEGIN XCODE DOWNLOAD.
* 3:40pm: Xcode finishes downloading (13gb) -- been researching Xcode and Xcode's ios simulator during download time.
* 4:00pm: Remove all expo references/packages and begin adding Watchman, and installing Xcode Simulator.
* 5:00pm: Simulator finishes download (5gb) and update all config and packages.

<br>

### Sunday, 5/15/22 (4 hours)

* 12:45 - 4:45: BEGIN WORK IN _THIS_ NEW REPO (had to start new again because I needed to completely re-initialize the app with React-Native CLI instead of the last repo which was Expo CLI) Start work on adding async post method to firebase, and inputting some static/filler data.

<br>

### Monday, 5/16/22 (10 hours)

* 8:30am - 12:00pm: Firebase error re: uuid and getRandomValues package. Research/Wrestle over this until discovering you can use addDoc in Firebase instead of setDoc which will auto generate a unique id which dissolves the need for uuiv4 and getRandomValues.
* 12:00 - 1:00pm: LUNCH
* 1:00 - 7:30pm: WIP app still not connecting to firebase! Discovered that my app is not communicating with dotenv at all. Troubleshooted all night. In between troubleshooting, I added some icons to nav footer and picked out a google font as well.

<br>

### Tuesday, 5/17/22 (9.5 hours)

* 8:30am: BUGFIX! Fixed my dotenv issue with the app by simply removing dotenv all together, and hard coding the keys straight into the config (temporary workaround). Posts are adding to firebase!
* 9:00am: Write async fetch method to begin pulling posts down to the app in feed view.
* 9:30am - 12:00pm: WIP: render error when trying to display the posts from firebase. Researching and troubleshooting until lunch.
* 12:00-1:00pm: LUNCH
* 3:45pm: Some progress -- able to parse and view the object in the console with console.log but still getting render error when trying to actually get it on the page...
* 5:00pm: Had peers look at code and tried more troubleshooting. still same error, still won't render. Break for dinner and step away from code.
* 8:30pm - 10:00pm: Still cannot resolve error, go with plan b: hard code static posts straight into code so that I have something to show for presentations.

<br>

### Wednesday, 5/18/22 ()

* 9:00am: one last attempt at displaying firestore data - writing a new async method and try to store object differently to render to FlatList component.
* 11:00am: BUGFIX!!! New method and new FlatList render work!! Firebase data is displaying in a feed view!!!
* 11:30 - 12:30: update README and work on capstone presentation materials.
* 12:30-1:30pm: LUNCH
-------
* 2:45-3:45pm: WIP styling now that all data is rendering.



## License 

MIT License

Copyright (c) [2022] [Hayley McVay](github.com/hmcvay)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


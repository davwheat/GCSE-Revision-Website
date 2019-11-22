/* eslint-disable */

importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js")

firebase.initializeApp({
  messagingSenderId: "362657041117",
})

const messaging = firebase.messaging()

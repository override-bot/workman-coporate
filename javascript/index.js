var firebaseConfig = {
    apiKey: "AIzaSyDp_exrotiQfRZVKzSlk2oM1Ph_Qg7tuFQ",
    authDomain: "workman-41e76.firebaseapp.com",
    projectId: "workman-41e76",
    storageBucket: "workman-41e76.appspot.com",
    messagingSenderId: "833494664031",
    appId: "1:833494664031:web:6cce8d8099ab8980de6cea",
    measurementId: "G-15M24BQD3C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
//send message
function sendMessage() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    if (email.length > 6 && message.length > 6) {
        db.collection('userMessages').add({
            email: email,
            name: name,
            message: message
        });
        alert("message sent succesfully")
    }
}
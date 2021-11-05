var firebaseConfig = {
    apiKey: "AIzaSyAe4SU0m-pyATSn9MKW8hZxJD_ZzHp-eCM",
    authDomain: "workjeje-dcd73.firebaseapp.com",
    projectId: "workjeje-dcd73",
    storageBucket: "workjeje-dcd73.appspot.com",
    messagingSenderId: "55701912183",
    appId: "1:55701912183:web:bdeb3c825a4c321f8ba472",
    measurementId: "G-FDSN74MTY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
//upload image
var storageRef = firebase.storage().ref();
var userRef = storageRef.child('users')



//create account
function signUp() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let first = document.getElementById('first').value
    let second = document.getElementById('second').value
    let location = document.getElementById('location').value
    let number = document.getElementById('number').value
    let occupation = document.getElementById('occupation').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user
            alert(user.uid)
            let fileId = document.getElementById('file');
            let file = fileId.files[0];
            userRef.child(user.uid).put(file).then((snapshot) => {
                console.log(snapshot)
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL)
                    db.collection('providers').doc(user.uid).set({
                        "username": first + " " + second,
                        "location": location,
                        "phoneNumber": number,
                        "email": email,
                        "occupation": occupation,
                        "imageurl": downloadURL,
                        "rating": 1,
                        "raters": 1,
                        "verificationStatus": "Not verified",
                        "walletBalance": 200,
                        "availability": "available",

                    }).catch((error) => {
                        console.log(error)
                    })
                })
            })
        }).catch((error) => {
            alert(error.message)
        })
    window.location.replace("https://override-bot.github.io/workman-coporate")
}
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
        }).then(() => {
            alert("message sent succesfully")
        }).catch((error) => {
            alert(error.message);
        });
    }
}

function openApp() {
    window.location.href = "https://wokman.page.link/76UZ";
}
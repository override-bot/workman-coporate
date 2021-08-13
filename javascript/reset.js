function resetPassword() {
    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(() => {
            document.getElementById('success').innerText = "Email sent successfully";
        })
        .catch((error) => {
            console.log(error.message);
            document.getElementById('error').innerText = error.message;
        })
}
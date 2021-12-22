const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
    let pass = ""
    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * password.length)
        pass += password.charAt(index)
    }

    document.getElementById("password").innerHTML = pass
}
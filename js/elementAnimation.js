function addAnimateClass(element) {
  element.classList.add("up-down-animation");
}

function removeAnimateClass(element) {
  element.classList.remove("up-down-animation");
}

function showInfo() {
    var nameAndSurname = document.getElementById("nameAndSurname").value;
    var  Email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Mesaj Gönderdiğiniz İçin teşekkürler\n" + nameAndSurname + "\n" + Email + "\n" + "Mesajınız: " + message);
}
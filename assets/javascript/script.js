function test() {
    // retriveing data
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var message = document.getElementById("contact-message").value;
    //storage data
    var user = localStorage.setItem("name", name);
    var em = localStorage.setItem("email", email);
    var mess = localStorage.setItem("message", message);
    // retreving stored data and using it for calculation
    var user = localStorage.getItem("name", name);
    var em = localStorage.getItem("email", email);
    var mess = localStorage.getItem("message", message);
    var a, b, c;
    a = "name";
    b = "email";
    c = "message";
    if (a == user && b == email && c == mess) {
       alert("Message Sent !");
    } else {
       alert("Message Sent !");
    }
   }
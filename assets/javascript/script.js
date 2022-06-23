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



var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=austin&apikey=40bjJM5bdb36CAJdd0JPexRVLn0yuW08';

fetch (url) 
   .then(response => {
    return response.json();
   })
   .then(data => {
    var eventsEl = document.querySelector('#austin_events') ;
    for (var i = 0; i < 5; i++) {
        var pEl = document.createElement('p');
        pEl.innerHTML = '<a href="' + data._embedded.events[i].url +'" target= "_blank">' + '<img src="'+ data._embedded.events[i].images[0].url + '" alt="event image"/></a> <br/> <a href="' + data._embedded.events[i].url + '" target="_blank"><span>' + data._embedded.events[i].name + '"</span></a><br/>' ;
        eventsEl.append(pEl);
    }
    console.log(data._embedded.events);
   })


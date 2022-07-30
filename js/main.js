//create request variable
var request = new XMLHttpRequest()

//Open a new connection, using GET request on the url endpoint.
request.open('GET', 'ADD ENDPOINT HERE', true)

request.onload = function (){
    var data = JSON.parse(this.response);
}

request.send();
//Lets require/import the HTTP module
var http = require('http');

// Lets define a simple web port to lsten to
const PORT=8080; 

// My function in which the webserver handles requests and send a response example to adam
function handleRequest(request, response){
    response.end('I made it work! haha: ' + request.url);
}

// Create a server
var server = http.createServer(handleRequest);

// Well of course. we need a way to start the server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

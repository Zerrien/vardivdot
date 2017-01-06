var http = require("http");
var fs = require("fs");
const PORT = 3000;

function handleRequest(request, response) {
  console.log(request.url);
  if(request.url.search(/html/) !== -1 || request.url === "/") {
    fs.readFile("./" + 'index.html', 'utf8', function(err, data) {
      //console.log(err, data);
      if(err && err.code == "ENOENT") {
        response.writeHead(404);
        response.end("404 not found.");
      } else {
        response.end(data);
      }
    });
  } else if (request.url.search(/mk/) !== -1) {
    fs.readFile("./" + request.url, 'utf8', function(err, data) {
      if(err && err.code === "ENOENT") {
        response.writeHead(404);
        response.end("404 not found.");
      } else {
        response.end(data);
      }
    });
  } else {
    response.writeHead(404);
    response.end("404 not found.");
  }
}
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:"+PORT);
});
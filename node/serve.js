var http = require("http");
var url = require("url");
/****************************/
let api_order = require('./api_order');
// let api_order = require('./api_order');
// let api_order = require('./api_order');
/****************************/

http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;

  switch (pathname) {
    case '/api/api_order':
      api_order.api_order()
      break
  }
  
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
}).listen(8888);
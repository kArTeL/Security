/** Nodejs framework modules necessary to response the request
*/
var http = require('http');


var route = require('./Route.js')



function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

///Create a nodejs server
http.createServer(function (request, response) {

  route.route(request,response);


  // To Read a Cookie
//  var cookies = parseCookies(request);

  // To Write a Cookie
  // response.writeHead(200, {
  //   'Set-Cookie': 'mycookie=test',
  //   'Content-Type': 'text/plain'
  // });
  //Toke generator
  // var token = tokenGenerator.generateToken();
  // console.log(token)

  // Redirect


}).listen(8080);

//console.log('Server running at http://127.0.0.1:8080/');

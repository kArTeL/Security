/**
 * This module execute the login api, this need username, password to login
 * @type {Object}
 */

var qs = require('querystring');
var permissionsDenied = require('./PermissionDenied.js')
module.exports = {
  login : function(request, response){
    var body = '';
   request.on('data', function (data) {
       body += data;

       // Too much POST data, kill the connection!
       if (body.length > 1e6)
           request.connection.destroy();
   });
   request.on('end', function () {
       var json  = JSON.parse(body);
       ///Check if all parameters all filled
       var isValidJSON = validateJSON(json);

       if (isValidJSON) {
         ///Call to the data base and create a session on the seccion table
          response.writeHead(200, {"Content-Type": "application/json"});
          response.write(JSON.stringify({token:'2321312'}));
          response.end();
       } else {
         permissionsDenied.redirect(response);
       }

   });
  }

};

function validateJSON(json) {
  var isValid = true;
  if (json == undefined) {
    isValid = false;
  }else if (json['username'] == undefined || json['password'] == undefined ) {
    isValid = false;
  }
  return isValid;
}

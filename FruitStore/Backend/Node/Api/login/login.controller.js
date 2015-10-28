/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';
var mysql = require('mysql');
var connection = require('../Connection.js');
var tokenGenerator = require('../TokenGenerator.js');
// Get list of holes
exports.index = function(req, res) {
  var json  = req.body;
  console.log(json);
  ///Check if all parameters all filled
  var isValidJSON = validateJSON(json);

  if (isValidJSON) {
    //chequear si es un usuario valido en caso de ser un usuario valido
    connection.connection(function (err, conn) {
      //console.log("response is");

      if (!err) {
        console.log("connection is not null we can use this");
        loginUser(conn, json["username"], json["password"], function (error, credential) {
          // end the connection
          conn.end(function(err){
           //  console.log("error disconnecting the connection");
           //  console.log(err);
          });
          //The user exist in data base so go ahead
          if (!error) {
             //generar el uuid
             res.send(JSON.stringify(credential));
          } else {
            return res.status(401).send(JSON.stringify(error));
          }
          //console.log(response);
        })
      }else  {
        console.log("is undefined");
      }
    });
  } else {
    return res.status(401).send(JSON.stringify({code: 404, message:"invalid credentials"}));
      res.sendfile(app.get('appPath') + '/login.html');
  }
};

function loginUser(conn, username, password, callback) {
   conn.query("SELECT * FROM user WHERE username = "+ mysql.escape(username) + " and password = " + mysql.escape(password) ,
      null,
      function(err, results) {

        //there's not error
        if (!err) {
          //user  exist in data base
          if (results.length != 0) {
              var user = results[0];
              // console.log("usuario");
              // console.log(user);

              //create the token to be inserted into the table @session
              var token = tokenGenerator.generateToken();
              console.log(token);
              //callback(null, user);
              conn.query("INSERT INTO session(uuid,user) VALUES(" + mysql.escape(token) + ", "+  mysql.escape(user["id"]) +")",
                null,
                function(err, session) {
                  if(!err) {
                    var credential = {token:token, userId:user["id"], role:user["role"]};
                    callback(null, credential);
                  } else {
                    console.log(err);
                    callback({code: 500, message:"Internal server error"}, null);
                  }

                }
              );
          }
          //user  doesnot exist in data base
           else {
              callback({code: 404, message:"invalid credentials"}, null);
          }
        }else {
          callback({code: 404, message:"invalid user"}, null);
        }
      });
}

function validateJSON(json) {
  console.log(json);
  var isValid = true;
  if (json == undefined) {
    isValid = false;
  }else if (json['username'] == undefined || json['password'] == undefined ) {
    isValid = false;
  }
  return isValid;
}

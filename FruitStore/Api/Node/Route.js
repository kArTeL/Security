
var url  = require('url');


/** Helper Modules
*/
var tokenGenerator = require('./Tokengenerator.js');
var notFoundRouter = require('./NotFound.js');
var login          = require('./Login.js');
var fruit          = require('./Fruits.js');

module.exports = {
  route : function(request, response) {
    //url parts
    var url_parts = url.parse(request.url);
    //sys.puts(url_parts.pathname);

    //Routing
    switch(url_parts.pathname) {
    case '/':
      //sys.puts("display root");
      notFoundRouter.redirect(response);
    break;
    case '/login':
      if (request.method == 'POST') {
        login.login(request, response);
      }else {
          notFoundRouter.redirect(response);
      }
      //sys.puts("display create");
    break;
    case '/fruits':
      if (request.method == 'POST') {
        fruit.getFruits(request,response);
      }
      else
      {
          notFoundRouter.redirect(response);
      }

    break;
    case '/buyFruits':
      if (request.method == 'POST') {
        fruit.buyFruits(request, response);
      }else {
        notFoundRouter.redirect(response);
      }
    break;
    default:
      notFoundRouter.redirect(response);
    }

  }

};

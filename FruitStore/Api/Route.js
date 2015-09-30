
var url  = require('url');

/** Helper Modules
*/
var tokenGenerator = require('./Tokengenerator.js');
var notFoundRouter = require('./NotFound.js');

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
      //sys.puts("display create");
    break;
    case '/edit':

    break;
    default:
      notFoundRouter.redirect(response);
    }

  }

};


/**
 * Module dependencies.
 */

var express = require('express')
	, hbs = require('express-hbs') 
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.engine( 'hbs', hbs.express3( {
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts',
  contentHelperName: 'content',
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer( app ).listen( 3000, function() {
  console.log('Express server listening on port 3000');
});

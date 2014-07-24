
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var markdown = require('markdown-js');
var fs = require('fs');
var app = express();
var circle = require('./node_modules/module/circle.js')
var SocketServer = require('./node_modules/module/websocketserver.js');
// all environments
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
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
//app.get('/markdown',function(req,res){
//	/*var html = markdown.makeHtml("[JavaEye](http://www.iteye.com/ \"Click\") ");
//	res.send(html);
//	res.end();*/
//res.render('index.md', {layout: false}); 
//	}
//);
//*
app.get('/blogs/:title.html',function(req,res){
	var path = ['blog/',req.params.title,'.md'].join('');
	console.log(path);
//	console.log('area:'+circle.area(2));
//	console.log('name:'+circle.name);
	var tmp = new circle('WK',26);
	console.log('name:'+tmp.name);
	res.render(path,{layout:false});
	}
);
app.engine('md',function(path,options,fn){
	fs.readFile(path,'utf-8',function(err,str){
		 if(err) return fn(err);
		 str = markdown.parse(str).toString();
		 fn(null,str);
		}
	);
	}
);//*/
var server = http.createServer(app);
var ioserver = new SocketServer(server);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

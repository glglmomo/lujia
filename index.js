var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(req,res){


	var params = url.parse(req.url,true)

	if(params.pathname === '/save'){
		var obj = params.query
		console.log(obj.name)
		console.log(obj.pwd)
		res.end('save success')
	}else{
		res.end('not fond')
	}


		
	// var url = req.url;

	// if(url === '/favicon.ico'){
	// 	return
	// }


	// console.log(url)


	// if(url === '/a.html' || url === '/b.html'){
	// 	res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
	// 	var data = fs.readFileSync(`./${url}`);
	// 	res.end(data.toString());

	// }else{
	// 	res.writeHead(404, {'Content-Type': 'text/html; charset=utf8'});
	// 	res.end('<h3>Not Find Page</h3>')
	// }

	
})

//监听端口
app.listen(3000,function(){
	console.log('服务器已启动');
})
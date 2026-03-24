var h=require("http");
var server=h.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1Home Page</h1><ul><li><a href='/'>Home</a></li><li><a href='/About'>About</a></li></ul>");
        res.end();
    }else if(req.url=="/About"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>About Page</h1>");
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write("Page Not Found");
        res.end("\n Please check the Url");
    }
});server.listen(5052);
console.log("Thank You!!")
console.log("Server is running at http://localhost:5052");
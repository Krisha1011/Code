var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url+"<br>");
    res.end("URL Fetched");
}).listen(8183,()=>{
    console.log("Server is running at http://localhost:8183");
});
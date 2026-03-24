var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Hello!</h1><img src="images.png"/>');
    }
    else if(req.url==="/images.png"){
        const img=fs.readFileSync("images.png");
        res.writeHead(200,{'Content-Type':'image/png'});
        res.end(img);
    }
}).listen(8181,()=>{
    console.log("Server is running at http://localhost:8181");
});
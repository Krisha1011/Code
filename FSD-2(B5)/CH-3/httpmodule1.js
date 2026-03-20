var http=require("http");

//create a server object:
http.createServer(function(req,res){
    //step 1 : Set the status code + Header
    res.writeHead(200,{'Content-Type':'text/plain'});
    //step 2 : Send the response body
    res.write("<h1>Hello World !</h1>");
    //step 3 : End the response
    res.end();
}).listen(3120,()=>{
    console.log("Server is running at http://localhost:3120");
}); 
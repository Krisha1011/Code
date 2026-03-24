var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    const data={subject:"FSD-2",topic:"Node-JS"};
    res.end(JSON.stringify(data));
}).listen(8180,()=>{
    console.log("Server is running at http://localhost:8180");
});
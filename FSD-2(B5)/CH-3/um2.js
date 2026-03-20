//print the query string of the url in file.

var url=require("url");
var fs=require("fs");
process.noDeprecation=true;

var addr="http://localhost:8080/default.html?year=2024&month=february";

var q=url.parse(addr,true);

var qdata=JSON.stringify(q.query);

fs.writeFile("querystring.txt",qdata,function(err){
    if(err) throw err;
    console.log("saved");
});
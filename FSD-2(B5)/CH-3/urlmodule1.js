//fetch the query string from the url and check year is leap or not.

var url=require("url");
process.noDeprecation=true;
var addr="http://localhost:8080/default.html?year=2024&month=february";

var q=url.parse(addr,true);

console.log(q);
var qdata=q.query;
console.log(qdata.year);

if (qdata.year%4==0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}
const eventemitter = require("events");
var ee = new eventemitter();
var ps = require("fs");


ee.on("write",function(){ps.writeFile("file.txt","welcome to node js\n",function(err){if(err) throw err; console.log("Data Written");
ee.emit("append");});});

ee.on("append",function(){ps.appendFile("file.txt","welcome to event emitter",function(err){if(err) throw err; console.log("Data Appended");
    ee.emit("read");});});

ee.on("read",function(){ps.readFile("file.txt","utf-8",function(err,data){if(err) throw err; console.log(data);});});

ee.emit("write");

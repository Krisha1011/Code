const eventemitter = require("events");

//var ee = new eventemitter();

//var fun1=(msg)=>{console.log("Message from fun1:" + msg);}

//var fun2=(msg)=>{console.log("Message from fun2:" + msg);}

//ee.on("myEvent1",fun1);
//ee.on("myEvent2",fun2);
//ee.on("myEvent1",fun2);
//ee.on("myEvent2",fun1);

//console.log(ee.listenerCount("myEvent1"));

//ee.removeListener("myEvent2",fun2);
//ee.removeListener("myEvent1",fun2);

//console.log(ee.listenerCount("myEvent1"));

//ee.removeAllListeners("myEvent1");

//ee.emit("myEvent2","LJ University");
//ee.emit("myEvent1","LJU");

var e1 = new eventemitter();

var listener1=function listener1(){console.log("Listener1 executed");}
var listener2=function listener2(){console.log("Listener2 executed");}

e1.on("conn",listener1);
e1.on("conn",listener2);

let count1 = e1.listenerCount("conn");
console.log("count1: "+count1);

e1.removeListener("conn",listener1);
console.log("Listener1 Removed.");

let count2 = e1.listenerCount("conn");
console.log("count2 after removing 1 listener: "+count2);

e1.removeAllListeners("conn");

count3=e1.listenerCount("conn");
console.log("After removing all listeners: "+count3);


e1.emit("conn");
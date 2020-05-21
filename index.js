var express = require("express"); // gọi thư viện express vào đặt tên là express
var app = express(); // khai báo biến app là 1 cái express
app.listen(3000); 
var server = require("http").createServer(app);
app.get("/", function(req,res){
    res.send("<H1><u>Hello</u></H1>");
});
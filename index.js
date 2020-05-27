var express = require("express"); // gọi thư viện express vào đặt tên là express
var app = express(); // khai báo biến app là 1 cái express
app.listen(3000); // Người dùng truy cập đến cổng 3000 thì sẽ gọi biến app
var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({extended:false});

// cấu hình EJS
app.set("view engine","ejs"); // xét thuộc tính của view engine là ejs (ejs có thể thay đổi)
app.set("views", "./views"); // đường dẫn nằm trong thư mục views

// không có tham số
/*app.get("/EJS",function(req,res){
    res.render("TrangEJS");// tạo ra 1 giao diện lấy từ file TrangEJS. Khai báo đường dẫn gòng 9
});*/

//truyền tham số cho template EJS theo kiểu Json
app.get("/EJS",function(req,res){
    res.render("TrangEJS", {"thamso":"Tham số được truyền qua kiểu chuổi Json nè","namsinh":1996,"tuoi":[20,21,22,23]}); 
});


var server = require("http").createServer(app);

// Trả về cho client thấy bằng phương thức get
app.get("/", function(req,res){
    res.send("<H1><u>Phương thức GET</u></H1>");// Gửi ra kết quả
}); 
// Trả về cho client thấy bằng phương thức post
app.post("/", function(req,res){
    res.send("<H1><u>Phương thức POST</u></H1>");// Gửi ra kết quả
}); 
// Lấy dữ liệu dạng get 
app.get("/:id", function(req,res){
    var i =req.params.id;
    res.send("Server nhận được id là:"+i);// Gửi ra kết quả
});
// Lấy dữ liệu dạng post nhờ vào module body- parsers
app.post("/",urlencodeParser, function(req,res){
    var u = req.body.username;
    var p = req.body.password;
    res.send("Username:"+u+" "+"Password:"+p);// Gửi ra kết quả
}); 


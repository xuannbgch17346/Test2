var express = require('express')
var hbs = require('hbs')

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })) // sử lý from text box, check box, html, nếu không có giòng này chúng ta xử lý from sẽ khó
app.set('view engine','hbs') // nói rằng chung sta sẽ render sang views

app.post('/sendDangky', (req,res) =>{ // dùng để chuyển thông tin từ file đăng ký sang file send đăng ký
    let nameValue = req.body.txtName;
    let genderValue = req.body.gender;
    //let userInfo = {name: nameValue, gender: genderValue};
    //res.render('confirm', {model:userInfo});
    res.write('Name: ' + nameValue)
    res.write('\nGender: ' + genderValue);
    res.end();
})

app.get('/register', (req,res) =>{ // dùng để đăng ký một file index
    res.render('dangky')
})

app.get('/',(req,res)=>{ // chỗ này để tạo một trang index
    res.render('index')
})

var PORT = process.env.PORT || 3000// cái này quan trọng, dùng để lấy cổng động
app.listen(PORT)
console.log('server is runing on: ', PORT)
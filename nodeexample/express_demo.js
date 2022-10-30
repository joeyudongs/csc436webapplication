var express = require('express');
var app = express();

const port = 8080

app.get('/home', function(req, res) {
    res.send('<h1>Hello world</h1>');
})

app.get('/json_data', function(req, res) {
    const data = require('./data.json'); 
    res.json(data);
});

app.get('/parameters', function(req, res) {
    const head_info = req.query.head;
    const para_info = req.query.para;
    const head_html = '<h1>' + head_info + '</h1>' 
    const paragraph_html = '<p>' + para_info + '</p>' 
    res.send(head_html + paragraph_html)
})

//可以用postman向后端发送post请求
app.use(express.json());//json parser for post request
app.post('/handle', function(req, res) {
    console.log(req.body);
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

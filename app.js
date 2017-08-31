var express = require('express');
var qr = require('qr-image');
var images = require('images');
var app = express();

//生成二维码
var makeQr = function (req, res, logo) {
    res.header("Access-Control-Allow-Origin", "*");
    var url = req.query.url ? req.query.url : 'http://www.kaoyaya.com';
    var size = parseInt(req.query.size);
    var qrBuffer = qr.imageSync(url, {type: 'png', size: 25});
    if (logo !== '') {
        qrBuffer = addLogo(qrBuffer, logo)
    }
    if (size > 0) {
        var qrImg = images(qrBuffer);
        qrBuffer = qrImg.size(size, size).encode('png');
    }
    res.type('image/png').send(qrBuffer);
};

//在二维码上添加logo
var addLogo = function (qrBuffer, qrlogo) {
    qrImg = images(qrBuffer);
    var logo = images(qrlogo);
    var logW = logo.width();
    var logH = logo.height();
    var qrW = qrImg.width();
    var qrH = qrImg.height();
    return qrImg.draw(logo, (qrW - logW) / 2, (qrH - logH) / 2).encode('png');
};

var hbs = require('hbs');

app.set('views', './views');
app.set('view engine', 'html');
// 指定模板文件的后缀名为html
app.engine('html', hbs.__express);

app.use(express.static('public'));



app.get('/', function (req, res) {
    makeQr(req, res, '')
});

app.get('/logo', function (req, res) {
    //第三个参数替换你需要的logo的路径
    makeQr(req, res, './img/kaoyayalogo.png')
});

app.get('/build',function (req, res) {
    var url=req.query.url;
    var encodeUri=encodeURIComponent(url);
    res.render('build', { url: url,encodeUri:encodeUri});
});

app.listen(8080, function () {
    console.log('listening on port 8080!')
});

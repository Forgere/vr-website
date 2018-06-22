var express = require("express");
var app = express();
var path = require("path")
var fs = require("fs")

// 主页设置
app.use(express.static('home'));

//获取项目列表
app.get('/getlist',(req, res, next) => {
  var path2 = path.resolve(__dirname, './proj');
  fs.readdir(path2, function (err, files) {
    if (err) {
      console.log(err);
      return;
    }

    var count = files.length;
    var results = [];
    files.forEach(function (filename) {
      if (!filename.match(/\./)) {
        results.push(filename);
      } 
    });
    res.send({res:results})
    next()
  })
})

//项目页面设置
app.get("/proj/*",(req, res, next) => {
  var targetProj = req._parsedOriginalUrl.pathname.match(/proj(\S*)\//)[1]
  res.sendFile( __dirname + req._parsedOriginalUrl.pathname );
});


app.listen(3000);
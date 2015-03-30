var express = require('express')
var filesys = require('fs')
var app = express();
var fs = filesys();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('Hello World v2!')
  response.send(fs.readFileSync("index.html").toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

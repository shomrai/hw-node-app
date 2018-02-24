var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
  res.send('  Hello from my pod ' + hostname + ' ! This node.js app is running in the IBM Cloud Private cluster!\n')
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})

var express = require('express'),
  app = express();

app.use(express.static('public'));

////////////////////
////Load landing page
////////////////////
app.get('/', function(req, res){
  console.log(__dirname);
  res.sendFile('views/index.html', {
    root : __dirname
  });
});

////////////////////
////Listen
////////////////////


app.listen(process.env.PORT || 3000, function(){
  console.log('express server online on port', 3000)
});

var express = require('express')
var exphbs  = require('express-handlebars');

var app = express()

// ##### MIDDLEWARE #####
//Static Files
app.use('/static', express.static('public'))
//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ##### ROUTES #####
app.get('/', function (req, res) {
  res.render('home')
})

app.get('/posts', function(req, res) {
  var posts = [
    {
      title: "Test Post 1",
      content: "Whatever, Lorem ipsum, dolor sit amet..."
    },
    {
      title: "Test Post 2",
      content: "Whatever, Lorem ipsum, dolor sit amet..."
    },
    {
      title: "Test Post 3",
      content: "Whatever, Lorem ipsum, dolor sit amet..."
    }
  ]
  res.render('posts', {posts: posts})
})

// ##### SERVER #####
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

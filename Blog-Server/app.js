var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var commonmark = require('commonmark');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


/*
var edit = require('./routes/edit');
app.use('/edit', edit);

app.get('/edit', async function(req, res) {
  console.log("test");
  if (jwauth(req, res)) {
    //
  } else {
    var redirect = '/login';
    res.redirect(redirect);
  }
  console.log("out of there");
});
*/

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



var index = require('./routes/index');
var post = require('./routes/post');
var posts = require('./routes/posts');
var login = require('./routes/login');


//MongoDB Setup
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var db_global; //global db variable for MongoDB

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

var my_start = 1;

getConnection();

function getConnection() {
  return new Promise(resolve => {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        reject(err);
        throw err;
      } else {
        db_global = db;
      }
    });
  });
}


///////// Post Functions /////////

async function deletePost(id, user) {
  return new Promise(resolve => {
    var dbo = db_global.db("BlogServer");
    var posts = new Object();
    dbo.collection("Posts").deleteOne( {$and: [{postid: +id}, {username: user}]}, function(err, result) {
      if (err) throw err;
      var post = new Object();
      post = result;
      resolve(post);
      });
  });
}

async function insertPost(id, user, title, body) {
  return new Promise(resolve => {
    var dbo = db_global.db("BlogServer");
    var timems = (new Date).getTime();
    var post = { postid: id, username: user, created: timems, modified: timems, title: title, body: body }
    dbo.collection("Posts").insertOne(post, function(err, result) {
      if (err) throw err;
      resolve();
      });
  });
}

async function updatePost(id, user, title, body) {
  return new Promise(resolve => {
    var dbo = db_global.db("BlogServer");
    var timems = (new Date).getTime();
    var post = { postid: id, username: user,};
    var updatedPost = { $set: {modified: timems, title: title, body: body}};
    dbo.collection("Posts").updateOne(post, updatedPost, function(err, result) {
      if (err) throw err;
      resolve();
      });
  });
}

function jwauth(req, res) {
    var token = req.cookies.jwt;
    var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
    if (token) {
        try {
            if (jwt.verify(token, cert)) {
                return 1;
            } else {
                return 0;
            }
        } catch (err) {
            return 0;
        }
    } else {
        return 0;
    }
}


///////// API CALLS /////////

app.get('/api/:username', async function(req, res) {
    if (jwauth(req, res)) {
        var my_posts = await fetchPosts(req.params.username);
        my_posts = JSON.stringify(my_posts);
        res.send(my_posts);
    } else {
        res.sendStatus(401);
    }
})

app.get('/api/:username/:postid', async function(req, res) {
    if (jwauth(req, res)) {
        var post = await fetchPost(req.params.postid, req.params.username);
        post = JSON.stringify(post);
        res.send(post);
    } else {
        res.sendStatus(401);
    }
})

app.post('/api/:username/:postid', async function(req, res) {
    if (jwauth(req, res)) {
        var post = await fetchPost(+req.params.postid, req.params.username);
        if (post != null) {
            res.sendStatus(400)
        } else {
            await insertPost(+req.params.postid, req.params.username, req.body.title, req.body.body);
            res.sendStatus(201);
        }
    } else {
        res.sendStatus(401);
    }
})

app.put('/api/:username/:postid', async function(req, res) {
    if (jwauth(req, res)) {
        var post = await fetchPost(+req.params.postid, req.params.username);
        if (post == null) {
            res.sendStatus(400)
        } else {
            await updatePost(+req.params.postid, req.params.username, req.body.title, req.body.body);
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(401);
    }
})

app.delete('/api/:username/:postid', async function(req, res) {
    if (jwauth(req, res)) {
        var post = await fetchPost(+req.params.postid, req.params.username);
        if (post == null) {
            res.sendStatus(400);
        } else {
            await deletePost(req.params.postid, req.params.username);
            res.sendStatus(204);
        }
    } else {
        res.sendStatus(401);
    }
})

//////////////////////////



async function fetchPosts(user) {
  return new Promise(resolve => {
    var dbo = db_global.db("BlogServer");
    dbo.collection("Posts").find({username: user}).toArray(function(err, result) {
    if (err) throw err;
    var posts = new Object();
    posts = result;
    resolve(posts);
    });
  });
}

async function fetchPostsStart(start, user) {
  return new Promise((resolve) => {
    var dbo = db_global.db("BlogServer");
    dbo.collection("Posts").find( {$and: [{postid: {$gte: +start}}, {username: user}]} ).toArray(function(err, result) {
      if (err) throw err;
      if (result.length != 0) {
        var posts = new Object();
        posts = result;
        resolve(posts);
      } else {
        resolve();
      }
    });
  });
}

async function fetchPost(id, user) {
  return new Promise(resolve => {
    var dbo = db_global.db("BlogServer");
    var posts = new Object();
    dbo.collection("Posts").findOne( {$and: [{postid: +id}, {username: user}]}, function(err, result) {
      if (err) throw err;
      var post = new Object();
      post = result;
      resolve(post);
    });
  });
}


async function auth_match(user, pass) {
  return new Promise((resolve, reject) => {
    var dbo = db_global.db("BlogServer");
    dbo.collection("Users").findOne({"username": user}, function(err, result) {
      if (result) {
        bcrypt.compare(pass, result.password, function(err, res) {
          if (err) throw err;
          if (res == true) {
            resolve(res);
          } else {
            reject(res);
          }
        });
      } else {
        reject();
      }
    });
  });
}


app.use('/', index);
app.use('/blog/:username/:postid', post);
app.use('/blog/:username', posts);
app.use('/login*', login);


app.get('/blog/:username/:postid', async function(req, res) {
  var my_post = await fetchPost(req.params.postid, req.params.username);
  if (my_post != null) {
    const t = reader.parse(my_post.title);
    my_post.title = writer.render(t);
    const b = reader.parse(my_post.body);
    my_post.body = writer.render(b);
    res.render('post', { title: 'Express', user: req.params.username, postid: req.params.postid, post: my_post });
  } else {
    res.send("There are no posts to fetch.");
  }
});


app.get('/blog/:username*', async function(req, res) {
    var my_leng = 5;

  var posts5 = [];
  if (req.query.start) {
    my_start = req.query.start;
    var my_posts = await fetchPostsStart(req.query.start, req.params.username);
    if (my_posts != null) {
        for (var k = 0; (k < 5) && (k < my_posts.length); k++) {
            posts5[k] = my_posts[k];
        }
        for (var i = 0; (i < my_posts.length) && (i < 5); i++) {
            const t = reader.parse(my_posts[i].title);
            posts5[i].title = writer.render(t);
            const b = reader.parse(my_posts[i].body);
            posts5[i].body = writer.render(b);
            //my_start++;
        }
        my_start = posts5[posts5.length-1].postid+1;
        res.render('posts', { title: 'Express', posts: posts5, user: req.params.username, leng: my_leng, start: my_start, usrstart: req.params.username+"?start="+my_start });
    } else {
      res.send("There are no more posts to fetch.");
    }
  } else {
    my_start = 1;
    var my_posts = await fetchPosts(req.params.username);
    if (my_posts.length > 0) {
        for (var k = 0; (k < 5) && (k < my_posts.length); k++) {
            posts5[k] = my_posts[k];
        }
        for (var i = 0; (i < my_posts.length) && (i < 5); i++) {
            const t = reader.parse(my_posts[i].title);
            posts5[i].title = writer.render(t);
            const b = reader.parse(my_posts[i].body);
            posts5[i].body = writer.render(b);
            //my_start++;
        }
        my_start = posts5[posts5.length-1].postid+1;
        res.render('posts', { title: 'Express', posts: posts5, user: req.params.username, leng: my_leng, start: my_start, usrstart: req.params.username+"?start="+my_start });
    } else {
      res.send("There are no more posts to fetch.");
    }
  }
});



app.get('/login*', async function(req, res) {
  auth_match(req.query.username, req.query.password).then(function() {
    var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
    var token = jwt.sign({
      usr: req.query.username
    }, cert, {expiresIn: "2h"});
    res.cookie('jwt' , token);
    var redirect = req.query.redirect;
    res.redirect(redirect);
  }).catch(function() {
    res.render('login', { output: "No match"});
  });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

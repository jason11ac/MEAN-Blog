var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function fetchPosts() {
    return new Promise(resolve => {
        MongoClient.connect(url, function(err, db){
            if (err) throw err;
            console.log("Connected to database!");
            var dbo = db.db("BlogServer");
            dbo.collection("Posts").find({}).toArray(function(err, result) {
                if (err) throw err;
                var posts = new Object();
                posts = result;
                db.close();
                resolve(posts);
            });
        });
    });
}

async function showPosts() {
    console.log("calling");
    var posts = await fetchPosts();
    console.log(posts);
}
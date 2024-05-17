//templating
const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); //to access the folders created

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ //data for posts
    {
        username: "babunair",
        content: "welcome to my world",
    },
    {
        username: "rajeevkumar",
        content: "this is good",
    },
    {
        username: "minucherian",
        content: "I am a doctor",
    },
]    


//route
app.get("/posts", (req, res) => { //all posts
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) => { //new form
    res.render("new.ejs");
});

app.post("/posts", (req, res) =>{ //add post
    let {username, content} = req.body;
    posts.push({username, content});
    res.send("post requests working");
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});
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
        id: "1a",
        username: "babunair",
        content: "welcome to my world",
    },
    {
        id: "2b",
        username: "rajeevkumar",
        content: "this is good",
    },
    {
        id: "3c",
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
    // res.send("post requests working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) =>{ //add post
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id ===p.id);
    res.render("show.ejs", {post});
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});
//templating
const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); //to access the folders created

const { v4: uuidv4 } = require('uuid');

// const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ //data for posts
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        username: "babunair",
        content: "welcome to my world",
    },
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        username: "rajeevkumar",
        content: "this is good",
    },
    {
        id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
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
    let id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    posts.push({id, username, content});
    // res.send("post requests working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) =>{ //add post
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) =>{
    let {id} = req.params;
    console.log(id);
    
    res.send("good, patch request is working");
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});
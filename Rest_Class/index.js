//templating
const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); //to access the folders created

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "views")));

//route
app.get("/", (req, res) => {
    res.send("server working well!");
})

app.listen(port, () => {
    console.log("listening to port : 8080");
});
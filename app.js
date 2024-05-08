import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



var blogs = [];


app.post("/submit", (req, res) => {
    const { blogTitle, blogContent } = req.body;
    const newBlog = {
        title: blogTitle,
        content: blogContent,
    };
    blogs.push(newBlog);
    res.redirect("/blog");
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs", {blogs})
});

app.get("/view", (req, res) => {
    res.render("view.ejs", {blogs})
});



app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});


app.get("/create", (req, res) => {
    res.render("create.ejs")
});



app.listen(port, (req, res) => {
    console.log(`App is working on port: ${port}`);
});
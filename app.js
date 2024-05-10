import express from "express";
import bodyParser from "body-parser";



const port = 3000;
const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));


// GET REQUEST 



app.get("/", (req, res) => {
    res.render("home");
});
app.get("/views/home.ejs", (req, res) => {
    res.render("home");
});

app.get("/create-post", (req, res) => {
    res.render("create-post");
});


app.get("/edit-post/:title/:content", (req, res) => {
    const title = req.params.title;
    const content = req.params.content;
    res.render("edit-post", { title, content });
});




// POST REQUEST 



app.post("/delete-post", (req, res) => {
    // Delete the post from the database
    // Redirect the user to the home page or a confirmation page
    res.redirect("/");
});


app.post("/edit-post", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    res.render("view-post", {title, content})
});

app.post("/create-post", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    res.render("view-post", {title, content});

});

app.listen(port, (req, res) => {
    console.log(`App is running on port: ${port}`);
});
import express from "express";



const port = 3000;
const app = express();


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, (req, res) => {
    console.log(`App is running on port: ${port}`);
});
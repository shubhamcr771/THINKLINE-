// import express from "express";
// import bodyParser from "body-parser";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import path from "path";

// const port = 3000;
// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));


// // GET REQUEST

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/create-post", (req, res) => {
//   res.render("create-post");
// });

// app.get("/edit-post/:title/:content", (req, res) => {
//   const title = req.params.title;
//   const content = req.params.content;
//   res.render("edit-post", { title, content });
// });

// // POST REQUEST

// app.post("/delete-post", (req, res) => {
//   // Delete the post from the database
//   // Redirect the user to the home page or a confirmation page
//   res.redirect("/");
// });

// app.post("/edit-post", (req, res) => {
//   const title = req.body.title;
//   const content = req.body.content;
//   res.render("view-post", { title, content });
// });

// app.post("/create-post", (req, res) => {
//   const title = req.body.title;
//   const content = req.body.content;
//   res.render("view-post", { title, content });
// });

// app.listen(port, () => {
//   console.log(`App is running on port: ${port}`);
// });


// BREAK ///////



import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import serverless from "serverless-http"; // Import serverless-http if you intend to deploy to serverless platforms

const port = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET REQUEST

app.get("/", (req, res) => {
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

// API ENDPOINTS

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/delete-post", (req, res) => {
  // Delete the post from the database
  // Redirect the user to the home page or a confirmation page
  res.redirect("/");
});

app.post("/api/edit-post", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  res.render("view-post", { title, content });
});

app.post("/api/create-post", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  res.render("view-post", { title, content });
});

// Start the server
if (process.env.SERVERLESS) {
  // Export the Express app wrapped with serverless-http if deploying to serverless platforms
  module.exports.handler = serverless(app);
} else {
  // Start the Express server if running locally
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
}

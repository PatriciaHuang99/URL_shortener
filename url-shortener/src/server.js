//built-in func to import external modules
const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose"); 
const app = express();
const ShortUrl = require("../models/shortUrl");

mongoose
  // DB_URL is defined in docker-compose.yml.
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"));
  


mongoose.connection.on("error", (error) => {
   console.log("Error connecting to MongoDB:", error);
 });

 mongoose.connection.on("disconnected", () => {
   console.log("Disconnected from MongoDB");
 });

app.set("view engine", "ejs"); // telling express use EJS when rendering a view file

app.use(express.urlencoded({ extended: false })); // tackle the req // function: to reserve the special chars for the sending data

// render obj(shortUrls) to EJS template engine (index), so can use obj in index.ejs
app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls }); // pass shortUrls obj to "index" view; convention: obj name = variable name
});
// wait until req.body.fullURL finish, then do the rest, such as res.redirect
app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullURL }); // create a new ShortUrl object, and set its 'full' field from req.body.name
  res.redirect("/");
});

// find the record in ShortUrl that has same short name as url (url after / -> short name)
app.get("/:shortUrl", async (req, res) => {
  // : means find all after /
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 3000);

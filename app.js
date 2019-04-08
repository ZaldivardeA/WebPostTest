const express = require("express");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

var info = [];

app.get("/", (req, res)=>{
  res.render("Home");
});

app.get("/view", (req, res)=>{
  res.render("viewInfo", {info:info});
});

app.post("/newinfo", (req, res)=>{
  req.body.forEach(element => {
    info.push(element);
  });
  res.redirect("/view");
});

app.listen(8082, ()=>{
  console.log("Server Started");
});

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

const items = ["Wake Up"];

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.get("/", function(req,res){

  const day = date.getDate();

  res.render("list", {kindOfDay:day, newListItems:items});
});

app.post("/",function(req,res){
  const item = req.body.newItem;
  items.push(item);

  res.redirect("/")
});

app.listen(3000,function(){
  console.log("Server is started at port 3000");
});

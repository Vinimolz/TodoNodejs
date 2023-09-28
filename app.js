import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const today = [];
const allTasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/allTasks", (req, res)=>{
    res.render("allTasks.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.post("/addAll", (req, res) => {
    
});

app.post("/addToday", (req, res) => {

});

app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.listen(PORT, () =>{
    console.log(`App running on: localhost:${PORT}`);
});


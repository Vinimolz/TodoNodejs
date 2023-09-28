import express from "express";
import bodyParser from "body-parser";


const app = express();
const PORT = 3000;

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

app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.listen(PORT, () =>{
    console.log(`App running on: localhost:${PORT}`);
});


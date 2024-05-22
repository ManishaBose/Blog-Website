import express, { urlencoded } from "express";
import bodyParser from "body-parser"

let blogs =[];

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //To show up the static files like css etc from the public folder

app.get("/",(req,res)=>{ //To show the homepage
    res.render("index.ejs",{blogs:blogs});
    console.log(blogs);
});

app.post("/",(req,res)=>{ //Post creation
    blogs.push(req.body.blog);
    console.log(req.body);
    res.redirect('/');
});

app.patch("/",(req,res)=>{
    res.sendStatus(201);
});

app.put("/",(req,res)=>{
    res.sendStatus(201);
});

app.delete("/",(req,res)=>{
    res.sendStatus(201);
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
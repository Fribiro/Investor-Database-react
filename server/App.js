 const express = require("express");
 const path = require("path");
 const mysql = require("mysql");
 const hbs = require("express-handlebars");
 const dotenv = require("dotenv"); 

const cors = require("cors");

 dotenv.config({
   path: "./.env",
 });

 const app = express();
 app.use(cors());


 const db = mysql.createConnection({
   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE,
 });

 db.connect((error) => {
   if (error) {
     console.log(Error);
   } else {
     console.log("MySQL Connected...");
   }
 });

 //parse URL encoded bodies as sent by HTML forms. Enables us to grab data from any form
 app.use(
   express.urlencoded({
     extended: false,
   })
 );
 //Parse JSON bodies as sent by API clients
 app.use(express.json());

 //view engine setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  //layoutDir: __dirname + '/views/layouts'
})); //extname specifies extension of files
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'hbs');

 //define routes
 app.use("/", require("./routes/admin"));
 app.use("/", require("./routes/pages"));
 app.use("/auth", require("./routes/auth"));
 app.use(express.static("public"));

 const publicDirectory = path.join(__dirname, "public");
 app.use(express.static(publicDirectory));

 app.listen(5500, () => {
   console.log("Server started on PORT 5500");
 });

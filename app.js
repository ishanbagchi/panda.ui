const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// INDEX ROUTE
app.get('/', (req, res) => {
    res.render("home");
})

// LISTEN PORT
app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("App is running in localhost:3000");
});
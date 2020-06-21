var express = require ("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get('/', (req,res)=>{
	res.render("search");
});


app.get("/results", function(req,res){
	var pencarian = req.query.pencarian;
	request(`http://omdbapi.com/?s=${pencarian}&apikey=thewdb`, function(error, response, body){
		if(!error && response.statusCode===200){
			var parseData = JSON.parse(body);
			res.render("results", {data: parseData});
		}
	});
});

app.listen(3000, function(){
	console.log("Movie app has started!");
});
module.exports = function(app){
	var cat = [
        {
            id: 1,
            name: "Cat Starr",
            favoriteTeam: "Green Bay Packer",
            favoriteSong: "Bang The Drum All Day by Todd Rundgren"
        },
        {
            id: 2,
            name: "Fran Tarkencat",
            favoriteTeam: "Minnesota Vikings",
            favoriteSong: "Bang The Drum All Day by Todd Rundgren"
        },
        {
            id: 3,
            name: "Ray Cat",
            favoriteTeam: "CodingDojo",
            favoriteSong: "Careless Whisper by Wham!"
        }
		]
	app.get('/:num', function(req,res){
		console.log(req.params);
		var num=req.params.num;
		console.log(num);
		//go through the array, find the cat we are looking for...
		var temp = null;
		for(var i=0;i<cat.length;i++){
			if(cat[i].id==num){
				temp=cat[i];
			}
		}
		res.json(temp); //sends the API back...
		//have your server setup for API's
	})

	app.get('/',function(req,res){
		//console.log("Hello World!");
		//res.send({name: "bill"});
		res.render('index');
	})
}
function recherche(){
	console.log("test");
	url : 'http://localhost:8080',
	type : 'GET',
	dataType : 'json',
	success : function(resultat){
		console.log(resultat);
		console.log(resultat.main.temp);
	 },
	 error : function(resultat){
		console.log(resultat);
	 }
 
 });
};
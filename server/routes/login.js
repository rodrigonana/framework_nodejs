module.exports = function(app){
	app.get('/signup', function(req, res){
		console.log("------ signup ------");
		console.log(app.server);
		var connection = app.infra.connectionFactory();
		var loginDAO = new app.infra.LoginDAO(connection);
		loginDAO.list(function(errors, result){
			console.log('errors: ' + errors)
			console.log('result: ' + result);
		});
		connection.end();
	});

	app.post('/signup', function(req, res){
		console.log("------ signup:post ------");
	});	

	app.get('/logout', function(req, res){
		console.log("------ logout ------");
	});

	app.get('/lost-password', function(req, res){
		console.log("------ lost-password ------");
	});	

	app.get('/reset-password', function(req, res){
		console.log("------ reset-password ------");
	});
}
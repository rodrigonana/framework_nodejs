function LoginDAO(connection){
	this._connection = connection;
}

LoginDAO.prototype.list = function(callback){
	this._connection.query('select * from users', callback);
}

module.exports = function(){
	return LoginDAO;
}


/*

create table users(
  id int,
  name varchar(255),
  email varchar(255),
  `password` varchar(255)
)

*/
var path = require('path');
var todoHandler = require('./todo-handler');



function handleRoute(app)
{
	app.get('*', function(req, res) {
		getViewsPath();
		res.sendFile(path.join(getViewsPath() + '/index.html'));
	});

	app.post('/getToDoList', todoHandler.getToDoList);
}



function getViewsPath()
{
	var viewPath = path.resolve(__dirname, '..', 'views');
	return viewPath;
}



module.exports = {
	handleRoute: handleRoute
}; 


function getToDoList(request, response)
{
	var data = { 'todoList' :[
		{'id':1, 'todoName': 'Need to setup node.'},
		{'id':2, 'todoName': 'Need to setup express.'},
		{'id':3, 'todoName': 'Need to setup mongo.'},
		{'id':4, 'todoName': 'Need to setup node.'}
		]
	};

	response.send(data);
	//response.writeHead(200, {'Content-Type': 'application/json'});
	//response.write(JSON.stringify(data));
    //response.end();
}

module.exports = 
{
	getToDoList: getToDoList
};
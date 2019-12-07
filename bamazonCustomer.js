var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

connection.connect(function(err){
	if(err){
		console.log(err);
	};
	start();
});

function start(){
	connection.query("select * from products", function(err, resp){
		if(err){
			console.log(err);
		};
		for(var i = 0; i < resp.length; i++){
			console.log(resp[i].item_id + ". " + resp[i].product_name + " - " + resp[i].price);
		};
		inquirer.prompt([
				{
					name: "id",
					type: "input",
					message: "What's the ID of the product you would like to purchase?"
				},
				{
					name: "quantity",
					type: "input",
					message: "How many would you like to buy?"
				}
			])
		.then(function(response){
			for(var i = 0; i < resp.length; i++){
				if(resp[i].item_id == response.id){
					if(resp[i].stock_quantity < response.quantity){
						console.log("Sorry quantity is too low.");
					}
					else{
						connection.query("update products set stock_quantity = " + (resp[i].stock_quantity - response.quantity) + " where item_id = " + response.id);
						console.log("The total cost of your purchase was " + (resp[i].price * response.quantity));
					}
				};
			};
		});
	});
}
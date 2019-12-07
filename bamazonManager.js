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
	inquirer.prompt([
			{
				name: "choice",
				message: "What action would you like to take?",
				type: "list",
				choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
			}
		])
	.then(function(response){
		if(response.choice == "View Products for Sale"){
			connection.query("select * from products", function(err, resp){
				if(err){
					console.log(err);
				};
				for(var i = 0; i < resp.length; i++){
					console.log(resp[i].item_id + ". " + resp[i].product_name + " - " + resp[i].price + " (" + resp[i].stock_quantity + ")");
				};
			});
		};
		if(response.choice == "View Low Inventory"){
			connection.query("select * from products", function(err, resp){
				if(err){
					console.log(err);
				};
				for(var i = 0; i < resp.length; i++){
					if(resp[i].stock_quantity < 5){
						console.log(resp[i]);
					}
					console.log("No products are low in stock.")
				};
			});
		};
		if(response.choice == "Add to Inventory"){
			connection.query("select * from products", function(err, resp){
				if(err){
					console.log(err);
				};
				for(var i = 0; i < resp.length; i++){
					console.log(resp[i].item_id + ". " + resp[i].product_name + " - " + resp[i].price + " (" + resp[i].stock_quantity + ")");
				};
				inquirer.prompt([
						{
							name: "id",
							type: "input",
							message: "What's the id of the item you would like to add more of?"
						},
						{
							name: "quantity",
							type: "input",
							message: "How much would you like to add?"
						}
					])
				.then(function(result){
					for(var i = 0; i < resp.length; i++){
						if (resp[i].item_id == result.id){
							connection.query("update products set stock_quantity = " + (parseInt(resp[i].stock_quantity) + parseInt(result.quantity)) + " where item_id = " + result.id);
						}
					};
				});
			});
		};
		if(response.choice == "Add New Product"){
			inquirer.prompt([
					{
						name: "name",
						type: "input",
						message: "What is the name of the product?"
					},
					{
						name: "department",
						type: "input",
						message: "What is the name of the department it belongs to?"
					},
					{
						name: "price",
						type: "input",
						message: "What is the price of the product?"
					},
					{
						name: "quantity",
						type: "input",
						message: "What is the quantity in stock of the product?"
					}
				])
			.then(function(result){
				connection.query("insert into products (product_name,department_name,price,stock_quantity) values('" + result.name + "','" + result.department + "'," + parseFloat(result.price) + "," + parseInt(result.quantity) + ")");
			})
		}
	})
}
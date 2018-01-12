var mysql = require("mysql");
var inquirer = require('inquirer');
var strings = require('node-strings')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    start();

});
//Select all products and return the result object:

function start() {
    console.log(strings.bold("=============================================================="));
    console.log(strings.blue("Welcome to Bamazon! Here's what we have available for purchase"));
    console.log(strings.bold("=============================================================="));
    connection.query("SELECT * FROM products", function(err, result, fields) {
        for (var i = 0; i < result.length; i++) {
            console.log(strings.bold(result[i].item_id) + " - " + (strings.bold(result[i].product_name)) + " |Category: " + result[i].department_name + " \nPrice: " + result[i].price +
                " |Qty in stock: " + result[i].stock_quantity + "\n---------------------------------------------------------------------------------------------");
        }

    });

}

	inquirer
    .prompt([
      {
        type: "input",
        name: "Item Number",
        message: "From items 1 through 10, which would you like to purchase?"
      },
      {
        type: "input",
        name: "Quanity",
        message: "How many would you like to buy?"
      },
     ])
    .then(function(res){
    	console.log(res);
    })





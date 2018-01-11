var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bamazon"
});
	
connection.connect(function(err) {
  if (err) throw err;
  //Select all products and return the result object:
  connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;

    console.log(result)

   
  });
});

inquirer.prompt([
	    {
      type: "input",
      message: "What is the item ID associated with the product you would like to purchase?",
      name: "product ID"
	  },
	  {
	  type: "input",
	  message: "How many units would you like to purchase?",
	  name: "qty"
	  }



	  ]). then(function(selections){
	  	
	  	console.log(selections);

	  });
    
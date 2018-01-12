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

 function start (){
 	console.log(strings.bold("=============================================================="));
 	console.log(strings.blue("Welcome to Bamazon! Here's what we have available for purchase"));
 	console.log(strings.bold("=============================================================="));
 	  connection.query("SELECT * FROM products", function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      console.log(strings.bold(result[i].item_id) + " - " + (strings.bold(result[i].product_name)) + " |Category: " + result[i].department_name + " \nPrice: " + result[i].price
      	+ " |Qty in stock: " + result[i].stock_quantity + "\n---------------------------------------------------------------------------------------------");
  }

  });
}
function postAuction() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Please select the product you'd like to purchase by it's corresponding number"
      },
      {
        type: "input",
	  	message: "How many would you like to purchase?",
	  	name: "qty"
      },
      ])
        
    .then(function(answer) {
    	console.log(answer)
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO auctions SET ?",
        {
          item_name: answer.item,
          category: answer.category,
          starting_bid: answer.startingBid,
          highest_bid: answer.startingBid
        },
        function(err) {
          if (err) throw err;
          console.log("Your auction was created successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
  
}


// inquirer.prompt([
// 	    {
//       type: "input",
//       message: "What is the item ID associated with the product you would like to purchase?",
//       name: "product ID"
// 	  },
// 	  {
// 	  type: "input",
// 	  message: "How many units would you like to purchase?",
// 	  name: "qty"
// 	  }



// 	  ]). then(function(selections){
	  	
// 	  	console.log(selections);

// 	  });
    
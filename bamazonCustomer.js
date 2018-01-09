var inquirer = require('inquirer');
inquirer.prompt([
	    {
      type: "input",
      message: "What is the product ID associated with the product you would like to purchase?",
      name: "product ID"
	  },
	  {
	  type: "input",
	  message: "How many units would you like to purchase?",
	  name: "qty"
	  }

	  ]);
    
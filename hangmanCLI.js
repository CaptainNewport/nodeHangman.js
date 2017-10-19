var inquirer = require('inquirer');
var newHangMan = require("./newHangMan");//should callback the main game code


//I'll be completely honest, there is only one call back outside of Inquirer but as of the moment it would probably make even more sense to just keep in one file.
inquirer.prompt({
  instructions: "Try to guess the word by typing letters. ",
  
}).then(
	
	playGame();



);
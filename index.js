const chalk = require("chalk");
const clear = require("clear");
const inquirer = require("./lib/inquirer");
const log = console.log;
const _ = require("lodash");
const ora = require("ora");
const argv = require("minimist")(process.argv.slice(2));
const boxen = require("boxen");
const executeOption = require("./options");

clear();

const appTitle = chalk.bold.magenta(
	boxen("NEWBIE", {
		padding: 4,
		margin: 1,
		borderStyle: "round",
		borderColor: "magenta"
	})
);

const startMenu = async () => {
	const stdout = await inquirer.mainOptions();
	return new Promise((resolve, reject) => {
		resolve(stdout.option);
	});
};

// Execution order
log(appTitle);
startMenu().then((selectedOption)=> {
	executeOption(selectedOption);
})


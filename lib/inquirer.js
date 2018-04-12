const inquirer = require("inquirer");

module.exports = {
	askAboutNewbie: () => {
		const details = [
			{
				name: "newbieName",
				type: "input",
				message: "What is newbie's name:",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "Cmon you gotta be kidding me.";
					}
				}
			},
			{
				name: "team",
				type: "input",
				message: "What team the newbie will be working in (ex. tech):",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "wew really.";
					}
				}
			},
			{
				name: "position",
				type: "input",
				message: "What position is he joining (ex. Software Developer):",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "You are a noob.";
					}
				}
			},
			{
				name: "workDomain",
				type: "input",
				message: "What were newbie's earlier work domains (ex. entertainment, healthcare):",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "You are a noob.";
					}
				}
			},
			{
				name: "previously",
				type: "input",
				message: "Where was newbie working/studying before joining here (ex. BookMyShow):",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "Dammnnnn.";
					}
				}
			},
			{
				name: "hobbies;",
				type: "input",
				message: "What does the newbie like to do in their free time(ex. football, music and sketching):",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "You had only one job to do.";
					}
				}
			},
			{
				name: "photograph",
				type: "input",
				message: "Give link to his photograph:",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "😶 You had only one job to do.";
					}
				}
			},
			{
				name: "buddyName",
				type: "input",
				message: "Hey bud, what is your name:",
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return "😶 You had only one job to do.";
					}
				}
			}
		];
		return inquirer.prompt(details);
	},
	mainOptions: () => {
		const options = [
			{
				name: "option",
				type: "list",
				message: "Select the option you would like to use:",
				default: "Send welcome mail to all",
				choices: [
					{
						name: "Send welcome mail to all",
						value: "mailAll",
						short: "Lets send mail to everyone"
					},
					{
						name: "Send newcomer material to newbie",
						value: "mailNewcomer",
						short: "Lets send newbie something to start with"
					},
					{
						name: "See some cool emoji stuff",
						value: "coolEmoji",
						short: "Lets play with emojis"
					}				
				]
			}
		];
		return inquirer.prompt(options);
	}
};

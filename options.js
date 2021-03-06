const inquirer = require("./lib/inquirer");
const log = console.log;
const gradient = require("gradient-string");
const boxen = require("boxen");

const mailAll = async () => {
	try {
		const details = await inquirer.askAboutNewbie();
		log(
			gradient.fruit("copy this and compose a mail")
		);
		log(mailText(details));
	} catch (err) {
		log(
			gradient.fruit("Guess something went wrong")
		)
	}
};

const mailText = details => {
	return `
	Hi All,

	Please join me in welcoming ${details.newbieName} to PharmEasy's ${details.team}
	team as a ${details.position}.

	<img src="${details.photograph}"><img>

	Previously worked in ${details.workDomain} domain including players
	like ${details.previously}. In his overall experience, he has worked on various
	things and likes to learn new ones.

	In his free time, he likes ${details.hobbies}.

	${details.newbieName.split(" ")[0]}, We are excited to have you in the team and
	look forward to doing great projects together.

	Welcome aboard! 

	Thanks,
	${details.buddyName}
`;
};

const mailNewcomer = () => {
	log(gradient.fruit("work in progress"));
};

const coolEmoji = () => {
	log(gradient.instagram("Try Emoj by sindresorhus"));
};

module.exports = selectedOption => {
	if (selectedOption === "mailAll") {
		mailAll();
	} else if (selectedOption === "mailNewcomer") {
		mailNewcomer();
	} else {
		coolEmoji();
	}
};

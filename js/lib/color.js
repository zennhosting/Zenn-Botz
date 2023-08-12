const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const mycolor = (text, color) => {
	return !color ? chalk.greenBright('[ DZ.BOTZ ID ] ') + chalk.magentaBright(text) : chalk.greenBright('[ DZ.BOTZ  ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	mycolor
}

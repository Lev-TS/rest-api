const moment = require('moment');

// This middleware function will log the url used to access api
const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${
			req.originalUrl
		}: ${moment().format()} `
	);
	next();
};

module.exports = logger;

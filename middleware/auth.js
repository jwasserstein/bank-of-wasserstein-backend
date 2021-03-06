const jwt = require('jsonwebtoken');

function isUserLoggedIn(req, res, next){
	const authorization = req.sanitize(req.headers.authorization);

	if(!authorization){
		return res.status(401).json({error: 'Please log in first'});
	}
	jwt.verify(authorization.split(' ')[1], process.env.SECRET_KEY, (err, decoded) => {
		if(err) {
			return res.status(401).json({error: 'Your token is invalid'});
		}
		if(Date.now()/1000 - decoded.iat > 3600) {
			return res.status(401).json({error: 'Your token has expired'});
		}
		res.locals.user = decoded;
		return next();
	});
}

module.exports = {isUserLoggedIn};
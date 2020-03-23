require("dotenv").config();
const jwt = require("jsonwebtoken");

//ensure the user is logged in with the valid token
exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; //Bearer kasjndkjasndakjsdnas
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first"
                });
            }
        });
    } catch (err) {
        return next({
            status: 401,
            message: "Please log in first"
        });
    }
};

//ensure that users cannot modify other users info = authorization
// /api/users/:id/messages
exports.ensureCorrectUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        });
    } catch (err) {
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};
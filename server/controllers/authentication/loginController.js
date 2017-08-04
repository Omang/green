var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');

module.exports.loginUser = function(req, res){
    passport.authenticate('local', function(err, user, info){
        var token;
        if(err){
            res.error(err).status(400);
        }
        if(user){
            console.log(user);
    
     var token = jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username
       },
       process.env.SECRET_KEY
    );
        console.log(token);
        res.json(token);
        }else{
            res.json(info).status(401);
        }
    })(req, res);
}
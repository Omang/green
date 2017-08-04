var passport = require('passport');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = mongoose.model('User');
module.exports.checkEmail = function(req, res){
    if(req.body){
        User.findOne({email: req.body.useremail}, function(err, user){
            if(!user){
                res.json({
                   userone: 'user not found' 
                }).status(200);
            }else{
                res.json({
                    userone: 'user found'
                }).status(200);
            }
        });
    }
}

module.exports.registerUser = function(req, res){
    if(req.body){
        
        var user = new User();
        
        user.username = req.body.username;
        user.email = req.body.email;
        user.setPassword(req.body.password);
        user.save(function(err, user){
            if(err){
                res.error(err);
            }else{
                 var token = jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username
       },
       process.env.SECRET_KEY
    );
        console.log(token);
        res.json(token);
            }
        });
    }
}
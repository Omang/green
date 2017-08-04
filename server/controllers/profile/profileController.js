var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res){
    console.log(req.body);
    if(!req.body.userid){
        res.status(401).json({
         message : "AuthorizedError: private profile"   
        });
    }else{
        User.findById(req.body.userid).exec(function(err, user){
           if(err){
              res.error(err).status(401); 
           }else{
               res.status(200).json(user);
           }
           
        });
    }
}
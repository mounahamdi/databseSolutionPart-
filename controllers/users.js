//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const users = require("../database/models/users.js")

module.exports = {
    //method to fetch all users from the blog database.
    getAllUsers: function(req, res) {
        users.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    //method to add a user to the database via the respective model function.
    addUser: function(req, res) {
        users.add(req.body.id,req.body.name,function(err,results){
            if(err) res.status(500).send(err);
            else res.status(201).json(results)
        })
    },
    //method to get one user by id.
    getOneUser: function(req, res) {
        users.getOne(req.body.id,function(err,results){
            if(err) res.status(500).send(err);
            else res.status(200).json(results)
        })
    }
    
}
var db = require('../config/db_connection'); //reference of dbconnection.js  
var Task = {  
    getAllFeeds: function(callback) {  
        return db.query("Select * from witcast_feed", callback);  
    },  
    getFeedById: function(id, callback) {  
        return db.query("select * from witcast_feed where episodeId=?", [id], callback);  
    }
    // ,  
    // addTask: function(Task, callback) {  
    //     return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);  
    // },  
    // deleteTask: function(id, callback) {  
    //     return db.query("delete from task where Id=?", [id], callback);  
    // },  
    // updateTask: function(id, Task, callback) {  
    //     return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);  
    // }  
};  
module.exports = Task;
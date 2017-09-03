var db = require('../config/db_connection'); //reference of dbconnection.js  
var Task = {  
    getAllMainEP: function(callback) {  
        return db.query("Select * from witcast_main_ep", callback);  
    },  
    getMainEPById: function(id, callback) {  
        return db.query("select * from witcast_main_ep where mainEpisodeId=?", [id], callback);  
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
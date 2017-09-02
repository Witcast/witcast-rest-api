const express = require('express')
const router = express.Router()
const authUtils = require('../controller/authen_controller')

var feed = require('../model/feed');

// Register new user
router.get('/',
    authUtils.basicAuth(),
    function (req, res) {
        feed.getAllFeeds(function(err, rows) {  
            if (err) {  
                res.status(503).json({ 'success': false, 'error_message': 'There Was a Problem in Database.' })
            } else {  
                res.status(200).json({ 'success': true, "data": rows }) 
            }  
        }); 
    }
)

module.exports = router

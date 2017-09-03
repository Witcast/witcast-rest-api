const express = require('express')
const router = express.Router()
const authUtils = require('../controller/authen_controller')

var version = require('../model/version');

// Register new user
router.get('/data',
    authUtils.basicAuth(),
    function (req, res) {
        version.getDataVerion(function(err, rows) {  
            if (err) {  
                res.status(503).json({ 'success': false, 'error_message': 'There Was a Problem in Database.' })
            } else {  
                res.status(200).json({ 'success': true, "data_version": rows[0].vesion_config }) 
            }  
        }); 
    }
)

module.exports = router

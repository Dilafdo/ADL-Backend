const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

router.get('/:query', function(req, res) {
    let query = req.params.query;
    database.query(`select * from \`newslist\` where \`header\` like '%${query}%'`)
        .then(list => {
            if(list){
                res.status(200).json({
                    count: list.length,
                    newsList: list
                });
            }else{
                res.json({message: 'No data'});
            }

        }).catch(err => console.log(err));

});

module.exports = router;
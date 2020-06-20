const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET home page. */
router.get('/', function(req, res) {
  database.table('newslist as n').withFields(['n.header as Header',
  'n.image as Image',
  'n.description as Description'
  ])
  .sort(.1)
  .getAll()
      .then(list => {
        res.status(200).json({
          count: list.length,
          index: list,
        });
      }).catch(err => console.log(err));

});

module.exports = router;

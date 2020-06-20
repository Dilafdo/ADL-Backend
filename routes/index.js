const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET home page. */
router.get('/', function(req, res) {
  database.table('newslist as n').withFields(['n.header',
  'n.image',
  'n.description'
  ])
  .sort(.1)
  .getAll()
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

router.get('/:newsId', function(req, res) {
    let newsId = req.params.newsId;
    // console.log(newsId);
    database.table('newslist as n').withFields([
    'n.header',
    'n.image',
    'n.article'
    ])
    .filter({'n.id' : newsId})
    .get()
    .then(news => {
        if(news) {
            res.status(200).json(news);
        }else {
            res.json({message: 'No item found with id ${newsId}'});
        }
    }).catch(err => console.log(err));
});

module.exports = router;

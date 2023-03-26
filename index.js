// Hairul Yasin
// F55121011
const express = require('express');
const router = express.Router();

const articles=[
  {
    id: 1,
    title: 'Hairul',
    content: 'F55121011',
    class: 'A',
  },

]

/* GET home page. */
router.get('/articles', function(req, res, next) {
  res.send([articles])
});

router.get('/articles/:id', function(req, res, next) {
  const result = articles.find(article => article.id == req.params.id)
  res.send(result)
})


module.exports = router;
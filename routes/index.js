var express = require('express');
var router = express.Router();
const {Post} = require('../models/index');
const postController = require('../controllers/posts.controller');


//route for display all personne in trombi
router.get('/',postController.listAll);
//FIND ONE POST
router.get('/:id',function (req, res, next) {
  Post.findAll({ where: { id: req.params.id } }).then(posts => {
    res.render('modify', { modify: posts })
  })
});
//CREATE ONE POST
router.post('/create', postController.create)
//UPDATE a POST
router.post('/update', postController.update)
//Delete one post 
router.get('/dl/:id', postController.delete);
//Say hello to zlatan
router.get('/zlatan',function(req,res,next){
  res.json('hello');
})

router.post('/sorted',postController.listAll);



module.exports = router;


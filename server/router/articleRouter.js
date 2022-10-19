const express = require("express");
const router = express.Router();
const { getAllArticle, submitArticle, getAllPendingArticles, acceptArticle, rejectArticle } = require("./../controller/articleController");


router
  .get('/getAllArticles', getAllArticle);
router
  .post('/submitArticle', submitArticle)

router
  .get('/getAllPendingArticles', getAllPendingArticles)
router
  .get('/acceptArticle/:id', acceptArticle)

router
  .get('/rejectArticle/:id', rejectArticle)

module.exports = router;

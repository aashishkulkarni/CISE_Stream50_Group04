const express = require("express");
const router = express.Router();
const { getAllArticle, submitArticle } = require("./../controller/articleController");


router
  .get('/getAllArticles', getAllArticle);
router
  .post('/submitArticle', submitArticle)






module.exports = router;

const { ObjectId } = require('mongodb');
const article = require('./../model/article')



const DATA = [
  {
    title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
    authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
    source: "EASE",
    pubyear: "2014",
    doi: "https://doi.org/10.1145/2601248.2601267",
    claim: "code quality improvement",
    evidence: "strong support",
  },
  {
    title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
    authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
    source: "EASE",
    pubyear: "2014",
    doi: "https://doi.org/10.1145/2601248.2601267",
    claim: "product quality improvement",
    evidence: "weak support",
  },
  {
    title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
    authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
    source: " Empirical Software Engineering, 13(3), 289–302",
    pubyear: "2008",
    doi: "https://doi.org/10.1007/s10664-008-9062-z",
    claim: "product quality improvement",
    evidence: "weak support",
  },
  {
    title: "Does Test-Driven Development Really Improve Software Design Quality?",
    authors: "Janzen, D. S.",
    source: "Software, IEEE, 25(2) 77-84",
    pubyear: "2008",
    doi: "https://doi.org/10.1145/2601248.2601267",
    claim: "code quality improvement",
    evidence: "strong support",
  },
  {
    title: "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
    authors: "Siniaalto, M., Abrahamsson, P.",
    source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
    pubyear: "2017",
    doi: "https://doi.org/10.1109/esem.2007.35",
    claim: "code quality improvement",
    evidence: "weak against",
  }
]

const addOnceData = () => {
  article.count({})
    .then((data) => {
      if (data == 0) {
        article.insertMany(DATA)
          .then((respnse) => {
            console.log("seeding data for once time is successfully done")
          })
      }
    })
}
const getAllArticle = (req, res) => {
  article.find({ status: 'accepted' })
    .then((data) => {
      res.json(data)
    })
}

const submitArticle = (req, res) => {

  const data = req.body
  article.create(data)
    .then((data) => {
      console.log("Add article has been successfully")
      res.json("Add article has been successfully")
    })
    .catch((error) => {
      res.json("There is Error in article submitting")
    })
}

const getAllPendingArticles = (req, res) => {

  // get all articles with pending status 
  article.find({ status: 'pending' })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      // if there is any error 
      res.status(500).json({
        message: error.message,
        type: "Can't update this"
      })
    })
}
const acceptArticle = (req, res) => {
  // take id from the front-end 
  const { id } = req.params
  // convert the id from string to objectId mongoose 
  var _id = ObjectId(id)

  // update the article that we send it's id from pending status to accepted status
  article.update({ _id },
    { status: "accepted" })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      // if there is any error 
      res.status(500).json({
        message: error.message,
        type: "Can't update this"
      });
    })
}


// function reject article
const rejectArticle = (req, res) => {

  // take id from the front-end 
  const { id } = req.params
  // convert the id from string to objectId mongoose 
  var _id = ObjectId(id)

  // update the article that we send it's id from pending status to reject status
  article.update({ _id },
    { status: "rejected" })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      // if there is any error 
      res.status(500).json({
        message: error.message,
        type: "Can't update this"
      });
    })
}



module.exports = {
  getAllArticle,
  submitArticle,
  addOnceData,
  getAllPendingArticles,
  acceptArticle,
  rejectArticle
}
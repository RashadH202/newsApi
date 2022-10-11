const express = require('express')
const router = express()
const dotenv = require('dotenv')
dotenv.config()

const DataModel = require('../models/userdata')
const axios = require('axios')

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWSAPI_ACCESS, );


//Route to post objects to database from front end using express
router.post("/addarticle", async (req, res) => {
    const Data = new DataModel({
        newsAuthor: req.body.newsAuthor,
        newsTitle: req.body.newsTitle,
        newsDesc: req.body.newsDesc,
        newsUrl: req.body.newsUrl,
        newsImg: req.body.newsImg,
        newsPubdate: req.body.newsPubdate,
        newsContent: req.body.newsContent,
    })
    try {
        await Data.save()
        res.json({Data: Data.toJSON()})
    }
    catch(err) {
        console.log(err)
    }
    
})

//Route to read objects from database
router.get("/read", async (req, res) => {
    console.log('read route called')
    DataModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


//route to delete data from database
router.delete("/delete/:id", async (req, res) => {
    const id = req.params._id
    
    await DataModel.findbyIdAndRemove(_id).exec()
    
    res.send(_id)
})


//API Routes 

router.get("/readnews", (req, res) => {

        newsapi.v2.everything({
        q: 'biden',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk,techcrunch.com',
        from: Date(),
        to: Date(),
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {

                /*
          {
            status: "ok",
            articles: [...]
          }
        */
      
        const articles = response.articles

        if (articles){

              res.send(articles)
            
            
        } else {
            console.log("error")
            res.send("error")
        }
            console.log(response.articles)        

      });
    
})

router.get("/searchnews", (req, res) => {

    const searchTerm = req.body.searchTerm

    if(!searchTerm) {
        return res.status(400).json({
            message: 'search topic needed'
        })
    }

    newsapi.v2.everything({
    q: searchTerm,
    from: Date(),
    to: Date(),
    language: 'en',
    sortBy: 'relevancy',
  }).then(response => {

            /*
      {
        status: "ok",
        articles: [...]
      }
    */
  
    const articles = response.articles

    if (articles){

          res.send(articles)
        
        
    } else {
        console.log("error")
        res.send("error")
    }
        console.log(response.articles)        

  });
console.log("topic searched")
})
module.exports = router
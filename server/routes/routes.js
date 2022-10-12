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
    }
    catch(err) {
        console.log(err)
    }
    res.json({Data: Data.toJSON()})
})

//Route to read objects from database
router.get("/read", async (req, res) => {
    DataModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

//Route to updates objects in database
router.put("/update", async (req,res) => {
    const newDataName = req.body.newdataName
    const newDataDesc = req.body.newdatadesc

    const id = req.body.id

    try {
        await DataModel.findbyId(id, (err, updataData) => {
            updataData.dataName = newDataName
            updateData.dataDesc = newDataDesc
        })
    }
    catch(err) {
        console.log(err)
    }
})

//route to delete data from database
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    
    await DataModel.findByIdAndRemove(id)
    
    res.send(id)
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
      
        const articles = response.articles
       
        if (articles){

              res.send(articles.slice(0,36))
            
        } else {
            console.log("error")
        }
      
      
        /*
          {
            status: "ok",
            articles: [...]
          }
        */console.log(response.articles.slice(0,36))        

      });
})

router.get("/search-news", (req, res) => {

    const searchTerm = req.query.search_term;


    newsapi.v2.everything({
    q: searchTerm,
    // sources: 'bbc-news,the-verge',
    // domains: 'bbc.co.uk,techcrunch.com',
    from: Date(),
    to: Date(),
    language: 'en',
    sortBy: 'relevancy',
  }).then(response => {
  
    const articles = response.articles

    if (articles){
    
        res.json(articles.slice(0, 5));
        
    } else {
        console.log("error")
        res.send("error");
    }
  
  
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
   
      // console.log(response.articles.slice(0,36));     

  });
})
module.exports = router
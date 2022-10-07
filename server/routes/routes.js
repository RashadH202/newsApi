const express = require('express')
const router = express()
const dotenv = require('dotenv')
dotenv.config()

const DataModel = require('../models/userdata')
const axios = require('axios')

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWSAPI_ACCESS, );


//Route to post objects to database from front end using express
router.post("/addData", async (req, res) => {
    const Data = new DataModel({
        dataName: req.body.artistName,
        dataDesc: req.body.artistName,
    })
    try {
        await data.save()
    }
    catch(err) {
        console.log(err)
    }
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
    
    await DataModel.findbyIdAndRemove(id).exec()
    
    res.send(id)
})


//API Routes 

router.get("/readnews", async (req, res) => {



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
      
        const dataNews = []
        dataNews.push(response)
        /*
          {
            status: "ok",
            articles: [...]
          }
        */console.log(response)        

        console.log(dataNews)
        res.send(dataNews)
      });
    

    


    
})
module.exports = router
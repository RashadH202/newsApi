import React, { useEffect, useContext} from 'react'
import './display.css'
import axios from 'axios'
import { Collection, CollectionItem, Col, Row } from 'react-materialize'

import { FavoritedNewsStore } from "../../Store/Favorites.store";
import { SearchResultsStore } from '../../Store/Search-results.store';
import { hash } from '../../util';


const Display = () => {

  const favoritedContext = useContext(FavoritedNewsStore);
  const searchResultsContext = useContext(SearchResultsStore)

  const favoritesMap = {}
  for (const news of favoritedContext.favoritedNews)  {
    favoritesMap[hash(news.newsTitle)] = true;
  }


 console.log({favoritesMap, favoritedContext, searchResultsContext})

  useEffect(() => {
    axios.get('http://localhost:3001/app/readnews').then((res => {
      searchResultsContext.set(res.data)
    }))
  },[])

  const addArticle = (val) => {
    console.log(val)

    const data = {
      newsAuthor: val.author,
      newsTitle: val.title,
      newsDesc: val.description,
      newsUrl: val.url,
      newsImg: val.urlToImage,
      newsPubdate: val.publishedAt,
      newsContent: val.content
    } 

    axios.post('http://localhost:3001/app/addarticle', data).then((res) => {
      
      
      console.log("added to favorites", val.newsTitle)
      favoritedContext.add(res.data.Data)

    })
    

    console.log("success")
  }


  return (
    <div className='display__data'>
      <Row>
    <Col
      m={12}
      s={12}
    >
<Collection>
      {searchResultsContext.searchResults.map((val, key) => {

        
        return <div key = {key}>
          <CollectionItem id = {val.id}>
            <div className='articles__first'>
              <div className='imgandauthor'>
              <a className ='title__article'href={val.url}target="_blank" rel="noopener" >{val.title}</a>

              <img className='img__article'src={val.urlToImage} />
              <div className='author__article'>{val.author}</div>
          
            </div>
            <div className='description__article'>{val.description}</div>
            <div className='content__article'>{val.content}</div>
            <div className='publishedAt__article'>{val.publishedAt}</div>
            {
              !favoritesMap[hash(val.title)] && (
                <button className='btn'onClick={() => addArticle(val)}>Fav</button>
              )
            }
            
            </div>
        </CollectionItem>
           
   
          </div>

      })}
</Collection>

</Col>
  </Row> 
  
  </div>
  )
}

export default Display
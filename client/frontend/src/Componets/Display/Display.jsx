import React, {useState, useEffect, setState} from 'react'
import './display.css'
import axios from 'axios'
import { Collection, CollectionItem, Col, Row } from 'react-materialize'
const Display = () => {

  const [newsList, setNewsList] =  useState([])
  const [favNewList, setFavNewList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/app/readnews').then((res => {
      setNewsList(res.data)
    console.log("here is your list" + newsList)
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

    axios.post('http://localhost:3001/app/addarticle', data).then(() => {
      
      favNewList.push(val)
      console.log("added to favorites", favNewList)
      setFavNewList(favNewList.slice(0))
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
      {newsList.map((val, key) => {

        
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
            <button onClick={() => addArticle(val)}>Fav</button>
            </div>
        </CollectionItem>
           
   
          </div>

      })}
</Collection>

</Col>
  </Row> 

      {/* <Row>
    <Col
      m={12}
      s={12}
    >
      <Collection>
        <CollectionItem href="#">
          Alvin
        </CollectionItem>

          
      </Collection>
    </Col>
  </Row> */}
  
  </div>
  )
}

export default Display
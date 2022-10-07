import React, {useState, useEffect} from 'react'
import './display.css'
import axios from 'axios'
import { Collection, CollectionItem, Col, Row } from 'react-materialize'
const Display = () => {

  const [newsList, setNewsList] =  useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/app/readnews').then((res => {
      setNewsList(res.data)
    console.log("here is your list" + newsList)
    }))
  })



  return (
    <div className='display__data'>
      

      {newsList.map((val, key) => {
        return <div key = {key}>
            {val.publishedAt}
   
          </div>

      })}

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
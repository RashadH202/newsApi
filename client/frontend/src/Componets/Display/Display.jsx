import React from 'react'
import './display.css'
import { Collection, CollectionItem, Col, Row } from 'react-materialize'
const Display = () => {



  return (
    <div className='display__data'>
      
      <Row>
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
  </Row></div>
  )
}

export default Display
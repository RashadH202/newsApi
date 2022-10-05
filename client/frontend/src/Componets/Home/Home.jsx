import React from 'react'
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize'
const Home = () => {
  return (
    <div className='display__savedata'>
<Row>
  <Col
    m={12}
    s={12}
  >
    <Collection>
      <CollectionItem className="avatar">
        <img
          alt=""
          className="circle"
          src="https://materializecss.com/images/yuna.jpg"
        />
        <span className="title">
          Title
        </span>
        <p>
          First Line 
          <br />
           Second Line
        </p>
        <a
          className="secondary-content"
          href="javascript:void(0)"
        >
          <Icon>
            grade
          </Icon>
        </a>
      </CollectionItem>
      <CollectionItem className="avatar">
        <Icon className="circle">
          folder
        </Icon>
        <span className="title">
          Title
        </span>
        <p>
          First Line 
          <br />
           Second Line
        </p>
        <a
          className="secondary-content"
          href="javascript:void(0)"
        >
          <Icon>
            grade
          </Icon>
        </a>
      </CollectionItem>

      
    </Collection>
  </Col>
</Row>
    </div>
  )
}

export default Home
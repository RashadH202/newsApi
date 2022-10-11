import React, {useEffect, useState, useContext} from 'react'
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize'
import { FavoritedNewsStore } from '../../store/favorites.store';
import axios from 'axios'

const Home = () => {

  const favoritedContext = useContext(FavoritedNewsStore)

  console.log({favoritedContext})

  useEffect(() => {
    axios.get('http://localhost:3001/app/read')
    .then((res) => {
      console.log("here is your favorites list:", res);
      favoritedContext.set(res.data.data);
    })
  }, []);

  const removeFavoriteNews = (id) => {
    axios.delete(`http://localhost:3001/app/delete/${id}`)
      .then((res) => {
        console.log(`deleted`);
        favoritedContext.remove(id);
      });
  };




  return (
    <div className='display__savedata'>
<Row>
  <Col
    m={12}
    s={12}
  >
    <Collection>
    {
            favoritedContext.favoritedNews.map((news, index) => {
              return (
                <CollectionItem key={news.id.toString()} className="avatar">
                  <img
                    alt=""
                    className="circle"
                    src={news.img}
                  />
                  <a href={news.url}>
                    <h1 className="title">{news.title}</h1>
                  </a>
                  <p>{news.description}</p>
                  <p>{news.created_at}</p>
                  <span className="secondary-content" onClick={() => removeFavoriteNews(news.id)}>
                    <Icon>grade</Icon>
                  </span>
                </CollectionItem>
              )
            })
          }
      
    </Collection>
  </Col>
</Row>
    </div>
  )
}

export default Home
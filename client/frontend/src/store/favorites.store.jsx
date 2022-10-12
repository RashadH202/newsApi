import React, { createContext, useState} from 'react'

export const FavoritedNewsStore = createContext({
    favoritedNews: [],
    set: (arg) => {},
    add: (arg) => {},
    remove: _id => {}
})

export function FavoritedNewsContext(props) {
    const [favoritedNews, SetFavoriteNewsList] = useState([])

    const value = {
        favoritedNews,
        set: (newsList) => {
            SetFavoriteNewsList(newsList)
            console.log('set')
        },
        add: (newsObj) => {
            favoritedNews.push(newsObj)
            SetFavoriteNewsList(favoritedNews.slice(0))
            console.log('added');
        },
        remove: (_id) => {
            const newList = favoritedNews.filter(news => news._id !== _id)
            SetFavoriteNewsList(newList)
            console.log('removed')
        }
    }
    return (
        <FavoritedNewsStore.Provider value={value}>
            {props.children}
        </FavoritedNewsStore.Provider>
    )
}
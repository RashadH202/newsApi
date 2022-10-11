import React, {createContext, useState} from 'react'

export const SearchResultsStore = createContext({
    searchResults:[], 
    set: (arg) => {},
})

export function SearchResultsContext(props) {
    const {searchResults, SetSearchResults} = useState([])

    const value = {
        searchResults,
        set: (newsList) => {
            SetSearchResults(newsList);
            console.log('searchResults')
        }
    }

    return (
        <SearchResultsStore.Provider value={value}>
            {props.children}
        </SearchResultsStore.Provider>
    )
}
import axios from 'axios';
import React, {useState, useContext} from 'react'
import { TextInput, Icon } from 'react-materialize'
import { SearchResultsStore } from '../../Store/Search-results.store';
import './search.css'


const Search = () => {

 const [searchTerm, setSearchTerm] = useState('')
 const searchResultsContext = useContext(SearchResultsStore);

console.log({ searchResultsContext })

const searchForResults = () => {
  axios.get(`http://localhost:3001/app/search-news?search_term=${searchTerm}`)
  .then((res)=> {
    searchResultsContext.set(res.data)
  })
}

  return (
    
    <div className='search__data'>
      <div className='application-desciption'>
        Welcome to my news API, Feel free to search for any current events! favorite the ones that seem intersting for later!
      </div>
      <TextInput
        icon={<Icon>search</Icon>}
        id="userserach"
        label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value)
         }}
      />
      <button className='btn searchBtn' onClick={searchForResults}>Search</button>
    </div>
  )
}

export default Search
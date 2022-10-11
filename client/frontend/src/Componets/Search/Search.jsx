import axios from 'axios';
import React, {useState, useContext} from 'react'
import { TextInput, Icon } from 'react-materialize'
import { SearchResultsStore } from '../../store/search-results.store';
import './search.css'


const Search = () => {

 const [searchTerm, setSearchTerm] = useState('')
 const searchResultsContext = useContext(SearchResultsStore);

console.log({ searchResultsContext})

const searchForResults = () => {
  axios.get(`http://localhost:3001/app/search-news?search_term=${searchTerm}`)
  .then((res)=> {
    searchResultsContext.set(res.data)
  })
}

  return (
    
    <div className='search__data'>
      <TextInput
        icon={<Icon>search</Icon>}
        id="userserach"
        label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value)
         }}
      />
      <button className='btn' onClick={searchForResults}>Search</button>
    </div>
  )
}

export default Search
import React, {useState, useEffect} from 'react'
import { TextInput, Icon } from 'react-materialize'
import './search.css'
const Search = () => {

  const [dataName, setDataName] = useState("")


  return (
    
    <div className='search__data'>
      <TextInput
        icon={<Icon>search</Icon>}
        id="userserach"
        label="Search"
        onChange={(event) => {
          setDataName(event.target.value)
         }}
      />
      
    </div>
  )
}

export default Search
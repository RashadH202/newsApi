import './App.css';
import Home from './Componets/Home/Home';
import Display from './Componets/Display/Display';
import Search from './Componets/Search/Search';
import Nav from './Componets/Nav/Nav';
import { FavoritedNewsContext } from './Store/Favorites.store';
import { SearchResultsContext } from './Store/Search-results.store';

function App() {
  return (
    
    <>
    <SearchResultsContext>
 <FavoritedNewsContext>
     <Nav />
    <div className='main'>
   
    <Search />
    <Home />
    <Display />
    </div>
    </FavoritedNewsContext>
    </SearchResultsContext>
    </>
    
  );
}

export default App;

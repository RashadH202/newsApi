import './App.css';
import Home from './Componets/Home/Home';
import Display from './Componets/Display/Display';
import Search from './Componets/Search/Search';
import Nav from './Componets/Nav/Nav';
import { FavoritedNewsContext } from './store/favorites.store';
import { SearchResultsContext } from './store/search-results.store';

function App() {
  return (
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
    
  );
}

export default App;

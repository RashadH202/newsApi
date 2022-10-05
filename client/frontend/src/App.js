import './App.css';
import Home from './Componets/Home/Home';
import Display from './Componets/Display/Display';
import Search from './Componets/Search/Search';
import Nav from './Componets/Nav/Nav';

function App() {
  return (
    <>
     <Nav />
    <div className='main'>
   
    <Search />
    <Home />
    <Display />
    </div>

    </>
  );
}

export default App;

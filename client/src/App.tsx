
import Router from './shared/Router/Router';
import './App.scss';
import Header from './shared/components/Header/Header';
import Categories from './shared/components/Categories/Categories';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
 
       <BrowserRouter>
          <Header/>
        
          <div className="containerapp">
                 <main className="containerapp__categories"> 
                      <Categories/>
                 </main>
              
                  <nav  className="containerapp__nav" >
                         <Router/>
                  </nav>
          </div>
        </BrowserRouter >


);
}

export default App;

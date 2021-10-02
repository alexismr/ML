
import Router from './shared/Router/Router';
import './App.scss';
import Header from './shared/components/Header/Header';
import Categories from './shared/components/Categories/Categories';

function App() {
  return (
    <div>
          <Header/>
        
          <div className="containerapp">
                 <main className="containerapp__categories"> 
                      <Categories/>
                 </main>
              
                  <nav  className="containerapp__nav" >
                         <Router/>
                  </nav>
          </div>

    </div>
);
}

export default App;

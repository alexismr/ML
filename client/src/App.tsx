
import Router from './shared/Router/Router';
import './App.scss';
import useFetch from './hooks/useFetch';
function App() {

  const  {response,error, isLoading}  = useFetch({ method:"get", url:"https://jsonplaceholder.typicode.com/posts"});
  // const  [{response:r2,error:e2, isLoading:log2},modificardatos]  = useFetch({ method:"get", url:"https://jsonplaceholder.typicode.com/posts"});


  const loadData = () =>{
    // setRefreshFetch({method:"post" , url:"posts" , data : JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // })})

 
  };
  
  return (
      <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {response && 
         <pre>{JSON.stringify(response, null, 2)}</pre>
        }
{/* --- r2
{r2 && 
         <pre>{JSON.stringify(r2, null, 2)}</pre>
        } */}

        <input type="button" value="psot methods"   onClick={loadData}></input>
    </>
  );
}

export default App;

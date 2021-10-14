
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
function App() {
  const ListLoading = withListLoading(List); // assigning higher order component to a new component
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(apiUrl).then((posts) => {
      const allRepos = posts.data;
      setAppState({ loading: false, posts: allRepos });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Database</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
      <footer>
        <div className='footer'>
         <h2> Built{' '} with 
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by Vaidehi </h2>
        </div>
      </footer>
    </div>
  );
}
export default App;





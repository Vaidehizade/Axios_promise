import React from 'react';
const List = (props) => 
{
  const { posts } = props; // we initialize a prop called repos with value props
  if (!posts || posts.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Employees</h2>
      {posts.map((repo) => {
        return (
          <li key={repo.userId} className='list'>
            <h4>Title:  <span className='repo-text'>{repo.title} </span></h4>
            <span className='repo-description'>{repo.body}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;

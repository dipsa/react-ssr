import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>I am the home component</h1>
      <button
        onClick={() => {
          console.log('Hi There');
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;

// http://react-ssr-api.herokuapp.com/

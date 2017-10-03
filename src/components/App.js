import React from 'react';
import WordForm from './word/WordForm';
import WordsList from './word/WordList';

const App = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">English words to remember:</h1> 
      <WordForm />
      <WordsList />
    </div>
  )
}

export default App;
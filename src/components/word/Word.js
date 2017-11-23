import React from 'react';
import WordForm from './WordForm';
import WordsList from './WordList';

const Word = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">English words:</h1> 
      <WordForm />
      <WordsList />
    </div>
  )
}

export default Word;
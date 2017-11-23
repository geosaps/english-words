import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as wordActions from '../../actions/wordActions';


class Learn extends Component {
  constructor(props) {
    super(props)
  }

  checkWord(word) {
    this.props.checkWord(word)
  }

  generateWord(words){
    this.props.generateWord(words)
  }


  render() {
    const { learningWords, wordCheck, guess, makeGuess } = this.props 
    let _ukrainianWord
    return (
      <div className="container">
        <div className="learning text-center">
          <h1 className="text-center">Learning:</h1> 
          <Link to={process.env.PUBLIC_URL + '/'}><button className="btn btn-success">Return</button></Link>
          <button onClick={e => {
                        e.preventDefault();
                        this.generateWord(learningWords)}}
                              className="btn btn-success">Generate</button>
          <h3>{wordCheck.englishDefault}</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var guess = {
             ukrainian: _ukrainianWord.value,
             ukrainianDefault: wordCheck.ukrainianDefault,
            }
            this.checkWord(guess);
            e.target.reset();
          }}>
            <input className="form-control"
                     autoComplete="off"
                     id="ukrainianWord"
                     type="text"
                     ref={node => _ukrainianWord = node}
                     placeholder="Enter Ukrainian meaning..."
                     required
                     disabled={makeGuess}
                     ></input>
            <button type="submit"
                    className="btn btn-success">Check</button>
          </form>
          {
            (guess) ?
            <div>
              <h2>Right!</h2>
              <p>{wordCheck.ukrainianDefault}</p></div> :
            (guess === undefined) ?
            <h2></h2> :
            <div>
              <h2>Wrong!</h2>
              <p>{wordCheck.ukrainian} --> {wordCheck.ukrainianDefault}</p>
            </div>
          }
        </div>
      </div>
    )
  } 
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    words: state.words.words,
    wordCheck: state.words.wordCheck,
    guess: state.words.guess,
    makeGuess: state.words.makeGuess
  }
}

const mapDispathToProps = (dispath) => {
  return {
    generateWord: words => dispath(wordActions.generateWord(words)),
    checkWord: word => dispath(wordActions.checkWord(word))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Learn)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import * as wordActions from '../../actions/wordActions';

class WordForm extends Component {
  constructor(props) {
    super(props)
  }

  submitWord(input){
    this.props.createWord(input)
  }

  render(){
    let _english, _ukrainian
    return(
      <div className="words-form">
        <form onSubmit={e => {
          e.preventDefault();
          var input = {
            id: v4(),
            english: _english.value,
            ukrainian: _ukrainian.value
          };
          this.submitWord(input);
          e.target.reset();
        }}>
          <div className="form-group">
            <label htmlFor="english">English:</label>
            <input className="form-control"
                   id="english"
                   type="text"
                   ref={node => _english = node}
                   placeholder="Enter English meaning..."
                   required/>
          </div>
          <div className="form-group">
            <label htmlFor="ukrainian">Ukrainian:</label>
            <input className="form-control"
                   id="ukrainian"
                   type="text"
                   ref={node => _ukrainian = node}
                   placeholder="Enter Ukrainian meaning..."
                   required/>
          </div>
          <button type="submit"
                  className="btn btn-success">Remember</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    words: state.words
  }
}

const mapDispathToProps = (dispath) => {
  return {
    createWord: word => dispath(wordActions.createWord(word))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(WordForm)
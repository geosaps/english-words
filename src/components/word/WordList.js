import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as wordActions from '../../actions/wordActions';

class WordsList extends Component {
  constructor(props){
    super(props)
  }

  removeWord(id){
    this.props.removeWord(id)
  }

  render(){
    return(
      <div className="words-list">
        {
          (this.props.words.length === 0) ?
            <p className="text-center">There is no words to display</p> :
              this.props.words.map((word, i) => 
                <div key={word.id} className="row text-center word">
                  <div className="col-md-1 col-xs-1">
                    {`${i+1}.`}
                  </div>
                  <div className="col-md-4 col-xs-4">
                    {word.english}
                  </div>
                  <div className="col-md-2 col-xs-2">
                    -
                  </div>
                  <div className="col-md-4 col-xs-4">
                    {word.ukrainian}
                  </div>
                  <div className="col-md-1 col-xs-1">
                    <button onClick={e => {
                      e.preventDefault();
                      this.removeWord(word.id)}}
                            className="btn btn-default">X</button>
                  </div>
                </div>
              )
        }
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
    removeWord: id => dispath(wordActions.removeWord(id))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(WordsList)
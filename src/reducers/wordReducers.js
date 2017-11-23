import WordsData from '../data/words-data';

export default (state = WordsData, action) => {
  switch (action.type) {
    case 'CREATE_WORD':
      return Object.assign({}, state, {
        words: [
        ...state.words,
        Object.assign({}, action.word)
      ]})
    case 'REMOVE_WORD':
      const words = state.words.filter(
          word => word.id !== action.id 
        )
      return Object.assign({}, state, {
        words: words
      })
    case 'GENERATE_WORD':
      const word = state.words[Math.floor(Math.random()*state.words.length)]
      const wordCheck = {
        ukrainian: "",
        ukrainianDefault: word.ukrainian,
        englishDefault: word.english
      }
      return Object.assign({}, state, {
        wordCheck: wordCheck,
        guess: undefined,
        makeGuess: false
      })
    case 'CHECK_WORD':
      let guess = ""
      if (action.word.ukrainian === action.word.ukrainianDefault) {
        guess = true
      } else {
        guess = false
      }
      const wordChecked = {
        ukrainian: action.word.ukrainian,
        ukrainianDefault: action.word.ukrainianDefault,
        englishDefault: action.word.englishDefault
      }
      return Object.assign({}, state, {
        wordCheck: wordChecked,
        guess: guess,
        makeGuess: true
      })
    default:
      return state;
  }
};
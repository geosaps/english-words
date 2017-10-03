import WordsData from '../data/words-data';

export default (state = WordsData, action) => {
  switch (action.type) {
    case 'CREATE_WORD':
      return [
        ...state,
        Object.assign({}, action.word)
      ];
    case 'REMOVE_WORD':
      const words = state.filter(
          word => word.id !== action.id 
        )
      return words
    default:
      return state;
  }
};
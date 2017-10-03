export const createWord = (word) => {
  return {
    type: 'CREATE_WORD',
    word: word
  }
}

export const removeWord = (id) => {
  return {
    type: 'REMOVE_WORD',
    id: id
  }
}
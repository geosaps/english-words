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

export const generateWord = (word) => {
  return {
    type: 'GENERATE_WORD',
    word: word
  }
}

export const checkWord = (word) => {
  return {
    type: 'CHECK_WORD',
    word: word
  }
}
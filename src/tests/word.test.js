import words from '../reducers/wordReducers'
import deepFreeze from 'deep-freeze'

describe('word Reducer', () => {
  it("CREATE_WORD success", () => {
    const state = []
    const action = {
      type: 'CREATE_WORD',
      word: {
        id: 0,
        english: 'dog',
        ukrainian: 'собака'
      }
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(words(state, action))
      .toEqual([{
        id: 0,
        english: 'dog',
        ukrainian: 'собака'
      }])
  })
  it("REMOVE_WORD success", () => {
    const state = [
    {
      id: 0,
      english: 'dog',
      ukrainian: 'собака'
    },
    {
      id: 1,
      english: 'cat',
      ukrainian: 'кіт'
    },]
    const action = {
      type: 'REMOVE_WORD',
      id: 1
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(words(state, action))
      .toEqual([{
        id: 0,
        english: 'dog',
        ukrainian: 'собака'
      }])
  })
})


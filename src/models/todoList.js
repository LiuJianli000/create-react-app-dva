import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: 'todoList',
  state: {
    inputValue: '',
    list: []
  },

  effects: {
    *fetch(_, { put }) {
      const res = yield axios.get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')

      yield put({
        type: 'getList',
        data: res.data.data.list
      })
    }
  },

  reducers: {
    getList(state, { data }) {
      return {
        ...state,
        list: [...data]
      }
    },
    inputChange(state, { value }) {
      return {
        ...state,
        inputValue: value
      }
    },
    addItem(state) {
      const newState = {...state}

      newState.list.push(newState.inputValue)

      return {
        ...state,
        list: newState.list,
        inputValue: ''
      }
    },
    deleItem(state, { index }) {
      const newState = {...state}

      newState.list.splice(index, 1)

      return {
        ...state,
        list: [...newState.list]
      }
    }
  }
}
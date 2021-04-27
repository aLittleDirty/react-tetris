import { createStore } from 'redux'
import rootReducer from '../reducers'

// 问：window.devToolsExtension是啥意思， 有什么作用？
const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

export default store;
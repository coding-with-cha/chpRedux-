import {createStore, combineReducers} from 'redux';
import reducerTask from '../reducers/reducerTask';

const rootReducer = combineReducers({tasks : reducerTask})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
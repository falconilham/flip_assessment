import { createStore, combineReducers } from 'redux';

function listData(state = [], action){
    let { type, payload } = action;
    switch (type) {
        case 'GET_DATA':
          return payload;
        default:
          return state;
    }
}

let rootReducer = combineReducers({
    listData
  });
  
export default createStore(rootReducer);
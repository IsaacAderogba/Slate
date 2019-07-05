import authReducer from './authReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    user: userReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
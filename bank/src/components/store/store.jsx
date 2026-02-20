import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice'; 
import userInfoReducer from '../reducers/userInfo'; 
import putUserReducer from '../reducers/putUserinfo'

const rootReducer = combineReducers({
  user: userReducer, 
  userInfo: userInfoReducer,
  putUserInfo: putUserReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

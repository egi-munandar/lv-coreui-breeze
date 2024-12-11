import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/reducer-slices/authSlice';
import themeReducer from './Components/reducer-slices/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    },
});

// import { createStore } from 'redux'

// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
export default store;

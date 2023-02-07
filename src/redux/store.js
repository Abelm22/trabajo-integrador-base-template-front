import { createStore } from '@reduxjs/toolkit';
import { appReducer } from "./appRedux"

const store = createStore(appReducer)
export default store;
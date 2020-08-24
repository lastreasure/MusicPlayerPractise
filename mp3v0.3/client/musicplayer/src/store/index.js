import {configureStore} from '@reduxjs/toolkit'
import mpSlice from './slices'

const store = configureStore({
    reducer: mpSlice.reducer
})

export default store;

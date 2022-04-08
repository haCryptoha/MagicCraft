import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stakingReducer from './staking'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    staking: stakingReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

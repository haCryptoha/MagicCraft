/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  data: ""
}

export const StakingSlice = createSlice({
  name: 'Staking',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.poolLength;
    },
  },
})

// Actions
export const {
  setData,
} = StakingSlice.actions


export const fetchStakingGlobalDataAsync = () => async (dispatch: any) => {

  dispatch(
    setData({
      data: ""
    }),
  )
}

export default StakingSlice.reducer

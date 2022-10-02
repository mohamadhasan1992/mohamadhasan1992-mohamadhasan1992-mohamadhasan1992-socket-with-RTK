
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError:false,
    isSuccess:false,
    message: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setError: (state, action) => {
      state.isError = !state.isError;
      state.message = action.message;
    },
    setSuccess: (state, action) => {
        state.isSuccess = !state.isSuccess;
        state.message = action.message;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoading, setError, setSuccess } = uiSlice.actions

export default uiSlice.reducer
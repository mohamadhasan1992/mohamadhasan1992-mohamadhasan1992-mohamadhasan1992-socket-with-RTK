import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




const initialState = {
    connectionSuccess:false,
    connectionError:false,
    data:{},
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers:{
    setData: (state, payload) => {
        state.data = payload;
    },
    setError: (state) => {
        state.connectionSuccess=false;
        state.connectionError=true;
    },
    setSuccess: (state) => {
      state.connectionSuccess=true;
      state.connectionError=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setData, setError,
  setSuccess } = mainPageSlice.actions
export default mainPageSlice.reducer




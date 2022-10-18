import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    connectionSuccess:false,
    connectionError:false,
    data:[],
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers:{
    setData: (state, data) => {
      let currencyIndex = state.data.findIndex(item => item.id == data.payload.id);
      if(currencyIndex !== -1){
        state.data[currencyIndex] = data.payload;
      }else{
        state.data = state.data.concat(data.payload)
      }
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




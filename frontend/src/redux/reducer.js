import { createSlice } from "@reduxjs/toolkit";

export const myreducer = createSlice({
  name: "myreducer",
  initialState: {
    selectedProductData: [],
    loading:false
  },
  reducers: {
    selectedProdcutCategory: (state, action) => {
      console.log("working as expected");
      state.selectedProductData = action.payload;
    },
    isSelectedLoadingOn:(state)=>{
      state.loading=true
    },
    isSelectedLoadingOFF: (state) => {
      state.loading = false;
    },
  },
});

export const { selectedProdcutCategory ,isSelectedLoadingOn, isSelectedLoadingOFF} = myreducer.actions;
export default myreducer.reducer;

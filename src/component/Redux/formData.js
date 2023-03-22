import { createSlice } from "@reduxjs/toolkit";
const initialState={
    selectedData :{},
}
 export const formData = (createSlice({
    name:"formData",
    initialState,
    reducers:{
        setSelectedData:(state,action )=>{
            state.selectedData = action.payload
        }
    }
 }))

 export const {setSelectedData} = formData.actions
 export default formData.reducer
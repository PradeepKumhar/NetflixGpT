import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "config",
    initialState : {
        changeLang: "en",
    },

    reducers : {
        addChangeLang : (state, action)=>{
            state.changeLang = action.payload;
        },
    }
})


export const {addChangeLang} = configSlice.actions;
export default configSlice.reducer;
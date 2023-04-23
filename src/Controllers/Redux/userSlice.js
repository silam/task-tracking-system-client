import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: [{}],
    reducers: {
        getUser: (state)=>{
            state.push({name: 'Si Lam'});
            state.push({name: 'Mike Smith'});

        }
    }
})

export default slice.reducers;
export const {getUser} = slice.action;
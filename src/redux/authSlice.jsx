import { createSlice, current } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: localStorage.getItem("userData") ?
            JSON.parse(localStorage.getItem("userData"))
            :
            {
                id: null,
                name: null,
                email: null,
                accessToken: null,
                authenticated: false,
            },


    },
    reducers: {
        setUser: (state, action) => {
            // console.log(action.payload)
            state.user.id = action.payload.id
            state.user.email = action.payload.email
            state.user.name = action.payload.name
            state.user.accessToken = action.payload.accessToken
            state.user.authenticated = true;


            localStorage.setItem("userData", JSON.stringify(state.user));
            // console.log(current(state.user))

        },
        setUserToNull: (state, action) => {
            state.user.id = null
            state.user.email = null
            state.user.name = null
            state.user.accessToken = null
            state.user.authenticated = false;
            localStorage.removeItem("userData")
        }
    },
});

export const { setUser, setUserToNull } = authSlice.actions;
export default authSlice.reducer;

import { createSlice, current } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
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

        //-----------------------when user log in ,set the user in redux and in local storage----------------------

        setUser: (state, action) => {
            // console.log(action.payload)
            state.user.id = action.payload.id
            state.user.email = action.payload.email
            state.user.name = action.payload.name
            state.user.accessToken = action.payload.accessToken
            state.user.authenticated = true;

            localStorage.setItem("userData", JSON.stringify(state.user));

        },
        // ---------------when user log out , remove the user from localstorage and from redux---------------------
        setUserToNull: (state) => {
            localStorage.removeItem("userData")
            state.user=state.user.initialState
        }
    },
});

export const { setUser, setUserToNull } = authSlice.actions;
export default authSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const signedUsersSlice = createSlice({
    name: 'signedUsersSlice',
    initialState: {
        users: [{ email: 'test@test.ru', password: '123123' }, { email: 'test@test111.ru', password: '123123' }]
    },
    reducers: {
        signUser(state, action) {
            console.log(action.payload.user);
            state.users.push(action.payload.user)
        }
    }
})


export default signedUsersSlice.reducer
export const { signUser } = signedUsersSlice.actions
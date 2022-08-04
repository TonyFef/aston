export const checkLoginMiddlware = (store) => (next) => (action) => {
    let result;
    let checkEmail = true;

    const urlArr = window.location.href.split('/')
    const page = urlArr[urlArr.length - 1]

    if (action.type === "userSlice/addUser" && page === 'signup') {
        const currentStore = store.getState();
        const emailFromStore = currentStore.users;

        const existedUser = emailFromStore.filter((item) => {
            return item.email === action.payload.email
        })

        if (existedUser.length > 0) {
            checkEmail = false;
            alert("Error: there is already such a user");
        } else {
            result = next(action);
            return result;
        }
    }
    else {
        result = next(action);
        return result;
    }
};
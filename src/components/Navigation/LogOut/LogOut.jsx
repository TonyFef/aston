import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logout } from "@store/slices/loginSlice";
import { removeUser } from "@store/slices/userSlice";
import { rememberNewUser } from "@store/slices/userInfoSlice";
import { deleteFavourites } from "@store/slices/favouriitesSlice";
import { removeHistory } from "@store/slices/historySlice";
import LogOutContainer from "./LogOutContainer";
import { getLocalStorage } from "@utils/localStorage";

const LogOut = () => {
    const dispatch = useDispatch();

    const storeDataUser = useSelector((state) => state.user);
    const storeDataFavourites = useSelector((state) => state.favourites);
    const storeDataHistory = useSelector((state) => state.history);

    const onlogoutHandler = () => {
        const allUsersInfo = getLocalStorage("userInfo");

        const arr = allUsersInfo.filter(({ user }) => {
            return user.email !== storeDataUser.email;
        });

        const newUser = { user: storeDataUser, favourites: storeDataFavourites, history: storeDataHistory };
        const newList = [...arr, newUser];

        dispatch(rememberNewUser(newList));
        dispatch(logout());
        dispatch(removeUser());
        dispatch(deleteFavourites());
        dispatch(removeHistory());
    };
    return <LogOutContainer onlogoutHandler={onlogoutHandler} />;
};

export default LogOut;

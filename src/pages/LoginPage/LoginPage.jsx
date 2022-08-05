import { useSelector, useDispatch } from "react-redux";

import { login } from "@store/slices/loginSlice";
import { setPlayersToFavourite } from "@store/slices/favouriitesSlice";
import { setTeamsToHistory } from "@store/slices/historySlice";
import { getLocalStorage } from "@utils/localStorage";
import Verification from "@components/Verification/Verification";

const LoginPage = () => {
    const storeDataUser = useSelector((state) => state.user);
    const storeDataUsers = useSelector((state) => state.users);
    const allUsersInfo = getLocalStorage("userInfo");

    const dispatch = useDispatch();

    const isLoginHandler = () => {
        const checkAllUsersArray = allUsersInfo.filter(({ user }) => {
            return user.email === storeDataUser.email && user.password === storeDataUser.password;
        });
        console.log(checkAllUsersArray);
        if (checkAllUsersArray.length === 1) {
            dispatch(setPlayersToFavourite(checkAllUsersArray[0].favourites));
            dispatch(setTeamsToHistory(checkAllUsersArray[0].history));
            dispatch(login());
        } else {
            const checkStoreDataUsersArray = storeDataUsers.filter((item) => {
                return item.email === storeDataUser.email && item.password === storeDataUser.password;
            });

            if (checkStoreDataUsersArray.length === 1) {
                dispatch(login());
            } else {
                alert("No such user... Please check email or password");
            }
        }
    };

    return <Verification isLoginHandler={isLoginHandler} />;
};

export default LoginPage;

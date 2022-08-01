import { useDispatch } from "react-redux";

import { logout } from "@store/slices/loginSlice";
import LogOutContainer from "./LogOutContainer";

const LogOut = () => {
    const dispatch = useDispatch();

    const onlogoutHandler = () => {
        dispatch(logout());
    };
    return <LogOutContainer onlogoutHandler={onlogoutHandler} />;
};

export default LogOut;

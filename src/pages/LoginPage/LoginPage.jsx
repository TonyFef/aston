import { useSelector, useDispatch } from "react-redux";

import { login } from "@store/slices/loginSlice";
import Verification from "@components/Verification/Verification";


const LoginPage = () => {
    const storeDataUsers = useSelector((state) => state.users);
    const storeDataUser = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const isLoginHandler = () => {
        const previouslySignedUserArray = storeDataUsers.users.filter((item) => {
            return item.email === storeDataUser.user.email && item.password === storeDataUser.user.password;
        });

        console.log(previouslySignedUserArray);

        if (previouslySignedUserArray.length === 1) {
            dispatch(login());
        } else {
            alert("No such user... Please check email or password");
        }
    };

    return <Verification isLoginHandler={isLoginHandler} />;
};

export default LoginPage;

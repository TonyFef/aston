import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLocalStorage } from "@utils/localStorage";
import Verification from "@components/Verification/Verification";
import { signUser } from "@store/slices/signedUsersSlice";

const SignupPage = () => {
    const [completed, setCompleted] = useState(false);
    const storeDataUsers = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const urlArray = window.location.href.split("/");
    const action = urlArray[urlArray.length - 1];

    const isSignupHandler = () => {
        const user = getLocalStorage("user");

        const isSignedYet = storeDataUsers.filter((item) => item.email === user.email);

        if (isSignedYet.length < 1) {
            setCompleted(true);
            dispatch(signUser(user));
        } else {
            alert("Such user is exist");
        }
    };

    return <Verification isSignupHandler={isSignupHandler} action={action} completed={completed} />;
};

export default SignupPage;

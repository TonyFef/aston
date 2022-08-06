import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
            dispatch(signUser(user));
            setCompleted(true);
            alert("Thanks for the registration! Now, please log in!");
        } else {
            alert("Such user is exist");
        }
    };

    return (
        <>{completed ? <Navigate to="/login" replace /> : <Verification isSignupHandler={isSignupHandler} action={action} completed={completed} />}</>
    );
};

export default SignupPage;

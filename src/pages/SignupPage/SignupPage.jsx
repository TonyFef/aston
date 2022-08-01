import { useSelector, useDispatch } from "react-redux";

import Verification from "@components/Verification/Verification";
import { signUser } from "@store/slices/signedUsersSlice";

const SignupPage = () => {
    const storeDataUser = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const isSignupHandler = () => {
        dispatch(signUser(storeDataUser));
    };

    return <Verification isSignupHandler={isSignupHandler} />;
};

export default SignupPage;

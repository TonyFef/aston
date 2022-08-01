import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { addUser } from "@store/slices/userSlice";
import VerificationContainer from "./VerificationContainer";

const Verification = ({ isLoginHandler, isSignupHandler }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailIsActive, setEmailIsActive] = useState(false);
    const [passwordIsActive, setPasswordIsActive] = useState(false);

    const [emailError, setEmailError] = useState("Email can't be empty");
    const [passwordError, setPasswordError] = useState("Password can't be empty");

    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (emailError || passwordError) {
            setSuccess(false);
        } else {
            setSuccess(true);
            dispatch(addUser({ email, password }));
        }
    }, [emailError, passwordError]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailIsActive(true);
                break;
            case "password":
                setPasswordIsActive(true);
                break;
            default:
                break;
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 6) {
            setPasswordError("Password should be at least 6 symbols");
            if (!e.target.value) {
                setPasswordError("Password can't be empty");
            }
        } else {
            setPasswordError("");
        }
    };

    return (
        <VerificationContainer
            isSignupHandler={isSignupHandler}
            isLoginHandler={isLoginHandler}
            emailIsActive={emailIsActive}
            emailError={emailError}
            email={email}
            emailHandler={emailHandler}
            blurHandler={blurHandler}
            password={password}
            passwordIsActive={passwordIsActive}
            passwordError={passwordError}
            passwordHandler={passwordHandler}
            success={success}
        />
    );
};

Verification.propTypes = {
    isLoginHandler: PropTypes.func,
    isSignupHandler: PropTypes.func,
};

export default Verification;

import { Link } from "react-router-dom";

import styles from "./LogIn.module.css";

const LogIn = () => {
    return (
        <>
            <div className={styles.login}>
                <Link to="/login" exact="true" className={styles.login__link}>
                    <span className={styles.login__text}>Log in</span>
                </Link>
            </div>
        </>
    );
};

export default LogIn;

import { useLocation } from "react-router-dom";

import img from "../../images/not-found.jpg";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.location__img} src={img} alt="not found..." />
            <p className={styles.location__p}>No match for {location.pathname}</p>
        </>
    );
};

export default NotFoundPage;

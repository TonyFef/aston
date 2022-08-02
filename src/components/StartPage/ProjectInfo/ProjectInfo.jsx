import styles from "./ProjectInfo.module.css";

const ProjectInfo = () => {
    return (
        <>
            <div className={styles.info}>
                <h1>NBA Teams & Players project</h1>
                <p>I'm glad to announce you my very new project related to NBA. </p>
                <p>
                    Here you can carry out search by NBA teams, discover new info about players (click his card!), and make your own favourites list!
                </p>
                <p>Hope you enjoy it:)</p>
                <p>But first, please log in or sign up</p>
                <p>Sincerely yours, tonyF</p>
            </div>
        </>
    );
};

export default ProjectInfo;

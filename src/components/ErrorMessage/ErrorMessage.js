import img from "./error.gif";

export const ErrorMessage = () => {
    return (
        <>
            <h2 style={{ textAlign: "center", margin: "0 auto", padding: "60px" }} >Golden State has won the league again. I'm sorry too.</h2>
            <img style={{ display: "block", width: "250px", height: "250px", objectFit: "contain", margin: "0 auto" }} src={img} alt="Error" />
        </>

    );
};

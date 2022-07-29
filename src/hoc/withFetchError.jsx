import { useState } from "react";

import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

export const withFetchError = (View) => {
    return (props) => {
        const [fetchError, setFetchError] = useState(false);
        return <>{fetchError ? <ErrorMessage /> : <View setFetchError={setFetchError} {...props} />}</>;
    };
};

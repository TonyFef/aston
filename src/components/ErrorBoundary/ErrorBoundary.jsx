import React from "react";

import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

import styles from "./ErrorBoundary.module.css";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                // <div className="error-boundary">
                    <ErrorMessage />
                // </div>
            );
        }

        return this.props.children;
    }
}

import React from "react";

const LoadingIndicator = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary" role="status" />
            <div className="mt-3">Загрузка...</div>
        </div>

    )
}

export default LoadingIndicator;
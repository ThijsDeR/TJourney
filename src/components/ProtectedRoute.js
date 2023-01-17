import { Navigate } from "react-router-dom";

function ProtectedRoute({user, children})  {
    if (user === null) return <Navigate to="/login" replace />;
    else if (user) return (
        <>
            {children}
        </>
    );
    
}

export default ProtectedRoute
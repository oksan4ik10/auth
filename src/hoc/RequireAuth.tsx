import { PropsWithChildren } from 'react';
import { useLocation, Navigate } from 'react-router-dom';


const RequireAuth = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const token = localStorage.getItem("tokenAuth");
    if (!token) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;

}

export { RequireAuth };
import { PropsWithChildren } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';


const RequireAuth = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const token = useAppSelector((store) => store.userReducer).token;
    if (!token) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;

}

export { RequireAuth };
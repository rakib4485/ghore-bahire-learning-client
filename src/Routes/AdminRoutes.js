import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(isAdminLoading){
        return <progress className='progress w-56'></progress>
    }

    if(isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default AdminRoutes;
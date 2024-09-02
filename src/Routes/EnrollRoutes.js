import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useJoin from '../hooks/useJoin';

const EnrollRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    // const [isTeacher, isTeacherLoading] = useTeacher(user?.email);
    const [isJoin, isJoinLoading] = useJoin(user?.email)
    const location = useLocation();

    if(isJoinLoading){
        return <progress className='progress w-56'></progress>
    }

    if(isJoin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default EnrollRoutes;
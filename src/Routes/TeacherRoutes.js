import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useTeacher from '../hooks/useTeacher';
import { Navigate, useLocation } from 'react-router-dom';

const TeacherRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const [isTeacher, isTeacherLoading] = useTeacher(user?.email);
    const location = useLocation();

    if(isTeacherLoading){
        return <progress className='progress w-56'></progress>
    }

    if(isTeacher){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default TeacherRoutes;
import { useEffect, useState } from 'react';

const useTeacher = (email) => {
    console.log(email)
    const [isTeacher, setIsTeacher] = useState(false);
    const [isTeacherLoading, setIsTeacherLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/users/teacher/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsTeacher(data.isTeacher);
            setIsTeacherLoading(false);
            console.log('doctor',data.isTeacher);
        })
    }, [email])
    return [isTeacher, isTeacherLoading]; 
};

export default useTeacher;

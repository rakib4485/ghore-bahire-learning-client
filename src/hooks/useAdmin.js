import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    console.log(email)
    const [isAdmin, setisAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setisAdmin(data.isAdmin);
            setisAdminLoading(false);
            console.log('doctor',data.isAdmin);
        })
    }, [email])
    return [isAdmin, isAdminLoading]; 
};

export default useAdmin;
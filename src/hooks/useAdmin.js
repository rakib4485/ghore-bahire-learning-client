import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    console.log(email)
    const [isAdmin, setisAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true);
    useEffect( () =>{
        fetch(`https://ghore-baire-learning-server.vercel.app/users/admin/${email}`)
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
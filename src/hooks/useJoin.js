import React, { useEffect, useState } from 'react';

const useJoin = (email, id) => {
    console.log(email)
    const [isJoin, setIsJoin] = useState(false);
    const [isJoinLoading, setIsJoinLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/user/isJoin/${id}?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setIsJoin(data.isJoin);
            setIsJoinLoading(false);
            console.log('doctor',data.isJoin);
        })
    }, [email,id])
    return [isJoin, isJoinLoading]; 
};

export default useJoin;
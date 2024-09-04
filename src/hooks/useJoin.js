import React, { useEffect, useState } from 'react';

const useJoin = (email, id) => {
    console.log(email)
    const [isJoin, setIsJoin] = useState(false);
    const [isJoinLoading, setIsJoinLoading] = useState(true);
    useEffect( () =>{
        fetch(`https://ghore-baire-learning-server.vercel.app/user/isJoin/${id}?email=${email}`)
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
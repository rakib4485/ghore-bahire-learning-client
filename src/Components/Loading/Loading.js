import React from 'react';

const Loading = () => {
    return (
        <div className='h-[90vh] w-[100vw] relative'>
            <div className='absolute left-[48%] top-[48%]'>
            <span className="loading loading-ring loading-lg "></span><br />
            <span>Loading....</span>
            </div>
        </div>
    );
};

export default Loading;
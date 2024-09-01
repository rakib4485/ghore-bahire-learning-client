import React from 'react';
import { Link } from 'react-router-dom';

const SingleWeek = ({ week, index }) => {
    const { weekName, title, contentDetails, contentLinks, videoLink } = week;
    console.log(week);
    return (
        <div className='bg-white rounded-md p-4 mt-10'>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200 flex items-center gap-10 mb-10'>
                <div className='bg-[#AAADB0] p-7 w-[200px] rounded-r-3xl'>
                <h2 className="text-3xl font-bold uppercase text-white ">Week - {index + 1}</h2>
                </div>
                <div className="flex justify-start">
                <h2 className="text-2xl font-bold text-center text-white">{title}</h2>
                </div>
            </div>
            <h2 className="text-xl font-bold">Lecture Contents</h2>
            <ul>
                {
                    contentDetails.map((content, idx) => 
                        <li key={idx} className='mt-3 text-[#727577]'>{content}</li>
                    )
                }
            </ul>
            <ul>
                {
                    contentLinks.map((content, idx) => 
                        <li key={idx} className='mt-3'><Link to={content.link} className='text-blue-400 font-semibold hover:underline'>{content.name}</Link></li>
                    )
                }
            </ul>
            <div className='my-10 border-t'>
                <h4 className="text-lg">Useful Video link:</h4>
                <iframe width="560" height="315" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mx-auto mt-5'></iframe>
            </div>
        </div>
    );
};

export default SingleWeek;
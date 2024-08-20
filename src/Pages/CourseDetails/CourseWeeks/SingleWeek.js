import React from 'react';
import { Link } from 'react-router-dom';

const SingleWeek = ({ week }) => {
    const { weekName, title, contentDetails, contentLinks, videoLink } = week;
    console.log(week);
    return (
        <div className='bg-white rounded-md p-4 mt-10'>
            <h2 className="text-lg font-bold">{weekName} {`(${title})`}</h2>
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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTeacher from '../../../hooks/useTeacher';

const SingleWeek = ({ id, week, index, }) => {
    const {user} = useContext(AuthContext)
    const {  title, contentDetails, contentLinks, videoLink } = week;
    console.log(week);

    const [isTeacher] = useTeacher(user?.email)
    return (
        <div className='bg-white rounded-md p-4 mt-10' id={`week${index+1}`}>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200 flex items-center gap-10 mb-10'>
                <div className='bg-[#AAADB0] p-4 md:p-7 w-[100px] md:w-[200px] rounded-r-3xl'>
                    <h2 className="text-xs md:text-3xl font-bold uppercase text-white ">Week - {index + 1}</h2>
                </div>
                <div className="flex justify-start">
                    <h2 className="md:text-2xl font-bold text-center text-white capitalize">{title}</h2>
                </div>
            </div>
            <h2 className="text-xl font-bold">{title === 'assignment' || title === 'presentation' ? 'Description' : 'Lecture Contents'}</h2>
            <ul>
                {
                    contentDetails &&
                    contentDetails?.map((content, idx) =>
                        <li key={idx} className='mt-3 text-[#727577]'>{content}</li>
                    )
                }
            </ul>
            <ul>
                {contentLinks &&
                    contentLinks?.map((content, idx) =>
                        <li key={idx} className='mt-3'><Link to={content.link} className='text-blue-400 font-semibold hover:underline'>{content.name}</Link></li>
                    )
                }
            </ul>
            {
                videoLink &&
                <div className='my-10 border-t'>
                    <h4 className="text-lg">Useful Video link:</h4>
                    <iframe height="315" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mx-auto mt-5 md:w-[560px]'></iframe>
                </div>
            }
            {
                (title === 'assignment' || title === 'presentation') && 
                <div className='my-5'>
                    <Link to={`/course-details/${id}/submit-task?week=${index+1}`} className='text-blue-400 font-semibold hover:underline'>Submit {title}</Link>
                </div>
            }

            {
                isTeacher && 
                (title === 'assignment' || title === 'presentation') &&
                <div className='my-5'>
                    <Link to={`/course-details/${id}/view-task?week=${index+1}`} className='text-blue-400 font-semibold hover:underline'>View {title}</Link>
                </div>
            }
        </div>
    );
};

export default SingleWeek;
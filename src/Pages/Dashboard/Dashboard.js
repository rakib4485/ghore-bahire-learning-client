import React, { useContext } from 'react';
import bg from '../../assets/course-bg.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const {data: courses = []} = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-added-course?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(courses)

    const getCardStyle = (index) => {
        switch (index % 3) {
          case 0: // For 1st, 4th, 7th, etc.
            return 'bg-[#794F22]';
          case 1: // For 2nd, 5th, 8th, etc.
            return 'bg-[#7C2F2F]';
          case 2: // For 3rd, 6th, 9th, etc.
            return 'bg-[#204E8A]';
          default:
            return '';
        }
      };
    return (
        <div className='px-[8%] bg-[#F1F4F5] min-h-screen'>
            <h2 className="text-2xl font-semibold py-10">COU E-Learing System Dashboard</h2>
            <div className='p-4 rounded-md bg-white'>
                <h4 className="text-xl font-semibold">Recently Joined Courses</h4>

                <div className='grid grid-cols-4 gap-6 mt-10 cursor-pointer'>
                    {
                        [...courses].reverse().map((course, index) => (
                            <Link to={`/course-details/${course._id}`}>
                            <div className='h-44 relative group overflow-hidden' style={{
                                background: `url(${bg})`, backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className={ `${getCardStyle(index)} text-white p-3 w-full absolute bottom-0 group-hover:scale-110 duration-500`}>
                                        <h5 className="text-lg font-semibold">{course.courseSemester}</h5>
                                        <h4 className="text-xl font-semibold">{course.courseName}</h4>
                                    </div>
                                <div className='items-center justify-center h-full w-full backdrop-brightness-50 bg-white/10 hidden group-hover:block duration-500'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                    <h4 className="text-xl font-bold text-white">View Course</h4>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
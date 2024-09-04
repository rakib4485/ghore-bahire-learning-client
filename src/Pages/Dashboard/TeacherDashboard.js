import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/course-bg.jpg'
import addCourse from '../../assets/add-course.png'
import useTeacher from '../../hooks/useTeacher';
import { AuthContext } from '../../contexts/AuthProvider';
import CourseAddModal from '../../Components/CourseAddModal/CourseAddModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';

const TeacherDashboard = () => {
    const { user } = useContext(AuthContext)
    const [isTeacher] = useTeacher(user?.email)
    console.log(isTeacher)
    const [openModal, setOpenModal] = useState(true);

    const {data: courses = [],isLoading,  refetch} = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://ghore-baire-learning-server.vercel.app/my-courses?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

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

      if(isLoading){
        return <Loading/>
      }

    return (
        <div className='px-[8%] bg-[#F1F4F5]'>
            <h2 className="text-2xl font-semibold py-10">COU E-Academic platform Teacher Dashboard</h2>
            <div className='p-4 rounded-md bg-white'>
                <h4 className="text-xl font-semibold">My Courses</h4>

                <div className='grid grid-cols-4 gap-6 mt-10 cursor-pointer'>
                    {
                        courses.map((course,index) => (
                            <Link to={`/course-edit/${course._id}`}>
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
            <div className='mt-20 bg-white rounded p-4'>
                <h4 className="text-xl font-bold">Add New Courses</h4>
                <div className='my-10'>
                    <label htmlFor="course-modal">
                        <div className='h-44 w-44 relative group overflow-hidden rounded-xl cursor-pointer mx-auto' style={{
                            background: `url(${addCourse})`, backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }}>
                            <div className='items-center justify-center h-full w-full backdrop-brightness-50 bg-white/30 hidden group-hover:block duration-500 rounded-xl'>
                                <div className='flex items-center justify-center h-full w-full'>
                                    <h4 className="text-xl font-bold text-white">Add Course</h4>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            {
                openModal && 
                <CourseAddModal setOpenModal={setOpenModal} refetch={refetch}/>
            }
        </div>
    );
};

export default TeacherDashboard;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrollmentPage = ({ course }) => {
    const {user} = useContext(AuthContext)

    const {data: singleUser = []} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://ghore-baire-learning-server.vercel.app/login-user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleJoin = event =>{
        event.preventDefault();

        const ekey = event.target.ekey.value;
        
        const student = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            id: singleUser?.id
        }

        if(ekey === course.coursePassword){
            fetch(`https://ghore-baire-learning-server.vercel.app/add-member/${course._id}`, {
                method: 'PUT',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(student)
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  toast.success("Enrollment successfully");
                  window.location.reload();
                })
        }else{
            toast.error("Invalid Enrollment Key");
        }
    }
    return (
        <div className='px-[10%] bg-[#F1F4F5]'>
            <div className='py-10'>
                <h1 className="text-[1.714rem] font-semibold">{course.courseName}</h1>
                <p className='my-3 text-blue-400 flex gap-4 flex-wrap'>
                    <Link className='hover:underline'>Dashboard</Link> <span className='text-[#727577]'>/</span>
                    <Link className='hover:underline'>Faculty of Science and Information Technology</Link> <span className='text-[#727577]'>/</span>
                    <Link className='hover:underline'>Computer Science and Engineering</Link> <span className='text-[#727577]'>/</span>
                    <Link className='hover:underline'>CSE Fall 2024</Link> <span className='text-[#727577]'>/</span>
                    <Link className='hover:underline'>Courses</Link> <span className='text-[#727577]'>/</span>
                    <Link className='hover:underline'>{course.courseCode}</Link>
                </p>
            </div>
            <div className='my-3 mb-28'>
                <h1 className='text-4xl font-semibold bg-gray-300 p-3'>Enrollment Options</h1>
                <div className='mt-5 p-3'>
                    <h2 className='text-[20px] font-semibold text-blue-500'>{course.courseName} ({course.courseCode})</h2>
                    <p className='mt-2'>Teacher: <span className='text-blue-500'>{course.teacherProfile.name}</span></p>
                    <div className='mt-5'>
                        <h2 className='text-[18px] font-semibold text-blue-500 bg-gray-300 p-3'>Self Enrollment (Student)</h2>
                        <form  className='mt-3 flex items-center gap-5' onSubmit={handleJoin}>
                            <p>Enrollment Key</p>
                            <input className='input input-bordered input-info' type="text" name='ekey'/>
                            <input type="submit" className='bg-blue-500 px-3 py-2 rounded-md text-white' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentPage;
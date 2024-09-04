import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const ViweTasks = () => {
    const course = useLoaderData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

//   // Extract the specific query parameter value
  const week = queryParams.get('week');
console.log(week)
    const {data: tasks = [], isLoading} = useQuery({
        queryKey: ['task', week],
        queryFn: async () => {
            const res = await fetch(`https://ghore-baire-learning-server.vercel.app/view-task/${course._id}/?week=${week-1}`);
            const data = await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='px-[10%] bg-[#F1F4F5] mb-10'>
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

            <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Task</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks.map((user, i) => (
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>
                                                        <img src={user.image} alt='' className='h-16 w-16 rounded-full'/>
                                                    </td>
                                                    <td>{user.id}</td>
                                                    
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.date}</td>
                                                    <td className='capitalize'><Link target='_blank' to={user.task} className='btn btn-xs btn-success'> View Task</Link></td>
                                                    {/* <td>{user?.role === 'teacher' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('delete'); setUserName(user.name)}} className='btn btn-xs text-white btn-error'>Delete Teacher</button>}</td> */}
                                                </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
        </div>
    );
};

export default ViweTasks;
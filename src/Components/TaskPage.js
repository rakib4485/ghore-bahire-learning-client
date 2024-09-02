import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const TaskPage = () => {
  const { user } = useContext(AuthContext)
  const course = useLoaderData()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  //   // Extract the specific query parameter value
  const week = queryParams.get('week');
  console.log(week);

  const { data: singleUser = [] } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/single-user?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  })

  console.log(singleUser)

  const handleTaskSubmit = event => {
    event.preventDefault()

    const link = event.target.task.value;
    const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log(formattedDate);

    const task = {
      email: user?.email,
      task: link,
      name: user?.displayName,
      image: singleUser.image,
      id: singleUser.id,
      date: formattedDate,
    }

    fetch(`http://localhost:5000/add-task/${course._id}?week=${week - 1}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Enrollment successfully");
          window.location.reload();
        }
      })

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
      <div className='bg-white mb-60 p-4'>
        <h1 className='text-4xl font-semibold'>Task Name</h1>
        <h3 className='mt-6 mb-3 text-xl'>Submit Drive URL below</h3>
        <form onSubmit={handleTaskSubmit}>

          <input type="text" placeholder="Paste the link here" className="input input-bordered input-accent w-full max-w-xs" name='task' />
          <input type="submit" className='bg-blue-500 px-4 py-3 rounded text-white ml-4' value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default TaskPage;
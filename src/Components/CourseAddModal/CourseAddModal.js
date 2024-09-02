import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const CourseAddModal = ({setOpenModal, refetch}) => {
  const {user} = useContext(AuthContext)
  const handleCourseModal = event => {
    event.preventDefault();

    const form = event.target;
    const courseName = form.name.value;
    const coursePassword = form.password.value;
    const courseCode = form.courseCode.value;
    const courseSemester = form.courseSemester.value;
    const courseType = form.courseType.value;
    const teacherProfile = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    }

    const course = {
      courseName,
      coursePassword,
      courseCode,
      courseSemester,
      courseType,
      teacherProfile,
      courseStudents: [
        {
          name: user?.displayName,
          email: user?.email
        }
      ],
      weeks: []
    }

    console.log(course);

    fetch('http://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success("Course Added successfully");
        setOpenModal(false)
        refetch();
      })

  }
  return (
    <div>
      <input type="checkbox" id="course-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="course-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Enter The basic information of the course</h3>
          <p></p>
          <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleCourseModal}>
            {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
            <div className="mr-6">

            </div>
            <input name='name' type="text" placeholder="Course Name Name" className="input input-bordered w-full" />
            <input name='password' type="text" placeholder="Course Password" className="input input-bordered w-full" />
            <input name='courseCode' type="text" placeholder="Course Code" className="input input-bordered w-full" />
            <select name="courseType" id="" className="select select-bordered w-full">
              <option value="theory">Theory</option>
              <option value="lab">Lab</option>
            </select>
            <select name="courseSemester" id="" className="select select-bordered w-full">
              <option value="Fall-2024">Fall-2024</option>
              <option value="Spring-2024">Spring-2024</option>
              <option value="Fall-2023">Fall-2023</option>
              <option value="Spring-2023">Spring-2023</option>
              <option value="Fall-2022">Fall-2022</option>
              <option value="Spring-2022">Spring-2022</option>
            </select>
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseAddModal;
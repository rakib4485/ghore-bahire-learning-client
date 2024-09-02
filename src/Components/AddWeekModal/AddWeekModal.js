import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AddWeekModal = ({course, setOpenModal}) => {
    const {user} = useContext(AuthContext)
  const handleCourseModal = event => {
    event.preventDefault();

    const form = event.target;
    const title = form.name.value;
    const contentDetails = form.description.value;
    const contentLink = form.content.value;
    const video = form.video.value;

    const week = {
        title,
        contentDetails: [contentDetails],
        contentLinks: [{
            name: 'Lecture Content',
            link: contentLink
        }],
        videoLink: video
    }

    console.log(week);

    fetch(`http://localhost:5000/add-weeks/${course._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(week)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOpenModal(false);
        toast.success("week added successfully");
        window.location.reload()
        
      })

  }
    return (
        <div>
      <input type="checkbox" id="add-week-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="add-week-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Enter The basic information of the course</h3>
          <p></p>
          <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleCourseModal}>
            {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
            <div className="mr-6">

            </div>
            <p className='text-lg font-bold'>Week Name: </p>
            <input name='name' type="text" placeholder="week Name...." className="input input-bordered w-full" />
            <p className='text-lg font-bold'>Content Description: </p>
            <input name='description' type="text" placeholder="Content Description......." className="input input-bordered w-full" />
            <p className='text-lg font-bold'>Content Link: </p>
            <input name='content' type="text" placeholder="Google Drive Link..." className="input input-bordered w-full" />
            <p className='text-lg font-bold'>Video Link (If any): </p>
            <input name='video' type="text" placeholder="Youtube Link" className="input input-bordered w-full" />
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddWeekModal;
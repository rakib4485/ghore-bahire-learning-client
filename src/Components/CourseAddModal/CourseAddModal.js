import React from 'react';

const CourseAddModal = () => {
    return (
        <div>
      <input type="checkbox" id="course-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="course-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold"></h3>
          <p></p>
          <form className='grid grid-cols-1 gap-3 mt-10'>
            {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
            <div className="mr-6">
              
            </div>
            <select name="type" className="select select-bordered w-full" >
              <option disabled selected>Select Appointment Type</option>
              <option value='online'>Online</option>
              <option value='offline'>Offline</option>
            </select>

            {/* <select name='slot' className="select select-bordered w-full">
              {
                !appointmentType && 
                <option disabled selected>Select Appointment Type</option>
              }
              {
                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
              }
            </select> */}

            <input name='name' type="text"  disabled placeholder="Full Name" className="input input-bordered w-full" />
            <input name='email' type="email"  disabled placeholder="Email" className="input input-bordered w-full" />
            <input name='phone' type="text"  placeholder="Phone Number" className="input input-bordered w-full" />
            <p className='text-red-500'> Note: You must have to complete the payment for confirm your appointment</p>
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    );
};

export default CourseAddModal;
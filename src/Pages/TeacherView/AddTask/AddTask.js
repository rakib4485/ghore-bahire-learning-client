import React from 'react';
import { Link } from 'react-router-dom';

const AddTask = () => {
    return (
        <div className='p-6 bg-slate-300'>
            <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Task</h4>
            <div className='p-6'>
                <label htmlFor='add-task-modal' className='cursor-pointer btn btn-primary'>Add Task</label>
            </div>
        </div>
    );
};

export default AddTask;
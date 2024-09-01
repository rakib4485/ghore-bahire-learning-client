import React from 'react';
import { Link } from 'react-router-dom';
import AddWeekModal from '../../../Components/AddWeekModal/AddWeekModal';

const AddWeek = () => {
    return (
        <div className='p-6 bg-slate-300'>
            <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Weeks</h4>
            <div className='p-6'>
                <label htmlFor='add-week-modal'>
                    <span className='cursor-pointer'>Add Weeks</span>
                </label>
            </div>

        </div>
    );
};

export default AddWeek;
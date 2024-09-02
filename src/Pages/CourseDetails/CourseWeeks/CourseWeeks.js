import React from 'react';
import SingleWeek from './SingleWeek';

const CourseWeeks = ({course}) => {
    return (
        <div>
            <div>
                {
                    course.weeks.map(( week, idx) => <SingleWeek key={idx} week={week} index={idx} id={course._id}/>)
                }
            </div>
        </div>
    );
};

export default CourseWeeks;
import React from 'react';
import SingleWeek from '../../CourseDetails/CourseWeeks/SingleWeek';

const TeacherWeek = ({couese}) => {
    return (
        <div>
            <div>
                {
                    couese.weeks.map(( week, idx) => <SingleWeek key={idx} week={week} index={idx} id={couese._id}/>)
                }
            </div>
        </div>
    );
};

export default TeacherWeek;
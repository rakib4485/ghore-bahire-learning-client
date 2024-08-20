import React from 'react';
import SingleWeek from './SingleWeek';

const CourseWeeks = () => {
    const weeks = [
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
        {
            weekName: "Week - 1",
            title: "Introduction to Digital Image Processing",
            contentDetails: [
                "In this lesson we will discuss about basic concept of digital image, sampling and quantization, typical image processing sequence and the application of image processing."
            ],
            contentLinks: [
                {
                    name: "Lecture Content",
                    link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/2443962/mod_label/intro/1.%20Introduction%20%28Ch%201%29.ppt"
                }
            ],
            videoLink: "https://www.youtube.com/embed/hWSVHt4BJWE?si=LHZftDv2oeYl0LuF"
        },
    ]
    return (
        <div>
            <div>
                {
                    weeks.map(( week, idx) => <SingleWeek key={idx} week={week}/>)
                }
            </div>
        </div>
    );
};

export default CourseWeeks;
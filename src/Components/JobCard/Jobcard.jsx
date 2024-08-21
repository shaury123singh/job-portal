// import dayjs from "dayjs";
// const Jobcard = (props) => {
//     // const skills = ["javascript", "React","NodeJs","Tailwind"];
//     const date1 = dayjs(Date.now());
//     const diffInDays = date1.diff(props.postedOn,'day')
//   return (
//     <div className="mx-40 mb-4">
//         <div className="flex justify-between items-center px-6 py-4 rounded-md bg-slate-200 border-black shadow-2xl  hover:border-blue-500 hover:translate-y-1 hover:scale-105">
//             <div className="flex flex-col items-start gap-3">
//                 <h1 className="text-lg font-semibold">{props.title}-{props.company}</h1>
//                 <p>{props.jobtype} &#x2022; {props.experience} &#x2022; {props.location}</p>
//                 <div className="flex items-center gap-2">
//                     {props.skills.map((skill)=>(
//                     <p key={skill} className="text-gray-600 py-0  rounded-md border border-black p-2"> {skill}</p>
//                     ))}
//                 </div>
//             </div>
//             <div className="flex gap-4 justify-center items-center">
//                 <p className="text-gray-600">{diffInDays > 1? `${diffInDays} days ago` :  `${diffInDays} day ago`} </p>
//                 <a href={props.joblink} target="_blank" rel="noopener noreferrer">
//                 <button className="bg-blue-300 p-2 rounded-md shadow-xl hover:bg-blue ">Apply</button>
//                 </a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Jobcard

// import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

// const Jobcard = (props) => {
//     const date1 = dayjs(Date.now());
//     const diffInDays = date1.diff(props.postedOn, 'day');

//     return (
//         <div className="mx-40 mb-4">
//             <div className="flex justify-between items-center px-6 py-4 rounded-md bg-slate-200 border-black shadow-2xl hover:border-blue-500 hover:translate-y-1 hover:scale-105">
//                 <div className="flex flex-col items-start gap-3">
//                     <h1 className="text-lg font-semibold">{props.title}-{props.company}</h1>
//                     <p>{props.jobtype} &#x2022; {props.experience} &#x2022; {props.location}</p>
//                    <div className=''>
//                     <div className="flex items-center gap-2 bg-slate-500">
//                         {props.skills.map((skill) => (
//                             <p key={skill} className="text-gray-600 py-0 rounded-md border border-black p-2">{skill}</p>
//                         ))}
//                     </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-4 justify-center items-center">
//                     <p className="text-gray-600">{diffInDays > 1 ? `${diffInDays} days ago` : `${diffInDays} day ago`}</p>
//                     <a href={props.joblink} target="_blank" rel="noopener noreferrer">
//                         <button className="bg-blue-300 p-2 rounded-md shadow-xl hover:bg-blue">Apply</button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// Jobcard.propTypes = {
//     title: PropTypes.string.isRequired,
//     company: PropTypes.string.isRequired,
//     jobtype: PropTypes.string.isRequired,
//     experience: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     skills: PropTypes.arrayOf(PropTypes.string).isRequired,
//     postedOn: PropTypes.instanceOf(Date).isRequired,
//     joblink: PropTypes.string.isRequired,
//     // Add other prop types as needed
// };

// export default Jobcard;


import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Jobcard = (props) => {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 rounded-md bg-slate-200 border-black shadow-2xl hover:border-blue-500 hover:translate-y-1 hover:scale-105">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-lg font-semibold">{props.title}-{props.company}</h1>
                    <p>{props.jobtype} &#x2022; {props.experience} &#x2022; {props.location}</p>
                    <div className='flex flex-wrap gap-2  py-1 px-2 rounded-md'>
                        {props.skills.map((skill) => (
                            <p key={skill} className="text-gray-600 py-1 rounded-md border border-black px-2">{skill}</p>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center mt-2 sm:mt-0">
                    <p className="text-gray-600">{diffInDays > 1 ? `${diffInDays} days ago` : `${diffInDays} day ago`}</p>
                    <a href={props.joblink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-300 p-2 rounded-md shadow-xl hover:bg-blue">Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

Jobcard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    jobtype: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    postedOn: PropTypes.instanceOf(Date).isRequired,
    joblink: PropTypes.string.isRequired,
    // Add other prop types as needed
};

export default Jobcard;

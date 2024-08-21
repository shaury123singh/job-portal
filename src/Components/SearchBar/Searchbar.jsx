import { useState } from "react";

const Searchbar = (props) => {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        jobtype: "",
        location: "",
        experience: "",
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    console.log(jobCriteria);
    const search = async () => {
        try {
            await props.fetchJobsCustom(jobCriteria);
        } catch (error) {
            console.error('Error fetching custom jobs:', error);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:my-10 sm:px-10">
            <select onChange={handleChange} name="title" value={jobCriteria.title} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled selected hidden>Job Role</option>
                <option value="ios Developer">iOS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="React Developer">React Developer</option>
                <option value="Research Intern">Research Intern</option>

            </select>
            <select onChange={handleChange} name="jobtype" value={jobCriteria.jobtype} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled  hidden>jobtype</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled  hidden>location</option>
                <option value="InOffice">InOffice</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled  hidden>experience</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Fresher">Fresher</option>

            </select>
            <button onClick={search} className="w-full sm:w-64 bg-blue-600 text-white font-bold py-3 rounded-md hover:to-blue-900 hover:translate-y-1 hover:scale-95">Search</button>
        </div>
    );
};

export default Searchbar;

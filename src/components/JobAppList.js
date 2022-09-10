import React from "react";
import JobApp from "./JobApp";

function JobAppList({ jobApps, setJobApps }) {
    return (
        <ul className="jobAppList">
            {jobApps.map(jobApp => (
                <JobApp key={jobApp.id} jobApp={jobApp} jobApps={jobApps} setJobApps={setJobApps} />
            ))}
        </ul>
    )
}

export default JobAppList;

import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import jobs from '../../data/jobs/jobs.json'
import ExternalLink from 'components/ExternalLink'

function parseHeading(cat) {
    let secondSpaceIdx = -1;
    for (let i = 0; i < cat.length; i++) {
        if (cat[i] === ' ' && cat.indexOf(' ') !== i) {
            secondSpaceIdx = i;
            break;
        }
    }

    return (
        <th>
            {cat.slice(0, secondSpaceIdx)}
            <br />
            {cat.slice(secondSpaceIdx + 1)}
        </th>
    )

}

const JobsModule = ({ dev, coms, ops }) => (
    <div className={clsx('container', styles.jobsContainer)}>
        <div className={styles.categoryContainer}>
            <table className={styles.jobsTable}>
            <thead>
                <tr>
                    {dev && parseHeading(dev)}
                </tr>
            </thead>
            <tbody>
                {jobs['Development & Engineering'].map((job, i) => (
                    <tr key={`de${i}`}>
                        <td>
                        <ExternalLink link={job.link} text={job.title} /> <br />
                        {job.location}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className={styles.comsAndOps}>
        <table className={styles.jobsTable}>
            <thead>
                <tr>
                     {coms && parseHeading(coms)}
                </tr>
            </thead>
            <tbody>
            {jobs['Communications & Marketing'].map((job, i) => (
                <tr key={`cm${i}`}>
                    <td>
                    <ExternalLink link={job.link} text={job.title} /> <br />
                    {job.location}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <table className={styles.jobsTable}>
        <thead>
                <tr>
                    <th>{ops} <div className={styles.operationsSpace}><br /></div></th>
                </tr>
            </thead>
            <tbody>
            {jobs['Operations'].map((job, i) => (
                <tr key={`o${i}`}>
                    <td>
                    <ExternalLink link={job.link} text={job.title} /> <br />
                    {job.location}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
);

export default JobsModule;
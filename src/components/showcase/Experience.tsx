import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Web Mobi 360</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://webmobi360.com/"
                        >
                            <h4>www.webmobi360.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Data Analyst & Research Intern</h3>
                        <b>
                            <p>3 Months Internship – 2025</p>
                        </b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Contributed as a Data Analyst and Research Intern, assisting in business research and data insight generation. Developed dashboards, charts, and reports for internal use using tools like Excel, Power BI, and SQL.
                </p>
                <br />
                <ul>
                    <li>
                        <p>Analyzed datasets using Excel and Google Sheets to derive meaningful patterns and trends.</p>
                    </li>
                    <li>
                        <p>Assisted in web research to support digital product strategy and user behavior tracking.</p>
                    </li>
                    <li>
                        <p>Built interactive dashboards and summary reports for performance monitoring using Power BI.</p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hackathons</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Hackhive & Prayatna</h3>
                        <b>
                            <p>Participated in 2024</p>
                        </b>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <p>
                    Collaborated in hackathons as part of team <b>TechNerds</b> to develop innovative solutions under tight deadlines and real-world problem themes.
                </p>
                <br />
                <ul>
                   
                    <li>
                        <p>Contributed to UI/UX design and frontend logic with HTML, CSS, and JavaScript.</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

const styles: any = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textBlock: {
        paddingTop: '1rem',
    },
};

export default Experience;


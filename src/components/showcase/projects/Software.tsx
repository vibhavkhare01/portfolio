import React from 'react';

export interface SoftwareProps {}

const Software: React.FC<SoftwareProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Software Projects</h1>
            <h3>Development & Programming</h3>
            <br />
            <div className="text-block">
                <p>
                    Here are some of my software development projects that showcase my skills 
                    in various programming languages and technologies. Each project demonstrates 
                    different aspects of my technical abilities and problem-solving approach.
                </p>
                <br />
                <p>
                    I enjoy working on projects that combine creativity with technical challenges, 
                    whether it's building user interfaces, data analysis tools, or interactive applications.
                </p>
            </div>

            <div style={styles.projectSection}>
                <h2>VibhavKhare-OS Portfolio</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Windows 98-Style Portfolio Website</h3>
                        <p>
                            A retro-styled portfolio website that mimics the Windows 98 interface, 
                            built with React and TypeScript. Features include multi-window management, 
                            custom IP address display, and authentic Windows 98 aesthetics.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>React</span>
                            <span style={styles.techTag}>TypeScript</span>
                            <span style={styles.techTag}>CSS3</span>
                            <span style={styles.techTag}>HTML5</span>
                        </div>
                        <div style={styles.projectLinks}>
                            <a href="https://github.com/VibhavKhare/vibhavkhare-os" target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Data Analysis Dashboard</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Business Analytics Platform</h3>
                        <p>
                            An interactive dashboard for business analytics and reporting, 
                            featuring data visualization, real-time metrics, and customizable reports. 
                            Built during my internship at WebMobi360.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Power BI</span>
                            <span style={styles.techTag}>Excel</span>
                            <span style={styles.techTag}>SQL</span>
                            <span style={styles.techTag}>Python</span>
                        </div>
                        <div style={styles.projectStatus}>
                            <span style={styles.statusTag}>In Progress</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Web Development Projects</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Responsive Web Applications</h3>
                        <p>
                            Various web development projects including responsive websites, 
                            interactive forms, and dynamic content management systems. 
                            Focus on clean code, user experience, and modern web standards.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>HTML</span>
                            <span style={styles.techTag}>CSS</span>
                            <span style={styles.techTag}>JavaScript</span>
                            <span style={styles.techTag}>React.js</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Hackathon Projects</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>TechNerds Team Projects</h3>
                        <p>
                            Collaborative projects developed during hackathons like HackHive and Prayatna. 
                            Worked on innovative solutions under tight deadlines, focusing on 
                            UI/UX design and frontend development.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Team Collaboration</span>
                            <span style={styles.techTag}>UI/UX Design</span>
                            <span style={styles.techTag}>Frontend Development</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.footer}>
                <p>
                    I'm always working on new projects and learning new technologies. 
                    Feel free to check out my GitHub for more code samples and ongoing projects!
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectSection: {
        marginBottom: 40,
    },
    projectCard: {
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef',
        borderRadius: 8,
        padding: 20,
        marginTop: 15,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    projectInfo: {
        flexDirection: 'column',
    },
    techStack: {
        marginTop: 15,
        flexWrap: 'wrap',
        gap: 8,
    },
    techTag: {
        backgroundColor: '#3e9697',
        color: 'white',
        padding: '4px 12px',
        borderRadius: 16,
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
    projectLinks: {
        marginTop: 15,
    },
    projectLink: {
        color: '#3e9697',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'MSSerif',
    },
    projectStatus: {
        marginTop: 15,
    },
    statusTag: {
        backgroundColor: '#ffc107',
        color: '#212529',
        padding: '4px 12px',
        borderRadius: 16,
        fontSize: 12,
        fontFamily: 'MSSerif',
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 40,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#6c757d',
    },
};

export default Software;

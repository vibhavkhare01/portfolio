import React from 'react';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>Welcome to VibhavKhare-OS</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer and recently worked as an data analyst intern at WebMobi360 from Feb 2025 to April 2025.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I really hope you enjoy exploring it as much as I enjoyed building it. If you have any questions or comments, feel free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:vibhavkhare6@gmail.com">
                        vibhavkhare6@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things worked. I completed my schooling from R. R. I. C Inter College, Patti, Pratapgarh (UP) and passed 12th in 2019. Currently, I am pursuing my B.Tech in Computer Science and Engineering (2022–2026) at Malwa Institute of Science & Technology, Indore.
                </p>
                <br />
               

<p>
                I started programming more seriously in 12th standard,
                initially learning how to scrape and interact with websites.
                I went on to do a ton of passion projects, many of them with
                my closest friends,
                {' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/shivam-patel-4666a6260"
                >
                    Shivam Patel
                </a>{' '}and{' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/rishitiwaridev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                    Rishi Tiwari
                </a>
                . We worked on many projects together including games, web apps, and bots.
            </p>
            <br />
            <p>
                In 2024, I attended hackathons like HackHive and Prayatna with my team TechNerds. These events helped me grow as a collaborative developer and problem solver.
            </p>
            <br />
            <div style={{}}>
                <div
                    style={{
                        flex: 1,
                        textAlign: 'justify',
                        alignSelf: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h3>My Hobbies</h3>
                    <br />
                    <p>
                        Beyond software, I have a lot of hobbies that I
                        enjoy doing in my free time. I enjoy playing Cricket, Chess, Video Games, and working out. I also love traveling and spending time in nature to refresh myself.
                    </p>
                    <br />
                    <p>
                        I currently live in Indore, Madhya Pradesh (452015), but my hometown is Patti, Pratapgarh, Uttar Pradesh (230135). 
                    </p>
                    <br />
                    <p>
                        My technical skill set includes knowledge of:
                        C, Python, HTML, CSS, JavaScript, SQL, Google Sheets, Excel, Power BI, and Figma.
                    </p>
                </div>
                <div style={styles.verticalImage}>
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Me, July 2025
                        </sub>
                    </p>
                </div>
            </div>
            <br />
            <br />
            <p>
                Thanks for reading about me! I hope that you enjoy exploring
                the rest of my portfolio website and everything it has to
                offer. If you find the easter egg make sure to let me know
                on X (Twitter){' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://x.com/Vibhavkhare03?t=9Mi8rY1P3csDyA6P-neFcw&s=09"
                >
                    @Vibhavkhare03
                </a>{' '}.
                Good luck and have fun!
            </p>
            <br />
            <p>
                If you have any questions or comments I would love to hear
                them. You can reach me through the{' '}
                <Link to="/contact">contact page</Link> or shoot me an email
                at{' '}
                                    <a href="mailto:vibhavkhare6@gmail.com">
                        vibhavkhare6@gmail.com
                    </a>
            </p>
        </div>
    </div>
);

};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '8px',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
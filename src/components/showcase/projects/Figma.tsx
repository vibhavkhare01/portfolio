import React from 'react';

export interface FigmaProps {}

const Figma: React.FC<FigmaProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Figma Designs</h1>
            <h3>UI/UX Projects</h3>
            <br />
            <div className="text-block">
                <p>
                    Here are some of my UI/UX design projects created using Figma. 
                    I focus on creating intuitive, user-friendly interfaces that combine 
                    aesthetics with functionality.
                </p>
                <br />
                <p>
                    My design approach emphasizes user experience, accessibility, and 
                    modern design principles while maintaining consistency and brand identity.
                </p>
            </div>

            <div style={styles.projectSection}>
                <h2>Portfolio Website Design</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>VibhavKhare-OS Interface Design</h3>
                        <p>
                            Complete UI/UX design for the Windows 98-style portfolio website. 
                            Includes desktop layout, window management system, start menu design, 
                            and responsive components that maintain the retro aesthetic.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Figma</span>
                            <span style={styles.techTag}>UI Design</span>
                            <span style={styles.techTag}>UX Design</span>
                            <span style={styles.techTag}>Prototyping</span>
                        </div>
                        <div style={styles.designFeatures}>
                            <h4>Design Features:</h4>
                            <ul style={styles.featureList}>
                                <li>Authentic Windows 98 color scheme and typography</li>
                                <li>Interactive window management system</li>
                                <li>Responsive desktop layout</li>
                                <li>Custom icon set and visual elements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Data Dashboard Design</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Business Analytics Interface</h3>
                        <p>
                            Comprehensive dashboard design for data visualization and business analytics. 
                            Focuses on clear data presentation, intuitive navigation, and actionable insights.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Figma</span>
                            <span style={styles.techTag}>Dashboard Design</span>
                            <span style={styles.techTag}>Data Visualization</span>
                            <span style={styles.techTag}>User Research</span>
                        </div>
                        <div style={styles.designFeatures}>
                            <h4>Key Components:</h4>
                            <ul style={styles.featureList}>
                                <li>Interactive charts and graphs</li>
                                <li>Real-time data display widgets</li>
                                <li>Customizable dashboard layouts</li>
                                <li>Mobile-responsive design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Mobile App Design</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Responsive Mobile Applications</h3>
                        <p>
                            Mobile-first design approach for various applications, focusing on 
                            touch-friendly interfaces, gesture navigation, and optimal user experience 
                            across different screen sizes.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Figma</span>
                            <span style={styles.techTag}>Mobile Design</span>
                            <span style={styles.techTag}>Responsive Design</span>
                            <span style={styles.techTag}>User Testing</span>
                        </div>
                        <div style={styles.designFeatures}>
                            <h4>Design Principles:</h4>
                            <ul style={styles.featureList}>
                                <li>Touch-friendly interface elements</li>
                                <li>Consistent design language</li>
                                <li>Accessibility considerations</li>
                                <li>Performance-optimized layouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.projectSection}>
                <h2>Web Application Design</h2>
                <div style={styles.projectCard}>
                    <div style={styles.projectInfo}>
                        <h3>Modern Web Interfaces</h3>
                        <p>
                            Contemporary web application designs that balance aesthetics with functionality. 
                            Emphasis on clean layouts, intuitive navigation, and engaging user interactions.
                        </p>
                        <div style={styles.techStack}>
                            <span style={styles.techTag}>Figma</span>
                            <span style={styles.techTag}>Web Design</span>
                            <span style={styles.techTag}>Component Design</span>
                            <span style={styles.techTag}>Design Systems</span>
                        </div>
                        <div style={styles.designFeatures}>
                            <h4>Design Elements:</h4>
                            <ul style={styles.featureList}>
                                <li>Component-based design system</li>
                                <li>Consistent color palette and typography</li>
                                <li>Interactive elements and micro-interactions</li>
                                <li>Cross-browser compatibility considerations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.footer}>
                <p>
                    I'm passionate about creating designs that not only look great but also 
                    provide excellent user experiences. Feel free to reach out for collaboration 
                    on design projects!
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
    designFeatures: {
        marginTop: 20,
    },
    featureList: {
        marginTop: 10,
        paddingLeft: 20,
    },
    featureListItem: {
        marginBottom: 8,
        fontSize: 14,
        fontFamily: 'MSSerif',
    },
    footer: {
        marginTop: 40,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#6c757d',
    },
};

export default Figma; 
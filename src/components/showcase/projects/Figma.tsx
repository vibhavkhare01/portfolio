import React from 'react';

export interface FigmaProjectsProps {}

const FigmaProjects: React.FC<FigmaProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Figma Designs</h1>
            <h3>& UI/UX Projects</h3>
            <br />
            <p>
                Welcome to my UI/UX design showcase! Here you'll find my Figma designs
                and user interface projects. I'm passionate about creating intuitive,
                beautiful, and functional user experiences.
            </p>
            <br />
            <div style={styles.projectsContainer}>
                <div style={styles.projectCard}>
                    <h3 style={styles.projectTitle}>Portfolio Website Design</h3>
                    <p style={styles.projectDescription}>
                        Modern portfolio website design with clean aesthetics and smooth interactions.
                        Focused on user experience and visual hierarchy.
                    </p>
                    <div style={styles.projectTags}>
                        <span style={styles.tag}>Figma</span>
                        <span style={styles.tag}>UI/UX</span>
                        <span style={styles.tag}>Web Design</span>
                    </div>
                </div>

                <div style={styles.projectCard}>
                    <h3 style={styles.projectTitle}>Mobile App Interface</h3>
                    <p style={styles.projectDescription}>
                        Mobile application interface design with intuitive navigation
                        and modern design patterns.
                    </p>
                    <div style={styles.projectTags}>
                        <span style={styles.tag}>Figma</span>
                        <span style={styles.tag}>Mobile</span>
                        <span style={styles.tag}>App Design</span>
                    </div>
                </div>

                <div style={styles.projectCard}>
                    <h3 style={styles.projectTitle}>Dashboard Design</h3>
                    <p style={styles.projectDescription}>
                        Analytics dashboard with data visualization and user-friendly
                        interface for complex information display.
                    </p>
                    <div style={styles.projectTags}>
                        <span style={styles.tag}>Figma</span>
                        <span style={styles.tag}>Dashboard</span>
                        <span style={styles.tag}>Analytics</span>
                    </div>
                </div>

                <div style={styles.projectCard}>
                    <h3 style={styles.projectTitle}>E-commerce UI</h3>
                    <p style={styles.projectDescription}>
                        Online shopping interface with product showcases, cart management,
                        and seamless checkout experience.
                    </p>
                    <div style={styles.projectTags}>
                        <span style={styles.tag}>Figma</span>
                        <span style={styles.tag}>E-commerce</span>
                        <span style={styles.tag}>Shopping</span>
                    </div>
                </div>
            </div>

            <div style={styles.skillsSection}>
                <h2>Design Skills</h2>
                <div style={styles.skillsGrid}>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>🎨</span>
                        <span style={styles.skillName}>Figma</span>
                    </div>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>📱</span>
                        <span style={styles.skillName}>Mobile Design</span>
                    </div>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>💻</span>
                        <span style={styles.skillName}>Web Design</span>
                    </div>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>🎯</span>
                        <span style={styles.skillName}>UX Research</span>
                    </div>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>📊</span>
                        <span style={styles.skillName}>Prototyping</span>
                    </div>
                    <div style={styles.skillItem}>
                        <span style={styles.skillIcon}>🎭</span>
                        <span style={styles.skillName}>Visual Design</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 25,
        marginBottom: 40
    },
    projectCard: {
        backgroundColor: '#ffffff',
        border: '2px solid #e0e0e0',
        borderRadius: 12,
        padding: 25,
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    projectTitle: {
        color: '#2C3E50',
        marginBottom: 12,
        fontSize: 20
    },
    projectDescription: {
        color: '#7f8c8d',
        lineHeight: 1.6,
        marginBottom: 15
    },
    projectTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
    },
    tag: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '4px 12px',
        borderRadius: 15,
        fontSize: 12,
        fontWeight: 'bold'
    },
    skillsSection: {
        marginTop: 40
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 20,
        marginTop: 20
    },
    skillItem: {
        display: 'flex',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        border: '1px solid #e0e0e0'
    },
    skillIcon: {
        fontSize: 24,
        marginRight: 12
    },
    skillName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2C3E50'
    }
};

export default FigmaProjects; 
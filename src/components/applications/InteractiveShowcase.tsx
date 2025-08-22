import React, { useState } from 'react';
import Window from '../os/Window';
import { motion } from 'framer-motion';

export interface InteractiveShowcaseProps extends WindowAppProps {}

const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = (props) => {
    const [activeSection, setActiveSection] = useState('projects');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const sections = [
        {
            id: 'projects',
            name: 'Projects',
            icon: '🚀',
            color: '#3498db',
            items: [
                { 
                    name: 'Background Color Changer', 
                    description: 'Interactive color changer built with HTML, CSS, JavaScript',
                    icon: '🎨',
                    demoLink: 'https://colour-changer-dusky.vercel.app',
                    gitLink: 'https://github.com/VibhavKhare/color-changer'
                }
            ]
        },
        {
            id: 'skills',
            name: 'Skills',
            icon: '⚡',
            color: '#e74c3c',
            items: [
                { name: 'Language', description: 'Python, JavaScript, C ', icon: '⚡' },
               
                { name: 'Web Development', description: 'HTML, CSS, JavaScript, React.js', icon: '💻' },
                { name: 'Data Analysis', description: 'SQL, Excel, Power BI, Tableau, Google Sheets ,Pandas, ', icon: '📊' },
                { name: 'UI/UX Design', description: 'Figma, Canva,', icon: '🎨' },
                { name: 'Git & Version Control', description: 'Git, GitHub, GitLab', icon: '🔄' },
               
            ]
        },
        {
            id: 'experience',
            name: 'Experience',
            icon: '💼',
            color: '#27ae60',
            items: [
                { name: 'Student Developer', description: 'Learning & Building Projects', icon: '👨‍🎓' },
                { name: 'Freelance Work', description: 'Small projects and collaborations', icon: '💡' },
                
                { name: 'Personal Projects', description: 'Portfolio and learning projects', icon: '🔨' }
            ]
        }
    ];

    const currentSection = sections.find(s => s.id === activeSection);

    return (
        <Window
            top={30}
            left={30}
            width={1200}
            height={800}
            windowTitle="Interactive Portfolio Showcase"
            windowBarIcon="windowExplorerIcon"
            windowBarColor="#2C3E50"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'Modern Interactive Portfolio'}
        >
            <div style={styles.container}>
                <div style={styles.header}>
                    <motion.h1
                        style={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Interactive Portfolio
                    </motion.h1>
                    <p style={styles.subtitle}>Explore my work and skills through an interactive experience</p>
                </div>

                <div style={styles.content}>
                    <div style={styles.sidebar}>
                        {sections.map((section) => (
                            <motion.div
                                key={section.id}
                                style={{
                                    ...styles.sectionOption,
                                    backgroundColor: activeSection === section.id ? section.color : '#f8f9fa',
                                    color: activeSection === section.id ? 'white' : '#2C3E50'
                                }}
                                onClick={() => setActiveSection(section.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span style={styles.sectionIcon}>{section.icon}</span>
                                <span style={styles.sectionName}>{section.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div style={styles.mainContent}>
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={styles.itemsGrid}
                        >
                            {currentSection?.items.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    style={{
                                        ...styles.itemCard,
                                        borderColor: hoveredItem === item.name ? currentSection.color : '#e0e0e0'
                                    }}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div style={styles.itemIcon}>{item.icon}</div>
                                    <div style={styles.itemContent}>
                                        <h3 style={styles.itemTitle}>{item.name}</h3>
                                        <p style={styles.itemDescription}>{item.description}</p>
                                        {(item as any).demoLink && (
                                            <div style={styles.projectLinks}>
                                                <a 
                                                    href={(item as any).demoLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={styles.projectLink}
                                                >
                                                    🌐 Live Demo
                                                </a>
                                                <a 
                                                    href={(item as any).gitLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={styles.projectLink}
                                                >
                                                    📁 GitHub Code
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <motion.div
                                        style={{
                                            ...styles.progressBar,
                                            backgroundColor: currentSection.color
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.random() * 30 + 70}%` }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div style={styles.footer}>
                    <div style={styles.stats}>
                        <div style={styles.stat}>
                            <span style={styles.statNumber}>5+</span>
                            <span style={styles.statLabel}>Projects</span>
                        </div>
                        <div style={styles.stat}>
                            <span style={styles.statNumber}>2+</span>
                            <span style={styles.statLabel}>Years Learning</span>
                        </div>
                        <div style={styles.stat}>
                            <span style={styles.statNumber}>100%</span>
                            <span style={styles.statLabel}>Dedication</span>
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    container: {
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    header: {
        textAlign: 'center',
        padding: '30px 0',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2C3E50',
        margin: 0,
        marginBottom: 12
    },
    subtitle: {
        fontSize: 18,
        color: '#7f8c8d',
        margin: 0
    },
    content: {
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
    },
    sidebar: {
        width: 220,
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRight: '1px solid #e0e0e0',
        overflow: 'auto'
    },
    sectionOption: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        marginBottom: '8px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
        border: '1px solid #e0e0e0',
        fontSize: 12
    },
    sectionIcon: {
        fontSize: 18,
        marginRight: 12
    },
    sectionName: {
        fontSize: 14
    },
    mainContent: {
        flex: 1,
        padding: 25,
        overflow: 'auto'
    },
    itemsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
        maxWidth: '100%'
    },
    itemCard: {
        backgroundColor: '#ffffff',
        border: '2px solid #e0e0e0',
        borderRadius: 12,
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        minHeight: 140,
        
    },
    itemIcon: {
        fontSize: 32,
        marginBottom: 15
    },
    itemContent: {
        marginBottom: 15
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
        margin: '0 0 8px 0'
    },
    itemDescription: {
        fontSize: 13,
        color: '#7f8c8d',
        margin: 0,
        lineHeight: 1.5
    },
    progressBar: {
        height: 3,
        borderRadius: 2,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    footer: {
        padding: 20,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#f8f9fa'
    },
    stats: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    stat: {
        textAlign: 'center'
    },
    statNumber: {
        display: 'block',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50'
    },
    statLabel: {
        fontSize: 16,
        color: '#7f8c8d'
    },
    projectLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: 15,
        marginTop: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    projectLink: {
        color: '#3498db',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 12,
        padding: '8px 14px',
        border: '2px solid #3498db',
        borderRadius: 6,
        transition: 'all 0.3s ease',
        minWidth: '100px',
        textAlign: 'center',
        display: 'inline-block',
        margin: '6px'
    }
};

export default InteractiveShowcase; 
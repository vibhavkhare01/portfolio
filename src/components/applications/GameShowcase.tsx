import React from 'react';
import Window from '../os/Window';

export interface GameShowcaseProps extends WindowAppProps {}

const GameShowcase: React.FC<GameShowcaseProps> = (props) => {
    const handleColorChangerClick = () => {
        window.open('https://colour-changer-dusky.vercel.app', '_blank');
    };

    return (
        <Window
            top={20}
            left={20}
            width={1000}
            height={700}
            windowTitle="Interactive Projects"
            windowBarIcon="windowGameIcon"
            windowBarColor="#2C3E50"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'Vibhav Khare Projects'}
        >
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.mainTitle}>Interactive Projects</h2>
                    
                    
                </div>
                
                <div style={styles.projectButtons}>
                    <button
                        style={styles.projectButton}
                        onClick={handleColorChangerClick}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#3e9697';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.color = '#2C3E50';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <span style={styles.buttonIcon}>🎨</span>
                        <span style={styles.buttonText}>Background Color Changer</span>
                    </button>
                </div>
                
                
            </div>
        </Window>
    );
};



const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden'
    },
    header: {
        textAlign: 'center',
        padding: '30px 20px 20px 20px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0'
    },
    mainTitle: {
        margin: '0 0 10px 0',
        color: '#2C3E50',
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        margin: 0,
        color: '#7f8c8d',
        fontSize: 16
    },
    projectButtons: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '20px 30px',
        gap: '20px',
        backgroundColor: '#ffffff'
    },
    projectButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '2px solid #e0e0e0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '120px',
        backgroundColor: '#f8f9fa',
        fontSize: '11px',
        fontWeight: 'bold'
    },
    buttonIcon: {
        fontSize: '28px',
        marginBottom: '8px'
    },
    buttonText: {
        fontSize: '11px',
        fontWeight: 'bold'
    },
    projectArea: {
        flex: 1,
        padding: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'auto',
        backgroundColor: '#f8f9fa'
    },
   
    
   
   
};

export default GameShowcase; 
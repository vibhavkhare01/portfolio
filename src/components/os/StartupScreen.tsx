import React, { useEffect, useState } from 'react';
import Colors from '../../constants/colors';
import { OS_CONFIG } from '../../constants/osConfig';

export interface StartupScreenProps {
    onComplete: () => void;
}

const StartupScreen: React.FC<StartupScreenProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const startupSteps = [
        'Initializing VibhavKhare-OS...',
        'Loading system components...',
        'Configuring network settings...',
        `Setting IP address: ${OS_CONFIG.ipAddress}`,
        'Loading desktop environment...',
        'Starting applications...',
        'Welcome to VibhavKhare-OS!'
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentStep < startupSteps.length - 1) {
                setCurrentStep(currentStep + 1);
                setProgress(((currentStep + 1) / startupSteps.length) * 100);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [currentStep, startupSteps.length, onComplete]);

    return (
        <div style={styles.container}>
            <div style={styles.startupWindow}>
                <div style={styles.header}>
                    <h1 style={styles.title}>{OS_CONFIG.name}</h1>
                    <p style={styles.version}>Version {OS_CONFIG.version}</p>
                </div>
                
                <div style={styles.content}>
                    <div style={styles.loadingSection}>
                        <p style={styles.currentStep}>{startupSteps[currentStep]}</p>
                        <div style={styles.progressBar}>
                            <div 
                                style={{
                                    ...styles.progressFill,
                                    width: `${progress}%`
                                }}
                            />
                        </div>
                    </div>
                    
                    <div style={styles.systemInfo}>
                        <div style={styles.infoRow}>
                            <span style={styles.label}>Developer:</span>
                            <span style={styles.value}>{OS_CONFIG.developer}</span>
                        </div>
                        <div style={styles.infoRow}>
                            <span style={styles.label}>IP Address:</span>
                            <span style={styles.value}>{OS_CONFIG.ipAddress}</span>
                        </div>
                        <div style={styles.infoRow}>
                            <span style={styles.label}>Build:</span>
                            <span style={styles.value}>{OS_CONFIG.buildNumber}</span>
                        </div>
                    </div>
                </div>
                
                <div style={styles.footer}>
                    <p style={styles.copyright}>{OS_CONFIG.copyright}</p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.blue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
    },
    startupWindow: {
        width: 600,
        height: 400,
        backgroundColor: Colors.lightGray,
        border: `2px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    header: {
        textAlign: 'center',
        marginBottom: 30,
        borderBottom: `1px solid ${Colors.black}`,
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Terminal',
        color: Colors.black,
        margin: 0,
        marginBottom: 8,
    },
    version: {
        fontSize: 14,
        fontFamily: 'MSSerif',
        color: Colors.black,
        margin: 0,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loadingSection: {
        marginBottom: 30,
    },
    currentStep: {
        fontSize: 16,
        fontFamily: 'MSSerif',
        color: Colors.black,
        marginBottom: 15,
        textAlign: 'center',
    },
    progressBar: {
        width: '100%',
        height: 20,
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.black}`,
        position: 'relative',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.blue,
        transition: 'width 0.3s ease',
    },
    systemInfo: {
        marginBottom: 20,
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8,
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
    label: {
        fontWeight: 'bold',
        color: Colors.black,
    },
    value: {
        color: Colors.black,
    },
    footer: {
        textAlign: 'center',
        borderTop: `1px solid ${Colors.black}`,
        paddingTop: 15,
    },
    copyright: {
        fontSize: 10,
        fontFamily: 'MSSerif',
        color: Colors.black,
        margin: 0,
    },
};

export default StartupScreen; 
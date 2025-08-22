import React, { useState } from 'react';
import Colors from '../../constants/colors';
import { OS_CONFIG } from '../../constants/osConfig';
import { Icon } from '../general';

export interface SystemInfoProps {
    onClose: () => void;
    onInteract: () => void;
    onMinimize: () => void;
}

const SystemInfo: React.FC<SystemInfoProps> = ({ onClose, onInteract, onMinimize }) => {
    const [activeTab, setActiveTab] = useState<'general' | 'network' | 'hardware'>('general');

    return (
        <div 
            className="window"
            style={styles.window}
            onMouseDown={onInteract}
        >
            <div style={styles.titleBar}>
                <div style={styles.titleBarContent}>
                    <Icon icon="computerBig" size={16} style={styles.titleIcon} />
                    <span style={styles.titleText}>System Information</span>
                </div>
                <div style={styles.titleBarButtons}>
                    <button style={styles.minimizeButton} onClick={onMinimize}>
                        <Icon icon="minimize" size={12} />
                    </button>
                    <button style={styles.closeButton} onClick={onClose}>
                        <Icon icon="close" size={12} />
                    </button>
                </div>
            </div>
            <div style={styles.content}>
                <div style={styles.tabBar}>
                    <button 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'general' && styles.activeTab)
                        }}
                        onClick={() => setActiveTab('general')}
                    >
                        General
                    </button>
                    <button 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'network' && styles.activeTab)
                        }}
                        onClick={() => setActiveTab('network')}
                    >
                        Network
                    </button>
                    <button 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'hardware' && styles.activeTab)
                        }}
                        onClick={() => setActiveTab('hardware')}
                    >
                        Hardware
                    </button>
                </div>
                <div style={styles.tabContent}>
                    {activeTab === 'general' && (
                        <div style={styles.generalInfo}>
                            <h3 style={styles.sectionTitle}>Operating System</h3>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>OS Name:</span>
                                <span style={styles.value}>{OS_CONFIG.name}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Version:</span>
                                <span style={styles.value}>{OS_CONFIG.version}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Build:</span>
                                <span style={styles.value}>{OS_CONFIG.buildNumber}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Developer:</span>
                                <span style={styles.value}>{OS_CONFIG.developer}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Company:</span>
                                <span style={styles.value}>{OS_CONFIG.company}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Copyright:</span>
                                <span style={styles.value}>{OS_CONFIG.copyright}</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'network' && (
                        <div style={styles.networkInfo}>
                            <h3 style={styles.sectionTitle}>Network Configuration</h3>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>IP Address:</span>
                                <span style={styles.value}>{OS_CONFIG.ipAddress}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Subnet Mask:</span>
                                <span style={styles.value}>{OS_CONFIG.subnet}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Gateway:</span>
                                <span style={styles.value}>{OS_CONFIG.gateway}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>DNS Servers:</span>
                                <span style={styles.value}>{OS_CONFIG.dns.join(', ')}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Network Type:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.network}</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'hardware' && (
                        <div style={styles.hardwareInfo}>
                            <h3 style={styles.sectionTitle}>Hardware Information</h3>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Processor:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.processor}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Memory:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.memory}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Storage:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.storage}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Graphics:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.graphics}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Kernel:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.kernel}</span>
                            </div>
                            <div style={styles.infoRow}>
                                <span style={styles.label}>Shell:</span>
                                <span style={styles.value}>{OS_CONFIG.systemInfo.shell}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    window: {
        width: 500,
        height: 400,
        backgroundColor: Colors.lightGray,
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        display: 'flex',
        flexDirection: 'column',
    },
    titleBar: {
        height: 24,
        backgroundColor: Colors.blue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4px',
        borderBottom: `1px solid ${Colors.white}`,
    },
    titleBarContent: {
        display: 'flex',
        alignItems: 'center',
        color: Colors.white,
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
    titleIcon: {
        marginRight: 4,
    },
    titleText: {
        marginLeft: 4,
    },
    titleBarButtons: {
        display: 'flex',
        gap: 2,
    },
    minimizeButton: {
        width: 18,
        height: 18,
        backgroundColor: Colors.lightGray,
        border: `2px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '2px',
    },
    closeButton: {
        width: 18,
        height: 18,
        backgroundColor: Colors.lightGray,
        border: `2px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    tabBar: {
        display: 'flex',
        borderBottom: `1px solid ${Colors.black}`,
    },
    tab: {
        padding: '4px 12px',
        backgroundColor: Colors.lightGray,
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        cursor: 'pointer',
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
    activeTab: {
        backgroundColor: Colors.white,
        borderBottomColor: Colors.white,
    },
    tabContent: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.white,
        overflow: 'auto',
        maxHeight: '400px'
    },
    sectionTitle: {
        margin: '0 0 12px 0',
        fontSize: 14,
        fontFamily: 'MSSerif',
        color: Colors.black,
    },
    infoRow: {
        display: 'flex',
        marginBottom: 8,
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
    label: {
        fontWeight: 'bold',
        width: 120,
        color: Colors.black,
    },
    value: {
        color: Colors.black,
    },
    generalInfo: {},
    networkInfo: {},
    hardwareInfo: {},
};

export default SystemInfo; 
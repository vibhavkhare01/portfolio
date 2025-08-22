import React from 'react';
import Colors from '../../constants/colors';
import { OS_CONFIG } from '../../constants/osConfig';

export interface NetworkStatusProps {}

const NetworkStatus: React.FC<NetworkStatusProps> = () => {
    return (
        <div style={styles.container}>
            <div style={styles.networkInfo}>
                <span style={styles.label}>IP:</span>
                <span style={styles.ipAddress}>{OS_CONFIG.ipAddress}</span>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        fontSize: 10,
        fontFamily: 'MSSerif',
        color: Colors.black,
        backgroundColor: Colors.lightGray,
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        borderLeftColor: Colors.darkGray,
        height: 20,
    },
    networkInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
    },
    label: {
        fontWeight: 'bold',
    },
    ipAddress: {
        fontFamily: 'Terminal',
        fontSize: 9,
    },
};

export default NetworkStatus; 
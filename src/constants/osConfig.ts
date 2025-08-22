export const OS_CONFIG = {
    name: 'VibhavKhare-OS',
    version: '1.0.0',
    buildNumber: '2025.02.15',
    ipAddress: '125.600.6.3000',
    subnet: '255.255.255.0',
    gateway: '125.600.6.1',
    dns: ['125.600.6.1', '8.8.8.8'],
    developer: 'Vibhav Khare',
    company: 'VibhavKhare Technologies',
    copyright: '© 2025 VibhavKhare Technologies. All rights reserved.',
    systemInfo: {
        processor: 'Intel Core i7-12700K',
        memory: '32GB DDR4',
        storage: '1TB NVMe SSD',
        graphics: 'NVIDIA RTX 4070',
        network: 'Gigabit Ethernet',
        os: 'VibhavKhare-OS v1.0.0',
        kernel: 'React 17.0.2',
        shell: 'TypeScript 4.6.2'
    },
    features: {
        multiWindow: true,
        dragAndDrop: true,
        minimize: true,
        maximize: true,
        shutdown: true,
        musicPlayer: false,
        portfolio: true,
        games: true,
        interactive: true
    },
    theme: {
        primary: '#1e3a8a',
        secondary: '#059669',
        accent: '#7c3aed',
        background: '#3e9697',
        text: '#000000',
        border: '#c3c6ca'
    }
} as const;

export type OSConfig = typeof OS_CONFIG; 
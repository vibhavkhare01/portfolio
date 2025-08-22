const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// OS Configuration Data
const OS_CONFIG = {
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
    }
};

// Portfolio Data
const PORTFOLIO_DATA = {
    about: {
        name: 'Vibhav Khare',
        title: 'Frontend Developer & Data Analyst',
        email: 'vibhavkhare6@gmail.com',
        location: 'Indore, Madhya Pradesh',
        education: 'B.Tech in Computer Science and Engineering (2022-2026)',
        institution: 'Malwa Institute of Science & Technology, Indore',
        skills: ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'React.js', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Figma']
    },
    experience: [
        {
            company: 'WebMobi360',
            position: 'Data Analyst & Research Intern',
            duration: 'Feb 2025 - April 2026',
            description: 'Contributed as a Data Analyst and Research Intern, assisting in business research and data insight generation.',
            achievements: [
                'Analyzed datasets using Excel and Google Sheets to derive meaningful patterns and trends',
                'Assisted in web research to support digital product strategy and user behavior tracking',
                'Built interactive dashboards and summary reports for performance monitoring using Power BI'
            ]
        }
    ],
    projects: [
        {
            title: 'VibhavKhare-OS Portfolio',
            description: 'Windows 98-style portfolio website built with React and TypeScript',
            technologies: ['React', 'TypeScript', 'CSS3', 'HTML5'],
            github: 'https://github.com/VibhavKhare/vibhavkhare-os'
        },
        {
            title: 'Color Changer',
            description: 'Interactive color palette generator deployed on Vercel',
            technologies: ['React', 'TypeScript', 'CSS3', 'Vercel'],
            github: 'https://github.com/VibhavKhare/color-changer',
            liveUrl: 'https://colour-changer-dusky.vercel.app'
        },
        {
            title: 'Data Analysis Dashboard',
            description: 'Interactive dashboard for business analytics and reporting',
            technologies: ['Power BI', 'Excel', 'SQL', 'Python'],
            status: 'In Progress'
        }
    ],
    social: {
        github: 'https://github.com/VibhavKhare01',
        linkedin: 'https://www.linkedin.com/in/vibhav-khare-gds2103/',
        twitter: 'https://x.com/Vibhavkhare03'
    }
};

// API Routes

// Get OS Configuration
app.get('/api/os-config', (req, res) => {
    res.json(OS_CONFIG);
});

// Get Portfolio Data
app.get('/api/portfolio', (req, res) => {
    res.json(PORTFOLIO_DATA);
});

// Get System Information
app.get('/api/system-info', (req, res) => {
    res.json({
        ...OS_CONFIG.systemInfo,
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        platform: process.platform,
        nodeVersion: process.version
    });
});

// Get Network Status
app.get('/api/network-status', (req, res) => {
    res.json({
        ipAddress: OS_CONFIG.ipAddress,
        subnet: OS_CONFIG.subnet,
        gateway: OS_CONFIG.gateway,
        dns: OS_CONFIG.dns,
        status: 'Connected',
        timestamp: new Date().toISOString()
    });
});

// Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, company, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Name, email, and message are required'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address'
        });
    }

    // Simulate email sending (in real app, you'd use a service like SendGrid)
    console.log('Contact form submission:', { name, email, company, message });

    res.json({
        success: true,
        message: `Thank you ${name}! Your message has been received.`
    });
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: OS_CONFIG.version
    });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Something went wrong!'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 VibhavKhare-OS API Server running on port ${PORT}`);
    console.log(`📡 IP Address: ${OS_CONFIG.ipAddress}`);
    console.log(`👨‍💻 Developer: ${OS_CONFIG.developer}`);
    console.log(`🏢 Company: ${OS_CONFIG.company}`);
    console.log(`🌐 API Endpoints:`);
    console.log(`   GET  /api/os-config`);
    console.log(`   GET  /api/portfolio`);
    console.log(`   GET  /api/system-info`);
    console.log(`   GET  /api/network-status`);
    console.log(`   POST /api/contact`);
    console.log(`   GET  /api/health`);
}); 
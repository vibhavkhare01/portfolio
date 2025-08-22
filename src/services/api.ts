const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export interface OSConfig {
    name: string;
    version: string;
    buildNumber: string;
    ipAddress: string;
    subnet: string;
    gateway: string;
    dns: string[];
    developer: string;
    company: string;
    copyright: string;
    systemInfo: {
        processor: string;
        memory: string;
        storage: string;
        graphics: string;
        network: string;
        os: string;
        kernel: string;
        shell: string;
    };
}

export interface PortfolioData {
    about: {
        name: string;
        title: string;
        email: string;
        location: string;
        education: string;
        institution: string;
        skills: string[];
    };
    experience: Array<{
        company: string;
        position: string;
        duration: string;
        description: string;
        achievements: string[];
    }>;
    projects: Array<{
        title: string;
        description: string;
        technologies: string[];
        github?: string;
        status?: string;
    }>;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export interface SystemInfo {
    processor: string;
    memory: string;
    storage: string;
    graphics: string;
    network: string;
    os: string;
    kernel: string;
    shell: string;
    uptime?: number;
    memoryUsage?: any;
    platform?: string;
    nodeVersion?: string;
}

export interface NetworkStatus {
    ipAddress: string;
    subnet: string;
    gateway: string;
    dns: string[];
    status: string;
    timestamp: string;
}

export interface ContactForm {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

class ApiService {
    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        return response.json();
    }

    // Get OS Configuration
    async getOSConfig(): Promise<OSConfig> {
        return this.request<OSConfig>('/os-config');
    }

    // Get Portfolio Data
    async getPortfolioData(): Promise<PortfolioData> {
        return this.request<PortfolioData>('/portfolio');
    }

    // Get System Information
    async getSystemInfo(): Promise<SystemInfo> {
        return this.request<SystemInfo>('/system-info');
    }

    // Get Network Status
    async getNetworkStatus(): Promise<NetworkStatus> {
        return this.request<NetworkStatus>('/network-status');
    }

    // Submit Contact Form
    async submitContact(formData: ContactForm): Promise<ApiResponse<any>> {
        return this.request<ApiResponse<any>>('/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
    }

    // Health Check
    async healthCheck(): Promise<{ status: string; timestamp: string; uptime: number; version: string }> {
        return this.request<{ status: string; timestamp: string; uptime: number; version: string }>('/health');
    }

    // Test API Connection
    async testConnection(): Promise<boolean> {
        try {
            await this.healthCheck();
            return true;
        } catch (error) {
            console.error('API connection failed:', error);
            return false;
        }
    }
}

export const apiService = new ApiService();
export default apiService; 
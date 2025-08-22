const colors = {
    white: '#FFFFFF',
    black: '#000000',
    turquoise: '#3e9697',
    lightGray: '#c3c6ca',
    darkGray: '#86898d',
    blue: '#0000a3',
    darkBlue: '#0000aa',
    red: '#ff0000',
    // VibhavKhare-OS specific colors
    vibhavBlue: '#1e3a8a',
    vibhavGreen: '#059669',
    vibhavPurple: '#7c3aed',
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;

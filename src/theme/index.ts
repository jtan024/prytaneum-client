import { createMuiTheme, Theme } from '@material-ui/core/styles';
// TODO: implement user prefers schema for dark or light mode

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        custom: {
            borderRadius: string;
            maxHW: {
                height: string;
                width: string;
            };
            media: {
                minHeight: string;
            };
            clipPath: {
                slope: string;
            };
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        custom?: {
            borderRadius?: string;
            maxHW?: {
                height: string;
                width: string;
            };
            media?: {
                minHeight: string;
            };
            clipPath?: {
                slope: string;
            };
        };
    }
}

const easingFunc = 'cubic-bezier(0.4, 0, 0.2, 1)';

const base = {
    typography: {
        button: {
            lineHeight: '1.75em',
            // fontSize: 'rem',
        },
    },
    custom: {
        borderRadius: '18px',
        maxHW: {
            height: '100%',
            width: '100%',
        },
        media: {
            minHeight: '300px',
        },
        clipPath: {
            slope: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
        },
    },
    transitions: {
        easing: {
            easeIn: easingFunc,
            easeInOut: easingFunc,
            easeOut: easingFunc,
            sharp: easingFunc,
        },
    },
    shape: {
        borderRadius: 24,
    },
};

export interface Themes {
    light: Theme;
    dark: Theme;
}

const themes: Themes = {
    dark: createMuiTheme({
        palette: {
            primary: { main: '#2C3D4E' },
            secondary: { main: '#fca06f' },
        },
        ...base,
    }),
    light: createMuiTheme({
        palette: {
            primary: { main: '#fff5e6' },
            // primary: { main: '#fef7ec' },
            secondary: { main: '#003C8F' },
        },
        ...base,
    }),
};

export default themes;

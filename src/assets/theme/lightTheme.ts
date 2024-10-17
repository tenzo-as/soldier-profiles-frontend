import { createTheme, Theme } from '@mui/material/styles'

export const lightTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
            primary: {
                light: '#93c5fd',
                main: '#60a5fa',
                dark: '#3b82f6',
                contrastText: '#ffffff',
            },
        },
        typography: {
            fontFamily: '"Inter", sans-serif',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    sizeSmall: {
                        height: '34px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        whiteSpace: 'nowrap',
                    },
                    sizeMedium: {
                        height: '40px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        whiteSpace: 'nowrap',
                    },
                    root: {
                        borderRadius: '8px',
                    },
                },
                defaultProps: {
                    disableElevation: true,
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        transform: 'translate(14px, 12px) scale(1)',
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -9px) scale(0.75)',
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        height: '46px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderRadius: '8px !important',
                    },
                },
            },
        },
    })

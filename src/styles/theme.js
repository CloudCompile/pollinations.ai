import { createTheme } from "@mui/material/styles";
import { Colors, Fonts } from "../config/global";

/**
 * Custom theme for Material UI components
 * This theme coordinates with your existing color scheme and fonts
 */
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: Colors.lime,
        },
        secondary: {
            main: Colors.offwhite,
        },
        background: {
            default: Colors.offblack,
            paper: Colors.offblack2,
        },
        text: {
            primary: Colors.offwhite,
            secondary: Colors.gray1,
        },
        error: {
            main: Colors.special,
        },
    },
    typography: {
        fontFamily: Fonts.parameter,
        h1: {
            fontFamily: Fonts.title,
            fontWeight: 700,
        },
        h2: {
            fontFamily: Fonts.title,
            fontWeight: 600,
        },
        h3: {
            fontFamily: Fonts.headline,
            fontWeight: 500,
        },
        h4: {
            fontFamily: Fonts.headline,
            fontWeight: 500,
        },
        h5: {
            fontFamily: Fonts.headline,
            fontWeight: 500,
        },
        h6: {
            fontFamily: Fonts.headline,
            fontWeight: 500,
        },
        button: {
            fontFamily: Fonts.parameter,
            textTransform: "none",
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        "none",
        "0px 2px 4px rgba(0,0,0,0.1)",
        "0px 4px 8px rgba(0,0,0,0.15)",
        "0px 8px 16px rgba(0,0,0,0.2)",
        "0px 12px 24px rgba(0,0,0,0.25)",
        "0px 16px 32px rgba(0,0,0,0.3)",
        "0px 20px 40px rgba(0,0,0,0.35)",
        "0px 24px 48px rgba(0,0,0,0.4)",
        ...Array(17).fill("0px 24px 48px rgba(0,0,0,0.4)"),
    ],
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
        easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: "10px 24px",
                    fontWeight: 500,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0px 6px 16px rgba(0,0,0,0.25)",
                    },
                },
                contained: {
                    backgroundColor: Colors.lime,
                    color: Colors.offblack,
                    "&:hover": {
                        backgroundColor: `${Colors.lime}dd`,
                    },
                },
                outlined: {
                    borderColor: Colors.lime,
                    borderWidth: 2,
                    color: Colors.lime,
                    "&:hover": {
                        borderColor: Colors.lime,
                        borderWidth: 2,
                        backgroundColor: `${Colors.lime}18`,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 12,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "& fieldset": {
                            borderColor: `${Colors.lime}66`,
                            borderWidth: 2,
                        },
                        "&:hover fieldset": {
                            borderColor: `${Colors.lime}aa`,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: Colors.lime,
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    color: Colors.lime,
                    boxShadow: "0px 2px 8px rgba(236, 248, 116, 0.4)",
                    "&:hover": {
                        boxShadow: "0px 4px 12px rgba(236, 248, 116, 0.6)",
                    },
                },
                track: {
                    color: Colors.lime,
                    height: 6,
                    borderRadius: 3,
                },
                rail: {
                    color: `${Colors.lime}44`,
                    height: 6,
                    borderRadius: 3,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundImage: "none",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0px 12px 24px rgba(0,0,0,0.3)",
                    },
                },
            },
        },
    },
});

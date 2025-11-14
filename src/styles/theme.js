import { createTheme } from "@mui/material/styles";
import { Colors, Fonts } from "../config/global";

/**
 * Glassmorphic theme for Material UI components
 * Modern design with frosted glass effects, gradients, and smooth animations
 */
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: Colors.primary,
            light: "#C4B5FD",
            dark: "#7C3AED",
        },
        secondary: {
            main: Colors.secondary,
            light: "#93C5FD",
            dark: "#2563EB",
        },
        background: {
            default: Colors.background,
            paper: Colors.backgroundLight,
        },
        text: {
            primary: Colors.textPrimary,
            secondary: Colors.textSecondary,
        },
        error: {
            main: Colors.special,
        },
        success: {
            main: Colors.accent,
        },
    },
    typography: {
        fontFamily: Fonts.parameter,
        h1: {
            fontFamily: Fonts.title,
            fontWeight: 800,
            letterSpacing: "-0.02em",
        },
        h2: {
            fontFamily: Fonts.title,
            fontWeight: 700,
            letterSpacing: "-0.02em",
        },
        h3: {
            fontFamily: Fonts.headline,
            fontWeight: 600,
            letterSpacing: "-0.01em",
        },
        h4: {
            fontFamily: Fonts.headline,
            fontWeight: 600,
            letterSpacing: "-0.01em",
        },
        h5: {
            fontFamily: Fonts.headline,
            fontWeight: 600,
        },
        h6: {
            fontFamily: Fonts.headline,
            fontWeight: 600,
        },
        button: {
            fontFamily: Fonts.parameter,
            textTransform: "none",
            fontWeight: 500,
            letterSpacing: "0.01em",
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        "none",
        "0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 4px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 12px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 16px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
        "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        ...Array(17).fill("0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"),
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
                    borderRadius: 20,
                    padding: "12px 28px",
                    fontWeight: 500,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                        opacity: 0.6,
                    },
                    "&:hover": {
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
                        transform: "translateY(-3px) scale(1.02)",
                        boxShadow: "0 12px 40px rgba(167, 139, 250, 0.25), 0 0 20px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    },
                },
                contained: {
                    background: `linear-gradient(135deg, ${Colors.primary} 0%, ${Colors.secondary} 100%)`,
                    color: Colors.textPrimary,
                    border: "none",
                    boxShadow: `0 8px 32px ${Colors.primary}40, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                    "&:hover": {
                        background: `linear-gradient(135deg, ${Colors.primary}dd 0%, ${Colors.secondary}dd 100%)`,
                        boxShadow: `0 12px 40px ${Colors.primary}60, 0 0 20px ${Colors.primary}30`,
                    },
                },
                outlined: {
                    borderColor: Colors.primary,
                    borderWidth: 2,
                    color: Colors.primary,
                    background: "transparent",
                    "&:hover": {
                        borderColor: Colors.primary,
                        borderWidth: 2,
                        background: `${Colors.primary}18`,
                        boxShadow: `0 8px 32px ${Colors.primary}30, inset 0 0 20px ${Colors.primary}10`,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 12,
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            borderWidth: 1,
                        },
                        "&:hover fieldset": {
                            borderColor: `${Colors.primary}66`,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: Colors.primary,
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    background: `linear-gradient(135deg, ${Colors.primary} 0%, ${Colors.secondary} 100%)`,
                    boxShadow: "0 2px 8px rgba(167, 139, 250, 0.4)",
                    "&:hover": {
                        boxShadow: "0 4px 12px rgba(167, 139, 250, 0.6)",
                    },
                },
                track: {
                    background: `linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.secondary} 100%)`,
                    height: 6,
                    borderRadius: 3,
                },
                rail: {
                    color: `${Colors.primary}33`,
                    height: 6,
                    borderRadius: 3,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    backgroundImage: "none",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                        opacity: 0.6,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                        opacity: 0.6,
                    },
                    "&:hover": {
                        transform: "translateY(-6px) scale(1.02)",
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
                        borderColor: "rgba(167, 139, 250, 0.3)",
                        boxShadow: "0 16px 64px rgba(167, 139, 250, 0.3), 0 0 30px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    },
                },
            },
        },
    },
});

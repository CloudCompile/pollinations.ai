// lime: '#FFE801',

export const SHOW_PROMPT_TOOLTIP = false;

export const Colors = {
    // Modern glassmorphic color palette
    primary: "#A78BFA", // Purple
    secondary: "#60A5FA", // Blue
    accent: "#34D399", // Green
    background: "#0F172A", // Dark slate
    backgroundLight: "#1E293B", // Lighter slate
    glass: "rgba(255, 255, 255, 0.05)", // Glass effect
    glassBorder: "rgba(255, 255, 255, 0.1)",
    textPrimary: "#F1F5F9",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    special: "#F472B6", // Pink accent
    // Legacy colors for compatibility
    lime: "#34D399",
    offwhite: "#F1F5F9",
    offblack: "#0F172A",
    offblack2: "#1E293B",
    gray1: "#94A3B8",
    gray2: "#64748B",
};

export const Fonts = {
    title: "Inter, system-ui, -apple-system, sans-serif",
    headline: "Inter, system-ui, -apple-system, sans-serif",
    parameter: "Inter, system-ui, -apple-system, sans-serif",
};

// Step 1: Create a new mapping object for section backgrounds
export const SectionBG = {
    header: {
        color: Colors.background,
        gradient: true,
    },
    hero: {
        color: Colors.background,
        gradient: true,
    },
    news: {
        color: Colors.backgroundLight,
        gradient: false,
    },
    chat: {
        color: Colors.background,
        gradient: true,
    },
    feedImage: {
        color: Colors.background,
        gradient: true,
    },
    feedText: {
        color: Colors.background,
        gradient: true,
    },
    project: {
        color: Colors.backgroundLight,
        gradient: false,
    },
    integration: {
        color: Colors.background,
        gradient: false,
    },
    community: {
        color: Colors.backgroundLight,
        gradient: true,
    },
    team: {
        color: Colors.background,
        gradient: true,
    },
    supporter: {
        color: Colors.background,
        gradient: true,
    },
    footer: {
        color: Colors.background,
        gradient: false,
    },
};

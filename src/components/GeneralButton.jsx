import React from "react";
import { Button } from "@mui/material";
import { Colors } from "../config/global";

// ForwardRef component that directly uses the MUI <Button>
export const GeneralButton = React.forwardRef(function GeneralButton(
    {
        handleClick,
        isLoading,
        borderColor,
        backgroundColor,
        textColor,
        fontSize,
        height,
        minHeight,
        style,
        children,
        isInputChanged,
        borderRadius,
        ...rest
    },
    ref,
) {
    // Merge style props with inline styling
    const mergedStyle = {
        border: borderColor ? `1px solid ${borderColor}44` : "1px solid rgba(255, 255, 255, 0.15)",
        background: backgroundColor || "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        color: textColor || borderColor || Colors.textPrimary,
        fontSize: fontSize || "1.5em",
        fontWeight: 500,
        height: height || "auto",
        minHeight: height || "60px",
        borderRadius: borderRadius || "20px",
        padding: "0px 1.5em",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isLoading ? 0.7 : 1,
        position: "relative",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
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
            background: backgroundColor
                ? `${backgroundColor}dd`
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
            borderColor: borderColor ? `${borderColor}aa` : "rgba(167, 139, 250, 0.6)",
            transform: "translateY(-3px) scale(1.02)",
            boxShadow: `0 12px 40px ${borderColor ? `${borderColor}40` : "rgba(167, 139, 250, 0.25)"}, 0 0 20px ${borderColor ? `${borderColor}20` : "rgba(167, 139, 250, 0.15)"}, inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(0, 0, 0, 0.15)`,
        },
        "&:active": {
            transform: "translateY(-1px) scale(0.98)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        },
        "&::after": isLoading
            ? {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.secondary} 100%)`,
                  animation: "loadingProgress 1.5s infinite ease-in-out",
                  width: "100%",
                  borderRadius: "0 0 20px 20px",
                  boxShadow: `0 0 10px ${Colors.primary}`,
              }
            : {},
        "@keyframes loadingProgress": {
            "0%": { width: "0%", left: "0%" },
            "50%": { width: "100%", left: "0%" },
            "100%": { width: "0%", left: "100%" },
        },
        ...style,
    };

    return (
        <Button
            ref={ref}
            onClick={handleClick}
            disabled={isLoading}
            sx={mergedStyle}
            {...rest}
        >
            {children}
        </Button>
    );
});

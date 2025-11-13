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
        border: borderColor ? `1px solid ${borderColor}33` : "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: textColor || borderColor || Colors.textPrimary,
        fontSize: fontSize || "1.5em",
        fontWeight: 500,
        height: height || "auto",
        minHeight: height || "60px",
        borderRadius: borderRadius || "12px",
        padding: "0px 1.5em",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isLoading ? 0.7 : 1,
        position: "relative",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "&:hover": {
            backgroundColor: backgroundColor
                ? `${backgroundColor}dd`
                : "rgba(255, 255, 255, 0.1)",
            borderColor: borderColor ? `${borderColor}88` : "rgba(167, 139, 250, 0.5)",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(167, 139, 250, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        },
        "&:active": {
            transform: "translateY(0px)",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
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
                  borderRadius: "0 0 12px 12px",
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

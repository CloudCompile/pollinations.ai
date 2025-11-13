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
        border: borderColor ? `2px solid ${borderColor}` : "none",
        backgroundColor: backgroundColor || "transparent",
        color: textColor || borderColor || "transparent",
        fontSize: fontSize || "1.5em",
        fontWeight: 500,
        height: height || "auto",
        minHeight: height || "60px",
        borderRadius: borderRadius || "12px",
        padding: "0px 1.5em",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isLoading ? 0.7 : 1,
        position: "relative",
        boxShadow: borderColor ? "0px 2px 8px rgba(0,0,0,0.15)" : "none",
        "&:hover": {
            backgroundColor: backgroundColor
                ? `${backgroundColor}dd`
                : borderColor ? `${borderColor}18` : "transparent",
            borderColor: borderColor || "none",
            transform: "translateY(-2px)",
            boxShadow: borderColor ? "0px 6px 16px rgba(0,0,0,0.25)" : "none",
        },
        "&:active": {
            transform: "translateY(0px)",
            boxShadow: borderColor ? "0px 2px 8px rgba(0,0,0,0.15)" : "none",
        },
        "&::after": isLoading
            ? {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "3px",
                  backgroundColor: textColor || borderColor || "transparent",
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

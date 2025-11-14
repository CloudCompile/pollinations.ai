import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { SOCIAL_LINKS } from "../config/socialLinksList";
import { Colors } from "../config/global";
import { trackEvent } from "../config/analytics";
import { ReactSVG } from "react-svg";

// Container styling
const SocialLinksContainer = styled("div")(({ gap }) => ({
    gridArea: "social",
    display: "flex",
    alignItems: "center",
    gap: gap || "0em",
}));

const LinkItem = styled(Link, {
    // Prevent forwarding isHovered to the DOM
    shouldForwardProp: (prop) => !["isHovered", "invert"].includes(prop),
})(({ isHovered, invert }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: `2px solid ${invert ? Colors.offwhite : Colors.offblack}`,
    backgroundColor: isHovered 
        ? (invert ? Colors.offwhite : Colors.offblack)
        : "transparent",
    width: "40px",
    height: "40px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textDecoration: "none",
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: invert 
            ? "0px 4px 12px rgba(255, 255, 255, 0.2)"
            : "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
}));

// Replacing the <img> with a Styled ReactSVG to control the svg fill dynamically
const StyledReactSVG = styled(ReactSVG, {
    shouldForwardProp: (prop) => !["isHovered", "invert"].includes(prop),
})(({ isHovered, invert }) => ({
    "& svg": {
        fill: isHovered 
            ? (invert ? Colors.offblack : Colors.offwhite)
            : (invert ? Colors.offwhite : Colors.offblack),
        transition: "fill 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        width: "100%",
        height: "100%",
    },
}));

export const SocialLinks = ({ gap, location, invert }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleLinkClick = (platform) => {
        trackEvent({
            action: `click_social_link`,
            category: location,
            value: platform,
        });
    };

    return (
        <SocialLinksContainer gap={gap}>
            {Object.keys(SOCIAL_LINKS).map((platform, index) => {
                const isHovered = hoveredIndex === index;
                const { url, icon, width, height } = SOCIAL_LINKS[platform];
                return (
                    <LinkItem
                        key={`plt_link_${url}`}
                        href={url}
                        target="_blank"
                        title={platform}
                        isHovered={isHovered}
                        invert={invert}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleLinkClick(platform)}
                    >
                        <StyledReactSVG
                            src={icon}
                            isHovered={isHovered}
                            invert={invert}
                            wrapper="span"
                            aria-label={`${platform}-icon`}
                            style={{ width, height }}
                        />
                    </LinkItem>
                );
            })}
        </SocialLinksContainer>
    );
};

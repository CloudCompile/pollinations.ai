import { Box, Typography, Link } from "@mui/material";
import { SocialLinks } from "../components/SocialLinks";
import { Fonts, SectionBG, Colors } from "../config/global";
import StyledLink from "../components/StyledLink";
import { SectionContainer } from "../components/SectionContainer";
import Grid from "@mui/material/Grid2";
import {
    FOOTER_INFO_1,
    FOOTER_INFO_2,
    FOOTER_TERMS_CONDITIONS_LINK,
} from "../config/copywrite";
import { noLink } from "../config/llmTransforms";
import { LLMTextManipulator } from "../components/LLMTextManipulator";
import { trackEvent } from "../config/analytics";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { copyToClipboard } from "../utils/clipboard.js";
import { useState } from "react";
import PollinationsLogo from "../logo/logo-text.svg?react";

const Footer = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
    const [copied, setCopied] = useState(false);

    const handleEmailLinkClick = (e) => {
        e.preventDefault();
        copyToClipboard("hello@pollinations.ai")
            .then(() => {
                trackEvent({
                    action: "click_email",
                    category: "footer",
                });
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((error) => {
                console.error("Error copying email to clipboard:", error);
            });
    };

    const handleTermsLinkClick = () => {
        trackEvent({
            action: "click_terms",
            category: "footer",
        });
    };

    const footerLinks = {
        explore: [
            { label: "Generate", href: "#" },
            { label: "API Docs", href: "/integrate" },
            { label: "Our Models", href: "#" },
            { label: "Status", href: "#" },
        ],
        company: [
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "mailto:hello@pollinations.ai", onClick: handleEmailLinkClick },
        ],
    };

    return (
        <SectionContainer backgroundConfig={SectionBG.footer}>
            <Box
                width="100%"
                display="flex"
                flexDirection="column"
                padding={isMdDown ? "2em 1em" : "3em 2em"}
                gap="3em"
                sx={{
                    color: Colors.offwhite,
                }}
            >
                {/* Logo and Social Links Row */}
                <Grid container spacing={isMdDown ? 2 : 4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5em",
                                alignItems: isMdDown ? "center" : "flex-start",
                            }}
                        >
                            <PollinationsLogo
                                style={{
                                    width: isMdDown ? "200px" : "250px",
                                    height: "auto",
                                    filter: "brightness(0) invert(1)",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: isMdDown ? "center" : "flex-end",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <SocialLinks gap="1em" location="footer" invert={true} />
                        </Box>
                    </Grid>
                </Grid>

                {/* Links Section */}
                <Grid container spacing={isMdDown ? 3 : 4}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1em",
                                alignItems: isMdDown ? "center" : "flex-start",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: Fonts.title,
                                    fontWeight: 600,
                                    color: Colors.offwhite,
                                    marginBottom: "0.5em",
                                }}
                            >
                                Explore
                            </Typography>
                            {footerLinks.explore.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={link.onClick}
                                    sx={{
                                        color: Colors.gray1,
                                        textDecoration: "none",
                                        fontFamily: Fonts.parameter,
                                        fontSize: "1rem",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: Colors.lime,
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1em",
                                alignItems: isMdDown ? "center" : "flex-start",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: Fonts.title,
                                    fontWeight: 600,
                                    color: Colors.offwhite,
                                    marginBottom: "0.5em",
                                }}
                            >
                                Company
                            </Typography>
                            {footerLinks.company.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={link.onClick}
                                    sx={{
                                        color: Colors.gray1,
                                        textDecoration: "none",
                                        fontFamily: Fonts.parameter,
                                        fontSize: "1rem",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: Colors.lime,
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Box
                    sx={{
                        borderTop: `1px solid ${Colors.gray2}40`,
                        paddingTop: "2em",
                        display: "flex",
                        flexDirection: isMdDown ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMdDown ? "center" : "center",
                        gap: "1em",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: isMdDown ? "column" : "row",
                            alignItems: "center",
                            gap: isMdDown ? "0.5em" : "0.5em",
                            color: Colors.gray1,
                            fontFamily: Fonts.parameter,
                            fontSize: "0.9rem",
                            textAlign: isMdDown ? "center" : "left",
                        }}
                    >
                        <LLMTextManipulator
                            text={FOOTER_INFO_1}
                            transforms={[noLink]}
                        />
                        <Box
                            component="span"
                            sx={{ display: isMdDown ? "none" : "inline" }}
                        >
                            •
                        </Box>
                        <LLMTextManipulator
                            text={FOOTER_INFO_2}
                            transforms={[noLink]}
                        />
                    </Box>
                    <StyledLink
                        to="/terms"
                        onClick={handleTermsLinkClick}
                        sx={{
                            color: Colors.gray1,
                            textDecoration: "none",
                            fontFamily: Fonts.parameter,
                            fontSize: "0.9rem",
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: Colors.lime,
                            },
                        }}
                    >
                        <LLMTextManipulator
                            text={FOOTER_TERMS_CONDITIONS_LINK}
                            transforms={[noLink]}
                        />
                    </StyledLink>
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default Footer;

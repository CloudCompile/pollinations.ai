import React from "react";
import { Colors, Fonts, SectionBG } from "../config/global";
import {
    SectionContainer,
    SectionSubContainer,
    SectionHeadlineStyle,
} from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { GeneralButton } from "../components/GeneralButton";
import { LLMTextManipulator } from "../components/LLMTextManipulator";
import { CHAT_TITLE, CHAT_SUBTITLE, CHAT_CTA } from "../config/copywrite";
import { rephrase, emojify, noLink } from "../config/llmTransforms";
import { trackEvent } from "../config/analytics";
import { ICONS } from "../icons/icons";
import { ReactSVG } from "react-svg";
import { useTheme, useMediaQuery } from "@mui/material";

const Chat = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleChatButtonClick = (e) => {
        e.preventDefault();
        trackEvent({
            action: "click_chat",
            category: "chat",
        });
        window.open("https://chat.pollinations.ai", "_blank");
    };

    return (
        <SectionContainer backgroundConfig={SectionBG.chat}>
            <SectionSubContainer>
                <SectionTitle title={CHAT_TITLE} />
            </SectionSubContainer>
            <SectionSubContainer>
                <SectionHeadlineStyle
                    maxWidth="800px"
                    fontSize="1.3em"
                    color={Colors.offwhite}
                    textAlign="center"
                >
                    <LLMTextManipulator
                        text={CHAT_SUBTITLE}
                        transforms={[rephrase, emojify, noLink]}
                    />
                </SectionHeadlineStyle>
            </SectionSubContainer>
            <SectionSubContainer>
                <GeneralButton
                    handleClick={handleChatButtonClick}
                    isLoading={false}
                    borderColor={Colors.accent}
                    backgroundColor={Colors.accent}
                    textColor={Colors.offblack}
                    style={{
                        fontSize: isMobile ? "1.2rem" : "1.5rem",
                        fontFamily: Fonts.title,
                        fontWeight: 600,
                        padding: isMobile ? "12px 24px" : "16px 32px",
                    }}
                >
                    {CHAT_CTA}
                </GeneralButton>
            </SectionSubContainer>
        </SectionContainer>
    );
};

export default Chat;

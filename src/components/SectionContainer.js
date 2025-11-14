import styled from "@emotion/styled";
import { Colors, Fonts } from "../config/global";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  /*
    We'll handle both color and image. If "gradient" is true, we overlay it only if an image is present.
    We'll read from props.backgroundConfig — which includes {color, image, gradient}.
  */
  background-color: ${(props) =>
      props.backgroundConfig?.color
          ? props.backgroundConfig.color
          : "transparent"};

  background-image: ${(props) => {
      const { image, gradient } = props.backgroundConfig || {};
      if (!image) return "none";
      if (gradient) {
          return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${image})`;
      }
      return `url(${image})`;
  }};

  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  margin: 0em auto;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.padding || "1em"};
    ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 1em 1em;
  }
  z-index: ${(props) => props.zIndex || "-1"};
`;

export const SectionSubContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  margin: 0;
  width: 100%;
  max-width: 1000px;
  padding-bottom: ${(props) => props.paddingBottom || "1em"};
  padding-top: 2em;
  justify-content: center;
  z-index: ${(props) => props.zIndex || "1"};
`;
export const SectionMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  width: 100%;
  background: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'solid') return 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.85) 100%)';
    if (variant === 'light') return 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
    if (variant === 'gradient') return `linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(96, 165, 250, 0.12) 100%)`;
    return 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)';
  }};
  backdrop-filter: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'solid') return 'blur(30px) saturate(180%)';
    if (variant === 'light') return 'blur(15px) saturate(150%)';
    return 'blur(20px) saturate(180%)';
  }};
  -webkit-backdrop-filter: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'solid') return 'blur(30px) saturate(180%)';
    if (variant === 'light') return 'blur(15px) saturate(150%)';
    return 'blur(20px) saturate(180%)';
  }};
  border: 1px solid ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'gradient') return 'rgba(167, 139, 250, 0.3)';
    return 'rgba(255, 255, 255, 0.15)';
  }};
  border-radius: ${(props) => props.borderRadius || '24px'};
  box-shadow: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'solid') return '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
    if (variant === 'light') return '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)';
    return '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
  }};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    opacity: 0.6;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
  }
  
  &:hover {
    background: ${(props) => {
      const variant = props.variant || 'default';
      if (variant === 'solid') return 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)';
      if (variant === 'light') return 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
      if (variant === 'gradient') return `linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(96, 165, 250, 0.15) 100%)`;
      return 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)';
    }};
    border-color: ${(props) => {
      const variant = props.variant || 'default';
      if (variant === 'gradient') return 'rgba(167, 139, 250, 0.5)';
      return 'rgba(255, 255, 255, 0.25)';
    }};
    transform: translateY(-3px) scale(1.01);
    box-shadow: ${(props) => {
      const variant = props.variant || 'default';
      if (variant === 'gradient') return '0 12px 48px rgba(167, 139, 250, 0.3), 0 0 20px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)';
      return '0 12px 48px rgba(167, 139, 250, 0.2), 0 0 20px rgba(167, 139, 250, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.25)';
    }};
  }
`;
export const SectionTitleStyle = styled.div`
  font-size: ${(props) => props.fontSize || "8em"};
  color: ${(props) => props.color || Colors.primary};
  font-family: ${Fonts.title};
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1em;
  text-align: center;
  background: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'green') return `linear-gradient(135deg, ${Colors.accent} 0%, ${Colors.secondary} 100%)`;
    if (variant === 'blue') return `linear-gradient(135deg, ${Colors.secondary} 0%, ${Colors.primary} 100%)`;
    if (variant === 'solid') return 'none';
    return `linear-gradient(135deg, ${Colors.primary} 0%, ${Colors.secondary} 100%)`;
  }};
  -webkit-background-clip: ${(props) => props.variant === 'solid' ? 'unset' : 'text'};
  -webkit-text-fill-color: ${(props) => props.variant === 'solid' ? 'unset' : 'transparent'};
  background-clip: ${(props) => props.variant === 'solid' ? 'unset' : 'text'};
  text-shadow: ${(props) => {
    const variant = props.variant || 'default';
    if (variant === 'solid') return 'none';
    if (variant === 'green') return '0 4px 12px rgba(52, 211, 153, 0.3)';
    if (variant === 'blue') return '0 4px 12px rgba(96, 165, 250, 0.3)';
    return '0 4px 12px rgba(167, 139, 250, 0.3)';
  }};
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${(props) => props.fontSize || "4em"};
  }
`;

export const SectionHeadlineStyle = styled.div`
  font-size: ${(props) => props.fontSize || "1.5em"};
  max-width: ${(props) => props.maxWidth || "750px"};
  color: ${(props) => props.color || Colors.textPrimary};
  font-family: ${Fonts.headline};
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.01em;
  text-align: ${(props) => props.textAlign || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${(props) => props.fontSize || "1.5em"};
  }
`;

import styled, { keyframes } from "styled-components";
import { TITLE_FONT_SIZE } from "../styles";

const caretPulse = keyframes`
      0% {
            opacity: 0;
            transform: scale(1);
      }
      50% {
            opacity: 1;
            transform: scale(1.03);
      }
      100% {
            opacity: 0;
            transform: scale(1);
      }
`;

const pulse0 =
    "text-shadow:  0 0 200px rgba(0, 216, 255, 1);";
const pulse1 =
    "text-shadow:  0 0 200px rgba(0, 216, 255, 0.4);";

const textShadowPulse = keyframes`
      0% {
            ${pulse0}
      }
      50% {
            ${pulse1}
      }
      100% {
            ${pulse0}
      }
`;

export const Container = styled.div`
      display: flex;
      gap: 4vw;
      font-size: ${TITLE_FONT_SIZE};
      font-weight: 800;
      font-family: "JetBrains Mono", monospace;
`;

export const StaticText = styled.p``;

export const DynamicText = styled.a`
      margin: -1.5vw;
      padding: 1.5vw;
      border-radius: 2vw;
      color: ${({ theme }) => theme.primaryColor};
      text-decoration: underline;
      animation: ${textShadowPulse} 1.5s ease infinite;

      transition: background-color 500ms ease, backdrop-filter 500ms ease;
      &:hover {
            background-color: ${({ theme }) => theme.whiteHoverBackground};
            backdrop-filter: blur(6px);
      }
`;

export const Caret = styled.div`
      margin-left: -2vw;
      height: ${TITLE_FONT_SIZE};
      width: 0.8vw;
      background-color: ${({ theme }) => theme.primaryColor};
      animation: ${caretPulse} 1.5s ease infinite;
`;

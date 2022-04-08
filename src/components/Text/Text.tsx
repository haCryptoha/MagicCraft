import styled, { DefaultTheme } from "styled-components";
import { space, typography } from "styled-system";
import { TextProps } from "./types";

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Text = styled.div<TextProps>`
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;

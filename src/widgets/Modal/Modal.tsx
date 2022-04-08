import React from "react";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import Flex from "components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "components/Svg";
import { IconButton } from "components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  overflow: hidden;
  background: rgb(39, 38, 44);
  box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px,
    rgb(0 0 0 / 5%) 0px 1px 1px;
  border: 1px solid rgb(56, 50, 65);
  border-radius: 32px;
  width: 100%;
  max-height: 100vh;
  z-index: 100;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(
    139.73deg,
    rgb(49, 61, 92) 0%,
    rgb(61, 42, 84) 100%
  );
  border-bottom: 1px solid rgb(56, 50, 65);
  display: flex;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  color: rgb(244, 238, 255);
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton
            variant="text"
            onClick={onBack}
            area-label="go back"
            mr="8px"
          >
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
    </ModalHeader>
    <StyledGrid>{children}</StyledGrid>
  </StyledModal>
);

export default Modal;

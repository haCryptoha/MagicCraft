import React from "react";
import styled from "styled-components";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";
import { Button } from "components/Button";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  onExpand?: () => void;
  mb: string;
}

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  border: 0px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: auto;
  padding: 16px 24px;
  background-color: transparent;
  color: rgb(31, 199, 212);
  box-shadow: none;
  width: 100%;
`;

const StyledText = styled.div`
  color: rgb(244, 238, 255);
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 8px;
`;

const WalletCard: React.FC<Props> = ({
  login,
  walletConfig,
  onDismiss,
  onExpand,
  mb,
}) => {
  const { title, icon: Icon } = walletConfig;

  return (
    <StyledButton
      onClick={() => {
        if (title === "More") {
          onExpand();
          return;
        }
        login(walletConfig.connectorId);
        window.localStorage.setItem(
          connectorLocalStorageKey,
          walletConfig.connectorId
        );
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" />
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default WalletCard;

import React, { useState } from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import MoreIcon from "./icons/More";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const moreEntry = {
  title: "More",
  icon: MoreIcon,
  connectorId: "More",
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredConfig = !isExpanded ? config.slice(0, 3) : config;

  return (
    <Modal title="Connect Wallet" onDismiss={onDismiss}>
      {filteredConfig.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
      {!isExpanded && (
        <WalletCard
          key={config.length + 1}
          login={login}
          walletConfig={moreEntry}
          onDismiss={onDismiss}
          onExpand={onExpand}
          mb="0"
        />
      )}
    </Modal>
  );
};

export default ConnectModal;

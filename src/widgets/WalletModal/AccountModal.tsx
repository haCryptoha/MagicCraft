import React from "react";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
}) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <div>{account}</div>
    <div style={{ display: "flex", marginBottom: "32px" }}>
      <a href={`https://snowtrace.io/address/${account}`}>View on AvaxScan</a>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        type="button"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </button>
    </div>
  </Modal>
);

export default AccountModal;

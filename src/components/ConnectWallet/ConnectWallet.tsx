import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Button } from "react-bootstrap";
import useWalletModal from "widgets/WalletModal/useWalletModal";
import useAuth from "hooks/useAuth";

const ConnectWallet = (props: any) => {
  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  return (
    <>
      <Button
        style={{ fontSize: "14px" }}
        className="btn1 m-auto"
        onClick={() => {
          if (account) return;
          onPresentConnectModal();
        }}
        {...props}
      >
        {account ? (
          <>{accountEllipsis}</>
        ) : (
          <>
            <div
              style={{
                marginRight: "9px",
              }}
            >
              {"Connect Wallet"}
            </div>
          </>
        )}
      </Button>
    </>
  );
};

export { ConnectWallet };

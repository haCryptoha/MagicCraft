import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { ConnectorNames } from 'widgets/WalletModal'
import Web3 from 'web3'
import getNodeUrl from './getRpcUrl'

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID || '97', 10)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
})

const BSC_MAINNET_PARAMS = {
  chainId: 56,
  chainName: 'BSC mainnet',
  nativeCurrency: {
    name: 'BSC mainnet',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://speedy-nodes-nyc.moralis.io/1c8d8856c017266c637672dd/bsc/mainnet'],
  blockExplorerUrls: ['https://bscscan.com'],
}

const BSC_TESTNET_PARAMS = {
  chainId: 97,
  chainName: 'BSC test',
  nativeCurrency: {
    name: 'BSC test',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://speedy-nodes-nyc.moralis.io/1c8d8856c017266c637672dd/bsc/mainnet'],
  blockExplorerUrls: ['https://testnet.bscscan.com'],
}

const walletlink = new WalletLinkConnector({
  url: BSC_TESTNET_PARAMS.rpcUrls[0],
  appName: 'Hedgepie Finance',
  appLogoUrl: '/images/hpie-logo.png',
})

const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
  [ConnectorNames.Coinbase]: walletlink,
}

export const getLibrary = (provider): Web3 => {
  return provider
}

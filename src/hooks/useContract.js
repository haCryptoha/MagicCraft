import { useEffect, useState } from "react";
import { AbiItem } from "web3-utils";

import useWeb3 from "./useWeb3";
import {
  getMCRTStakeAddress,
  getMCRTTokenAddress,
  getPointsAddress,
} from "../utils/addressHelpers";

import stakingContractJson from "../constants/ABI/MCRTStake.json";
import tokenContractJson from "../constants/ABI/MCRTToken.json";
import pointContractJson from "../constants/ABI/points.json";

const useContract = (abi, address, contractOptions = null) => {
  const web3 = useWeb3();
  const [contract, setContract] = useState(
    new web3.eth.Contract(abi, address, contractOptions)
  );

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions));
  }, [abi, address, contractOptions, web3]);

  return contract;
};

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useStakeContract = () => {
  return useContract(stakingContractJson.abi, getMCRTStakeAddress());
};

export const usePointContract = () => {
  return useContract(pointContractJson.abi, getPointsAddress());
};

export const useMCRT = () => {
  return useContract(tokenContractJson.abi, getMCRTTokenAddress());
};

export default useContract;

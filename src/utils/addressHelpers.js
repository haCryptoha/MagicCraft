import stakingContractJson from "../constants/ABI/MCRTStake.json";
import tokenContractJson from "../constants/ABI/MCRTToken.json";
import pointContractJson from "../constants/ABI/points.json";

const chainId = process.env.REACT_APP_CHAIN_ID;

export const getMCRTStakeAddress = () => {
  return stakingContractJson.contract[chainId];
};

export const getMCRTTokenAddress = () => {
  return tokenContractJson.contract[chainId];
};

export const getPointsAddress = () => {
  return pointContractJson.contract[chainId];
};

import React, { useState , useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import stakingContractJson from '../../ABI/MCRTStake.json';
import tokenContractJson from '../../ABI/MCRTToken.json';
import pointContractJson from '../../ABI/points.json';
import { ethers ,BigNumber} from 'ethers';
import logo from "../../assets/favicon.ico";
import "./index.scss";
import moment from 'moment'
import Footer from "../Shared/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


//Images
import pic from "../../assets/pic.png"

import like from '../../assets/Group1.png';
import graph from '../../assets/Group2.png'
import reward from '../../assets/Group3.png'
import withdrawClaim from '../../assets/Group4.png'
import clock from '../../assets/Clock.png'

const VStaking = (walletAddress) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [visibleOptionDropdown, setVisibleOptionDropdown] = useState(false);

  const [dropdownValue, setDropdownValue] = useState(0);
  const [dropdownOptionValue, setDropdownOptionValue] = useState(0);

  const [address, setWalletAddress] = useState(null);
  const [approved, setApproved] = useState(false);

  const [isapproveloading, setIsApproveLoading] = useState(false);
  const [isstakingloading, setIsStakingLoading] = useState(false);
  const [isclaimloading, setIsClaimLoading] = useState(false);
  const [iswithdrawloading, setWithdrawLoading] = useState(false);
  const [amnt, setAmntInput] = useState(0);

  const [stakedMCRT, setStakedMCRT] = useState(0);
  const [earnedMCRT, setEarnedMCRT] = useState(0);

  const [CurrentMCRT30StakedId,setCurrentMCRT30StakedId] = useState(0);
  const [CurrentMCRT90StakedId,setCurrentMCRT90StakedId] = useState(0);
  const [CurrentMCRT180StakedId,setCurrentMCRT180StakedId] = useState(0);
  const [CurrentMCRT365StakedId,setCurrentMCRT365StakedId] = useState(0);
  const [CurrentMCRT1095StakedId,setCurrentMCRT1095StakedId] = useState(0);
  const [CurrentMCRT1825StakedId,setCurrentMCRT1825StakedId] = useState(0);

  const [CurrentMCRT180StakedPoint,setCurrentMCRT180StakedPoint] = useState(0);
  const [CurrentMCRT365StakedPoint,setCurrentMCRT365StakedPoint] = useState(0);
  const [CurrentMCRT1095StakedPoint,setCurrentMCRT1095StakedPoint] = useState(0);
  const [CurrentMCRT1825StakedPoint,setCurrentMCRT1825StakedPoint] = useState(0);

  const [startTime30TStaking, setstartTime30TStaking] = useState(0);
  const [startTime90TStaking, setstartTime90TStaking] = useState(0);
  const [startTime180TStaking, setstartTime180TStaking] = useState(0);
  const [startTime365TStaking, setstartTime365TStaking] = useState(0);
  const [startTime1095TStaking, setstartTime1095TStaking] = useState(0);
  const [startTime1825TStaking, setstartTime1825TStaking] = useState(0);

  const [startTime180PStaking, setstartTime180PStaking] = useState(0);
  const [startTime365PStaking, setstartTime365PStaking] = useState(0);
  const [startTime1095PStaking, setstartTime1095PStaking] = useState(0);
  const [startTime1825PStaking, setstartTime1825PStaking] = useState(0);

  const [MCRT30StakedT,setMCRT30StakedT] = useState(0);
  const [MCRT90StakedT,setMCRT90StakedT] = useState(0);
  const [MCRT180StakedT,setMCRT180StakedT] = useState(0);
  const [MCRT365StakedT,setMCRT365StakedT] = useState(0);
  const [MCRT1095StakedT,setMCRT1095StakedT] = useState(0);
  const [MCRT1825StakedT,setMCRT1825StakedT] = useState(0);

  const [MCRTEarned30StakedT,setMCRTEarned30StakedT] = useState(0);
  const [MCRTEarned90StakedT,setMCRTEarned90StakedT] = useState(0);
  const [MCRTEarned180StakedT,setMCRTEarned180StakedT] = useState(0);
  const [MCRTEarned365StakedT,setMCRTEarned365StakedT] = useState(0);
  const [MCRTEarned1095StakedT,setMCRTEarned1095StakedT] = useState(0);
  const [MCRTEarned1825StakedT,setMCRTEarned1825StakedT] = useState(0);

  const [MCRTEarned180StakedP,setMCRTEarned180StakedP] = useState(0);
  const [MCRTEarned365StakedP,setMCRTEarned365StakedP] = useState(0);
  const [MCRTEarned1095StakedP,setMCRTEarned1095StakedP] = useState(0);
  const [MCRTEarned1825StakedP,setMCRTEarned1825StakedP] = useState(0);


  const [MCRT180StakedP,setMCRT180StakedP] = useState(0);
  const [MCRT365StakedP,setMCRT365StakedP] = useState(0);
  const [MCRT1095StakedP,setMCRT1095StakedP] = useState(0);
  const [MCRT1825StakedP,setMCRT1825StakedP] = useState(0);

  const [MCRTForItem, setMCRTForItem] = useState(0);
  const [MCRTForCharacter, setMCRTForCharacter] = useState(0);
  const [MCRTForLand, setMCRTForLand] = useState(0);
  const [MCRTFor2Land, setMCRTFor2Land] = useState(0);


  const [isActive, setIsAcitve] = useState(false);
  const [status, setStatus] = useState(false);
  const [stakingTime, setStakingTime] = useState("");
  const [earnTitle, setEarnedTitle] = useState("Earned MCRT");
  

  const getAllAddressStakes = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stakingContract = new ethers.Contract(
      stakingContractJson.contract,
      stakingContractJson.abi,
      signer
    );
    
    let ret = await stakingContract.getAllAddressStakes(address);

    const pointContract = new ethers.Contract(
      pointContractJson.contract,
      pointContractJson.abi,
      signer
    );
    let point = await pointContract.pointsOf(address);


    
    let StakedMCRT = 0;
    let staked30Token = 0;
    let staked90Token = 0;
    let staked180Token = 0;
    let staked365Token = 0;
    let staked1095Token = 0;
    let staked1825Token = 0;

    let earned30Token = 0;
    let earned90Token = 0;
    let earned180Token = 0;
    let earned365Token = 0;
    let earned1095Token = 0;
    let earned1825Token = 0;

    let staked180Point = 0;
    let staked365Point = 0;
    let staked1095Point = 0;
    let staked1825Point = 0;

    let earned180Point = 0;
    let earned365Point = 0;
    let earned1095Point = 0;
    let earned1825Point = 0;

    earned180Point = point[0].toNumber();
    earned365Point = point[1].toNumber();
    earned1095Point = point[2].toNumber();
    earned1825Point = point[2].toNumber();


    for (var i = ret.length-1; i>=0; i--){
      StakedMCRT = ret[i]["tokensStaked"]/Math.pow(10,18);
      if(ret[i]["option"]===false){
        if(StakedMCRT>0){
          if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() ===  2592000){
            setCurrentMCRT30StakedId(ret[i]["id"].toNumber());
            setstartTime30TStaking(ret[i]["stakingTime"].toNumber());
            staked30Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned30Token += earn/Math.pow(10,18);
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 7776000){
            setCurrentMCRT90StakedId(ret[i]["id"].toNumber());
            setstartTime90TStaking(ret[i]["stakingTime"].toNumber());
            staked90Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned90Token += earn/Math.pow(10,18);
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 15552000){
            setCurrentMCRT180StakedId(ret[i]["id"].toNumber());
            setstartTime180TStaking(ret[i]["stakingTime"].toNumber());
            staked180Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned180Token += earn/Math.pow(10,18);
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 31536000){
            setCurrentMCRT365StakedId(ret[i]["id"].toNumber());
            setstartTime365TStaking(ret[i]["stakingTime"].toNumber());
            staked365Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned365Token += earn/Math.pow(10,18);
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 94608000){
            setCurrentMCRT1095StakedId(ret[i]["id"].toNumber());
            setstartTime1095TStaking(ret[i]["stakingTime"].toNumber());
            staked1095Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned1095Token += earn/Math.pow(10,18);
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 157680000){
            setCurrentMCRT1825StakedId(ret[i]["id"].toNumber());
            setstartTime1825TStaking(ret[i]["stakingTime"].toNumber());
            staked1825Token += StakedMCRT;
            let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
            earned1825Token += earn/Math.pow(10,18);
          }
        }
      } else {
        if(StakedMCRT>0){
          if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 15552000){
            setCurrentMCRT180StakedPoint(ret[i]["id"].toNumber());
            setstartTime180PStaking(ret[i]["stakingTime"].toNumber());
            staked180Point += StakedMCRT;
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 31536000){
            setCurrentMCRT365StakedPoint(ret[i]["id"].toNumber());
            setstartTime365PStaking(ret[i]["stakingTime"].toNumber());
            staked365Point += StakedMCRT;
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 94608000){
            setCurrentMCRT1095StakedPoint(ret[i]["id"].toNumber());
            setstartTime1095PStaking(ret[i]["stakingTime"].toNumber());
            staked1095Point += StakedMCRT;
          } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 157680000){
            setCurrentMCRT1825StakedPoint(ret[i]["id"].toNumber());
            setstartTime1825PStaking(ret[i]["stakingTime"].toNumber());
            staked1825Point += StakedMCRT;
          }
        }
      }
    }
    setMCRT30StakedT(staked30Token);
    setMCRT90StakedT(staked90Token);
    setMCRT180StakedT(staked180Token);
    setMCRT365StakedT(staked365Token);
    setMCRT1095StakedT(staked1095Token);
    setMCRT1825StakedT(staked1825Token);

    setMCRTEarned30StakedT(earned30Token);
    setMCRTEarned90StakedT(earned90Token);
    setMCRTEarned180StakedT(earned180Token);
    setMCRTEarned365StakedT(earned365Token);
    setMCRTEarned1095StakedT(earned1095Token);
    setMCRTEarned1825StakedT(earned1825Token);


    setMCRT180StakedP(staked180Point);
    setMCRT365StakedP(staked365Point);
    setMCRT1095StakedP(staked1095Point);
    setMCRT1825StakedP(staked1825Point);

    setMCRTEarned180StakedP(earned180Point);
    setMCRTEarned365StakedP(earned365Point);
    setMCRTEarned1095StakedP(earned1095Point);
    setMCRTEarned1825StakedP(earned1825Point);
    if(dropdownOptionValue == 0){
      if(dropdownValue === 0){
        setStakedMCRT(staked30Token.toFixed(4));
        setEarnedMCRT(earned30Token.toFixed(4));
      } else if(dropdownValue === 1){
        setStakedMCRT(staked90Token.toFixed(4));
        setEarnedMCRT(earned90Token.toFixed(4));
      } else if(dropdownValue === 2){
        setStakedMCRT(staked180Token.toFixed(4));
        setEarnedMCRT(earned180Token.toFixed(4));
      } else if(dropdownValue === 3){
        setStakedMCRT(staked365Token.toFixed(4));
        setEarnedMCRT(earned365Token.toFixed(4));
      } else if(dropdownValue === 4){
        setStakedMCRT(staked1095Token.toFixed(4));
        setEarnedMCRT(earned1095Token.toFixed(4));
      } else if(dropdownValue === 5){
        setStakedMCRT(staked1825Token.toFixed(4));
        setEarnedMCRT(earned1825Token.toFixed(4));
      }
    } else {
      if(dropdownValue === 2){
        setStakedMCRT(staked180Point.toFixed(4));
        setEarnedMCRT(earned180Point.toFixed(0));
      } else if(dropdownValue === 3){
        setStakedMCRT(staked365Point.toFixed(4));
        setEarnedMCRT(earned365Point.toFixed(0));
      } else if(dropdownValue === 4){
        setStakedMCRT(staked1095Point.toFixed(4));
        setEarnedMCRT(earned1095Point.toFixed(0));
      } else if(dropdownValue === 5){
        setStakedMCRT(staked1825Point.toFixed(4));
        setEarnedMCRT(earned1825Point.toFixed(0));
      }
    }
    setIsAcitve(true);
  }
  const approve = async() => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(
      tokenContractJson.contract,
      tokenContractJson.abi,
      signer
    );
    setIsApproveLoading(true);
    try {
      await tokenContract.approve(stakingContractJson.contract, ethers.utils.parseUnits('500000000', 18));
      tokenContract.on("Approval",(owner,spender,amount,event) => {
        toast.success("Approve is Success!, You can stake the token since now!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
        setIsApproveLoading(false);
        setApproved(true);
      });
      
    } catch (error) {
      if(error["code"]===4001){
        toast.error(error["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      } else{
        toast.error(error["data"]["message"].split(":")[2], {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
        transition: Flip,
        });
      }
      setTimeout(() => setIsApproveLoading(false),4000);
    }
  }
  const errorWallet = () => {
    toast.error("Please connect the wallet", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
      transition: Flip,
      });
  }
  const approveToast = () => {
    toast.error("already approved!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
      transition: Flip,
      });
  }

  const increaseStaking = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stakingContract = new ethers.Contract(
      stakingContractJson.contract,
      stakingContractJson.abi,
      signer
    );
    let period = 0;
    setIsStakingLoading(true);

    if (dropdownValue === 0){
      period=2592000;
    } else if (dropdownValue === 1){
      period=7776000;
    } else if (dropdownValue === 2){
      period= 15552000;
    } else if (dropdownValue === 3){
      period= 31536000;
    } else if (dropdownValue === 4){
      period= 94608000;
    } else if (dropdownValue === 5){
      period= 157680000;
    }
    
    try {
      let amount = 0;
      if(dropdownOptionValue === 0){
        amount = amnt;
      } else {
         if (dropdownValue === 2){
          amount = MCRTForItem;
        } else if (dropdownValue === 3){
          amount = MCRTForCharacter;
        } else if (dropdownValue === 4){
          amount = MCRTForLand;
        } else if (dropdownValue === 5){
          amount = MCRTForLand;
        }
      }

      await stakingContract.stake(ethers.utils.parseUnits(amount.toString(), 18),period,dropdownOptionValue);
      stakingContract.on("Stake",(id,address,event) => {
          setStatus(true);
          setIsStakingLoading(false);
      });
    } catch (error) 
    {
      if(error["code"]===4001){
        toast.error(error["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      } else {
        toast.error(error["data"]["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
        });
      }
      
      setTimeout (()=>setIsStakingLoading(false),4000);
    }
    
  }

  const renderStake = () => {
    if(address){
      if(approved){
        return(
          <button onClick={()=>increaseStaking()}>{isstakingloading?<div className="loading_btn_style"><span><i className="fa fa-spinner fa-spin"></i> Loading</span></div>  :  <div className="btn_style"><img src={graph}/> <div>Increase Stake</div></div>}</button>
        );
      } else {
        return(
          <button onClick={()=>approve()}>{isapproveloading? <div className="loading_btn_style"><span><i className="fa fa-spinner fa-spin"></i> Approving</span></div> : <div className="btn_style"><img src={like}/> Approve</div>}</button>
        );
      } 
    } else {
      return(
        <button onClick={()=>errorWallet()} ><div className="btn_style"><img src={like}/> Approve</div></button>
      );
    }

  }

  const renderStakeAmount = () => {
    if (dropdownOptionValue === 0){
      return (
        <input
          type="number"
          className="vstaking__stake__action-input"
          value={amnt}
          onInput={e=>setAmntInput(e.target.value)}
          min={0}
        /> 
      );
    } else if(dropdownOptionValue === 1) {
      if(dropdownValue === 0){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={amnt}
            disabled
          /> 
        );
      } else if(dropdownValue === 1){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={amnt}
            disabled
          /> 
        );
      } else if(dropdownValue === 2){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={MCRTForItem}
            disabled
          /> 
        );
      } else if(dropdownValue === 3){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={MCRTForCharacter}
            disabled
          /> 
        );
      } else if(dropdownValue === 4){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={MCRTForLand}
            disabled
          /> 
        );
      } else if(dropdownValue === 5){
        return (
          <input
            type="number"
            className="vstaking__stake__action-input"
            value={MCRTFor2Land}
            disabled
          /> 
        );
      }

    }

  }
  const withdraw = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stakingContract = new ethers.Contract(
      stakingContractJson.contract,
      stakingContractJson.abi,
      signer
    );
    setWithdrawLoading(true);
    try{
      if(dropdownOptionValue === 0){
        if(dropdownValue === 0){
          await stakingContract.unstake(CurrentMCRT30StakedId);
        } else if(dropdownValue === 1){
          await stakingContract.unstake(CurrentMCRT90StakedId);
        } else if(dropdownValue === 2){
          await stakingContract.unstake(CurrentMCRT180StakedId);
        } else if(dropdownValue === 3){
          await stakingContract.unstake(CurrentMCRT365StakedId);
        } else if(dropdownValue === 4){
          await stakingContract.unstake(CurrentMCRT1095StakedId);
        } else if(dropdownValue === 5){
          await stakingContract.unstake(CurrentMCRT1825StakedId);
        }
        stakingContract.on("Unstake",(id,address,event) => {
          setStatus(true);
          setWithdrawLoading(false);
        });
      } else {
          if(dropdownValue === 2){
            await stakingContract.unstake(CurrentMCRT180StakedPoint);
            stakingContract.on("Unstake",(id,address,event) => {
              setStatus(true);
              setWithdrawLoading(false);
            });
          } else if(dropdownValue === 3){
            await stakingContract.unstake(CurrentMCRT365StakedPoint);
            stakingContract.on("Unstake",(id,address,event) => {
              setStatus(true);
              setWithdrawLoading(false);
            });
          } else if(dropdownValue === 4){
            await stakingContract.unstake(CurrentMCRT1095StakedPoint);
            stakingContract.on("Unstake",(id,address,event) => {
              setStatus(true);
              setWithdrawLoading(false);
            });
          } else if(dropdownValue === 5){
            await stakingContract.unstake(CurrentMCRT1825StakedPoint);
            stakingContract.on("Unstake",(id,address,event) => {
              setStatus(true);
              setWithdrawLoading(false);
            });
          } else {
            setWithdrawLoading(false);
          }
      } 
    } catch(error) {
      if(error["code"]===4001){
        toast.error(error["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      } else{
        toast.error(error["data"]["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          }); 
        }
      setTimeout (()=>setWithdrawLoading(false),4000);

    }
  }
  const renderUnStake = () => {
    if (address){
      if(approved){
        return(
          <button onClick={()=>withdraw()}>{iswithdrawloading? <div className="loading_btn_style"><span><i className="fa fa-spinner fa-spin"></i> Loading</span></div> : <div className="btn_style"><img src={withdrawClaim}/> Withdraw  tokens</div>}</button>
        );
        } else {
          return(
            <button disabled><div className="btn_style"><img src={withdrawClaim}/> Withdraw  tokens</div></button>
        );
      }
    } else {
      return(
        <button onClick={()=>errorWallet()} ><div className="btn_style"><img src={like}/> Approve</div></button>
      );
    }
  }
  const claimrwrd = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stakingContract = new ethers.Contract(
      stakingContractJson.contract,
      stakingContractJson.abi,
      signer
    );
    const pointContract = new ethers.Contract(
      pointContractJson.contract,
      pointContractJson.abi,
      signer
    );

    setIsClaimLoading(true);
    
    try {
      if(dropdownOptionValue===0){
        toast.error("Please claim the reward and staked token by clicking the 'Withdraw Button'!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      } else{
        if(dropdownValue===2){
          await stakingContract.getPointReward(CurrentMCRT180StakedPoint);
          pointContract.on("TransferPoints",(from,to,item,character,land,event) => {
            setStatus(true);
            setIsClaimLoading(false);
          });
        } else if(dropdownValue===3){
          await stakingContract.getPointReward(CurrentMCRT365StakedPoint);
          pointContract.on("TransferPoints",(from,to,item,character,land,event) => {
            setStatus(true);
            setIsClaimLoading(false);
          });
        } else if(dropdownValue===4){
          await stakingContract.getPointReward(CurrentMCRT1095StakedPoint);
          pointContract.on("TransferPoints",(from,to,item,character,land,event) => {
            setStatus(true);
            setIsClaimLoading(false);
          });
        } else if(dropdownValue===5){
          await stakingContract.getPointReward(CurrentMCRT1825StakedPoint);
          pointContract.on("TransferPoints",(from,to,item,character,land,event) => {
            setStatus(true);
            setIsClaimLoading(false);
          });
        } else {
          setIsClaimLoading(false);
        }


      }
 
    } catch (error) {
      if(error["code"]===4001){
        toast.error(error["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      }else{
        toast.error(error["data"]["message"].split(":")[1], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          transition: Flip,
          });
      }
      setTimeout(()=> setIsClaimLoading(false),4000);
    }
  }
  const renderClaim = () => {
    if (address){
      if(approved){
        return(
            <button onClick={()=>claimrwrd()}>{isclaimloading? <div className="loading_btn_style"><span><i className="fa fa-spinner fa-spin"></i> Loading</span></div> : <div className="btn_style"><img src={reward}/> Claim NFT Point</div>}</button>
        );
        } else {
          return(
            <button disabled><div className="btn_style"><img src={reward}/> Claim NFT Point</div></button>
        );
      }
    } else {
      return(
        <button onClick={()=>errorWallet()} ><div className="btn_style"><img src={like}/> Approve</div></button>
      );
    }

  }
  useEffect(() => {
    setWalletAddress(walletAddress.walletAddress);
  },[walletAddress.walletAddress]);

  useEffect(() => {
    const fetchContractdata = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractJson.contract,
        stakingContractJson.abi,
        signer
      );

       let point = await stakingContract.minStakeTokensForPoint(ethers.utils.parseUnits('15552', 3));
       setMCRTForItem(point/Math.pow(10,18));

       point = await stakingContract.minStakeTokensForPoint(ethers.utils.parseUnits('31536', 3));
       setMCRTForCharacter(point/Math.pow(10,18));

       point = await stakingContract.minStakeTokensForPoint(ethers.utils.parseUnits("94608",3));
       setMCRTForLand(point/Math.pow(10,18));

       point = await stakingContract.minStakeTokensForPoint(ethers.utils.parseUnits("15768",4));
       setMCRTFor2Land(point/Math.pow(10,18));

      const tokenContract = new ethers.Contract(
        tokenContractJson.contract,
        tokenContractJson.abi,
        signer
      );
      const amount = await tokenContract.allowance(address,stakingContractJson.contract);
      if (amount>0){
        setApproved(true);
      }
      getAllAddressStakes();
    };

    if(address){
      fetchContractdata();
    }
  },address);

  useEffect(()=>{
    const showStakingTime = () => {
      if(dropdownOptionValue === 0){
        setEarnedTitle("Earned MCRT");
        if(dropdownValue === 0){
          if(startTime30TStaking!==0){
            const date = new Date(startTime30TStaking*1000 + 3600 * 24 * 30 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }

          setStakedMCRT(MCRT30StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned30StakedT.toFixed(4));
        } else if(dropdownValue === 1){
          if(startTime90TStaking!==0){
            const date = new Date(startTime90TStaking*1000 + 3600 * 24 * 90 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT90StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned90StakedT.toFixed(4));

        } else if(dropdownValue === 2){
          if(startTime180TStaking!==0){
            const date = new Date(startTime180TStaking*1000 + 3600 * 24 * 180 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT180StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned180StakedT.toFixed(4));

        } else if(dropdownValue === 3){
          if(startTime365TStaking!==0){
            const date = new Date(startTime365TStaking*1000 + 3600 * 24 * 365 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT365StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned365StakedT.toFixed(4));

        } else if(dropdownValue === 4){
          if(startTime1095TStaking!==0){
            const date = new Date(startTime1095TStaking*1000 + 3600 * 24 * 1095 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT1095StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned1095StakedT.toFixed(4));

        } else if(dropdownValue === 5){
          if(startTime1825TStaking!==0){
            const date = new Date(startTime1825TStaking*1000 + 3600 * 24 * 1825 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT1825StakedT.toFixed(4));
          setEarnedMCRT(MCRTEarned1825StakedT.toFixed(4));

        }
      } else if(dropdownOptionValue ===1 ){
        if(dropdownValue === 2){
          if(startTime180PStaking!==0){
            const date = new Date(startTime180PStaking*1000 + 3600 * 24 * 180 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT180StakedP.toFixed(4));
          setEarnedMCRT(MCRTEarned180StakedP.toFixed(0));
          setEarnedTitle("Earned Epic Item");
        } else if(dropdownValue === 3){
          if(startTime365PStaking!==0){
            const date = new Date(startTime365PStaking*1000 + 3600 * 24 * 365 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT365StakedP.toFixed(4));
          setEarnedMCRT(MCRTEarned365StakedP.toFixed(0));
          setEarnedTitle("Earned Character Point");
        } else if(dropdownValue === 4){
          if(startTime1095PStaking!==0){
            const date = new Date(startTime1095PStaking*1000 + 3600 * 24 * 1095 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT1095StakedP.toFixed(4));
          setEarnedMCRT(MCRTEarned1095StakedP.toFixed(0));
          setEarnedTitle("Earned Land Point");
        } else if(dropdownValue === 5){
          if(startTime1825PStaking!==0){
            const date = new Date(startTime1825PStaking*1000 + 3600 * 24 * 1825 * 1000);
            setStakingTime(date.toLocaleDateString("en-US"));
          } else {
            setStakingTime("");
          }
          setStakedMCRT(MCRT1825StakedP.toFixed(4));
          setEarnedMCRT(MCRTEarned1825StakedP.toFixed(0));
          setEarnedTitle("Earned Land Point");
        } else {
          setStakedMCRT("0.0000");
          setEarnedMCRT("0.0000");
          setStakingTime("");
        }
      }
      setIsAcitve(false);
    }
    
      showStakingTime();
    
  },[isActive,dropdownValue,dropdownOptionValue]);

  useEffect(() => {
    if(status){
        if(status){
          getAllAddressStakes();
          setStatus(false);
        }
    }
  },[status])

  useEffect(()=>{
    const getEarnedTokenRealTime = async() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const stakingContract = new ethers.Contract(
          stakingContractJson.contract,
          stakingContractJson.abi,
          signer
        );
        
        let ret = await stakingContract.getAllAddressStakes(address);

        let earned30Token = 0;
        let earned90Token = 0;
        let earned180Token = 0;
        let earned365Token = 0;
        let earned1095Token = 0;
        let earned1825Token = 0;

        for (var i = ret.length-1; i>=0; i--){
          let StakedMCRT = ret[i]["tokensStaked"]/Math.pow(10,18);
          if(ret[i]["option"]===false){
            if(StakedMCRT>0){
              if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() ===  2592000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned30Token += earn/Math.pow(10,18);
              } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 7776000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned90Token += earn/Math.pow(10,18);
              } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 15552000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned180Token += earn/Math.pow(10,18);
              } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 31536000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned365Token += earn/Math.pow(10,18);
              } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 94608000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned1095Token += earn/Math.pow(10,18);
              } else if(ret[i]["timeToUnlock"].toNumber()-ret[i]["stakingTime"].toNumber() === 157680000){
                let earn = await stakingContract.earned(address,ret[i]["id"].toNumber());
                earned1825Token += earn/Math.pow(10,18);
              }
            }
          } 
        }
        setMCRTEarned30StakedT(earned30Token);
        setMCRTEarned90StakedT(earned90Token);
        setMCRTEarned180StakedT(earned180Token);
        setMCRTEarned365StakedT(earned365Token);
        setMCRTEarned1095StakedT(earned1095Token);
        setMCRTEarned1825StakedT(earned1825Token);
        if(dropdownOptionValue===0){
          if(dropdownValue === 0){
            setEarnedMCRT(earned30Token.toFixed(4));
          } else if(dropdownValue === 1){
            setEarnedMCRT(earned90Token.toFixed(4));
          } else if(dropdownValue === 2){
            setEarnedMCRT(earned180Token.toFixed(4));
          } else if(dropdownValue === 3){
            setEarnedMCRT(earned365Token.toFixed(4));
          } else if(dropdownValue === 4){
            setEarnedMCRT(earned1095Token.toFixed(4));
          } else if(dropdownValue === 5){
            setEarnedMCRT(earned1825Token.toFixed(4));
          }
        }
    } 
    if(address){
      const interval = setInterval(() => {
        getEarnedTokenRealTime();
      }, 60000);
      return () => clearInterval(interval);
    }
  },[address])

  const dropdownList = [
    "Stake (lock) for 30 days",
    "Stake (lock) for 90 days",
    "Stake (lock) for 180 days",
    "Stake (lock) for 1 year",
    "Stake (lock) for 3 years",
    "Stake (lock) for 5 years",
  ];

  const dropdownListForOption = [
    "APY Reward method",
    "NFT Reward method",
  ];

  return (
    <div> 
      <div className="vstaking">
        <Container>
          <Row>
          <h1>MCRT Staking </h1>
            <Col sm={6}>
              <div className="vstaking__status-wrapper">
                <div className="vstaking__status">
                  <div className="vstaking__status-item">
                    <div>
                      <img src={logo} alt="" />
                      <span>{stakedMCRT}</span>
                    </div>
                  </div>
                  <p>Staked MCRT</p>
                </div>

                <div className="vstaking__status">
                  <div className="vstaking__status-item">
                    <div>
                      <img src={logo} alt="" />
                      <span>{earnedMCRT}</span>
                    </div>
                  </div>
                  <p>{earnTitle}</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="vstaking__status-wrapper">
                <div className="vstaking__status">
                  <img src={pic}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        

        <Container className="vstaking__stake">
          
          <Row className="vstaking_margin">
            <Col sm={6} className="vstaking__stake__action">
            <h4>Staking Method</h4>
              <div style={{ position: "relative" }} className="border_gradiant">
                <div
                  className={`vstaking__stake__action-select ${
                    visibleOptionDropdown ? "active" : ""
                  }`}
                  onClick={() => setVisibleOptionDropdown(!visibleOptionDropdown)}
                >
                  <span>{dropdownListForOption[dropdownOptionValue]}</span>
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-8mmkcg"
                    fill="#fff"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
                {visibleOptionDropdown && (
                    <ul className="vstaking__stake__action-selectoption">
                    {dropdownListForOption.map((it, idx) => {
                      return (
                        <li
                          key={idx}
                          onClick={() => {
                            setDropdownOptionValue(idx);
                            setVisibleOptionDropdown(false);
                          }}
                        >
                          {it}
                        </li>
                      );
                    })}
                    </ul>
                )}
              </div><p></p>
              <h4>Token Amount</h4>
              <div className="border_gradiant">
                {renderStakeAmount()}
              </div>

              <h4>Stacking Period</h4>
              <div style={{ position: "relative" }} className="border_gradiant">
                <div
                  className={`vstaking__stake__action-select ${
                    visibleDropdown ? "active" : ""
                  }`}
                  onClick={() => setVisibleDropdown(!visibleDropdown)}
                >
                  <span>{dropdownList[dropdownValue]}</span>
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-8mmkcg"
                    fill="#fff"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
                {visibleDropdown && (
                  <ul className="vstaking__stake__action-option">
                    {dropdownList.map((it, idx) => {
                      return (
                        <li
                          key={idx}
                          onClick={() => {
                            setDropdownValue(idx);
                            setVisibleDropdown(false);
                          }}
                        >
                          {it}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <p className="vstaking__stake__action__hint-till">
              <img src={clock} />stake until {stakingTime}
              </p>
              <p className="vstaking__stake__action__hint-strong">
                If you Stake for the first time the first transaction is only to
                approve your <strong>MCRT</strong> after that you current staking current</p>
              {renderStake()}
              {renderClaim()}
              {renderUnStake()}
              <Container className="vstaking__help">
                <span>
                - Stake as many times as you like<br/>
                - Staked tokens count towards MCRTLaunch lottery<br/>
                - Unstake penalty only applies to staked amount, not APY rewards<br/>
                - You can stake or withdraw staked tokens at the end of staking<br/>
                - You can claim the reward tokens at the end of the staking<br/>
                - but you can claim the nft point at anytime<br/>
                </span>
              </Container>
            </Col>

            <Col sm={6} className="vstaking__stake__info">
              <h4>Bonus Token</h4>
              <table>
                <tr>
                  <th>Duartion</th>
                  <th>APY</th>
                  <th>Earn Tokens</th>
                </tr>
                <tr>
                  <td>30 days</td>
                  <td>25% bonus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>90 days</td>
                  <td>50% bonus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>180 days</td>
                  <td>75% bonus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1 year</td>
                  <td>100% bonus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>3 years</td>
                  <td>150% bonus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>5 years</td>
                  <td>200% bonus</td>
                  <td>100</td>
                </tr>
              </table>
              <br/>

              <h4>Token Amount For NFT</h4>
              <table>
                <tr>
                  <th>Duartion</th>
                  <th>Token Amount</th>
                </tr>
                <tr>
                  <td>180 days</td>
                  <td>{MCRTForItem}</td>
                </tr>
                <tr>
                  <td>1 year</td>
                  <td>{MCRTForCharacter}</td>
                </tr>
                <tr>
                  <td>3 years</td>
                  <td>{MCRTForLand}</td>
                </tr>
                <tr>
                  <td>5 years</td>
                  <td>{MCRTFor2Land}</td>
                </tr>
              </table>
              <br/>

              <h4>Earned NFT</h4>
              <table>
                <tr>
                  <th>NFT TYPE</th>
                  <th>Earned NFT</th>
                </tr>
                <tr>
                  <td>Items</td>
                  <td>{MCRTEarned180StakedP} </td>
                </tr>
                <tr>
                  <td>Characters</td>
                  <td>{MCRTEarned365StakedP}</td>
                </tr>
                <tr>
                  <td>Land</td>
                  <td>{MCRTEarned1095StakedP} </td>
                </tr>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Footer/>
      </Container>
    </div>
  );
};

export default VStaking;

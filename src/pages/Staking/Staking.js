import React, { useEffect, useState } from 'react';
import favicon from '../../assets/favicon.png';
import icon_lock from '../../assets/icon-lock.svg';
import modal_cross from '../../assets/modal-cross.svg';
import './css/style.css';
import stakingContractJson from '../../ABI/MCRTStake.json';
import tokenContractJson from '../../ABI/MCRTToken.json';
import { ethers } from 'ethers';
import {Modal,Button,Row,Col, Table} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

let MCRTPrice = 0;
let MCRTDecimals = 0;
let PointPrice = 0;
let PointDecimals = 0;
let container;

const Staking = (walletAddress) => {
    const [MCRT30Earned,setMCRT30Earned] = useState(0);
    const [MCRT90Earned,setMCRT90Earned] = useState(0);
    const [MCRT180Earned,setMCRT180Earned] = useState(0);
    const [MCRT365Earned,setMCRT365Earned] = useState(0);
    const [MCRT1095Earned,setMCRT1095Earned] = useState(0);
    const [MCRT1825Earned,setMCRT1825Earned] = useState(0);

    const [Staked30Lpbalancep,setStaked30Lpbalancep] = useState(0);
    const [Staked90Lpbalancep,setStaked90Lpbalancep] = useState(0);
    const [Staked180Lpbalancep,setStaked180Lpbalancep] = useState(0);
    const [Staked365Lpbalancep,setStaked365Lpbalancep] = useState(0);
    const [Staked1095Lpbalancep,setStaked1095Lpbalancep] = useState(0);
    const [Staked1825Lpbalancep,setStaked1825Lpbalancep] = useState(0);

    const [apr30,setapr30] = useState(0);
    const [apr90,setapr90] = useState(0);
    const [apr180,setapr180] = useState(0);
    const [apr365,setapr365] = useState(0);
    const [apr1095,setapr1095] = useState(0);
    const [apr1825,setapr1825] = useState(0);

    const [MCRT30StakedT,setMCRT30StakedT] = useState(0);
    const [MCRT90StakedT,setMCRT90StakedT] = useState(0);
    const [MCRT180StakedT,setMCRT180StakedT] = useState(0);
    const [MCRT365StakedT,setMCRT365StakedT] = useState(0);
    const [MCRT1095StakedT,setMCRT1095StakedT] = useState(0);
    const [MCRT1825StakedT,setMCRT1825StakedT] = useState(0);

    const [itemPoints, setItemPoints] = useState(0);
    const [characterPoints, setCharacterPoints] = useState(0);
    const [landPoints1095, setLandPoints1095] = useState(0);
    const [landPoints1825, setLandPoints1825] = useState(0);
    const [landPoints, setLandPoints] = useState(0);
   
    const [totalstaked,setTotalstaked] = useState(0);
    const [totalMCRTStakedByMe, setTotalMCRTStakedByMe] = useState(0);
    const [MCRTbalancep, setMCRTbalancep] = useState(0);

    const [staking30amount, setStaking30amount] = useState(0);
    const [staking90amount, setStaking90amount] = useState(0);
    const [staking180amount, setStaking180amount] = useState(0);
    const [staking365amount, setStaking365amount] = useState(0);
    const [staking1095amount, setStaking1095amount] = useState(0);
    const [staking1825amount, setStaking1825amount] = useState(0);

    const [isapproveloading, setIsApproveLoading] = useState(false);
    const [isstakingloading, setIsStakingLoading] = useState(false);
    const [isclaimloading, setIsClaimLoading] = useState(false);
    const [iswithdrawloading, setWithdrawLoading] = useState(false);

    const [status30, setStatus30] = useState(false);
    const [status90, setStatus90] = useState(false);
    const [status180, setStatus180] = useState(false);
    const [status365, setStatus365] = useState(false);
    const [status1095, setStatus1095] = useState(false);
    const [status1825, setStatus1825] = useState(false);


    const [option, setTempOption] = useState(0);
    const [approved, setApproved] = useState(false);
    const [changedStatus, setChangeStatus] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setChangeOption = (e) => {
      setTempOption(e);
      setChangeStatus(true);
    }

    const getStakedMCRT = async(period) => {
      const address = walletAddress.walletAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractJson.contract,
        stakingContractJson.abi,
        signer
      );
      let ret = await stakingContract.yourStakedMCRT(address,period,option);
      if(period === 30){
        console.log(ret[3].toNumber());

        if(option === 0){
          let reward = ret[4].toNumber() + ret[3] * ret[0] * ret[1] / 86400/36500/Math.pow(10,18);
          setMCRT30Earned(reward.toFixed(4));
          let stacked = ret[1] / Math.pow(10, 18);
          setStaked30Lpbalancep(stacked.toFixed(4));
          let apr = ret[0];
          setapr30(apr+"%");
        } else if (option ===1) {
          setMCRT30Earned(0);
          setStaked30Lpbalancep(0);
          setapr30(0+"%");
        }
        let totalStakedMCTR =ret[2] / Math.pow(10, 18);
        setMCRT30StakedT(totalStakedMCTR);
      } else if(period === 90){
        if(option === 0){
          let reward = ret[4].toNumber() + ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
          setMCRT90Earned(reward.toFixed(4));
          let stacked = ret[1] / Math.pow(10, 18);
          setStaked90Lpbalancep(stacked.toFixed(4));
          let apr = ret[0];
          setapr90(apr+"%");
        } else if (option ===1) {
          setMCRT90Earned(0);
          setStaked90Lpbalancep(0);
          setapr90(0+"%");
        }
        let totalStakedMCTR =ret[2] / Math.pow(10, 18);
        setMCRT90StakedT(totalStakedMCTR);

      } else if(period === 180 ){
        if (option === 0){
          let reward = ret[4].toNumber() + ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
          setMCRT180Earned(reward.toFixed(4));
          let stacked = ret[1] / Math.pow(10, 18);
          setStaked180Lpbalancep(stacked.toFixed(4));
          let apr = ret[0];
          setapr180(apr+"%");
        } else if (option ===1){
            setapr180("Item Point");
            let reward =  ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
            reward = ret[4].toNumber() + reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
            setMCRT180Earned(reward.toFixed(0));
            setItemPoints(reward.toFixed(0));
            let stacked = ret[1] / Math.pow(10, 18);
            setStaked180Lpbalancep(stacked.toFixed(4));
        }
        let totalStakedMCTR =ret[2] / Math.pow(10, 18);
        setMCRT180StakedT(totalStakedMCTR.toFixed(4));
      } else if(period === 365 ){
          if (option === 0){
            let reward = ret[4].toNumber() + ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
            setMCRT365Earned(reward.toFixed(4));
            let stacked = ret[1] / Math.pow(10, 18);
            setStaked365Lpbalancep(stacked.toFixed(4));
            let apr = ret[0];
            setapr365(apr+"%");
          } else if (option ===1){
              setapr365("Character Point");
              let reward =  ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
              reward =  ret[4].toNumber() + reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
              setMCRT365Earned(reward.toFixed(0));
              setCharacterPoints(reward.toFixed(0));
              let stacked = ret[1] / Math.pow(10, 18);
              setStaked365Lpbalancep(stacked.toFixed(4));
          }
          let totalStakedMCTR =ret[2] / Math.pow(10, 18);
          setMCRT365StakedT(totalStakedMCTR.toFixed(4));
          
      } else if(period === 1095 ){
          if (option === 0){
            let reward = ret[4].toNumber() + ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
            setMCRT1095Earned(reward.toFixed(4));
            let stacked = ret[1] / Math.pow(10, 18);
            setStaked1095Lpbalancep(stacked.toFixed(4));
            let apr = ret[0];
            setapr1095(apr+"%");
          } else if (option ===1){
              setapr1095("Land Point");
              let reward =  ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
              reward = ret[4].toNumber() + reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
              setMCRT1095Earned(reward.toFixed(0));
              setLandPoints1095(reward.toFixed(0));
              let stacked = ret[1] / Math.pow(10, 18);
              setStaked1095Lpbalancep(stacked.toFixed(4));
              setLandPoints(parseInt(landPoints1095) + parseInt(landPoints1825));

          }
          let totalStakedMCTR =ret[2] / Math.pow(10, 18);
          setMCRT1095StakedT(totalStakedMCTR.toFixed(4));
          
      } else if(period === 1825 ){
          if (option === 0){
            let reward = ret[4].toNumber() + ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
            setMCRT1825Earned(reward.toFixed(4));
            let stacked = ret[1] / Math.pow(10, 18);
            setStaked1825Lpbalancep(stacked.toFixed(4));
            let apr = ret[0];
            setapr1825(apr+"%");
          } else if (option ===1){
              setapr1825("2 * Land Point");
              let reward =  ret[3]/3 * ret[0] * ret[1] / 28800/36500/Math.pow(10,18);
              reward = ret[4].toNumber() + 2 * reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
              setMCRT1825Earned(reward.toFixed(0));
              setLandPoints1825(reward.toFixed(0));
              let stacked = ret[1] / Math.pow(10, 18);
              setStaked1825Lpbalancep(stacked.toFixed(4));
              setLandPoints(parseInt(landPoints1095) + parseInt(landPoints1825));
          }
          let totalStakedMCTR =ret[2] / Math.pow(10, 18);
          setMCRT1825StakedT(totalStakedMCTR.toFixed(4));
            
      }
      ret =  await stakingContract.contractStakedMCRT(address);

      const totalStakedMCTRInContract =  ret[0] / Math.pow(10, 18);
      const totalStakedMCTRInContractByme =  ret[1] / Math.pow(10, 18);
      const avaliableMCRT =  ret[2] / Math.pow(10, 18);
      setTotalstaked(totalStakedMCTRInContract.toFixed(4));
      setTotalMCRTStakedByMe(totalStakedMCTRInContractByme.toFixed(4));
      setMCRTbalancep(avaliableMCRT.toFixed(4));
        
    }
    const approve = async(period) => {
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
        toast.success("Approve success!",{
          position: toast.POSITION.TOP_RIGHT,
          transition: Slide,
          autoClose: 3000
        });    
      } catch (error) {
        toast.error(error["data"]["message"], {
          position: toast.POSITION.BOTTOM_RIGHT,
          transition: Slide,
          autoClose: 3000
        });   
      }
      setApproved(true);
      setIsApproveLoading(false);
    }
    const renderapprove = () => {
      if (approved){
        if(isstakingloading){
          return(
            <div>
              <i className="fa fa-spinner fa-spin"></i> Loading
          </div>
          );
        } else {
          return(
            <div>Stake</div>
          );
        }
      } else {
          if(isapproveloading){
          return (
            <div>
              <i className="fa fa-spinner fa-spin"></i> Loading
            </div>
          );
          } else {
            return(
              <div>
                  Approve
              </div>
            );
          }
      }
    }
    const claimrwrd = async(period) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractJson.contract,
        stakingContractJson.abi,
        signer
      );
      setIsClaimLoading(true);
      try {
        await stakingContract.ClaimRewardPerperiod(option,period);
        if (period === 30){
          setStatus30(true);
        } else if (period===90){
          setStatus90(true);
        } else if (period===180){
          setStatus180(true);
        } else if (period===365){
          setStatus365(true);
        } else if (period===1095){
          setStatus1095(true);
        } else if (period===1825){
          setStatus1825(true);
        }
        toast.success("Approve success!",{
          position: toast.POSITION.TOP_RIGHT,
          transition: Slide,
          autoClose: 3000
        });    
      } catch (error) {
        // toast.error(JSON.parse(error.message.substring(56).trim().replace("'", "")).value.data.data, {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   transition: Slide,
        //   autoClose: 3000
        // }); 
        toast.error(error["data"]["message"], {
          position: toast.POSITION.BOTTOM_RIGHT,
          transition: Slide,
          autoClose: 3000
        });   
      }
      setIsClaimLoading(false);
    }
    const renderclaim = (period) => {
      if(isclaimloading){
        return (
          <button type="button" className="btn btn-primary"  onClick={ () => claimrwrd(period)}><i className="fa fa-spinner fa-spin"></i> Loading</button>
        );
      } else if(approved) {
        return(
          <button type="button" className="btn btn-primary"  onClick={ () => claimrwrd(period)}>Claim</button>
        );
      } else {
        return(
          <button type="button" className="btn btn-primary"  disabled onClick={ () => claimrwrd(period)}>Claim</button>
        );

      }
    }
    const withdraw = async(period) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractJson.contract,
        stakingContractJson.abi,
        signer
      );
      setWithdrawLoading(true);
      try {
        await stakingContract.WithdrawForStakingPerPeriod(period,option);
        if (period === 30){
          setStatus30(true);
        } else if (period===90){
          setStatus90(true);
        } else if (period===180){
          setStatus180(true);
        } else if (period===365){
          setStatus365(true);
        } else if (period===1095){
          setStatus1095(true);
        } else if (period===1825){
          setStatus1825(true);
        }
        toast.success("Withdraw success!",{
          position: toast.POSITION.TOP_RIGHT,
          transition: Slide,
          autoClose: 3000
        });    
      } catch (error) {
        toast.error(error["data"]["message"], {
          position: toast.POSITION.BOTTOM_RIGHT,
          transition: Slide,
          autoClose: 3000
        });   
      }
      setWithdrawLoading(false);
    }
    const renderwithdraw = (period) => {
      if(iswithdrawloading){
        return (
          <button type="button" className="btn btn-primary"  onClick={() => withdraw(period)}><i className="fa fa-spinner fa-spin"></i> Loading</button>
        );
      } else if(approved){
        return(
          <button type="button" className="btn btn-primary"  onClick={() => withdraw(period)}>UnStake</button>
        );
      } else {
        return(
          <button type="button" className="btn btn-primary"  disabled onClick={() => withdraw(period)}>UnStake</button>
        );

      }
    }
    const staking = async(period) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractJson.contract,
        stakingContractJson.abi,
        signer
      );
      setIsStakingLoading(true);
      let amnt = 0;
      if (period === 30){
        amnt = staking30amount;
      } else if (period===90){
        amnt = staking90amount;
      } else if (period===180){
        amnt = staking180amount;
      } else if (period===365){
        amnt = staking365amount;
      } else if (period===1095){
        amnt = staking1095amount;
      } else if (period===1825){
        amnt = staking1825amount;
      }
      try {
        await stakingContract.STAKE(walletAddress.walletAddress,ethers.utils.parseUnits(amnt.toString(), 18),period,option);

        toast.success("Staking success!",{
          position: toast.POSITION.TOP_RIGHT,
          transition: Slide,
          autoClose: 3000
        });    
      } catch (error) {
        toast.error(error["data"]["message"], {
          position: toast.POSITION.BOTTOM_RIGHT,
          transition: Slide,
          autoClose: 3000
        });   
      }
      if (period === 30){
        setStatus30(true);
      } else if (period===90){
        setStatus90(true);
      } else if (period===180){
        setStatus180(true);
      } else if (period===365){
        setStatus365(true);
      } else if (period===1095){
        setStatus1095(true);
      } else if (period===1825){
        setStatus1825(true);
      }
      setIsStakingLoading(false);
    }
    
    const optionButton = () => {
      if (option===0){
        return(
          <>
            <button  id="apr" onClick={()=>setChangeOption(0)} style={{
              background:"-webkit-linear-gradient(left, #020207,rgb(45, 46, 46),#000000)",
              borderBottomStyle:"inherit",
              fontWeight:"bolder",
              color:"#9A6AFF",
              outlineStyle:"solid",
              boxShadow:"2 2 2 2px rgb(0, 0, 0)",
              padding:"0.8em"
            }}>APY Reward</button>
            <button  id="nft" onClick={()=>setChangeOption(1)}>NFT Reward</button>
          </>
        );
      }else if (option===1){
        return(
          <>
            <button  id="apr" onClick={()=>setChangeOption(0)} >APY Reward</button>
            <button  id="nft" onClick={()=>setChangeOption(1)} style={{
              background:"-webkit-linear-gradient(left, #020207,rgb(45, 46, 46),#000000)",
              borderBottomStyle:"inherit",
              fontWeight:"bolder",
              color:"#9A6AFF",
              outlineStyle:"solid",
              boxShadow:"2 2 2 2px rgb(0, 0, 0)",
              padding:"0.8em"
            }}>NFT Reward</button>
          </>
        );
      }


    }

    useEffect(()=>{
      const fetchContractdata = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const stakingContract = new ethers.Contract(
          stakingContractJson.contract,
          stakingContractJson.abi,
          signer
        );

        const point = await stakingContract.getPointPrice();
        PointPrice = point[0].toNumber();
        PointDecimals = point[1];

        const mcrt = await stakingContract.getMCRTPrice();
        MCRTPrice = mcrt[0].toNumber();
        MCRTDecimals = mcrt[1];

        const tokenContract = new ethers.Contract(
          tokenContractJson.contract,
          tokenContractJson.abi,
          signer
        );
        const amount = await tokenContract.allowance(walletAddress.walletAddress,stakingContractJson.contract);
        if (amount>0){
              setApproved(true);
        }

        getStakedMCRT(30);
        getStakedMCRT(90);
        getStakedMCRT(180);
        getStakedMCRT(365);
        getStakedMCRT(1095);
        getStakedMCRT(1825);
      };
      if(walletAddress.walletAddress){
        fetchContractdata();
      }
    },[walletAddress.walletAddress]);  

    useEffect(
      () => {
        const interval = setInterval(_ => {
          getStakedMCRT(30);
          getStakedMCRT(90);
          getStakedMCRT(180);
          getStakedMCRT(365);
          getStakedMCRT(1095);
          getStakedMCRT(1825);
        }, 3600000);
      },
      [walletAddress.walletAddress]
    );

    useEffect(()=>{
      getStakedMCRT(30);
      getStakedMCRT(90);
      getStakedMCRT(180);
      getStakedMCRT(365);
      getStakedMCRT(1095);
      getStakedMCRT(1825);
      setChangeStatus(false);
    },[changedStatus]);

    useEffect(() => {
      if(status30 == true){
        setMCRT30StakedT(parseInt(MCRT30StakedT, 10)+parseInt(staking30amount,10));
        setStaked30Lpbalancep(parseInt(Staked30Lpbalancep,10)+parseInt(staking30amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking30amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking30amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking30amount,10));
      }
      setStatus30(false);
    },[status30]);

    useEffect(() => {
      if(status90 == true){
        setMCRT90StakedT(parseInt(MCRT90StakedT, 10)+parseInt(staking90amount,10));
        setStaked90Lpbalancep(parseInt(Staked90Lpbalancep,10)+parseInt(staking90amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking90amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking90amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking90amount,10));
      }
      setStatus90(false);
    },[status90]);

    useEffect(() => {
      if(status180 == true){
        setMCRT30StakedT(parseInt(MCRT180StakedT, 10)+parseInt(staking180amount,10));
        setStaked180Lpbalancep(parseInt(Staked180Lpbalancep,10)+parseInt(staking180amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking180amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking180amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking180amount,10));

      }
      setStatus180(false);
    },[status180]);

    useEffect(() => {
      if(status365 == true){
        setMCRT365StakedT(parseInt(MCRT365StakedT, 10)+parseInt(staking365amount,10));
        setStaked365Lpbalancep(parseInt(Staked365Lpbalancep,10)+parseInt(staking365amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking365amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking365amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking365amount,10));
      }
      setStatus365(false);
    },[status365]);

    useEffect(() => {
      if(status1095 == true){
        setMCRT1095StakedT(parseInt(MCRT1095StakedT, 10)+parseInt(staking1095amount,10));
        setStaked1095Lpbalancep(parseInt(Staked1095Lpbalancep,10)+parseInt(staking1095amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking1095amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking1095amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking1095amount,10));
      }
      setStatus1095(false);
    },[status1095]);

    useEffect(() => {
      if(status1825 == true){
        setMCRT1825StakedT(parseInt(MCRT1825StakedT, 10)+parseInt(staking1825amount,10));
        setStaked1825Lpbalancep(parseInt(Staked1825Lpbalancep,10)+parseInt(staking1825amount,10));
        setTotalstaked(parseInt(totalstaked,10) + parseInt(staking1825amount,10));
        setTotalMCRTStakedByMe(parseInt(totalMCRTStakedByMe,10) + parseInt(staking1825amount,10));
        setMCRTbalancep(parseInt(MCRTbalancep,10) - parseInt(staking1825amount,10));
      }
      setStatus1825(false);

    },[status1825]);

    return (
        <div className="wrapper">
          <section className="content staking-pg">
            <div className="heading-row">
              <h1 className="main-heading">Staking</h1>
              <div className="stats">
                <div className="block">
                  <h3>Statistics</h3>
                </div>
                <div className="block">
                  <p>
                    <b id="mtrcprice">0.0009</b>
                  </p>
                  <p>$MCRT Price</p>
                </div>
                <div className="block">
                  <p>
                    <b id="dailyreward">10,000,000 MCRT</b>
                  </p>
                  <p>Month Rewards</p>
                </div>
                <div className="block">
                  <p>
                    <b id="totalsupply">1,200,000,000</b>
                  </p>
                  <p>Calculation Supply</p>
                </div>
              </div>
              <div className="total">
                <div className="center">
                  <h5>Total Staked</h5>
                  <h4 id="totalstaked">{totalstaked}
                    <small>MCRT</small>
                  </h4>
                </div>
              </div>
              <div className="banner">
                <div className="center" style={{color: "white"}}>
                  <h2>150%</h2>
                  <h3>Reward</h3>
                </div>
              </div>
            </div>
            <div className="myrow">
              <div className="left-main">
                <div className="staking-options">
                  <div className="heading-option">
                    {optionButton()}
                    <button onClick={handleShow}>
                      Help
                    </button>
                    <Modal show={show} onHide={handleClose} >
                        <div className='modal_body'>
                          <Table striped bordered hover variant="dark">
                            <thead>
                              <tr>
                                <th>Duartion</th>
                                <th>APY Reward</th>
                                <th>NFT Reward</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>30 days</td>
                                <td>25% bonus</td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td>90 days</td>
                                <td>50% bonus</td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td>180 days</td>
                                <td>75% bonus</td>
                                <td>Item Points</td>
                              </tr>
                              <tr>
                                <td>1 year</td>
                                <td>100% bonus</td>
                                <td>Character Points</td>
                              </tr>
                              <tr>
                                <td>3 years</td>
                                <td>150% bonus</td>
                                <td>Land Points</td>
                              </tr>
                              <tr>
                                <td>5 years</td>
                                <td>200% bonus</td>
                                <td>2 * Land Points</td>
                              </tr>
                            </tbody>
                          </Table>
                          <div style={{color:"red"}}>                          
                            <p>If you Stake for the first time the first transaction is only to approve your <b>MCRT</b> after that you can start staking</p>
                            </div>


                          <p>- Stake as many times as you like</p>
                          <p>- Unstake penalty only applies to staked amount, not APY rewards</p>
                          <p>- Claim the APY rewards and NFT rewards with Claim button</p>
                          <p>- You can claim the rewards and unstake staked tokens at end of staking</p>
                        </div>
                    </Modal>
                    <ToastContainer/>
                  </div>
                  <div className="options-card">
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 30 Days</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT30Earned">{MCRT30Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked30Lpbalancep">{Staked30Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr30">{apr30}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT30StakedT">{MCRT30StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide">
                          <a href="#!" id="modal30show">
                            <span className="show"></span>
                            <span className="hide"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                            <Col md={2}>
                            {renderclaim(30)}
                            </Col>
                            <Col md={5}>
                              <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake30input" onChange={e => setStaking30amount(e.target.value)}/>
                            </Col>
                            <Col md={3}>
                              <button type="button" className="btn btn-danger" id="apprvd30btn" onClick={approved?() => staking(30) : () => approve(30)}>{renderapprove()}</button>
                            </Col>
                            <Col md={2}>
                            {renderwithdraw(30)}
                            </Col>
                          </Row>
                      </div>
                    </div>
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 90 Days</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT90Earned">{MCRT90Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked90Lpbalancep">{Staked90Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr90">{apr90}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT90StkaedT">{MCRT90StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide" id="modal90show">
                          <a href="#!">
                            <span className="hide"></span>
                            <span className="show"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                              <Col md={2}>
                                  {renderclaim(90)}
                              </Col>
                              <Col md={5}>
                                <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake90input" onChange={e => setStaking90amount(e.target.value)}/>
                              </Col>
                              <Col md={3}>
                                <button type="button" className="btn btn-danger" id="apprvd90btn" onClick={approved?() => staking(90) :() =>  approve(90)}>{renderapprove()}</button>
                              </Col>
                              <Col md={2}>
                              {renderwithdraw(90)}
                              </Col>
                          </Row>
                      </div>
                    </div>
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 180 Days</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT180Earned">{MCRT180Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked180Lpbalancep">{Staked180Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr180">{apr180}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT180StkaedT">{MCRT180StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide" id="modal180show">
                          <a href="#!">
                            <span className="hide"></span>
                            <span className="show"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                          <Col md={2}>
                              {renderclaim(180)}
                            </Col>
                            <Col md={5}>
                              <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake180input" onChange={e => setStaking180amount(e.target.value)}/>
                            </Col>
                            <Col md={3}>
                              <button type="button" className="btn btn-danger" id="apprvd180btn" onClick={approved?() => staking(180) : () => approve(180)}>{renderapprove()}</button>
                            </Col>
                            <Col md={2}>
                            {renderwithdraw(180)}
                            </Col>
                          </Row>
                      </div>
                    </div>
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 1 Year(s)</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT365Earned">{MCRT365Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked365Lpbalancep">{Staked365Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr365">{apr365}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT365StkaedT">{MCRT365StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide" id="modal365show">
                          <a href="#!">
                            <span className="hide"></span>
                            <span className="show"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                          <Col md={2}>
                          {renderclaim(365)}
                            </Col>
                            <Col md={5}>
                              <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake365input" onChange={e => setStaking365amount(e.target.value)}/>
                            </Col>
                            <Col md={3}>
                              <button type="button" className="btn btn-danger" id="apprvd365btn" onClick={approved?() => staking(365) : () => approve(365)}>{renderapprove()}</button>
                            </Col>
                            <Col md={2}>
                            {renderwithdraw(365)}
                            </Col>
                          </Row>
                      </div>
                    </div>
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 3 Year(s)</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT1095Earned">{MCRT1095Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked1095Lpbalancep">{Staked1095Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr1095">{apr1095}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT1095StkaedT">{MCRT1095StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide" id="modal1095show">
                          <a href="#!">
                            <span className="hide"></span>
                            <span className="show"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                          <Col md={2}>
                          {renderclaim(1095)}
                            </Col>
                            <Col md={5}>
                              <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake1095input" onChange={e => setStaking1095amount(e.target.value)}/>
                            </Col>
                            <Col md={3}>
                              <button type="button" className="btn btn-danger" id="apprvd1095btn" onClick={approved?() => staking(1095) : () => approve(1095)}>{renderapprove()}</button>
                            </Col>
                            <Col md={2}>
                            {renderwithdraw(1095)}
                            </Col>
                          </Row>
                      </div>
                    </div>
                    <div className="myrow collapse">
                      <div className="main-option-row">
                        <div className="block name">
                          <h3>Staking Option : 5 Years(s)</h3>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="MCRT1825Earned">{MCRT1825Earned}</b>
                          </p>
                          <p>Earned</p>
                        </div>
                        <div className="block muted">
                          <p>
                            <b id="Staked1825Lpbalancep">{Staked1825Lpbalancep}</b>
                          </p>
                          <p>Staked</p>
                        </div>
                        <div className="block">
                          <p>
                            <b id="apr1825">{apr1825}</b>
                          </p>
                          <p>APY</p>
                        </div>
                        <div className="block total">
                          <p>
                            <b id="MCRT1825StkaedT">{MCRT1825StakedT}</b>
                            <b> MCRT</b>
                          </p>
                          <p>Total Staked</p>
                        </div>
                        <div className="block show-hide" id="modal1825show">
                          <a href="#!;">
                            <span className="hide"></span>
                            <span className="show"></span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="main-option-row hidden-row">
                          <Row>
                          <Col md={2}>
                          {renderclaim(1825)}
                            </Col>
                            <Col md={5}>
                              <input type="text" className="form-control" placeholder="Enter # of tokens to stake" id="stake1825input" onChange={e => setStaking1825amount(e.target.value)}/>
                            </Col>
                            <Col md={3}>
                              <button type="button" className="btn btn-danger" id="apprvd1825btn" onClick={approved?() => staking(1825) : () => approve(1825)}>{renderapprove()}</button>
                            </Col>
                            <Col md={2}>
                            {renderwithdraw(1825)}
                            </Col>
                          </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-main">
                <div className="mcrt-staking">
                  <div className="heading-row">
                    <h3>My MCRT Staking</h3>
                    <a href="#!" className="more-less">
                      <span className="more"> More</span>
                      <span className="less"> Less</span>
                      <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7L6.5 1L12 7" stroke="#87EDE7" />
                      </svg>
                    </a>
                  </div>
                  <div className="blocks-row">
                    <div className="block">
                      <p>
                        <b id="totalMCRTStaked">{totalstaked}</b>
                        <small>MCRT</small>
                      </p>
                      <h5>Total MCRT Staked in Contracts</h5>
                    </div>
                    <div className="block">
                      <p>
                        <b id="totalMCRTStakedByMe">{totalMCRTStakedByMe}</b>
                        <small>MCRT</small>
                      </p>
                      <p>Total MCRT Staked</p>
                    </div>
                    <div className="block">
                      <p>
                        <b id="MCRTbalancep">{MCRTbalancep}</b>
                        <small>MCRT</small>
                      </p>
                      <p>Available MCRT in Wallet</p>
                    </div>
                    <div className="block">
                      <p>
                        <b id="itemPoints">{itemPoints}</b>
                      </p>
                      <p>Item Points</p>
                    </div>
                    <div className="block">
                      <p>
                        <b id="characterPoints">{characterPoints}</b>
                      </p>
                      <p>Character Points</p>
                    </div>
                    <div className="block">
                      <p>
                        <b id="landPoints">{landPoints}</b>
                      </p>
                      <p>Land Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal30">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src={modal_cross} alt=""/>
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 30 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT30Earned">{MCRT30Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr30">{apr30}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked30Lpbalancep">{Staked30Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT30StakedT">{MCRT30StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                      <div className = "row">
                        <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                          <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake30input" onChange={e => setStaking30amount(e.target.value)}/>
                        </div>
                        <div className="col-sm-6" >
                          <button type="button" className="btn btn-danger" id="apprvd30btn" onClick={approved?() => approve(30):() => staking(30)}>{renderapprove()}</button>

                        </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(30)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(30)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal90">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src={modal_cross} alt=""/>
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 90 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT90Earned">{MCRT90Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr90">{apr90}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked90Lpbalancep">{Staked90Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT90StakedT">{MCRT90StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                      <div className = "row">
                          <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                            <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake90input" onChange={e => setStaking90amount(e.target.value)}/>
                          </div>
                          <div className="col-sm-6" >
                            <button type="button" className="btn btn-danger" id="apprvd90btn" onClick={approved?() => approve(90):() => staking(90)}>{renderapprove()}</button>
                          </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(90)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(90)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal180">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src={modal_cross} alt=""/>
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 180 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT180Earned">{MCRT180Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr180">{apr180}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked180Lpbalancep">{Staked180Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT180StakedT">{MCRT180StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                      <div className = "row">
                        <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                          <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake180input" onChange={e => setStaking180amount(e.target.value)}/>
                        </div>
                        <div className="col-sm-6" >
                          <button type="button" className="btn btn-danger" id="apprvd180btn" onClick={approved?() => approve(180):() => staking(180)}>{renderapprove()}</button>

                        </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(180)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(180)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal365">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src={modal_cross} alt=""/>
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 365 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT365Earned">{MCRT365Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr365">{apr365}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked365Lpbalancep">{Staked365Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT365StakedT">{MCRT365StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                      <div className = "row">
                        <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                          <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake365input" onChange={e => setStaking365amount(e.target.value)}/>
                        </div>
                        <div className="col-sm-6" >
                          <button type="button" className="btn btn-danger" id="apprvd1095btn" onClick={approved?() => approve(365):() => staking(365)}>{renderapprove()}</button>

                        </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(365)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(365)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal1095">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src="assets/images/modal-cross.svg" alt=""/>
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 1095 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT1095Earned">{MCRT1095Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr1095">{apr1095}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked1095Lpbalancep">{Staked1095Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT1095StakedT">{MCRT1095StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                      <div className = "row">
                        <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                          <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake1095input" onChange={e => setStaking1095amount(e.target.value)}/>
                        </div>
                        <div className="col-sm-6" >
                          <button type="button" className="btn btn-danger" id="apprvd1095btn" onClick={approved?() => approve(1095):() => staking(1095)}>{renderapprove()}</button>

                        </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(1095)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(1095)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-modal" id="modal1825">
              <div className="options-card">
                <div className="myrow">
                  <div className="main-option-row">
                    <a href="#!" className="close-modal">
                      <img src={modal_cross} alt="" />
                    </a>
                    <div className="block name">
                      <h5>Staking option</h5>
                      <h3>Staking Option: 1825 Days</h3>
                    </div>
                    <div className="block muted pb20">
                      <p>
                        <b id="m_MCRT1825Earned">{MCRT1825Earned}</b>
                      </p>
                      <p>Earned</p>
                    </div>
                    <div className="block unmute pb20">
                      <p>
                        <b id="m_apr1825">{apr1825}</b>
                      </p>
                      <p>APY</p>
                    </div>
                    <div className="block muted">
                      <p>
                        <b id="m_Staked1825Lpbalancep">{Staked1825Lpbalancep}</b>
                      </p>
                      <p>Staked</p>
                    </div>
                    <div className="block unmute total">
                      <p>
                        <b id="m_MCRT1825StakedT">{MCRT1825StakedT}</b>
                        <b> MCRT</b>
                      </p>
                      <p>Total Staked</p>
                    </div>
                    <div className="staking">
                    <div className = "row">
                        <div className="col-sm-6" style={{paddingBottom:"1em" }}>
                          <input type="text" className="form-control"  placeholder="Enter # of tokens to stake" id="stake1825input" onChange={e => setStaking1825amount(e.target.value)}/>
                        </div>
                        <div className="col-sm-6" >
                          <button type="button" className="btn btn-danger" id="apprvd1825btn" onClick={approved?() => approve(1825):() => staking(1825)}>{renderapprove()}</button>

                        </div>
                      </div>
                      <div className = "row" >
                        <div className="col-sm-6"  style={{paddingBottom:"1em"}}>
                        {renderclaim(1825)}

                        </div>
                        <div className="col-sm-6">
                        {renderwithdraw(1825)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="4">
                  <h5 className="footer_title">FAQ</h5>
                </MDBCol>
                <MDBCol md="4">
                  <h5 className="footer_title">Terms and condition</h5>
                </MDBCol>
                <MDBCol md="4">
                  <h5 className="footer_title">Privacy policy</h5>
                </MDBCol>
                {/* <MDBCol md="3">
                <p> All rights rerserved <br/> 2021 MagicCraft Ltd </p>
                <a href="#!" >
                  <img src={favicon} className="logo"alt=""/>
                </a>
                </MDBCol> */}
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:<p> All rights rerserved <br/> 2021 MagicCraft Ltd </p>
                <a href="#!" >
                  <img src={favicon} className="logo"alt=""/>
                </a>
              </MDBContainer>
            </div>
          </MDBFooter>
      {/* <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="">
            <div className="row">
                  <a href="#!" className="text-white"><span className="footer_title"style={{paddingRight:"50px"}}>FAQ</span></a>
                  <a href="#!" className="text-white"><span className="footer_title"style={{paddingRight:"50px"}}>Terms and condition</span></a>
                  <a href="#!" className="text-white"><span className="footer_title">Privacy policy</span></a>
            </div>
          </section>
        </div>
  
        <div className="text-center p-3" style={{backgroundColor: "#00000032"}}>
          <p> All rights rerserved <br/> 2021 MagicCraft Ltd </p>
          <a href="#!" >
            <img src={favicon} className="logo"alt=""/>
          </a>
        </div>
  
      </footer> */}
      </div>
    )
};

export default Staking;


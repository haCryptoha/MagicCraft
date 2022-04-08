// callee = {
//     from: accnt
// };


// var option = 0;
// var MCRTPrice; 
// var PointPrice; 
// var MCRTDecimals; 
// var PointDecimals;
// var itemPoints =  0;
// var characterPoints =  0;
// var landPoints =  0;



// apprvd30btn = $('#apprvd30btn');
// $('#apprvd30btn').click(function(){
//     approve(30);
// });
// apprvd90btn = $('#apprvd90btn');
// $('#apprvd90btn').click(function(){
//     approve(90);
// });
// apprvd180btn = $('#apprvd180btn');
// $('#apprvd180btn').click(function(){
//     approve(180);
// });
// apprvd365btn = $('#apprvd365btn');
// $('#apprvd365btn').click(function(){
//     approve(365);
// });
// apprvd1095btn = $('#apprvd1095btn');
// $('#apprvd1095btn').click(function(){
//     approve(1095);
// });
// apprvd1825btn = $('#apprvd1825btn');
// $('#apprvd1825btn').click(function(){
//     approve(1825);
// });

// claim30btn = $('#claim30btn');
// $('#claim30btn').click(function(){
//     claimrwrd(30);
// });
// claim90btn = $('#claim90btn');
// $('#claim90btn').click(function(){
//     claimrwrd(90);
// });
// claim180btn = $('#claim180btn');
// $('#claim180btn').click(function(){
//     claimrwrd(180);
// });
// claim365btn = $('#claim365btn');
// $('#claim365btn').click(function(){
//     claimrwrd(365);
// });
// claim1095btn = $('#claim1095btn');
// $('#claim1095btn').click(function(){
//     claimrwrd(1095);
// });
// claim1825btn = $('#claim1825btn');
// $('#claim1825btn').click(function(){
//     claimrwrd(1825);
// });

// with30btn = $('#with30btn');
// $('#with30btn').click(function(){
//     withdraw(30);
// });
// with90btn = $('#with90btn');
// $('#with90btn').click(function(){
//     withdraw(90);
// });
// with180btn = $('#with180btn');
// $('#with180btn').click(function(){
//     withdraw(180);
// });
// with365btn = $('#with365btn');
// $('#with365btn').click(function(){
//     withdraw(365);
// });
// with1095btn = $('#with1095btn');
// $('#with1095btn').click(function(){
//     withdraw(1095);
// });
// with1825btn = $('#with1825btn');
// $('#with1825btn').click(function(){
//     withdraw(1825);
// });

// $("#staking30btn").click(function(){
//     staking(30);
// });
// $("#staking90btn").click(function(){
//     staking(90);
// });
// $("#staking180btn").click(function(){
//     staking(180);
// });
// $("#staking365btn").click(function(){
//     staking(365);
// });
// $("#staking1095btn").click(function(){
//     staking(1095);
// });
// $("#staking1825btn").click(function(){
//     staking(1825);
// });

// aprbtn = $("#apr");
// nftbtn = $("nft");


// $('#apr').click(function(){
//     setOption(0);
// });
// $('#nft').click(function(){
//     setOption(1);
// });

// function setOption(_option){
//     option = _option;
//     getStakedMCRT(30);
//     getStakedMCRT(90);
//     getStakedMCRT(180);
//     getStakedMCRT(365);
//     getStakedMCRT(1095);
//     getStakedMCRT(1825);
// }

// async function getStakedMCRT(period){
//     console.log("address->",accnt);
//     await stakingContract.methods.yourStakedMCRT(accnt,period,option).call(function(err, ret) {

//         if (!err) {

//             if (period == 30){
//                 with30btn.text('Unstake');
               
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT30Earned').text(reward.toFixed(4));
//                     $('#m_MCRT30Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked30Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked30Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 10512000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);
//                     $('#apr30').text(apr.toFixed(4)+"%");
//                     $('#m_apr30').text(apr.toFixed(4)+"%");

//                 } else if (option ==1){
//                     $('#apr30').text("Null");
//                     $('#m_apr30').text("Null");
//                     var reward = ret[4] * ret[0] *ret[1] / ret[2];
//                     $('#MCRT30Earned').text(reward.toFixed(4));
//                     $('#m_MCRT30Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked30Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked30Lpbalancep').text(stacked.toFixed(4));
//                 }


//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT30StakedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT30StakedT').text(totalStakedMCTR.toFixed(4));
//             } else if (period == 90) {
//                 with90btn.text('Unstake');
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT90Earned').text(reward.toFixed(4));
//                     $('#m_MCRT90Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked90Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked90Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 10512000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);
//                     $('#apr90').text(apr.toFixed(4)+"%");
//                     $('#m_apr90').text(apr.toFixed(4)+"%");

//                 } else if (option ==1){
//                     $('#apr90').text("Null");
//                     $('#m_apr90').text("Null");
//                     var reward = ret[4] * ret[0] *ret[1] / ret[2];
//                     $('#MCRT90Earned').text(reward.toFixed(4));
//                     $('#m_MCRT90Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked90Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked90Lpbalancep').text(stacked.toFixed(4));
//                 }

//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT90StkaedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT90StakedT').text(totalStakedMCTR.toFixed(4));
//             } else if(period == 180 ){
//                 with180btn.text('Unstake');
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT180Earned').text(reward.toFixed(4));
//                     $('#m_MCRT180Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked180Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked180Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 10512000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);

//                     $('#apr180').text(apr.toFixed(4)+"%");
//                     $('#m_apr180').text(apr.toFixed(4)+"%");

//                 } else if (option ==1){
//                     $('#apr180').text("Item Point");
//                     $('#m_apr180').text("Item Point");
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     reward = reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
//                     $('#MCRT180Earned').text(reward.toFixed(0));
//                     $('#m_MCRT180Earned').text(reward.toFixed(0));
//                     $('#itemPoints').text(reward.toFixed(0));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked180Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked180Lpbalancep').text(stacked.toFixed(4));
//                 }
                
//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT180StkaedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT180StakedT').text(totalStakedMCTR.toFixed(4));
//             } else if(period == 365 ){
//                 with365btn.text('Unstake');
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT365Earned').text(reward.toFixed(4));
//                     $('#m_MCRT365Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked365Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked365Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 10512000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);
//                     $('#apr365').text(apr.toFixed(4)+"%");
//                     $('#m_apr365').text(apr.toFixed(4)+"%");
//                 } else if (option ==1){
//                     $('#apr365').text("Character Point");
//                     $('#m_apr365').text("Character Point");
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     reward = reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
//                     $('#MCRT365Earned').text(reward.toFixed(0));
//                     $('#m_MCRT365Earned').text(reward.toFixed(0));
//                     $('#characterPoints').text(reward.toFixed(0))
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked365Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked365Lpbalancep').text(stacked.toFixed(4));
//                 }
                
//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT365StkaedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT365StakedT').text(totalStakedMCTR.toFixed(4));
                
//             } else if(period == 1095 ){
//                 with1095btn.text('Unstake');
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT1095Earned').text(reward.toFixed(4));
//                     $('#m_MCRT1095Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked1095Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked1095Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 10512000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);
//                     $('#apr1095').text(apr.toFixed(4)+"%");
//                     $('#m_apr1095').text(apr.toFixed(4)+"%");
//                 } else if (option == 1){
//                     $('#apr1095').text("Land Point");
//                     $('#m_apr1095').text("Land Point");
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     reward = reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
//                     landPoints = reward;
//                     $('#MCRT1095Earned').text(reward.toFixed(0));
//                     $('#m_MCRT1095Earned').text(reward.toFixed(0));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked1095Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked1095Lpbalancep').text(stacked.toFixed(4));
//                 }
                
//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT1095StkaedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT1095StakedT').text(totalStakedMCTR.toFixed(4));
                
//             } else if(period == 1825 ){
//                 with1825btn.text('Unstake');
//                 if (option == 0){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     $('#MCRT1825Earned').text(reward.toFixed(4));
//                     $('#m_MCRT1825Earned').text(reward.toFixed(4));
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked1825Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked1825Lpbalancep').text(stacked.toFixed(4));
//                     var apr = reward  * 1051200000 / (ret[1]/Math.pow(10,18))/(ret[4]/3);
//                     $('#apr1825').text(apr.toFixed(4)+"%");
//                     $('#m_apr1825').text(apr.toFixed(4)+"%");
//                 } else if (option ==1){
//                     var reward = ret[4]/3 * ret[0] * ret[1] / ret[2]/Math.pow(10,18);
//                     reward = 2*reward * MCRTPrice* Math.pow(10,PointDecimals) / PointPrice/Math.pow(10,MCRTDecimals);
//                     $('#apr1825').text("2 * LandPoint");
//                     $('#m_apr1825').text("2 * LandPoint");
//                     $('#MCRT1825Earned').text(reward.toFixed(0));
//                     $('#m_MCRT1825Earned').text(reward.toFixed(0));
//                     $('#landPoints').text((landPoints+reward).toFixed(0))
//                     var stacked = ret[1] / Math.pow(10, 18);
//                     $('#Staked1825Lpbalancep').text(stacked.toFixed(4));
//                     $('#m_Staked1825Lpbalancep').text(stacked.toFixed(4));
//                 }
                
//                 var totalStakedMCTR =ret[3] / Math.pow(10, 18);
//                 $('#MCRT1825StkaedT').text(totalStakedMCTR.toFixed(4));
//                 $('#m_MCRT1825StakedT').text(totalStakedMCTR.toFixed(4));
                
//             }

//         } else {
//             console.log(err);
//         }
//     });

//     await stakingContract.methods.contractStakedMCRT(accnt).call(function(err, ret) {
//         if (!err) {
//             var totalStakedMCTRInContract =  ret[0] / Math.pow(10, 18);;
//             var totalStakedMCTRInContractByme =  ret[1] / Math.pow(10, 18);
//             var avaliableMCRT =  ret[2] / Math.pow(10, 18);
//             var itemPoints =  ret[3] / Math.pow(10, 0);
//             var characterPoints =  ret[4] / Math.pow(10, 0);
//             var landPoints =  ret[5] / Math.pow(10, 0);
//             $('#totalstaked').text(totalStakedMCTRInContract.toFixed(4));
//             $('#totalMCRTStaked').text(totalStakedMCTRInContract.toFixed(4));
//             $('#totalMCRTStakedByMe').text(totalStakedMCTRInContractByme.toFixed(4));
//             $('#MCRTbalancep').text(avaliableMCRT.toFixed(4));
//             // $('#itemPoints').text(itemPoints.toFixed(4));
//             // $('#characterPoints').text(characterPoints.toFixed(4));
//             // $('#landPoints').text(landPoints.toFixed(4));
//         } else {
//             console.log(err);
//         }
//     });
// }

// function claimrwrd(period) {
//     stakingContract.methods.ClaimRewardPerperiod(option, period).send({from:accnt})
//         .on('transactionHash', function(hash) {
//             if (period == 30) {
//                 claim30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 90) {
//                 claim90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 180) {
//                 claim180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 365) {
//                 claim365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1095) {
//                 claim1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1825) {
//                 claim1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             }
//         })
//         .on('confirmation', function(confirmationNumber, receipt) {
//         })
//         .on('receipt', function(receipt) {
//             if (period == 30) {
//                 claim30btn.html('Claim');
//             } else if(period == 90) {
//                 claim90btn.html('Claim');
//             } else if(period == 180) {
//                 claim180btn.html('Claim');
//             } else if(period == 365) {
//                 claim365btn.html('Claim');
//             } else if(period == 1095) {
//                 claim1095btn.html('Claim');
//             } else if(period == 1825) {
//                 claim1825btn.html('Claim');
//             }
//             getStakedMCRT(period);
//             toastr.info("Transaction Confirmed");
//         })
//         .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             console.log(error, receipt);

//             toastr.info("Transaction failed. Error: " + error.message);
//         });
// }

// function staking(period) {

//     var amnt = 0;
//     if (period == 30) {
//         amnt = $('#stake30input').val();
//     } else if(period == 90) {
//         amnt = $('#stake90input').val();
//     } else if(period == 180) {
//         amnt = $('#stake180input').val();
//     } else if(period == 365) {
//         amnt = $('#stake365input').val();
//     } else if(period == 1095) {
//         amnt = $('#stake1095input').val();
//     } else if(period == 1825) {
//         amnt = $('#stake1825input').val();
//     }
//     if (amnt > 0) {
//         stakingContract.methods.STAKE(accnt,new BigNumber(amnt * Math.pow(10, 18)), period, option).send({from:accnt})
//             .on('transactionHash', function(hash) {
//                 if (period == 30) {
//                     apprvd30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 } else if(period == 90) {
//                     apprvd90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 } else if(period == 180) {
//                     apprvd180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 } else if(period == 365) {
//                     apprvd365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 } else if(period == 1095) {
//                     apprvd1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 } else if(period == 1825) {
//                     apprvd1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//                 }
//             })
//             .on('confirmation', function(confirmationNumber, receipt) {
//             })
//             .on('receipt', function(receipt) {
//                 if (period == 30) {
//                     apprvd30btn.html('STAKE');
//                 } else if(period == 90) {
//                     apprvd90btn.html('STAKE');
//                 } else if(period == 180) {
//                     apprvd180btn.html('STAKE');
//                 } else if(period == 365) {
//                     apprvd365btn.html('STAKE');
//                 } else if(period == 1095) {
//                     apprvd1095btn.html('STAKE');
//                 } else if(period == 1825) {
//                     apprvd1825btn.html('STAKE');
//                 }
//                 getStakedMCRT(period);
//                 toastr.info("Transaction Confirmed");
//             })
//             .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//                 console.log(error, receipt);

//                 toastr.info("Transaction failed. Error: " + error.message);
//             });
//     } else {
//         alert('You must enter an amount to stake');
//     }
// }

// function withdraw(period) {


//     stakingContract.methods.WithdrawForStakingPerPeriod(period).send({from:accnt})
//         .on('transactionHash', function(hash) {
//             if (period == 30) {
//                 with30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 90) {
//                 with90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 180) {
//                 with180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 365) {
//                 with365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1095) {
//                 with1025btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1825) {
//                 with1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             }
//         })
//         .on('confirmation', function(confirmationNumber, receipt) {
//         })
//         .on('receipt', function(receipt) {
//             if (period == 30) {
//                 with30btn.html('Unstake');
//             } else if(period == 90) {
//                 with90btn.html('Unstake');
//             } else if(period == 180) {
//                 with180btn.html('Unstake');
//             } else if(period == 365) {
//                 with365btn.html('Unstake');
//             } else if(period == 1095) {
//                 with1095btn.html('Unstake');
//             } else if(period == 1825) {
//                 with1825btn.html('Unstake');
//             }
//             getStakedMCRT(period);
//             toastr.info("Transaction Confirmed");
//         })
//         .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             console.log(error, receipt);

//             toastr.info("Transaction failed. Error: " + error.message);
//         });
// }


// function approve(period) {

//     tokenContract.methods.approve(stakingContractAddress, new BigNumber(5000000000000000000000000000000)).send({from:accnt})
//         .on('transactionHash', function(hash) {
//             if (period == 30) {
//                 apprvd30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 90) {
//                 apprvd90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 180) {
//                 apprvd180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 365) {
//                 apprvd365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1095) {
//                 apprvd1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             } else if(period == 1825) {
//                 apprvd1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
//             }
//         })
//         .on('confirmation', function(confirmationNumber, receipt) {
//         })
//         .on('receipt', function(receipt) {
//             if (period == 30) {
//                 apprvd30btn.attr("onclick", "staking(30)");
//                 apprvd30btn.text('STAKE');
                
//             } else if(period==90){
//                 apprvd90btn.attr("onclick", "staking(90)");
//                 apprvd90btn.text('STAKE');
               
//             } else if(period==180){
//                 apprvd180btn.attr("onclick", "staking(180)");
//                 apprvd180btn.text('STAKE');
              
//             } else if(period==365){
//                 apprvd365btn.attr("onclick", "staking(365)");
//                 apprvd365btn.text('STAKE');
                
//             } else if(period==1095){
//                 apprvd1095btn.attr("onclick", "staking1095)");
//                 apprvd1095btn.text('STAKE');
               
//             } else if(period==1825){
//                 apprvd1825btn.attr("onclick", "staking1825)");
//                 apprvd1825btn.text('STAKE');
               
//             }
//             getStakedMCRT(period);
//             toastr.info("Transaction Confirmed");
//         })
//         .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             console.log(error, receipt);

//             toastr.info("Transaction failed. Error: " + error.message);
//         });
// }

// function thingsAfterAprroval() {
//     apprvd30btn.attr("id", "staking30btn");
//     apprvd30btn.text('STAKE');
//     apprvd90btn.attr("id", "staking90btn");
//     apprvd90btn.text('STAKE');
//     apprvd180btn.attr("id", "staking180btn");
//     apprvd180btn.text('STAKE');
//     apprvd365btn.attr("id", "staking365btn");
//     apprvd365btn.text('STAKE');
//     apprvd1095btn.attr("id", "staking1095btn");
//     apprvd1095btn.text('STAKE');
//     apprvd1825btn.attr("id", "staking1825btn");
//     apprvd1825btn.text('STAKE');

//     getStakedMCRT(30);
//     getStakedMCRT(90);
//     getStakedMCRT(180);
//     getStakedMCRT(365);
//     getStakedMCRT(1095);
//     getStakedMCRT(1825);
// }

// function checkAllowanceApproval() {
//     tokenContract.methods.allowance(accnt, stakingContractAddress).call(function(err, ret) {
//         if (!err) {
//             if (ret > 0) {
//                 thingsAfterAprroval();
//             }
//         } else {
//             console.log(error);
//         }
//     });
//     stakingContract.methods.getMCRTPrice().call(function(err, ret) {
//         if (!err) {
//             MCRTPrice = ret[0];
//             MCRTDecimals =ret[1];
//         } else {
//             console.log(err);
//         }
//     });
//     stakingContract.methods.getPointPrice().call(function(err, ret) {
//         if (!err) {
//             PointPrice = ret[0];
//             PointDecimals =ret[1];
//         } else {
//             console.log(err);
//         }
//     });

// }

// setInterval(function() {
//     checkAllowanceApproval();
//     getStakedMCRT(30);
//     getStakedMCRT(90);
//     getStakedMCRT(180);
//     getStakedMCRT(365);
//     getStakedMCRT(1095);
//     getStakedMCRT(1825);
// }, 12500);


// // getStakedMCRT(30);
// // getStakedMCRT(90);
// // getStakedMCRT(180);
// // getStakedMCRT(365);
// // getStakedMCRT(1095);
// // getStakedMCRT(1825);
callee = {
    from: accnt
};

apprvd30btn = $('#apprvd30btn');
apprvd90btn = $('#apprvd90btn');
apprvd180btn = $('#apprvd180btn');
apprvd365btn = $('#apprvd365btn');
apprvd1095btn = $('#apprvd1095btn');
apprvd1825btn = $('#apprvd1825btn');

claim30btn = $('#claim30btn');
claim90btn = $('#claim90btn');
claim180btn = $('#claim180btn');
claim365btn = $('#claim360btn');
claim1095btn = $('#claim1095btn');
claim1825btn = $('#claim1825btn');

with30btn = $('#with30btn');
with90btn = $('#with90btn');
with180btn = $('#with180btn');
with365btn = $('#with365btn');
with1095btn = $('#with1095btn');
with1825btn = $('#with1825btn');

async function getStakedMCRT(period){
    console.timeLog(accnt,period);
    await stakingContract.methods.yourStakedMCRT(accnt,period).call(function(err, ret) {
        console.log(period,ret);

        if (!err) {
            if (period == 30){
                with30btn.attr("onclick", "withdraw(30)");
                with30btn.text('Unstake');
                var reward = ret[0] / Math.pow(10, 18);
                $('#MCRT30Earned').text(reward.toFixed(4));
                var stacked = ret[1] / Math.pow(10, 18);
                $('#Staked30Lpbalancep').text(stacked.toFixed(4));
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT30StakedT').text(totalStakedMCTR.toFixed(4));
            } else if (period == 90) {
                with90btn.attr("onclick", "withdraw(90)");
                with90btn.text('Unstake');
                var reward = ret[0] / Math.pow(10, 18);
                $('#MCRT90Earned').text(reward.toFixed(4));
                var stacked = ret[1] / Math.pow(10, 18);
                $('#Staked90Lpbalancep').text(stacked.toFixed(4));
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT90StkaedT').text(totalStakedMCTR.toFixed(4));
            } else if(period == 180 ){
                var select = document.getElementById('option180');
				var option = select.options[select.selectedIndex].value;
                with90btn.attr("onclick", "withdraw(90)");
                with90btn.text('Unstake');
                if (option == "0"){
                    var reward = ret[0] / Math.pow(10, 18);
                    $('#MCRT180Earned').text(reward.toFixed(4));
                    var stacked = ret[1] / Math.pow(10, 18);
                    $('#Staked180Lpbalancep').text(stacked.toFixed(4));
                } else if (option =="1"){
                    var reward = ret[2] / Math.pow(10, 18);
                    $('#MCRT180Earned').text(reward.toFixed(4));
                    var stacked = ret[3] / Math.pow(10, 18);
                    $('#Staked1800Lpbalancep').text(stacked.toFixed(4));
                }
                
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT180StkaedT').text(totalStakedMCTR.toFixed(4));


            } else if(period == 365 ){
                var select = document.getElementById('option365');
				var option = select.options[select.selectedIndex].value;
                with365btn.attr("onclick", "withdraw(365)");
                with365btn.text('Unstake');

                if (option == "0"){
                    var reward= ret[0] / Math.pow(10, 18);
                    $('#MCRT365Earned').text(reward.toFixed(4));
                    var stacked = ret[1] / Math.pow(10, 18);
                    $('#Staked365Lpbalancep').text(stacked.toFixed(4));
                } else if (option =="1"){
                    var reward = ret[2] / Math.pow(10, 18);
                    $('#MCRT365Earned').text(reward.toFixed(4));
                    var stacked = ret[3] / Math.pow(10, 18);
                    $('#Staked365Lpbalancep').text(stacked.toFixed(4));
                }
                
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT365StkaedT').text(totalStakedMCTR.toFixed(4));
                
            } else if(period == 1095 ){
                var select = document.getElementById('option1095');
				var option = select.options[select.selectedIndex].value;
                with90btn.attr("onclick", "withdraw(1095)");
                with90btn.text('Unstake');

                if (option == "0"){
                    var reward = ret[0] / Math.pow(10, 18);
                    $('#MCRT1095Earned').text(reward.toFixed(4));
                    var stacked = ret[1] / Math.pow(10, 18);
                    $('#Staked1095Lpbalancep').text(stacked.toFixed(4));
                } else if (option =="1"){
                    var reward = ret[2] / Math.pow(10, 18);
                    $('#MCRT1095Earned').text(reward.toFixed(4));
                    var stacked = ret[3] / Math.pow(10, 18);
                    $('#Staked1095Lpbalancep').text(stacked.toFixed(4));
                }
                
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT1095StkaedT').text(totalStakedMCTR.toFixed(4));
                
            } else if(period == 1825 ){
                var select = document.getElementById('option1825');
				var option = select.options[select.selectedIndex].value;
                with90btn.attr("onclick", "withdraw(1825)");
                with90btn.text('Unstake');

                if (option == "0"){
                    var reward = ret[0] / Math.pow(10, 18);
                    $('#MCRT1825Earned').text(reward.toFixed(4));
                    var stacked = ret[1] / Math.pow(10, 18);
                    $('#Staked1825Lpbalancep').text(stacked.toFixed(4));
                } else if (option =="1"){
                    var reward = ret[2] / Math.pow(10, 18);
                    $('#MCRT1825Earned').text(reward.toFixed(4));
                    var stacked = ret[3] / Math.pow(10, 18);
                    $('#Staked1825Lpbalancep').text(stacked.toFixed(4));
                }
                
                var totalStakedMCTR =ret[5] / Math.pow(10, 18);
                $('#MCRT1825StkaedT').text(totalStakedMCTR.toFixed(4));
                
            }

        } else {
            console.log(err);
        }
    });

    await stakingContract.methods.contractStakedMCRT(accnt).call(function(err, ret) {
        console.log(ret);
        if (!err) {
            var totalStakedMCTRInContract =  ret[0] / Math.pow(10, 18);;
            var totalStakedMCTRInContractByme =  ret[1] / Math.pow(10, 18);
            var avaliableMCRT =  ret[2] / Math.pow(10, 18);
            var itemPoints =  ret[3] / Math.pow(10, 18);
            var characterPoints =  ret[4] / Math.pow(10, 18);
            var landPoints =  ret[5] / Math.pow(10, 18);
            $('#totalstaked').text(totalStakedMCTRInContract.toFixed(4));
            $('#totalMCRTStaked').text(totalStakedMCTRInContract.toFixed(4));
            $('#totalMCRTStakedByMe').text(totalStakedMCTRInContractByme.toFixed(4));
            $('#MCRTbalancep').text(avaliableMCRT.toFixed(4));
            $('#itemPoints').text(itemPoints.toFixed(4));
            $('#characterPoints').text(characterPoints.toFixed(4));
            $('#landPoints').text(landPoints.toFixed(4));

        } else {
            console.log(err);
        }
    });
}

function claimrwrd(period) {
    var option = 0;
    if(period == 180) {
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex];
    } else if(period == 365) {
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex];
    } else if(period == 1095) {
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex];
    } else if(period == 1825) {
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex];
    }
    stakingContract.methods.ClaimRewardPerperiod(option, period).send(callee)
        .on('transactionHash', function(hash) {
            if (period == 30) {
                claim30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 90) {
                claim90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 180) {
                claim180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 365) {
                claim365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1095) {
                claim1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1825) {
                claim1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            }
        })
        .on('confirmation', function(confirmationNumber, receipt) {
        })
        .on('receipt', function(receipt) {
            if (period == 30) {
                claim30btn.html('Claim');
            } else if(period == 90) {
                claim90btn.html('Claim');
            } else if(period == 180) {
                claim180btn.html('Claim');
            } else if(period == 365) {
                claim365btn.html('Claim');
            } else if(period == 1095) {
                claim1095btn.html('Claim');
            } else if(period == 1825) {
                claim1825btn.html('Claim');
            }
            getStakedMCRT(period);
            toastr.info("Transaction Confirmed");
        })
        .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log(error, receipt);

            toastr.info("Transaction failed. Error: " + error.message);
        });
}

function staking(period) {

    var amnt = 0;
    var option = 0;
    if (period == 30) {
        amnt = $('#stake30input').val();
    } else if(period == 90) {
        amnt = $('#stake90input').val();
    } else if(period == 180) {
        amnt = $('#stake180input').val();
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex].value;
    } else if(period == 365) {
        amnt = $('#stake365input').val();
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex].value;
    } else if(period == 1095) {
        amnt = $('#stake1095input').val();
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex].value;
    } else if(period == 1825) {
        amnt = $('#stake1825input').val();
        var select = document.getElementById('option1825');
		option = select.options[select.selectedIndex].value;
    }

    if (amnt > 0) {
        stakingContract.methods.STAKE(accnt,new BigNumber(amnt * Math.pow(10, 18)), period, option).send(callee)
            .on('transactionHash', function(hash) {
                if (period == 30) {
                    apprvd30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                } else if(period == 90) {
                    apprvd90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                } else if(period == 180) {
                    apprvd180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                } else if(period == 365) {
                    apprvd365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                } else if(period == 1095) {
                    apprvd1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                } else if(period == 1825) {
                    apprvd1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
                }
            })
            .on('confirmation', function(confirmationNumber, receipt) {
            })
            .on('receipt', function(receipt) {
                if (period == 30) {
                    apprvd30btn.html('STAKE');
                } else if(period == 90) {
                    apprvd90btn.html('STAKE');
                } else if(period == 180) {
                    apprvd180btn.html('STAKE');
                } else if(period == 365) {
                    apprvd365btn.html('STAKE');
                } else if(period == 1095) {
                    apprvd1095btn.html('STAKE');
                } else if(period == 1825) {
                    apprvd1825btn.html('STAKE');
                }
                getStakedMCRT(period);
                toastr.info("Transaction Confirmed");
            })
            .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                console.log(error, receipt);

                toastr.info("Transaction failed. Error: " + error.message);
            });
    } else {
        alert('You must enter an amount to stake');
    }
}

function withdraw(period) {

    stakingContract.methods.WithdrawForStakingPerPeriod(period).send(callee)
        .on('transactionHash', function(hash) {
            if (period == 30) {
                with30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 90) {
                with90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 180) {
                with180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 365) {
                with365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1095) {
                with1025btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1825) {
                with1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            }
        })
        .on('confirmation', function(confirmationNumber, receipt) {
        })
        .on('receipt', function(receipt) {
            if (period == 30) {
                with30btn.html('Unstake');
            } else if(period == 90) {
                with90btn.html('Unstake');
            } else if(period == 180) {
                with180btn.html('Unstake');
            } else if(period == 365) {
                with365btn.html('Unstake');
            } else if(period == 1095) {
                with1095btn.html('Unstake');
            } else if(period == 1825) {
                with1825btn.html('Unstake');
            }
            getStakedMCRT(period);
            toastr.info("Transaction Confirmed");
        })
        .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log(error, receipt);

            toastr.info("Transaction failed. Error: " + error.message);
        });
}


function approve(period) {
    tokenContract.methods.approve(stakingContractAddress, new BigNumber(5000000000000000000000000000000)).send(callee)
        .on('transactionHash', function(hash) {
            if (period == 30) {
                apprvd30btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 90) {
                apprvd90btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 180) {
                apprvd180btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 365) {
                apprvd365btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1095) {
                apprvd1095btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            } else if(period == 1825) {
                apprvd1825btn.html('<i class="fa fa-spinner fa-spin"></i> Loading');
            }
        })
        .on('confirmation', function(confirmationNumber, receipt) {
        })
        .on('receipt', function(receipt) {
            if (period == 30) {
                apprvd30btn.attr("onclick", "staking(30)");
                apprvd30btn.text('STAKE');
                
            } else if(period==90){
                apprvd90btn.attr("onclick", "staking(90)");
                apprvd90btn.text('STAKE');
               
            } else if(period==180){
                apprvd180btn.attr("onclick", "staking(180)");
                apprvd180btn.text('STAKE');
              
            } else if(period==365){
                apprvd365btn.attr("onclick", "staking(365)");
                apprvd365btn.text('STAKE');
                
            } else if(period==1095){
                apprvd1095btn.attr("onclick", "staking1095)");
                apprvd1095btn.text('STAKE');
               
            } else if(period==1825){
                apprvd1825btn.attr("onclick", "staking1825)");
                apprvd1825btn.text('STAKE');
               
            }
            getStakedMCRT(period);
            toastr.info("Transaction Confirmed");
        })
        .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log(error, receipt);

            toastr.info("Transaction failed. Error: " + error.message);
        });
}

function thingsAfterAprroval() {
    apprvd30btn.attr("onclick", "staking(30)");
    apprvd30btn.text('STAKE');
    apprvd90btn.attr("onclick", "staking(90)");
    apprvd90btn.text('STAKE');
    apprvd180btn.attr("onclick", "staking(180)");
    apprvd180btn.text('STAKE');
    apprvd365btn.attr("onclick", "staking(365)");
    apprvd365btn.text('STAKE');
    apprvd1095btn.attr("onclick", "staking(1095)");
    apprvd1095btn.text('STAKE');
    apprvd1825btn.attr("onclick", "staking(1825)");
    apprvd1825btn.text('STAKE');

    // getStakedMCRT(30);
    // getStakedMCRT(90);
    // getStakedMCRT(180);
    // getStakedMCRT(365);
    // getStakedMCRT(1095);
    // getStakedMCRT(1825);
}

function checkAllowanceApproval() {
    tokenContract.methods.allowance(accnt, stakingContractAddress).call(function(err, ret) {
        if (!err) {
            if (ret > 0) {
                thingsAfterAprroval();
            }
        } else {
            // console.log(error);
        }
    });
}

setInterval(function() {
    getStakedMCRT(30);
    getStakedMCRT(90);
    getStakedMCRT(180);
    getStakedMCRT(365);
    getStakedMCRT(1095);
    getStakedMCRT(1825);
}, 3600000);

checkAllowanceApproval();
getStakedMCRT(30);
getStakedMCRT(90);
getStakedMCRT(180);
getStakedMCRT(365);
getStakedMCRT(1095);
getStakedMCRT(1825);
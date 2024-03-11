

const simpleIntrest = (() =>{

    let principalAmount = parseInt(document.querySelector("#principal-Amount").value);
    let interestRate = parseInt(document.querySelector("#rate").value);
    let duration = parseInt(document.querySelector("#time").value);
    
    
    let si = (principalAmount*interestRate*duration) / 100;

    let total = principalAmount + si;
    document.getElementById("display").innerHTML = (`Principal Amount:- ${principalAmount}($)`)
    document.getElementById("total-interest").innerHTML = (`Total Interest:- ${si}($)`);
    document.getElementById("total").innerHTML = (`Total Amount:- ${total} ($)`);
    
    })
    
    
    
    let calculate = document.querySelector("#Calculate").addEventListener("click",(e) => {
    
    
    simpleIntrest();
    
    })
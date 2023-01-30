
let result =document.getElementById('result');

const calculateTip=()=>{
    let bill=Number(document.getElementById("totalBill").value);
    let numOfPerson=Number(document.getElementById("numOfPerson").value);
    let tipPercentage=Number(document.getElementById("tipPercentage").value);

    let tip=bill*(tipPercentage/100);
    let totalBill=bill+tip;
    let perPersonPay=(totalBill/numOfPerson);
    document.getElementById("tipPercentageText").innerHTML=`${tipPercentage}%`;
    document.getElementById("numOfPersonText").innerHTML=`${numOfPerson}`;
     result.innerHTML=`
     <h5 style="margin: 8px 0px;display: flex;justify-content: space-between;">
                <span>Tip</span>
                <span style="font-size: 1.2rem;">${tip.toFixed(2)}</span>
            </h5>
            <h5 style="margin: 8px 0px;display: flex;justify-content: space-between;">
                <span>Total</span>
                <span style="font-size: 1.2rem;">${totalBill.toFixed(2)}</span>
            </h5>
            <h5 style="margin: 8px 0px;display: flex;justify-content: space-between;">
                <span>Each Person Pay</span>
                <span style="font-size: 1.2rem;">${perPersonPay.toFixed(2)}</span>
            </h5>
     `



}
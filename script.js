const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const nextBtn = document.querySelector("#next-btn");
const errorMsg = document.querySelector("#error-msg");
const notes = document.querySelectorAll(".notes");

const availablenotes = [2000,500,100,50,20,10,5,1];

nextBtn.addEventListener("click",function clickHandler(){
    errorMsg.style.display = "none";
    if(billAmount.value > 0){
        if(cashAmount.value >= billAmount.value){
            const amountReturned = cashAmount.value - billAmount.value;
            calculateReturn(amountReturned);

        }
        else{
            showMessage("The cash amount should be atleast greater than or equal to bill amount");
        }
    }
    else{
        showMessage("The bill amount can't be less than zero");
    }

    function calculateReturn(amountReturned){
        for (let i=0;i<availablenotes.length;i++){
            const noNotes = Math.trunc(amountReturned / availablenotes[i]);

            amountReturned = amountReturned % availablenotes[i];
            notes[i].innerText = noNotes;
        }

    }

    function showMessage(Msg){
        errorMsg.style.display = "block";
        errorMsg.innerText = Msg;
    }
});

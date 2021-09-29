var bill_amt = document.querySelector("#bill-amount");
var cash_amt = document.querySelector("#cash-given");
var button = document.querySelector(".btn-submit");
var message = document.querySelector(".err1");
var notes = document.querySelectorAll(".tbl-col");
var results =document.querySelector(".result");
var button_nxt = document.querySelector(".btn-next");
var btn_submit = document.querySelector("#box2");
var btn_table = document.querySelector("#box1");
var err = document.querySelector(".err");
var note = [0,0,0,0,0,0,0,0,0];


var notesAvailable = [2000 , 500 , 100 , 50 ,20 , 10 ,5 , 2 ,1];

button_nxt.addEventListener("click", ()=>{
   
    console.log(bill_amt.value);
    if(bill_amt.value === "")

    {
        
       err.style.display = "block";
        err.innerText = "Bill amount value should be greater than 0";
        btn_submit.style.display="none";
        btn_table.style.display="none";
     }   
    else{
       
            btn_table.style.display ="none"
           btn_submit.style.display= "block";
           err.style.display="none";

        }
    });

    button.addEventListener("click" , () =>{
        
        
        if(bill_amt.value > 0){

            
            if(parseInt(cash_amt.value )>= parseInt(bill_amt.value)){
                btn_table.style.display = "block"; 

            var returnedAmount = cash_amt.value - bill_amt.value;
                ReturnedCash(returnedAmount);
                TotalNotes();
    
            }else{
               
                message.style.display = "block";
                message.innerText = " Cash amount should be greater than or equals to bill amount ";
                btn_table.style.display="none";
            }
    
        }
        else{
            message.style.display = "block";
            message.innerText = "Bill amount value should be greater than 0";
            btn_table.style.display="none";
        }
    });     


function ReturnedCash(amount)
{     
        for(var i = 0 ; i < notesAvailable.length ; i++){
           note[i] =  Math.trunc(amount/notesAvailable[i]);
         
           notes[i].innerText = note[i];        
          amount = amount%notesAvailable[i];

        } 
}
var sum = 0;
function TotalNotes(){
        
        for(var i =0 ; i < notes.length; i++)
        {
            sum += note[i];
            
        }
        console.log(sum);
        results.innerText = "Total no. of notes required : "+ sum;
}
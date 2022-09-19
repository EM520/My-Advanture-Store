const rateNum= document.querySelector("#rateInput");
console.log(rateNum);
btn.addEventListener('click',setRate);

function setRate(e){
  e.preventDefault();
    let s = "";
    let num=rateNum.value;
    for (let i = 0; i < rateNum.value; i++) {
      
        s += "\u2B50";
    }
    //console.log(s, rateNum)
    
    document.querySelector("#rateStar p").innerHTML=s;
}


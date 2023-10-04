const countValue=document.querySelector('#counter');
const Increment = () => {
// get the value uI
let value = parseInt(countValue.innerText);
// update the value
value = value + 1;
// set the value onto uI
countValue.innerText=value;
}
const Decrement=()=>{
    // get the value uI
    let value =parseInt(countValue.innerText);
    // update the value
    value = value-1;
    countValue.innerText=value;
}
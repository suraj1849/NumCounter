const cntval=document.querySelector('#counter');

const increment =() =>{
let value= parseInt(cntval.innerText);
value=value+1;
cntval.innerText=value;

};
const decrement =()=>{
let value= parseInt(cntval.innerText);
value=value-1;
cntval.innerText=value;

};
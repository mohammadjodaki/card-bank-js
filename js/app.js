const inputs = document.querySelectorAll('#inpnum > input');
const num = document.querySelector('#num');
const inpname = document.querySelector('#inpname')
const name1 = document.querySelector('#name')
const month = document.querySelector('#optmonth')
const date = document.querySelector('#date')
const year = document.querySelector('#optyear')
const inpccv = document.getElementById('inpccv')
const ccv = document.getElementById('ccv')
const rotate = document.getElementById('rotate')
inputs.forEach((val, i) => {
    val.addEventListener('input', () => {
        if (val.value.length === 4) {
            if (i !== 3) {
                inputs[i + 1].focus();
            } else {
                document.getElementById('inpname').focus();
            }
        }
        ////////// number card //////////
        num.innerHTML = '';
        inputs.forEach((val, i) => {
            let temp = val.value;
            num.innerHTML += i === 3 ? temp : (temp.length === 4 ? temp + ' - ' : temp);
        });
    });
});
          //////////////////////  name card   ///////////////////////////////
inpname.addEventListener('input' , ()=>{
let temp1 = inpname.value
if (temp1.length > 20){
    inpname.value = temp1.slice(0 , 20)
}
name1.innerHTML = inpname.value
})
/////////////       date       ////////////////////
month.addEventListener('input', () => {
    if (year.value && month.value) {
        date.innerHTML = month.value + '/' + year.value;
    }
});
year.addEventListener('input' ,()=>{
    if (year.value && month.value) {
        date.innerHTML = month.value + '/' + year.value;
    }
})
/////////////////   ccv          ///////////////////////////////
inpccv.addEventListener('input' , ()=>{
    let temp2 = inpccv.value
    if(temp2.length > 3){
        inpccv.value = temp2.slice(0 , 3)
    }
    ccv.innerHTML = inpccv.value
})
inpccv.addEventListener('focusin' , ()=>{
rotate.classList.add('-rotate-45')
})
inpccv.addEventListener('focusout' , ()=>{
    rotate.classList.remove('-rotate-45')
})

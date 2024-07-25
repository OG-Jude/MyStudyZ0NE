const kcV = document.getElementById("kc");
const qV = document.getElementById("q");
const eqmQ = document.querySelector(".eqQuo")
const cuSpaceEqmQ = document.querySelector(".cuSpace")

const qBtn = document.getElementById("eqmCmpt");

cuSpaceEqmQ.classList.add("hwEqm")
cuSpaceEqmQ.classList.remove("swEqm")

eqmQ.addEventListener("click",()=>{
  cuSpaceEqmQ.classList.remove("hdEqm")
  cuSpaceEqmQ.classList.add("swEqm")

})

qBtn.addEventListener("click", ()=>{
  let q = parseFloat( qV.value)
  let kc = parseFloat(kcV.value);
  let feq = document.querySelector(".ansEqm");

  if(kc>=q){
    feq.textContent = "Forwar"
  }else  {

    if(kc<=q){
        feq.textContent = "Reverse"
      }
        
    
        
    
    
    }

    if(kc==q  ){
            feq.textContent = "Non (Equilibrium is reached)"
          }

 

})

const gastos=[

];

let total=()=>{
  suma=0;
 
  for(let productos of gastos){
    suma+=Number(productos.monto);
  }
  console.log(suma);
  return suma;
}

let verGuardados=()=>{
  let lista='';
  suma=0;
  for (let productos of gastos){
    console.log(productos);
    lista+=`<li>[ "${productos.tipoDeGasto}" : "$${productos.monto}" ]</li>`;
  }
  suma=total();
  document.getElementById('contenedor').innerHTML=lista;
  document.getElementById('total').innerHTML=`Total $${suma}`;
}

let guardar=()=>{
   const gasto=document.getElementById('gasto');
   const monto=document.getElementById('monto');
  if(gasto.value!=0 && monto.value!=0){
    const productos=new Gasto(gasto.value, monto.value);
    gastos.push(productos);
  }
  else{
    alert('Entrada no valida, 1 o mas espacios estan en blanco');
  }
  gasto.value='';
  monto.value='';
  document.getElementById('contenedor').innerHTML='';
  document.getElementById('total').innerHTML='';
}


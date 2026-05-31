
function calcProfit(){
 let c=+cost.value,s=+sell.value,q=+qty.value;
 let profit=(s-c)*q;
 profitResult.innerHTML='Lucro total: '+profit.toFixed(2)+' MT';
}
function calcGoal(){
 let g=+goal.value,d=+days.value;
 goalResult.innerHTML='Necessário por dia: '+(g/d).toFixed(2)+' MT';
}
function calcFuel(){
 let liters=+distance.value/+consumption.value;
 let total=liters*+fuelprice.value;
 fuelResult.innerHTML='Gasto previsto: '+total.toFixed(2)+' MT';
}
function calcHours(){
 let a=new Date('2000-01-01T'+start.value);
 let b=new Date('2000-01-01T'+end.value);
 let h=(b-a)/3600000;
 hoursResult.innerHTML='Horas trabalhadas: '+h.toFixed(2);
}
function calcConstruction(){
 let area=+length.value * +width.value;
 let blocks=Math.ceil(area*12.5);
 constructionResult.innerHTML='Área: '+area.toFixed(2)+' m²<br>Blocos estimados: '+blocks;
}

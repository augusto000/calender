
//select #calender
let calender = document.querySelector('#calender');
let titulo = document.querySelector('h2');
let day = document.querySelector('section > ul');

function print_calender(days){
    let c =1;
   for (let i = 1; i <= days; i++ ){
    if (c === 7){
         let li = document.createElement('li');
         li.textContent = i;       
         li.setAttribute('margin','2px');
         day.appendChild(li);         
         c++;
    } 
    else{
         let li = document.createElement('li');
         li.innerHTML = `${i}`;       
         day.appendChild(li);
         c++;
        }
    //print the backgroundColor
     c=1;
   } 
   
}

// e catches the even 'change' and uses its property target
calender.addEventListener('change', (e)=>{
   day.textContent = '';
    let r = (e.target.value);
   titulo.textContent = r;
   titulo.textContent = "";
   let days = 31;
   if ( r === 'April' || r === 'June' || r === 'Setember'
      || r === 'November'){
        console.log(days = 30);
        titulo.textContent = r;
        print_calender(days);
      }
   else if (r === 'Febrery'){
        console.log(days = 28);
        titulo.textContent = r;
        print_calender(days);
   }
   else{
    console.log(days = 31);
    titulo.textContent = r;
    print_calender(days);
   } 
});





let calender = document.querySelector('#calender');
let day = document.querySelector('.day > ul');

calender.addEventListener('change', (e)=>{
   let r = Number(e.target.value);
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth() + r ;//January index  0
   //get the days in a month
   let days_in_a_month = new Date(year, month, 0).getDate();
   
   print_calender (days_in_a_month);
});

function print_calender(days){
     //console.log(days);
     day.innerHTML ="";
     let acc = 1;
     for(let i = 1; i <= days; i++){           
           if (acc <3){
            day.innerHTML += `<li>${i}</li>`;                     
            acc++;
           }
           else {
            day.innerHTML += `<br>`;
            day.innerHTML += `<li>${i}</li>`;                     
            acc++;
           }           
     }     
}


let infected=[];
let i=1;
function onFormSubmit() {
    let data = {
        id:i,
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        location:{
                    latitude:document.getElementById('latitude').value,
                    longitude:document.getElementById('latitude').value,
                    date: {
                        day:document.getElementById('day').value,
                        month:document.getElementById('month').value,
                    },
                    time:document.getElementById('time').value,
                }
      }
      infected.push(data);
      console.log('added', {infected});
      i++;
    localStorage.setItem('Infected', JSON.stringify(infected));
   
}

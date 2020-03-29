let infected=[];
let i=1;
function onFormSubmit() {
    let data = {
        id:i,
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        location:document.getElementById('location').value,
      }
      infected.push(data);
      console.log('added', {infected});
      i++;
   
}